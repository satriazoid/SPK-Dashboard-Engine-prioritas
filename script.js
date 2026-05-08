// ---------- DATA ----------
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
const criteria = ["EV", "EW", "IV", "IW"];
const criteriaFull = ["Export Value", "Export Weight", "Import Value", "Import Weight"];
const critType = ["benefit", "benefit", "cost", "cost"];

// Matriks default
let pairwiseMatrix = [
    [1, 3, 5, 5],
    [1 / 3, 1, 3, 3],
    [1 / 5, 1 / 3, 1, 1],
    [1 / 5, 1 / 3, 1, 1]
];

// Fungsi AHP
function computeAHP() {
    const n = criteria.length;
    let colSums = Array(n).fill(0);
    for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) colSums[j] += pairwiseMatrix[i][j];
    let norm = Array(n).fill().map(() => Array(n));
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) norm[i][j] = pairwiseMatrix[i][j] / colSums[j];
    let weights = norm.map(row => row.reduce((a, b) => a + b, 0) / n);
    let lambdaMax = 0;
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) sum += pairwiseMatrix[i][j] * weights[j];
        lambdaMax += sum / weights[i];
    }
    lambdaMax /= n;
    let CI = (lambdaMax - n) / (n - 1);
    let RI = [0, 0, 0.58, 0.9, 1.12, 1.24, 1.32, 1.41, 1.45];
    let CR = CI / RI[n];
    return { weights, lambdaMax, CI, CR };
}

// SAW : hitung semua alternatif
function computeSAW(weights) {
    let values = rawData.map(d => [d.ev, d.ew, d.iv, d.iw]);
    let maxVals = criteria.map((_, idx) => Math.max(...values.map(v => v[idx])));
    let minVals = criteria.map((_, idx) => Math.min(...values.map(v => v[idx])));
    let results = rawData.map((item, idx) => {
        let norm = [];
        for (let j = 0; j < 4; j++) {
            if (critType[j] === "benefit") norm.push(values[idx][j] / maxVals[j]);
            else norm.push(minVals[j] / values[idx][j]);
        }
        let score = norm.reduce((sum, val, i) => sum + val * weights[i], 0);
        return { desc: item.desc, score, normEV: norm[0], normEW: norm[1], normIV: norm[2], normIW: norm[3] };
    });
    return results.sort((a, b) => b.score - a.score);
}

// Global charts references
let chartWeight, chartTop5, chartRanking;

