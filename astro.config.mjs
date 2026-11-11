import { defineConfig } from 'astro/config';

// Alan adı alındığında `site` alanını doldurun (ör. 'https://kargigolge.com').
export default defineConfig({
  // Windows'ta "localhost" yalnızca IPv6 (::1) adresine bağlanıyordu;
  // 127.0.0.1 üzerinden açılmıyordu. Tüm adreslerde dinle.
  server: { host: true, port: 4321 },
});
