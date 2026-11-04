type RGB = [number, number, number];

function hslToRgb(h: number, s: number, l: number): RGB {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [f(0), f(8), f(4)].map((v) => Math.round(v * 255)) as RGB;
}

function luminance([r, g, b]: RGB) {
  const [R, G, B] = [r, g, b].map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

function contrast(l1: number, l2: number) {
  const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1];
  return (hi + 0.05) / (lo + 0.05);
}

export function getColorByString(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const baseHue = Math.abs(hash) % 360;
  const step = 30;
  const hue = (h: number) => (h + 360) % 360;

  const stops = [
    { h: hue(baseHue - step), s: 70, l: 62 },
    { h: hue(baseHue), s: 72, l: 58 },
    { h: hue(baseHue + step), s: 75, l: 54 },
  ];

  const [c1, c2, c3] = stops.map((c) => `hsl(${c.h}, ${c.s}%, ${c.l}%)`);

  // Hitung kontras teks terhadap setiap stop, ambil yang terburuk
  const lums = stops.map((c) => luminance(hslToRgb(c.h, c.s, c.l)));
  const light = "#FFFFFF";
  const dark = "#111827";
  const lightLum = luminance([255, 255, 255]);
  const darkLum = luminance([17, 24, 39]);

  const minLight = Math.min(...lums.map((l) => contrast(l, lightLum)));
  const minDark = Math.min(...lums.map((l) => contrast(l, darkLum)));

  return {
    style: {
      background: `linear-gradient(135deg, ${c1}, ${c2}, ${c3})`,
      color: minLight >= minDark ? light : dark,
    },
  };
}
