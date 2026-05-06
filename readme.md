#  Universal Academic Engine - SPK Ekspor

Sebuah Sistem Pendukung Keputusan (SPK) berbasis web interaktif untuk menganalisis dan merangking prioritas pengembangan 55 komoditas ekspor pertanian di Indonesia. 

Proyek ini dibangun sebagai bagian dari instrumen penelitian akademik menggunakan pendekatan integrasi **AHP (Analytic Hierarchy Process)** dan **SAW (Simple Additive Weighting)**.

##  Fitur Utama

- ** Executive Dashboard**: Ringkasan data statistik dan visualisasi *Top 10* komoditas ekspor murni menggunakan Chart.js.
- ** Dataset Explorer**: Menampilkan tabel lengkap 55 komoditas pertanian dengan fitur **Live Search** untuk memudahkan pemfilteran data.
- **️ Analisis AHP**: Halaman transparansi perhitungan yang menampilkan Matriks Perbandingan Berpasangan, *Consistency Ratio* (CR), dan hasil bobot akhir kriteria (Benefit & Cost).
- ** Ranking SAW**: Hasil eksekusi algoritma SPK yang merangking komoditas dari prioritas tertinggi hingga terendah.
- **️ Export & Print**: Fitur terintegrasi untuk mengunduh hasil keputusan ke dalam format `.csv` atau mencetaknya (Print to PDF) ke dalam format dokumen laporan yang bersih (tanpa *sidebar*).
- ** Responsif**: Tata letak antarmuka yang menyesuaikan secara otomatis dengan ukuran layar perangkat (Desktop, Tablet, maupun Smartphone).

##  Metode Pendukung Keputusan

1. **AHP (Analytic Hierarchy Process)**
   Digunakan untuk mencari bobot prioritas dari 4 kriteria utama:
   - *Export Value* (Benefit)
   - *Export Weight* (Benefit)
   - *Import Value* (Cost)
   - *Import Weight* (Cost)
   *Metode ini memastikan pembobotan dilakukan secara objektif dengan batas toleransi konsistensi (CR < 0.1).*

2. **SAW (Simple Additive Weighting)**
   Digunakan untuk melakukan normalisasi matriks keputusan berdasarkan atribut kriteria (Benefit/Cost) dan menghitung nilai preferensi akhir (V) untuk mendapatkan perankingan komoditas terbaik.

## ️ Teknologi yang Digunakan

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6)
- **Visualisasi Data**: [Chart.js](https://www.chartjs.org/)
- **Ikon**: [Font Awesome 6](https://fontawesome.com/)
- **Arsitektur**: Single Page Application (SPA) - Tidak memerlukan setup *backend* atau server.

##  Cara Penggunaan

Aplikasi ini bersifat *client-side* murni, yang berarti Anda tidak perlu menginstal Node.js, PHP, atau database apa pun.

1. *Clone* atau unduh repositori ini.
2. Pastikan file `index.html` dan `dataset_akumulasi.csv` berada di dalam folder yang sama (opsional jika data sudah di-*inject* langsung ke dalam `.html`).
3. Buka file `index.html` menggunakan *web browser* modern (Chrome, Edge, Mozilla Firefox, atau Safari).
4. Navigasi melalui *sidebar* di sebelah kiri untuk melihat proses dari Dataset mentah hingga Ranking akhir.

##  Struktur Direktori
```text
/
 index.html               # File utama aplikasi (UI, Logic SPK, dan Data)
 dataset_akumulasi.csv    # Dataset mentah (Referensi)
 README.md                # Dokumentasi proyek