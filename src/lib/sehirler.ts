// İllere göre yıllık yaklaşık güneşli gün sayısı.
// Bölgesel iklim ortalamalarına göre yuvarlanmış tahminlerdir; yayına almadan önce
// MGM (Meteoroloji Genel Müdürlüğü) il istatistikleriyle doğrulanması önerilir.
// Hesap 290 günü referans alır (güneş katsayısı = gün / 290).
export const SEHIRLER: [string, number][] = [
  ['Adana', 275], ['Adıyaman', 285], ['Afyonkarahisar', 250], ['Ağrı', 230], ['Aksaray', 260],
  ['Amasya', 230], ['Ankara', 245], ['Antalya', 290], ['Ardahan', 205], ['Artvin', 175],
  ['Aydın', 280], ['Balıkesir', 245], ['Bartın', 190], ['Batman', 285], ['Bayburt', 220],
  ['Bilecik', 225], ['Bingöl', 245], ['Bitlis', 235], ['Bolu', 205], ['Burdur', 270],
  ['Bursa', 230], ['Çanakkale', 255], ['Çankırı', 230], ['Çorum', 235], ['Denizli', 270],
  ['Diyarbakır', 290], ['Düzce', 200], ['Edirne', 245], ['Elazığ', 260], ['Erzincan', 245],
  ['Erzurum', 230], ['Eskişehir', 240], ['Gaziantep', 285], ['Giresun', 175], ['Gümüşhane', 215],
  ['Hakkari', 260], ['Hatay', 265], ['Iğdır', 255], ['Isparta', 260], ['İstanbul', 225],
  ['İzmir', 280], ['Kahramanmaraş', 270], ['Karabük', 210], ['Karaman', 270], ['Kars', 220],
  ['Kastamonu', 205], ['Kayseri', 255], ['Kilis', 285], ['Kırıkkale', 245], ['Kırklareli', 235],
  ['Kırşehir', 250], ['Kocaeli', 215], ['Konya', 265], ['Kütahya', 235], ['Malatya', 265],
  ['Manisa', 270], ['Mardin', 295], ['Mersin', 285], ['Muğla', 285], ['Muş', 240],
  ['Nevşehir', 255], ['Niğde', 265], ['Ordu', 180], ['Osmaniye', 270], ['Rize', 160],
  ['Sakarya', 210], ['Samsun', 200], ['Siirt', 280], ['Sinop', 200], ['Sivas', 230],
  ['Şanlıurfa', 300], ['Şırnak', 275], ['Tekirdağ', 240], ['Tokat', 225], ['Trabzon', 175],
  ['Tunceli', 245], ['Uşak', 250], ['Van', 265], ['Yalova', 220], ['Yozgat', 235],
  ['Zonguldak', 185],
];

export const SEHIR_GUNES: Record<string, number> = Object.fromEntries(SEHIRLER);
