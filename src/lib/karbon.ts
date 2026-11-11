// Karbon hesaplayıcı — formüller tasarımdaki renderVals() ile birebir aynıdır.

export type Girdiler = {
  sehir: string;
  yon: string;
  gunes: number;
  daire: number;
  kwh: number;
  alan: number;
  yog: string;
  azalma: number;
  ef: string;
  uretim: number;
  bakim: number;
  degisim: number;
  omur: string;
  bio: number;
  tampon: number;
  fiyat: number;
  pay: number;
};

export const VARSAYILAN: Girdiler = {
  sehir: 'Antalya', yon: 'bati', gunes: 290, daire: 20, kwh: 2000, alan: 7.5, yog: '15', azalma: 25, ef: '0.478',
  uretim: 3, bakim: 0.3, degisim: 3, omur: '15', bio: 80, tampon: 10, fiyat: 1400, pay: 70,
};

const f = (x: number, d: number) =>
  Number(x).toLocaleString('tr-TR', { minimumFractionDigits: d, maximumFractionDigits: d });

// Kaydırıcı değerleri (ondalık varsa virgülle)
const n = (x: number) => Number(x).toLocaleString('tr-TR');

export function hesapla(s: Girdiler): Record<string, string> {
  const yonK = ({ bati: 1.0, guneybati: 0.95, guney: 0.85, dogu: 0.7 } as Record<string, number>)[s.yon] || 1;
  const sun = s.gunes / 290;
  const area = s.daire * s.alan;
  const mass = area * Number(s.yog);
  const A = mass * 0.462 * (44 / 12) / 1000;
  const prod = area * s.uretim / 1000;
  const kwhDaire = s.kwh * (s.azalma / 100) * yonK * sun;
  const B = s.daire * kwhDaire * Number(s.ef) / 1000;
  const bakimT = area * s.bakim / 1000;
  const bioYil = mass * (s.degisim / 100) * (s.bio / 100) * 0.5 / 1000;
  const yillik = Math.max(0, (B - bakimT + bioYil) * (1 - s.tampon / 100));
  const eol = mass * (s.bio / 100) * 0.5 / 1000 * (1 - s.tampon / 100);
  const omur = Number(s.omur);
  const omurToplam = yillik * omur + eol - prod;
  const hak = yillik * s.fiyat * s.pay / 100;
  return {
    sehir: s.sehir, gunes: n(s.gunes), daire: n(s.daire), kwh: n(s.kwh), alan: n(s.alan), azalma: n(s.azalma),
    uretim: n(s.uretim), bakim: n(s.bakim), degisim: n(s.degisim), omur: s.omur, bio: n(s.bio),
    tampon: n(s.tampon), pay: n(s.pay),
    fiyatTxt: f(s.fiyat, 0),
    yillik: f(yillik, 2), hakTL: f(hak, 0), daireTL: f(hak / s.daire, 0),
    B: f(B, 2), bioYil: f(bioYil, 3), bakimT: f(bakimT, 3), A: f(A, 2), prod: f(prod, 2), eol: f(eol, 2),
    omurToplam: f(omurToplam, 1), kwhDaire: f(kwhDaire, 0),
  };
}
