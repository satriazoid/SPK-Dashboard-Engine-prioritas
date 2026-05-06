       // 1. DATA ARRAY 55 BARIS
        const rawData = [
            { desc: "Binatang hidup", ev: 604067.79, ew: 19978.22, iv: 47629288.48, iw: 11620695.48 },
            { desc: "Daging hewan", ev: 327084.17, ew: 42756.60, iv: 35445402.53, iw: 9761261.35 },
            { desc: "Ikan, krustasea, dan moluska", ev: 245928271.10, ew: 46249485.56, iv: 40324848.25, iw: 12763311.53 },
            { desc: "Susu, mentega, dan telur", ev: 39987067.60, ew: 6266959.73, iv: 147898710.70, iw: 49564311.74 },
            { desc: "Produk hewani", ev: 3691515.54, ew: 1331834.09, iv: 4995611.59, iw: 2544173.48 },
            { desc: "Pohon hidup dan bunga potong", ev: 1591152.84, ew: 959908.06, iv: 1035899.41, iw: 164365.45 },
            { desc: "Sayuran", ev: 4775768.79, ew: 4915792.18, iv: 66915162.82, iw: 66506677.50 },
            { desc: "Buah-buahan", ev: 72015905.08, ew: 86084512.80, iv: 221874146.00, iw: 111482267.20 },
            { desc: "Kopi, teh, dan rempah-rempah", ev: 131135539.50, ew: 25798898.87, iv: 37093547.28, iw: 12228536.12 },
            { desc: "Serealia", ev: 936818.94, ew: 316678.10, iv: 304380009.80, iw: 1127547090.00 },
            { desc: "Hasil penggilingan", ev: 3933925.39, ew: 6833180.09, iv: 18802532.40, iw: 37292865.60 },
            { desc: "Biji dan buah mengandung minyak", ev: 27824290.97, ew: 21839585.14, iv: 115743562.50, iw: 198134695.20 },
            { desc: "Lak, getah, dan damar", ev: 12546464.27, ew: 4032987.13, iv: 7188214.18, iw: 1416000.45 },
            { desc: "Bahan anyaman nabati", ev: 44073753.25, ew: 436587573.30, iv: 535924.48, iw: 924604.10 },
            { desc: "Lemak dan minyak hewani/nabati", ev: 2209877682.00, ew: 1904439510.00, iv: 23240783.18, iw: 9740464.96 },
            { desc: "Olahan dari daging, ikan", ev: 119769531.40, ew: 16399344.72, iv: 7069896.89, iw: 1461588.84 },
            { desc: "Gula dan kembang gula", ev: 26652483.56, ew: 36968535.08, iv: 170812762.60, iw: 353574150.20 },
            { desc: "Kakao dan olahannya", ev: 168451925.40, ew: 21052437.77, iv: 98518768.24, iw: 19921016.39 },
            { desc: "Olahan dari tepung", ev: 126770627.40, ew: 55149593.36, iv: 37804934.75, iw: 12748785.30 },
            { desc: "Olahan dari sayuran, buah", ev: 50164716.96, ew: 25588019.33, iv: 16773168.57, iw: 10773976.38 },
            { desc: "Berbagai makanan olahan", ev: 143274329.70, ew: 54354102.01, iv: 95600628.60, iw: 27690652.85 },
            { desc: "Minuman, alkohol, dan cuka", ev: 16634902.83, ew: 23704388.22, iv: 9707461.03, iw: 9438731.13 },
            { desc: "Ampas dan sisa industri makanan", ev: 66531984.86, ew: 348110686.60, iv: 273289298.30, iw: 696768514.60 },
            { desc: "Tembakau dan rokok", ev: 165704834.70, ew: 10891302.91, iv: 104362312.10, iw: 16773743.42 },
            { desc: "Garam, belerang, batu, semen", ev: 54497675.92, ew: 2945673451.00, iv: 348876225.20, iw: 1332298372.00 },
            { desc: "Bijih logam, terak, dan abu", ev: 533256130.00, ew: 173282303.00, iv: 358039180.40, iw: 3487729437.00 },
            { desc: "Bahan bakar mineral", ev: 3963173745.00, ew: 40795613439.00, iv: 3640365836.00, iw: 7760556744.00 },
            { desc: "Bahan kimia anorganik", ev: 461502217.40, ew: 770667285.00, iv: 285420772.40, iw: 592861685.70 },
            { desc: "Bahan kimia organik", ev: 452927559.50, ew: 361914015.50, iv: 377182256.00, iw: 314230504.40 },
            { desc: "Produk farmasi", ev: 50653964.65, ew: 1730677.61, iv: 84856662.56, iw: 1993593.75 },
            { desc: "Pupuk", ev: 53395639.20, ew: 122040030.00, iv: 185955406.70, iw: 622913422.70 },
            { desc: "Sari bahan samak dan celup", ev: 33503892.88, ew: 11192254.84, iv: 110140172.40, iw: 31271580.72 },
            { desc: "Minyak atsiri, kosmetik", ev: 85586383.51, ew: 10542465.71, iv: 125707612.10, iw: 8055338.00 },
            { desc: "Sabun dan preparat pembersih", ev: 108097338.40, ew: 91786648.72, iv: 62455853.54, iw: 22436537.79 },
            { desc: "Perekat dan enzim", ev: 5512336.26, ew: 2249244.98, iv: 49798593.36, iw: 25526713.09 },
            { desc: "Bahan peledak, korek api", ev: 602829.16, ew: 356129.37, iv: 6296101.46, iw: 1117869.17 },
            { desc: "Barang fotografi", ev: 112437.22, ew: 17800.94, iv: 4946719.15, iw: 706972.94 },
            { desc: "Berbagai produk kimia", ev: 855637760.00, ew: 556619020.50, iv: 472870150.40, iw: 195512854.80 },
            { desc: "Plastik dan barang dari plastik", ev: 197384529.80, ew: 136985788.10, iv: 723482886.40, iw: 465962948.30 },
            { desc: "Karet dan barang dari karet", ev: 435138623.80, ew: 176239674.60, iv: 210401208.20, iw: 79166578.06 },
            { desc: "Jangat dan kulit mentah", ev: 8680789.77, ew: 1114525.21, iv: 41818959.04, iw: 7199740.72 },
            { desc: "Barang dari kulit samak", ev: 119622551.00, ew: 8435722.82, iv: 34833371.49, iw: 4654724.81 },
            { desc: "Kulit berbulu, tiruan", ev: 93215.89, ew: 135288.54, iv: 1022280.73, iw: 108878.72 },
            { desc: "Kayu dan barang dari kayu", ev: 245862852.30, ew: 371924371.50, iv: 54614641.46, iw: 262050895.70 },
            { desc: "Gabus dan barang dari gabus", ev: 5633.20, ew: 1578.85, iv: 512999.73, iw: 30111.47 },
            { desc: "Barang anyaman", ev: 6294883.89, ew: 1177284.63, iv: 58403.30, iw: 8403.84 },
            { desc: "Pulp dari kayu", ev: 275148538.70, ew: 535506002.30, iv: 105207839.00, iw: 346486454.90 },
            { desc: "Kertas, karton", ev: 363502534.60, ew: 892549372.90, iv: 145135250.90, iw: 93048340.10 },
            { desc: "Produk percetakan", ev: 1709561.03, ew: 278275.14, iv: 19098996.73, iw: 2268821.76 },
            { desc: "Sutra", ev: 4572.84, ew: 748.43, iv: 36023.25, iw: 332.09 },
            { desc: "Wol, bulu hewan", ev: 229656.99, ew: 2114.90, iv: 4022344.70, iw: 152643.72 },
            { desc: "Kapas", ev: 33597783.63, ew: 11484426.92, iv: 91640090.68, iw: 38297709.62 },
            { desc: "Serat tekstil nabati lainnya", ev: 685135.42, ew: 2763130.34, iv: 3534729.78, iw: 1420581.77 },
            { desc: "Filamen buatan", ev: 36275506.44, ew: 11967507.62, iv: 132220690.40, iw: 49342562.72 },
            { desc: "Serat stapel buatan", ev: 112052116.50, ew: 65568981.01, iv: 79741983.95, iw: 29045055.80 }
        ];

        // 2. FUNGSI UI & NAVIGASI
        function showPage(pageId, element) {
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            document.getElementById(pageId).classList.add('active');
            if(element) element.classList.add('active');

            // Autoclose sidebar di HP saat menu diklik
            if(window.innerWidth <= 768) {
                document.getElementById('sidebar').classList.add('collapsed');
            }
        }

        function toggleSidebar() {
            document.getElementById('sidebar').classList.toggle('collapsed');
        }

        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
            const icon = document.getElementById('themeIcon');
            if(document.body.classList.contains('dark-mode')) {
                icon.classList.replace('fa-moon', 'fa-sun');
            } else {
                icon.classList.replace('fa-sun', 'fa-moon');
            }
            // Update chart colors based on theme
            Chart.instances.forEach(chart => {
                chart.options.color = document.body.classList.contains('dark-mode') ? '#f8fafc' : '#334155';
                chart.update();
            });
        }

        // 3. FUNGSI PENCARIAN (LIVE FILTER)
        function filterDataset() {
            let input = document.getElementById("searchInput").value.toLowerCase();
            let rows = document.querySelectorAll("#datasetBody tr");
            rows.forEach(row => {
                let text = row.innerText.toLowerCase();
                row.style.display = text.includes(input) ? "" : "none";
            });
        }

        // 4. RENDER DATASET
        const formatMoney = (num) => "$" + num.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0});
        const datasetBody = document.getElementById('datasetBody');
        rawData.forEach((d, i) => {
            datasetBody.innerHTML += `
                <tr>
                    <td>${i+1}</td>
                    <td><strong>${d.desc}</strong></td>
                    <td class="currency">${formatMoney(d.ev)}</td>
                    <td>${d.ew.toLocaleString()} kg</td>
                    <td class="currency" style="color: var(--warning);">${formatMoney(d.iv)}</td>
                    <td>${d.iw.toLocaleString()} kg</td>
                </tr>`;
        });

        // Update Stats Widget
        document.getElementById('statTotalData').innerText = rawData.length;
        const maxExport = Math.max(...rawData.map(o => o.ev));
        document.getElementById('statMaxExport').innerText = (maxExport / 1000000).toFixed(1);

        // 5. PERHITUNGAN SAW & EXPORT
        const weights = [0.465, 0.160, 0.278, 0.097]; // W1, W2, W3, W4
        const maxEv = Math.max(...rawData.map(o => o.ev));
        const maxEw = Math.max(...rawData.map(o => o.ew));
        const minIv = Math.min(...rawData.map(o => o.iv));
        const minIw = Math.min(...rawData.map(o => o.iw));

        const sawResults = rawData.map(d => {
            const score = ((d.ev/maxEv) * weights[0]) + ((d.ew/maxEw) * weights[1]) + ((minIv/d.iv) * weights[2]) + ((minIw/d.iw) * weights[3]);
            return { desc: d.desc, score: score };
        }).sort((a, b) => b.score - a.score);

        const rankingBody = document.getElementById('rankingBody');
        sawResults.forEach((r, i) => {
            rankingBody.innerHTML += `
                <tr>
                    <td><span class="badge ${i < 3 ? 'warning' : 'success'}">#${i+1}</span></td>
                    <td>${r.desc}</td>
                    <td style="font-size: 1.1em; font-weight: bold; color: var(--secondary);">${r.score.toFixed(4)}</td>
                </tr>`;
        });

        // FUNGSI EXPORT KE CSV
        function exportCSV() {
            let csv = "Peringkat,Deskripsi Komoditas,Nilai Preferensi (V)\n";
            sawResults.forEach((r, i) => {
                csv += `${i+1},"${r.desc}",${r.score.toFixed(4)}\n`;
            });
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement("a");
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", "Ranking_Prioritas_Ekspor.csv");
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        // 6. INISIALISASI CHART.JS
        Chart.defaults.font.family = "'Segoe UI', sans-serif";
        Chart.defaults.color = '#334155';

        // Bar Chart (Overview)
        const top10Export = [...rawData].sort((a,b) => b.ev - a.ev).slice(0, 10);
        new Chart(document.getElementById('overviewBarChart'), {
            type: 'bar',
            data: {
                labels: top10Export.map(d => d.desc.substring(0,15) + '...'),
                datasets: [{
                    label: 'Export Value (USD)',
                    data: top10Export.map(d => d.ev),
                    backgroundColor: 'rgba(59, 130, 246, 0.8)',
                    borderRadius: 4
                }]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
        });

        // Doughnut Chart (AHP)
        new Chart(document.getElementById('ahpDoughnutChart'), {
            type: 'doughnut',
            data: {
                labels: ['Exp Val', 'Exp Wgt', 'Imp Val', 'Imp Wgt'],
                datasets: [{
                    data: weights,
                    backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
                    borderWidth: 0
                }]
            },
            options: { responsive: true, maintainAspectRatio: false, cutout: '65%', plugins: { legend: { position: 'right' } } }
        });

        // Horizontal Bar Chart (SAW Ranking)
        const top10SAW = sawResults.slice(0, 10);
        new Chart(document.getElementById('sawRankingChart'), {
            type: 'bar',
            data: {
                labels: top10SAW.map(d => d.desc),
                datasets: [{
                    label: 'Nilai Preferensi (V)',
                    data: top10SAW.map(d => d.score),
                    backgroundColor: '#10b981',
                    borderRadius: 4
                }]
            },
            options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
        });

        // Responsivitas Awal (Tutup otomatis jika layar kecil)
        if(window.innerWidth <= 768) { document.getElementById('sidebar').classList.add('collapsed'); }