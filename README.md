# backend-persediaan-radjo

Backend API untuk sistem informasi persediaan bahan baku kafe Radjo (proyek mata kuliah Manajemen Proyek Sistem Informasi).

## Teknologi

- Node.js + Express
- MySQL dengan Sequelize
- JWT untuk autentikasi (role: owner dan staff)

## Cara menjalankan

1. Pastikan Node.js dan MySQL sudah terpasang.
2. Pasang dependensi:
   ```
   npm install
   ```
3. Salin `.env.example` menjadi `.env`, lalu sesuaikan isi koneksi database.
4. Buat database kosong dengan nama sesuai `DB_NAME` di `.env`.
5. Jalankan server:
   ```
   npm run dev
   ```
6. Cek di browser: `http://localhost:3000/api/health`

## Struktur folder

```
src/
  config/     konfigurasi database
  routes/     definisi endpoint
  app.js      konfigurasi Express
  server.js   titik masuk aplikasi
```

## Status pengerjaan

- [x] Setup repositori dan server dasar
- [ ] Migrasi database dan seeder (target 30 Oktober)
- [ ] Logika stok masuk, stok keluar, safety stock, opname, rekap (1 sampai 6 November)
- [ ] Deployment (target 7 November)
