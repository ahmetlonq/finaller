<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Sıfır Hata İşlem Rehberi</title>
    <style>
        body { font-family: 'Inter', sans-serif; line-height: 1.8; color: #334155; background: #f8fafc; padding: 20px; }
        .box { background: white; border: 1px solid #e2e8f0; padding: 25px; border-radius: 16px; margin-bottom: 25px; box-shadow: 0 4px 6px rgba(0,0,0,0.02); }
        h1 { color: #0f172a; }
        h3 { color: #2563eb; margin-top: 0; }
        code { background: #1e293b; color: #f8fafc; padding: 2px 8px; border-radius: 6px; font-weight: bold; }
        .step { margin: 10px 0; padding-left: 20px; border-left: 3px solid #3b82f6; }
    </style>
</head>
<body>
    <h1>Sıfır Hata İşlem Rehberi 🧮</h1>
    
    <div class="box">
        <h3>1. Standart Sapma ve Varyans</h3>
        <p>Sapma, notların ortalamadan ne kadar uzaklaştığını gösterir. Büyüdükçe grup heterojenleşir (farklılaşır).</p>
        <div class="step">Varyans, Standart Sapmanın <strong>karesidir</strong>. <code>V = SS²</code></div>
        <p><strong>Örnek:</strong> Varyansı 25 olan bir grubun sapması kaçtır? Cevap: 5. (Kökünü al, geç!)</p>
    </div>

    <div class="box">
        <h3>2. Z Puanı (Öğrencinin Gerçek Yeri)</h3>
        <p>Öğrencinin gruptaki konumunu belirler. Formül: <code>Z = (Öğrencinin Notu - Ortalama) / Standart Sapma</code></p>
        <div class="step">Adım 1: Farkı bul (Not - Ort).</div>
        <div class="step">Adım 2: Çıkanı sapmaya böl.</div>
        <p><strong>Örnek:</strong> Ort=60, SS=10, Öğrenci=80. Z = (80-60)/10 = 2.0. Yani öğrenci ortalamanın 2 sapma üstünde!</p>
    </div>

    <div class="box">
        <h3>3. T Puanı (Negatiflikten Kurtulma)</h3>
        <p>Z puanı bazen eksi çıkar, T bunu düzeltir. <code>T = (Z * 10) + 50</code></p>
        <p><strong>Taktik:</strong> Sınavda Z'yi bul, 10'la çarp, 50 ekle. Z=0 ise T=50'dir (tam ortadır).</p>
    </div>

    <div class="box">
        <h3>4. Mod, Medyan ve Ortalama İlişkisi</h3>
        <p>Dağılımı tanımak için altın kural:</p>
        <ul>
            <li><code>Ortalama > Medyan > Mod</code> ise grafik <strong>Sağa Çarpık</strong> (Zor sınav).</li>
            <li><code>Mod > Medyan > Ortalama</code> ise grafik <strong>Sola Çarpık</strong> (Kolay sınav).</li>
            <li>Hepsi eşitse: <strong>Normal (Simetrik) Dağılım.</strong></li>
        </ul>
    </div>

    <a href="olcme_menu.html">◂ Menüye Dön</a>
</body>
</html>
            