// Render semua UI yang bergantung bobot
function refreshAll() {
    const { weights, lambdaMax, CI, CR } = computeAHP();
    // Update tampilan bobot di AHP & Dashboard
    document.getElementById("ahp-weights").innerHTML = weights.map((w, i) => `${criteria[i]}=${w.toFixed(4)}`).join(" , ");
    document.getElementById("lambda-max").innerHTML = lambdaMax.toFixed(4);
    document.getElementById("ci").innerHTML = CI.toFixed(5);
    let crSpan = document.getElementById("cr");
    crSpan.innerHTML = CR.toFixed(4);
    if (CR > 0.1) { document.getElementById("cr-msg").classList.remove("hidden"); crSpan.className = "text-red-600 font-bold"; }
    else { document.getElementById("cr-msg").classList.add("hidden"); crSpan.className = "text-green-600 font-bold"; }
    // Ranking SAW
    const rankings = computeSAW(weights);
    // update tabel ranking
    const tbody = document.getElementById("ranking-table-body");
    let searchTerm = document.getElementById("search-ranking")?.value.toLowerCase() || "";
    let filtered = rankings.filter(r => r.desc.toLowerCase().includes(searchTerm));
    tbody.innerHTML = "";
    filtered.forEach((item, idx) => {
        let row = tbody.insertRow();
        row.classList.add("ranking-row");
        row.insertCell(0).innerHTML = `<span class="font-bold">${idx + 1}</span>`;
        row.insertCell(1).innerHTML = item.desc;
        row.insertCell(2).innerHTML = `<span class="font-mono">${item.score.toFixed(6)}</span>`;
        row.insertCell(3).innerHTML = item.normEV.toFixed(4);
        row.insertCell(4).innerHTML = item.normEW.toFixed(4);
        row.insertCell(5).innerHTML = item.normIV.toFixed(4);
        row.insertCell(6).innerHTML = item.normIW.toFixed(4);
    });
    // ranking chart top10
    let top10 = rankings.slice(0, 10);
    if (chartRanking) chartRanking.destroy();
    chartRanking = new Chart(document.getElementById("ranking-chart"), {
        type: 'bar', data: { labels: top10.map(r => r.desc.length > 15 ? r.desc.slice(0, 12) + ".." : r.desc), datasets: [{ label: 'Skor SAW', data: top10.map(r => r.score), backgroundColor: '#f59e0b' }] }
    });
    // dashboard stats
    document.getElementById("total-komoditas").innerText = rawData.length;
    let totalEV = rawData.reduce((s, d) => s + d.ev, 0);
    let totalIW = rawData.reduce((s, d) => s + d.iw, 0);
    document.getElementById("total-ev").innerHTML = totalEV.toLocaleString(undefined, { maximumFractionDigits: 0 });
    document.getElementById("total-iw").innerHTML = totalIW.toLocaleString(undefined, { maximumFractionDigits: 0 });
    document.getElementById("top1-name").innerHTML = rankings[0]?.desc || "-";
    if (chartWeight) chartWeight.destroy();
    chartWeight = new Chart(document.getElementById("dashboard-weight-chart"), { type: 'pie', data: { labels: criteriaFull, datasets: [{ data: weights, backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'] }] } });
    let top5Rank = rankings.slice(0, 5);
    if (chartTop5) chartTop5.destroy();
    chartTop5 = new Chart(document.getElementById("dashboard-top5-chart"), { type: 'bar', data: { labels: top5Rank.map(r => r.desc.length > 12 ? r.desc.slice(0, 10) + ".." : r.desc), datasets: [{ label: 'Skor', data: top5Rank.map(r => r.score), backgroundColor: '#8b5cf6' }] } });
}

// Render matriks pairwise di halaman AHP
function renderPairwiseMatrix() {
    const tbody = document.getElementById("pairwise-matrix-body");
    tbody.innerHTML = "";
    for (let i = 0; i < 4; i++) {
        let tr = document.createElement("tr");
        let th = document.createElement("th"); th.innerText = criteria[i]; th.className = "bg-gray-50 px-2"; tr.appendChild(th);
        for (let j = 0; j < 4; j++) {
            let td = document.createElement("td");
            if (i === j) {
                let span = document.createElement("span"); span.innerText = "1"; span.className = "inline-block w-20 text-center"; td.appendChild(span);
            } else if (i < j) {
                let inp = document.createElement("input"); inp.type = "number"; inp.step = "0.1"; inp.value = pairwiseMatrix[i][j].toFixed(2);
                inp.addEventListener("change", ((x, y) => (e) => {
                    let val = parseFloat(e.target.value); if (isNaN(val) || val < 0.1) val = 1; pairwiseMatrix[x][y] = val; pairwiseMatrix[y][x] = 1 / val;
                    renderPairwiseMatrix(); refreshAll();
                }))(i, j);
                td.appendChild(inp);
            } else {
                let span = document.createElement("span"); span.innerText = (1 / pairwiseMatrix[j][i]).toFixed(3); span.className = "inline-block w-20 text-center text-gray-500"; td.appendChild(span);
            }
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}

// Reset matrix default
function resetMatrix() {
    pairwiseMatrix = [
        [1, 3, 5, 5],
        [1 / 3, 1, 3, 3],
        [1 / 5, 1 / 3, 1, 1],
        [1 / 5, 1 / 3, 1, 1]
    ];
    renderPairwiseMatrix();
    refreshAll();
    Swal.fire("Reset Berhasil", "Matriks dikembalikan ke default.", "success");
}

// Export CSV ranking
function exportCSV() {
    const { weights } = computeAHP();
    let rankings = computeSAW(weights);
    let csvRows = [["Rank", "Komoditas", "Skor SAW", "EV norm", "EW norm", "IV norm", "IW norm"]];
    rankings.forEach((r, i) => csvRows.push([i + 1, r.desc, r.score, r.normEV, r.normEW, r.normIV, r.normIW]));
    let csvContent = "data:text/csv;charset=utf-8," + csvRows.map(row => row.join(",")).join("\n");
    let link = document.createElement("a"); link.href = encodeURI(csvContent); link.download = "ranking_saw_komoditas.csv"; link.click();
}

// Data table pagination & filter
function renderDataTable(filter = "") {
    let tbody = document.getElementById("data-table-body");
    let filteredData = rawData.filter(d => d.desc.toLowerCase().includes(filter.toLowerCase()));
    tbody.innerHTML = "";
    filteredData.forEach((d, idx) => {
        let row = tbody.insertRow();
        row.insertCell(0).innerText = idx + 1;
        row.insertCell(1).innerText = d.desc;
        row.insertCell(2).innerHTML = `<div class="text-right">${d.ev.toLocaleString()}</div>`;
        row.insertCell(3).innerHTML = `<div class="text-right">${d.ew.toLocaleString()}</div>`;
        row.insertCell(4).innerHTML = `<div class="text-right">${d.iv.toLocaleString()}</div>`;
        row.insertCell(5).innerHTML = `<div class="text-right">${d.iw.toLocaleString()}</div>`;
    });
}

// Multi-page navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(`page-${pageId}`).classList.remove('hidden');
    document.querySelectorAll('.nav-btn').forEach(btn => {
        if (btn.getAttribute('data-page') === pageId) btn.classList.add('nav-active');
        else btn.classList.remove('nav-active');
    });
    if (pageId === 'data') renderDataTable(document.getElementById("search-data")?.value || "");
    if (pageId === 'ranking') refreshAll(); // refresh ranking chart
}

// Event binding
document.getElementById("reset-ahp")?.addEventListener("click", resetMatrix);
document.getElementById("export-csv")?.addEventListener("click", exportCSV);
document.getElementById("search-ranking")?.addEventListener("input", (e) => refreshAll());
document.getElementById("search-data")?.addEventListener("input", (e) => renderDataTable(e.target.value));
document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => showPage(btn.getAttribute("data-page")));
});

// Inisialisasi
renderPairwiseMatrix();
refreshAll();
renderDataTable("");
showPage("dashboard");