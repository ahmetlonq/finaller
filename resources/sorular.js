// resources/sorular.js

const quizData = [
    // 1. Ölçme Türleri (Dolaylı / Doğrudan / Türetilmiş)
    {
        question: "1- Bir öğretmenin, öğrencilerinin bilgisayar donanımı konusundaki ön bilgilerini saptamak için çoktan seçmeli bir test uygulaması, aşağıdaki ölçme türlerinden hangisine girer?",
        options: ["A) Türetilmiş Ölçme", "B) Mutlak Ölçme", "C) Dolaylı Ölçme", "D) Doğrudan Ölçme", "E) Nitel Ölçme"],
        correct: 2
    },
    {
        question: "2- Aşağıdaki işlemlerden hangisi 'doğrudan ölçme' örneğidir?",
        options: ["A) Termometre ile odanın sıcaklığını ölçmek", "B) Yaylı terazi ile kurye paketinin ağırlığını ölçmek", "C) Öğrencilerin derse katılım sayılarını sayarak kaydetmek", "D) Öğrencilerin akademik başarılarını test ile belirlemek", "E) Zeka testi uygulayarak IQ puanı hesaplamak"],
        correct: 2
    },
    {
        question: "3- Bir kuryenin, gün içinde teslim ettiği paket sayısını tek tek sayarak teslimat defterine adet olarak kaydetmesi işlemi hangi ölçme türüne girer?",
        options: ["A) Dolaylı Ölçme", "B) Doğrudan Ölçme", "C) Türetilmiş Ölçme", "D) Nitel Ölçme", "E) Sıralamalı Ölçme"],
        correct: 1
    },
    {
        question: "4- AGS'ye (Akademi Giriş Sınavı) hazırlanan adayların deneme sınavı puanlarının hesaplanması hangi ölçme türüne örnektir?",
        options: ["A) Doğrudan Ölçme", "B) Türetilmiş Ölçme", "C) Mutlak Ölçme", "D) Dolaylı Ölçme", "E) Değerlendirme"],
        correct: 3
    },
    {
        question: "5- Bir motosikletin (örneğin Honda PCX) ortalama hızının, gidilen mesafenin geçen zamana bölünmesi formülüyle (Hız = Yol / Zaman) hesaplanması hangi ölçme türüdür?",
        options: ["A) Doğrudan Ölçme", "B) Türetilmiş Ölçme", "C) Dolaylı Ölçme", "D) Oranlı Ölçme", "E) Eşit Aralıklı Ölçme"],
        correct: 1
    },

    // 2. Ölçme Araçlarında Aranan Nitelikler (Güvenirlik)
    {
        question: "6- Bir başarı testinin, farklı zamanlarda aynı öğrenci grubuna uygulandığında birbirine çok yakın puanlar vermesi, testin en çok hangi özelliğinin yüksek olduğunu gösterir?",
        options: ["A) Kapsam Geçerliği", "B) Güvenirlik (Kararlılık)", "C) Kullanışlılık", "D) Yordama Geçerliği", "E) Objektiflik"],
        correct: 1
    },
    {
        question: "7- Aşağıdakilerden hangisi bir testin güvenirliğini doğrudan düşüren bir hata kaynağıdır?",
        options: ["A) Sabit Hata", "B) Sistematik Hata", "C) Kapsam Hatası", "D) Tesadüfi Hata", "E) Dizgi Hatası"],
        correct: 3
    },
    {
        question: "8- Bir testteki soru sayısının (örneklemin) artırılması, testin öncelikle hangi özelliğini olumlu yönde etkiler?",
        options: ["A) Sadece Görünüş Geçerliğini", "B) Kullanışlılığı", "C) Duyarlılığı ve Güvenirliği", "D) Mutlak Başarıyı", "E) Yordama Geçerliğini"],
        correct: 2
    },
    {
        question: "9- Bir sınavın kurallara uygun olarak objektif bir şekilde, birden fazla puanlayıcı tarafından okunup aynı sonucun bulunması testin hangi özelliğinin yüksek olduğunu kanıtlar?",
        options: ["A) Güvenirlik (Objektiflik)", "B) Yapı Geçerliği", "C) Kapsam Geçerliği", "D) Kullanışlılık", "E) Uygunluk Geçerliği"],
        correct: 0
    },
    {
        question: "10- 'Bir ölçme aracının tesadüfi hatalardan arınıklık derecesi' olarak tanımlanan istatistiksel kavram aşağıdakilerden hangisidir?",
        options: ["A) Geçerlik", "B) Kullanışlılık", "C) Değerlendirme", "D) Standart Sapma", "E) Güvenirlik"],
        correct: 4
    },

    // 3. Yapılış Amacına Göre Değerlendirme (Tanıma ve Yerleştirme)
    {
        question: "11- Bir üniversitenin yabancı diller yüksekokulu, sene başında öğrencilere sınav uygulamış ve 70'in altında alanları İngilizce hazırlık sınıfına almıştır. Bu uygulama hangi değerlendirme türüne örnektir?",
        options: ["A) Biçimlendirmeye yönelik", "B) Mutlak değerlendirme", "C) Değer biçmeye yönelik", "D) Bağıl değerlendirme", "E) Tanıma ve yerleştirmeye yönelik"],
        correct: 4
    },
    {
        question: "12- Ünite sonlarında öğrencilerin öğrenme eksikliklerini belirlemek amacıyla not kaygısı olmadan yapılan değerlendirme türü aşağıdakilerden hangisidir?",
        options: ["A) Tanıma ve yerleştirme", "B) Değer biçmeye yönelik", "C) Biçimlendirme ve yetiştirmeye yönelik", "D) Düzey belirleyici", "E) Gözleme dayalı"],
        correct: 2
    },
    {
        question: "13- AGS (Akademi Giriş Sınavı) veya KPSS gibi adayların mesleki yetkinliklerini ölçerek onları bir kadroya seçmek amacıyla yapılan sınavlar hangi değerlendirme türüne girer?",
        options: ["A) Biçimlendirme", "B) İzleme", "C) Tanıma ve Yerleştirme", "D) Geliştirme", "E) Değer Biçme"],
        correct: 2
    },
    {
        question: "14- Bilişim Teknolojileri dersinin ilk haftasında, öğretmenin sınıftaki öğrencilerin kodlama konusundaki ön koşul bilgilerini saptamak için yaptığı testin temel amacı nedir?",
        options: ["A) Dönem sonu notu vermek", "B) Tanıma ve yerleştirme (Seviye tespiti)", "C) Süreç sonu eksiklik gidermek", "D) Öğretim yöntemini test etmek", "E) Zeka seviyelerini belirlemek"],
        correct: 1
    },
    {
        question: "15- Bir yabancı dil kursuna başvuran kişileri yeteneklerine göre kurlara (A1, A2, B1) ayırmak için uygulanan sınav hangi değerlendirme türünün kapsamındadır?",
        options: ["A) Formatif (Biçimlendirici)", "B) Summatif (Değer Biçici)", "C) Tanıma ve Yerleştirmeye Yönelik", "D) Sürekli Değerlendirme", "E) Psikomotor Değerlendirme"],
        correct: 2
    },

    // 4. Ölçüt Türleri (Mutlak ve Bağıl Ölçüt)
    {
        question: "16- Aşağıdaki değerlendirme kurallarından hangisinde 'bağıl ölçüt' kullanılmıştır?",
        options: ["A) ALES'ten en az 70 puan almak gereklidir.", "B) Sınıf ortalamasının üzerinde puan alan öğrenciler dersten başarılı sayılacaktır.", "C) Yabancı dil sınavından en az 55 alınmalıdır.", "D) Ehliyet sınavını geçmek için 70 almak şarttır.", "E) Boy uzunluğu en az 165 cm olmalıdır."],
        correct: 1
    },
    {
        question: "17- Bir şirketin 'İlgili alanda en az 5 yıllık tecrübesi olan adaylar mülakata çağrılacaktır' kuralı hangi ölçüt türüne girer?",
        options: ["A) Tanımlanmış ölçüt", "B) Bağıl ölçüt", "C) Doğal ölçüt", "D) Mutlak ölçüt", "E) İstatistiksel ölçüt"],
        correct: 3
    },
    {
        question: "18- 'AGS'ye giren adaylar arasından kendi branşında (BÖTE) ilk 100'e girenler atanacaktır.' kuralında hangi ölçüt kullanılmıştır?",
        options: ["A) Mutlak Ölçüt", "B) Bağıl Ölçüt", "C) Standart Ölçüt", "D) Doğrudan Ölçüt", "E) Türetilmiş Ölçüt"],
        correct: 1
    },
    {
        question: "19- 'Bir 3D yazıcı operatörü sertifikası alabilmek için teorik sınavdan 100 üzerinden en az 80 almak gereklidir.' kuralı neye dayanır?",
        options: ["A) Mutlak Ölçüt", "B) Bağıl Ölçüt", "C) Çan Eğrisi", "D) İzafi Ölçüt", "E) Sürekli Değişken"],
        correct: 0
    },
    {
        question: "20- Aşağıdaki değerlendirme kurallarından hangisi 'mutlak ölçüte' dayanmaktadır?",
        options: ["A) Çan eğrisi sistemini geçmek", "B) Yetenek yarışmasında ilk 3'e girmek", "C) Sınıf ortalamasını aşmak", "D) Sınavdaki soruların yarısını doğru cevaplamak", "E) Mülakatta en yüksek puanı alan kişi olmak"],
        correct: 3
    },

    // 5. Geçerlik Türleri (Kapsam Geçerliği)
    {
        question: "21- Eğitim bilimleri sınavına giren bir aday, soruların sadece 'Ölçmede Hata' ünitesinden sorulduğunu fark etmiştir. Bu sınavın öncelikle hangi niteliği düşüktür?",
        options: ["A) Güvenirlik", "B) Yordama geçerliği", "C) Objektiflik", "D) Kapsam geçerliği", "E) Görünüş geçerliği"],
        correct: 3
    },
    {
        question: "22- Kapağında 'Matematik Testi' yazan bir sınavı inceleyen öğrencinin içeride 'Fizik' problemleri görmesi, testin hangi niteliğinden yoksun olduğunu gösterir?",
        options: ["A) Görünüş geçerliği", "B) İç tutarlılık", "C) Kapsam geçerliği", "D) Yapı geçerliği", "E) Eşdeğerlik"],
        correct: 0
    },
    {
        question: "23- Bir testin kapsam geçerliğini sağlamak ve soruların konulara dengeli dağıldığını güvence altına almak için öğretmenin öncelikle ne kullanması önerilir?",
        options: ["A) Z ve T Puanları", "B) Çan Eğrisi", "C) Belirtke Tablosu", "D) Madde Güçlük İndeksi", "E) Korelasyon Katsayısı"],
        correct: 2
    },
    {
        question: "24- BÖTE alan sınavında tüm ünitelerden soru sorulması ve soruların ünitenin önem derecesine göre testte yer bulması, testin öncelikle hangi özelliğini artırır?",
        options: ["A) Güvenirliğini", "B) Kapsam Geçerliğini", "C) Görünüş Geçerliğini", "D) Sabit Hatasını", "E) Test-Tekrar Test Katsayısını"],
        correct: 1
    },
    {
        question: "25- Bir sınavdaki soruların, ölçülmek istenen davranışlar evrenini (müfredat içeriğini) yeterince temsil edememesi, doğrudan neyin eksikliğidir?",
        options: ["A) Kapsam Geçerliği", "B) Yordama Geçerliği", "C) İç Tutarlılık", "D) Tesadüfi Hata", "E) Kararlılık"],
        correct: 0
    },

    // 6. Hata Türleri (Sistematik ve Sabit Hata)
    {
        question: "26- Bir öğretmenin, okuduğu sınav kağıtlarında sadece yazısı güzel olan öğrencilere fazladan 10 puan vermesi hangi hata türüne örnektir?",
        options: ["A) Sabit Hata", "B) Tesadüfi Hata", "C) Sistematik Hata", "D) Ölçme Hatası", "E) Standart Hata"],
        correct: 2
    },
    {
        question: "27- Bir terazinin, tartılan her ürünü gerçek ağırlığının %10'u kadar eksik tarttığı fark edilmiştir. Bu terazinin yaptığı hata türü hangisidir?",
        options: ["A) Sabit Hata", "B) Sistematik Hata", "C) Tesadüfi Hata", "D) Kapsam Hatası", "E) Beklenen Hata"],
        correct: 1
    },
    {
        question: "28- Bir öğretmenin sınav kağıtlarını okurken istisnasız sınıftaki tüm öğrencilere 5'er puan fazla vermesi (veya sorunun hatalı olup herkese doğru sayılması) hangi hata türüdür?",
        options: ["A) Tesadüfi Hata", "B) Sabit Hata", "C) Sistematik Hata", "D) Öznel Hata", "E) Yordama Hatası"],
        correct: 1
    },
    {
        question: "29- Sınavda kız öğrencilere +10 puan eklenirken, erkek öğrencilere +5 puan eklenmesi işlemi, ölçme sonuçlarına hangi hata türünün karıştığını gösterir?",
        options: ["A) Sabit Hata", "B) Tesadüfi Hata", "C) Sistematik Hata", "D) Standart Hata", "E) Geçerlik Hatası"],
        correct: 2
    },
    {
        question: "30- Sabit ve sistematik hatalar bir ölçme aracının hangi özelliğini doğrudan düşürürken, hangi özelliğini kesinlikle etkilemez?",
        options: ["A) Güvenirliği düşürür, Geçerliği etkilemez", "B) Kullanışlılığı düşürür, Güvenirliği etkilemez", "C) Geçerliği düşürür, Güvenirliği etkilemez", "D) Hem Geçerliği hem Güvenirliği düşürür", "E) Sadece Görünüş Geçerliğini düşürür"],
        correct: 2
    },

    // 7. Ölçek Türleri
    {
        question: "31- Bilişim Teknolojileri sınavından Ayşe 80, Mehmet ise 40 puan almıştır. Bu sonuçlara göre 'Ayşe'nin bilgisi Mehmet'in bilgisinin tam iki katıdır' yorumunun yapılamamasının nedeni nedir?",
        options: ["A) Eşit oranlı ölçek kullanılması", "B) İzafi (bağıl) sıfır ve eşit aralıklı ölçek kullanılması", "C) Doğrudan ölçme yapılması", "D) Hata miktarının bilinmemesi", "E) Güvenirliğin düşük olması"],
        correct: 1
    },
    {
        question: "32- Aşağıdaki değişkenlerden hangisi mutlak sıfıra sahip olan 'eşit oranlı' ölçek düzeyinde ölçülmektedir?",
        options: ["A) Öğrencilerin akademik başarı puanları", "B) Havanın 25 Santigrat derece olması", "C) Sınıftaki öğrencilerin boy uzunlukları", "D) Zeka testinden alınan standart puanlar", "E) Takvimdeki yılın 2026 olması"],
        correct: 2
    },
    {
        question: "33- Eğitim ve psikolojide kullanılan çoktan seçmeli başarı testleri, ilgi envanterleri ve yetenek testleri genellikle hangi ölçek düzeyinde kabul edilir?",
        options: ["A) Sınıflama Ölçeği", "B) Sıralama Ölçeği", "C) Eşit Aralıklı Ölçek", "D) Eşit Oranlı Ölçek", "E) Mutlak Ölçek"],
        correct: 2
    },
    {
        question: "34- Sınavdan 0 (sıfır) alan bir öğrenci için 'bu konuda hiçbir bilgisi yoktur' denilememesinin istatistiksel nedeni, eğitim testlerinde kullanılan sıfır noktasının hangi yapıda olmasıdır?",
        options: ["A) Mutlak Sıfır", "B) Gerçek Sıfır", "C) Bağıl (İzafi) Sıfır", "D) Doğal Sıfır", "E) Rastlantısal Sıfır"],
        correct: 2
    },
    {
        question: "35- 'Türkiye'nin illeri plaka kodlarına göre numaralandırılmıştır (01 Adana, 16 Bursa vb.).' Bu numaralandırma işlemi hangi ölçek türüne en uygun örnektir?",
        options: ["A) Eşit Oranlı", "B) Eşit Aralıklı", "C) Sıralama", "D) Sınıflama (Adlandırma)", "E) Doğrudan Ölçek"],
        correct: 3
    },

    // 8. Güvenirlik Belirleme Yöntemleri (Test-Tekrar Test)
    {
        question: "36- Bir araştırmacı 'Mesleki İlgi Envanterini' bir gruba uygulamış, 3 hafta sonra aynı gruba tekrar uygulayarak puanlar arasındaki korelasyonu 0.85 bulmuştur. Bu testin hangi özelliği kanıtlanmıştır?",
        options: ["A) İç tutarlılık", "B) Kararlılık", "C) Kapsam geçerliği", "D) Objektiflik", "E) Yordama geçerliği"],
        correct: 1
    },
    {
        question: "37- Test-tekrar test yönteminde, iki uygulama arasındaki sürenin 6 ay gibi çok uzun bir zaman dilimi olması durumunda aşağıdakilerden hangisinin gerçekleşmesi beklenir?",
        options: ["A) Güvenirlik katsayısının yapay olarak yüksek çıkması", "B) Öğrencilerin soruları tamamen hatırlaması", "C) Ölçülen özellikte gelişimsel değişim olacağı için korelasyonun düşmesi", "D) Kapsam geçerliğinin artması", "E) Sistematik hatanın ortadan kalkması"],
        correct: 2
    },
    {
        question: "38- Aynı testin, aynı öğrenci grubuna belirli bir zaman aralığı bırakılarak iki kez uygulanmasıyla elde edilen güvenirlik katsayısı testin öncelikle hangi alt boyutunu gösterir?",
        options: ["A) İç Tutarlılık", "B) Kararlılık", "C) Paralellik", "D) Eşdeğerlik", "E) Kapsam Yeterliliği"],
        correct: 1
    },
    {
        question: "39- Test-tekrar test yönteminde iki uygulama arasındaki sürenin çok kısa tutulması (örneğin sadece 1 gün) istatistiksel olarak hangi probleme yol açar?",
        options: ["A) Öğrencilerin yaşça büyümesine", "B) Soruların eskimesine", "C) Öğrencilerin soruları hatırlayarak korelasyonun yapay olarak aşırı yüksek çıkmasına", "D) Güvenirliğin sıfıra düşmesine", "E) Geçerliğin tamamen yok olmasına"],
        correct: 2
    },
    {
        question: "40- Aşağıdakilerden hangisi bir testin güvenirliğini 'Test-Tekrar Test' yöntemiyle belirlerken dikkat edilmesi gereken en kritik faktördür?",
        options: ["A) Soruların testte sıralanış biçimi", "B) İki uygulama arasında geçen sürenin uygunluğu (ne çok kısa, ne çok uzun)", "C) Testin eşit iki yarıya bölünmesi", "D) Madde güçlük indekslerinin tek tek hesaplanması", "E) Sınavın sadece çok başarılı öğrencilere yapılması"],
        correct: 1
    },

    // 9. Madde İstatistikleri (Madde Güçlük İndeksi)
    {
        question: "41- 100 kişilik bir sınıfa uygulanan sınavda, 3. soruyu 90 öğrenci doğru cevaplamıştır. Bu soru için aşağıdakilerden hangisi kesinlikle söylenebilir?",
        options: ["A) Çok zor bir sorudur.", "B) Madde güçlük indeksi 0.90'dır ve soru çok kolaydır.", "C) Ayırt ediciliği çok yüksektir.", "D) Madde güçlük indeksi 0.10'dur.", "E) Testten derhal çıkarılmalıdır."],
        correct: 1
    },
    {
        question: "42- Eğitimde kullanılacak ideal ve genel bir başarı testindeki soruların ortalama güçlük indeksi (p) ideal olarak hangi değere yakın olmalıdır?",
        options: ["A) 0.10", "B) 0.30", "C) 0.50", "D) 0.90", "E) 1.00"],
        correct: 2
    },
    {
        question: "43- Madde güçlük indeksi (pj) 0.15 olarak hesaplanan bir BÖTE alan sınavı sorusu için yapılacak en doğru yorum hangisidir?",
        options: ["A) Soru çok kolaydır.", "B) Soru orta güçlükte, ideal bir sorudur.", "C) Soru çok zordur, sınıfın sadece %15'i yapabilmiştir.", "D) Soru hatalıdır.", "E) Soru kesinlikle ayırt edici değildir."],
        correct: 2
    },
    {
        question: "44- Bir testte yer alan tüm maddelerin madde güçlük indekslerinin (pj) toplanmasıyla elde edilen değer istatistiksel olarak testin hangi verisini sağlar?",
        options: ["A) Testin Ranjını", "B) Testin Standart Sapmasını", "C) Testin Varyansını", "D) Testin Aritmetik Ortalamasını", "E) Testin Mod Değerini"],
        correct: 3
    },
    {
        question: "45- Bir sorunun zorluk veya kolaylık derecesini belirten Madde Güçlük İndeksi (p), teorik olarak hangi değerler arasında değişir?",
        options: ["A) -1.00 ile +1.00 arası", "B) 0.00 ile +1.00 arası", "C) -1.00 ile 0.00 arası", "D) 1 ile 100 arası", "E) 0 ile 10 arası"],
        correct: 1
    },

    // 10. Madde İstatistikleri (Madde Ayırt Edicilik İndeksi)
    {
        question: "46- Yapılan bir madde analizi sonucunda, bir sorunun ayırt edicilik indeksi -0.15 çıkmıştır. Öğretmen bu maddeyle ilgili ne yapmalıdır?",
        options: ["A) Soruyu olduğu gibi testte bırakmalıdır.", "B) Soruyu biraz zorlaştırarak kullanmalıdır.", "C) Sorunun çeldiricilerini güçlendirmelidir.", "D) Maddeyi başa almalıdır.", "E) Soru ters çalışmaktadır, hiçbir düzeltme yapılmadan testten çıkarılmalıdır."],
        correct: 4
    },
    {
        question: "47- Madde ayırt edicilik indeksi 0.45, madde güçlük indeksi 0.20 olan bir soru için hangi yorum yapılır?",
        options: ["A) Kolay ve ayırt edici değildir.", "B) Orta güçlükte ve ayırt edicidir.", "C) Zor ancak bilenle bilmeyeni çok iyi ayıran mükemmel bir sorudur.", "D) Zor ve ayırt ediciliği düşük bir sorudur.", "E) Çok kolay ancak ayırt edicidir."],
        correct: 2
    },
    {
        question: "48- Bir sorunun madde ayırt edicilik indeksi (rjx) +0.40 ve üzerinde bir değer almışsa, bu soru için karar ne olmalıdır?",
        options: ["A) Soru atılmalıdır.", "B) Soru düzeltilerek kullanılmalıdır.", "C) Soru çok kötüdür.", "D) Soru mükemmel derecede ayırt edicidir, testte kesinlikle yer almalıdır.", "E) Sorunun çeldiricileri sorunludur."],
        correct: 3
    },
    {
        question: "49- Bir maddenin ayırt edicilik indeksinin tam olarak sıfır (0.00) çıkması ne anlama gelmektedir?",
        options: ["A) Sorunun çok zor olduğunu gösterir.", "B) Sınavdaki herkesin soruyu yanlış yaptığını gösterir.", "C) Başarılı olan üst grup ile başarısız olan alt grubun soruyu tamamen aynı oranda doğru cevapladığını, sorunun ayırt etmediğini gösterir.", "D) Sorunun testteki en iyi soru olduğunu kanıtlar.", "E) Testin güvenirliğinin 1.00 olduğunu gösterir."],
        correct: 2
    },
    {
        question: "50- Ayırt edicilik indeksi (rjx) istatistiksel olarak hangi değer aralığında bulunabilir?",
        options: ["A) 0.00 ile +1.00 arası", "B) -1.00 ile +1.00 arası", "C) -1.00 ile 0.00 arası", "D) 1 ile 100 arası", "E) 20 ile 80 arası"],
        correct: 1
    },

    // 11. Geçerlik Türleri (Yordama Geçerliği)
    {
        question: "51- Şirketin yetenek testinden yüksek alıp işe alınan personellerin, iş başındaki performanslarının çok düşük olması uygulanan testin hangi niteliğinin düşük olduğunu gösterir?",
        options: ["A) Kapsam Geçerliği", "B) Yordama Geçerliği", "C) Yapı Geçerliği", "D) İç Tutarlılık", "E) Kararlılık"],
        correct: 1
    },
    {
        question: "52- Yordama geçerliğini belirlemek isteyen bir araştırmacı, testin tahmin gücünü sınayacağı 'ölçüt (kriter)' puanını ne zaman elde etmelidir?",
        options: ["A) Ölçme işlemiyle eş zamanlı olarak", "B) Ölçme işleminden çok önce", "C) Ölçme işleminden belirli bir süre sonra (gelecekte)", "D) Sınav soruları hazırlanmadan önce", "E) Testi iki yarıya böldükten hemen sonra"],
        correct: 2
    },
    {
        question: "53- AGS'den çok yüksek puan alarak atanan bir adayın, mesleki yaşamında çok başarısız bir öğretmenlik performansı sergilemesi, AGS'nin en çok hangi geçerliğinin düşük olduğu eleştirisini getirir?",
        options: ["A) Görünüş Geçerliği", "B) Uygunluk Geçerliği", "C) Yordama Geçerliği", "D) İç Tutarlılık", "E) Eşdeğerlik"],
        correct: 2
    },
    {
        question: "54- Bir lise giriş sınavının 'yordama geçerliğini' belirlemek için sınavdan alınan puanlar hangi somut ölçütle karşılaştırılmalıdır?",
        options: ["A) Öğrencilerin ortaokuldaki notlarıyla", "B) Sınavla aynı gün yapılan başka bir testle", "C) Öğrencilerin lise bitimindeki mezuniyet not ortalamalarıyla", "D) Soruların müfredata uygunluğuyla", "E) Testin KR-20 katsayısıyla"],
        correct: 2
    },
    {
        question: "55- Yordama geçerliğinde tahmin edilmek istenen durum (ölçüt), testin uygulama zamanına göre nerededir?",
        options: ["A) Geçmişte", "B) Şimdiki zamanda", "C) Gelecekte", "D) Sınav anında", "E) Hazırlık aşamasında"],
        correct: 2
    },

    // 12. Güvenirlik Belirleme Yöntemleri (KR-20 / İç Tutarlılık)
    {
        question: "56- KR-20 güvenirlik katsayısı 0.88 çıkan çoktan seçmeli bir başarı testi için hangisi söylenemez?",
        options: ["A) Maddeler birbirleriyle uyumludur.", "B) Test heterojen (farklı boyutları ölçen) bir yapıdadır.", "C) Tesadüfi hata oranı düşüktür.", "D) İç tutarlılık yüksektir.", "E) Testin güvenirliği kabul edilebilir düzeydedir."],
        correct: 1
    },
    {
        question: "57- Testi bir kez uygulayan, soruları 1 ve 0 şeklinde puanlayan ve madde güçlük indekslerinin birbirinden farklı olduğunu bilen bir öğretmen hangi güvenirlik yöntemini kullanmalıdır?",
        options: ["A) Test-Tekrar Test", "B) Eşdeğer Formlar", "C) Cronbach Alfa", "D) KR-20", "E) KR-21"],
        correct: 3
    },
    {
        question: "58- KR-20 katsayısının hesaplanabilmesi için maddelerin puanlama sisteminin nasıl olması zorunludur?",
        options: ["A) Likert tipi (1'den 5'e kadar) derecelendirmeli", "B) Doğru cevaba 1, yanlış ve boş cevaba 0 puan verilerek", "C) Soruların klasik yazılı yoklama şeklinde olması", "D) Testin eksi puan verebilmesi", "E) Sadece çok zor sorulardan oluşması"],
        correct: 1
    },
    {
        question: "59- KR-20 katsayısı 0.95 çıkan bir test için 'maddeler birbiriyle son derece uyumludur ve test tek bir yapıyı ölçmektedir' yorumu yapılırken kullanılan istatistiksel kavram hangisidir?",
        options: ["A) Test heterojendir.", "B) Test homojendir.", "C) Test bağımsızdır.", "D) Test sıfır hataya sahiptir.", "E) Test yordayıcıdır."],
        correct: 1
    },
    {
        question: "60- Bir testteki madde güçlüklerinin birbirine tamamen eşit olduğu (veya ortalama güçlük üzerinden hesap yapıldığı) varsayımıyla kullanılan daha pratik iç tutarlılık formülü hangisidir?",
        options: ["A) KR-20", "B) Cronbach Alfa", "C) Spearman-Brown", "D) Pearson Korelasyon", "E) KR-21"],
        correct: 4
    },

    // 13. Merkezi Eğilim Ölçüleri (Medyan / Mod / Ortalama)
    {
        question: "61- Öğrenci puanları 10, 80, 85, 90, 95 olan bir veri grubu için en uygun ve sınıfı en iyi yansıtan merkezi eğilim ölçüsü hangisi olmalıdır?",
        options: ["A) Aritmetik Ortalama", "B) Medyan (Ortanca)", "C) Mod (Tepe Değer)", "D) Ranj", "E) Standart Sapma"],
        correct: 1
    },
    {
        question: "62- Öğrenci sayısının çift sayı (örneğin 20 kişi) olduğu sıralı bir puan dağılımında Medyan nasıl bulunur?",
        options: ["A) En çok tekrar eden puan alınır.", "B) Tam ortada kalan iki puan toplanıp ikiye bölünür.", "C) Puanların tamamı toplanıp 20'ye bölünür.", "D) En yüksek puandan en düşük puan çıkarılır.", "E) Ortadaki puanlardan büyük olanı seçilir."],
        correct: 1
    },
    {
        question: "63- Dağılımda aşırı yüksek veya aşırı düşük puanların (uç değerlerin) bulunduğu durumlarda aritmetik ortalama yanıltıcı olabilir. Bu durumlarda kullanılması gereken merkezi eğilim ölçüsü hangisidir?",
        options: ["A) Mod", "B) Varyans", "C) Medyan (Ortanca)", "D) Çeyrek Sapma", "E) Standart Sapma"],
        correct: 2
    },
    {
        question: "64- Bir frekans tablosunda, yığılmalı (birikimli) frekansın tam olarak %50'sine (yarısına) denk gelen puan değeri istatistiksel olarak neyi ifade eder?",
        options: ["A) Aritmetik Ortalama", "B) Ranj", "C) Z Puanı", "D) Medyan (Ortanca)", "E) Mod"],
        correct: 3
    },
    {
        question: "65- 20, 20, 30, 40, 50, 60, 60 sayılarından oluşan 7 kişilik bir grubun medyan (ortanca) değeri kaçtır?",
        options: ["A) 20", "B) 30", "C) 40", "D) 50", "E) 60"],
        correct: 2
    },

    // 14. Merkezi Dağılım Ölçüleri (Standart Sapma / Varyans / Ranj)
    {
        question: "66- Aynı testin uygulandığı A Şubesinin Standart Sapması 4, B Şubesinin Standart Sapması 12'dir. B şubesi için hangisi kesinlikle doğrudur?",
        options: ["A) B şubesindeki öğrenciler konuyu daha iyi anlamıştır.", "B) B şubesi homojen bir gruptur.", "C) B şubesinde öğrenciler arasındaki not farklılaşması daha fazladır (heterojendir).", "D) B şubesinde testin güvenirliği daha düşüktür.", "E) Sınıf ortalamaları farklıdır."],
        correct: 2
    },
    {
        question: "67- Bir öğretmenin uyguladığı testin sonucunda sınıfın standart sapması ve varyansı 0 (sıfır) çıkmıştır. Bu durumun en olası nedeni nedir?",
        options: ["A) Sınıftaki tüm öğrencilerin istisnasız aynı puanı almış olması.", "B) Testin çok zor olması.", "C) Sınava katılımın yüksek olması.", "D) Puanların normal dağılım göstermesi.", "E) Testin geçerliğinin yüksek olması."],
        correct: 0
    },
    {
        question: "68- Bir testin sonucunda elde edilen standart sapma değerinin büyük çıkması sınıfın genel yapısı hakkında nasıl bir bilgi verir?",
        options: ["A) Sınıfın homojen olduğunu", "B) Sınıftaki öğrencilerin birbirine çok yakın puanlar aldığını", "C) Sınıfın heterojen (farklılaşmış) olduğunu, bilenle bilmeyenin ayrıldığını", "D) Sınavın çok kolay geçtiğini", "E) Sınıfın başarısız olduğunu"],
        correct: 2
    },
    {
        question: "69- Standart sapmanın karesi alınarak hesaplanan ve genellikle testin ayırt ediciliğini / güvenirliğini yorumlamada kullanılan dağılım ölçüsüne ne ad verilir?",
        options: ["A) Ranj", "B) Çeyrek Sapma", "C) Z Puanı", "D) Varyans", "E) Mod"],
        correct: 3
    },
    {
        question: "70- Bir puan dağılımındaki en yüksek not ile en düşük not arasındaki matematiksel farka ne ad verilir?",
        options: ["A) Standart Sapma", "B) Ranj (Açıklık)", "C) Varyans", "D) Bağıl Değişkenlik Katsayısı", "E) Mod"],
        correct: 1
    },

    // 15. Standart Puanlar (Z ve T Puanları)
    {
        question: "71- Sınıf ortalamasının 50, standart sapmanın 10 olduğu bir sınavda 80 puan alan bir öğrencinin Z ve T puanı sırasıyla kaçtır?",
        options: ["A) Z = +2, T = 70", "B) Z = +3, T = 80", "C) Z = +1, T = 60", "D) Z = -3, T = 20", "E) Z = 0, T = 50"],
        correct: 1
    },
    {
        question: "72- Bir öğrencinin derslerdeki Z puanları; Türkçe: -1, Tarih: 0, Coğrafya: +1.5, Matematik: +0.5, Fizik: -2'dir. En başarılı ve en başarısız olduğu dersler sırasıyla hangileridir?",
        options: ["A) Coğrafya – Tarih", "B) Matematik – Fizik", "C) Coğrafya – Fizik", "D) Tarih – Türkçe", "E) Matematik – Türkçe"],
        correct: 2
    },
    {
        question: "73- Z puanı hesaplamasında ulaşılan değerin pozitif (artı) bir sayı çıkması öğrenci hakkında hangi kesin bilgiyi verir?",
        options: ["A) Sınıftaki herkesi geçtiğini", "B) Sınavın en yüksek notunu aldığını", "C) Kendi sınıfının aritmetik ortalamasının üstünde performans gösterdiğini", "D) Sınavı tam puanla bitirdiğini", "E) Mod değerinin altında kaldığını"],
        correct: 2
    },
    {
        question: "74- Formülü [T = 10 * Z + 50] olan ve negatif değerler alabilen Z puanını ondalık/eksi sayılardan kurtarmak için kullanılan standart puan hangisidir?",
        options: ["A) Yüzdelik Dilim", "B) Z Puanı", "C) T Puanı", "D) Ham Puan", "E) Varyans Puanı"],
        correct: 2
    },
    {
        question: "75- Sınıfın genel aritmetik ortalamasıyla tamamen aynı puanı alan (örneğin ortalama 60 iken 60 alan) bir öğrencinin Z ve T puanları istisnasız olarak kaçtır?",
        options: ["A) Z = 1, T = 60", "B) Z = 0, T = 50", "C) Z = -1, T = 40", "D) Z = 0, T = 0", "E) Z = 5, T = 100"],
        correct: 1
    },

    // 16. Değerlendirme Türleri (Değer Biçmeye Yönelik)
    {
        question: "76- Dönem sonu uygulanan kurs sınavında 70 ve üzeri puan alanlara sertifika verilmesi, hangi amaca yönelik bir değerlendirmedir?",
        options: ["A) Biçimlendirme", "B) Tanıma ve Yerleştirme", "C) Değer Biçmeye Yönelik", "D) İzleme", "E) Tanılayıcı"],
        correct: 2
    },
    {
        question: "77- Değer biçmeye yönelik değerlendirme ile ilgili aşağıdakilerden hangisi yanlıştır?",
        options: ["A) Öğrencinin dersi geçip kalmasına karar verilir.", "B) Temel amacı süreç içindeki öğrenme eksikliklerini anında tespit edip gidermektir.", "C) Dönem, kurs veya ünitenin bitiminde uygulanır.", "D) Vize ve finaller bu amaca hizmet eder.", "E) Nota dayalı bir karar sürecidir."],
        correct: 1
    },
    {
        question: "78- Eğitim sürecinin tamamen bittiği noktada, öğrencilerin program hedeflerine ulaşma düzeyini belirleyerek 'geçti-kaldı' kararı vermek amacıyla yapılan sınavların genel adı nedir?",
        options: ["A) Formatif Değerlendirme", "B) Summatif (Değer Biçici) Değerlendirme", "C) Tanıma Yerleştirme", "D) Gözlem", "E) Performans Görevi"],
        correct: 1
    },
    {
        question: "79- Üniversitelerde lisans döneminin sonunda yapılan 'bitirme tezleri' ve 'final sınavları' yapılış amacına göre hangi kategoriye girer?",
        options: ["A) Değer biçmeye yönelik", "B) Biçimlendirmeye yönelik", "C) Muafiyet amaçlı", "D) Seviye belirleme", "E) Ön test"],
        correct: 0
    },
    {
        question: "80- Ehliyet sınavının sonunda başarılı olan adaylara sürücü belgesi verilmesi işlemi değerlendirme türleri açısından hangisiyle açıklanır?",
        options: ["A) Biçimlendirme (Formatif)", "B) Tanıma ve Yerleştirme", "C) Değer Biçmeye Yönelik (Summatif)", "D) Sürekli Değerlendirme", "E) Ön Değerlendirme"],
        correct: 2
    },

    // 17. Geçerlik Türleri (Yapı Geçerliği)
    {
        question: "81- 'Matematiğe Karşı Tutum' ölçeğini uygulayan öğretmenin, maddelerin sadece tutumu ölçtüğünü faktör analizi ile kanıtlaması testin hangi niteliğini gösterir?",
        options: ["A) Yordama Geçerliği", "B) Görünüş Geçerliği", "C) Kapsam Geçerliği", "D) Yapı Geçerliği", "E) Kararlılık"],
        correct: 3
    },
    {
        question: "82- Fen Bilimleri sınavında soruların çok uzun, felsefi ve karmaşık edebi paragraflardan oluşması durumunda, okuma becerisi fen bilgisinin önüne geçeceği için testin hangi geçerliği doğrudan düşer?",
        options: ["A) Yapı Geçerliği", "B) Görünüş Geçerliği", "C) Yordama Geçerliği", "D) Kapsam Geçerliği", "E) Uyum Geçerliği"],
        correct: 0
    },
    {
        question: "83- Zekâ, ilgi, sınav kaygısı gibi doğrudan gözlenemeyen, psikolojik kuramlarla tanımlanmış 'soyut' özelliklerin, test tarafından doğru bir bütünlük içinde ölçülme derecesi nedir?",
        options: ["A) Kapsam Geçerliği", "B) Yordama Geçerliği", "C) Yapı Geçerliği", "D) Kararlılık", "E) Objektiflik"],
        correct: 2
    },
    {
        question: "84- Yapı geçerliğini istatistiksel olarak yüksek doğrulukla test etmek ve testteki maddelerin birbiriyle aynı alt boyutu ölçtüğünü (homojenliği) kanıtlamak için bilimsel makalelerde en sık kullanılan istatistiksel yöntem hangisidir?",
        options: ["A) Çeyrek Sapma", "B) Faktör Analizi", "C) Mod-Medyan Karşılaştırması", "D) Ranj Hesabı", "E) Z Puanı Çevirisi"],
        correct: 1
    },
    {
        question: "85- Bir kişilik envanterinden 'dışa dönük' puanı yüksek çıkan kişilerin, gerçek hayattaki davranışlarının da sosyal ve dışa dönük olduğu psikolojik olarak kanıtlanmışsa, bu envanterin en çok hangi yönü güçlüdür?",
        options: ["A) Görünüş Geçerliği", "B) Kapsam Geçerliği", "C) Yapı Geçerliği", "D) Eşdeğer Formlar Güvenirliği", "E) İzafi Ölçek Yapısı"],
        correct: 2
    },

    // 18. Hata Türleri (Tesadüfi Hata)
    {
        question: "86- Sınav kağıtlarını okurken yorgunluktan dolayı bazı kağıtlara yanlışlıkla 5 puan eksik, bazılarına 10 puan fazla veren öğretmenin düştüğü hata türü hangisidir?",
        options: ["A) Sabit Hata", "B) Sistematik Hata", "C) Tesadüfi Hata", "D) Beklenen Hata", "E) Ölçüt Hatası"],
        correct: 2
    },
    {
        question: "87- Tesadüfi hataların ölçme sonuçları ve testin kalitesi üzerindeki doğrudan etkisi aşağıdakilerden hangisidir?",
        options: ["A) Geçerliği doğrudan düşürür", "B) Sadece görünüşü bozar", "C) Ayırt ediciliği artırır", "D) Güvenirliği doğrudan düşürür", "E) İstatistiksel olarak formülle düzeltilebilir"],
        correct: 3
    },
    {
        question: "88- Sınav sırasında dışarıdan ani bir korna sesi gelmesiyle öğrencilerin dikkatinin dağılması veya adayın optik formu yanlışlıkla bir satır kaydırması hangi hata türüne girmektedir?",
        options: ["A) Sistematik Hata", "B) Sabit Hata", "C) Standart Hata", "D) Tesadüfi Hata", "E) Geçerlik Hatası"],
        correct: 3
    },
    {
        question: "89- Yönü, miktarı ve ölçüme nereden karıştığı tam olarak kestirilemeyen, rastgele oluşan hatalar, ölçme aracının hangi özelliğini azaltan yegane hata türüdür?",
        options: ["A) Kapsam Geçerliği", "B) Yordama Gücü", "C) Sınıflama Özelliği", "D) Güvenirlik", "E) Kullanışlılık"],
        correct: 3
    },
    {
        question: "90- Çoktan seçmeli bir AGS denemesinde öğrencinin bilmediği soruları sallayarak (şans başarısı) doğru yapması, sınav sonucuna hangi tür hatanın karışmasına neden olur?",
        options: ["A) Sistematik Hata", "B) Tesadüfi Hata", "C) Sabit Hata", "D) Kapsam Hatası", "E) Okuma Hatası"],
        correct: 1
    },

    // 19. Grafikler (Histogram / Sütun vs.)
    {
        question: "91- Bir sınıftaki öğrencilerin matematik sınavından aldıkları notlar gibi birbirini izleyen 'sürekli veri' dağılımını çizmek için hangi grafik istatistiksel olarak en uygundur?",
        options: ["A) Sütun (Bar) Grafiği", "B) Histogram", "C) Pasta Grafiği", "D) Dağılım Poligonu", "E) Halka Grafiği"],
        correct: 1
    },
    {
        question: "92- Histogram grafiği ile Sütun (Bar) grafiği arasındaki en belirgin istatistiksel ve görsel fark nedir?",
        options: ["A) Histogram sadece kelimeler için kullanılır.", "B) Sütun grafiğinde oran hesaplanmaz.", "C) Histogramdaki bitişik çizilen sütunlar, x eksenindeki verilerin sürekli (kesintisiz sayısal) bir değişken olduğunu gösterir.", "D) Histogram daireseldir.", "E) Sütun grafiğinde frekans bulunmaz."],
        correct: 2
    },
    {
        question: "93- Öğrencilerin saç renkleri (Sarı, Siyah, Kumral) veya cinsiyetleri (Kız, Erkek) gibi kategorik, 'süreksiz ayrık verilerin' frekanslarını göstermek için aralarında boşluk bırakılarak çizilen grafik türü hangisidir?",
        options: ["A) Histogram", "B) Çizgi Grafiği", "C) Bar (Sütun) Grafiği", "D) Frekans Poligonu", "E) Normal Dağılım Eğrisi"],
        correct: 2
    },
    {
        question: "94- Gruplandırılmış sürekli verilerin frekans dağılımlarını görselleştirmek amacıyla x eksenine puan aralıklarının, y eksenine frekansların yazıldığı birbirine bitişik dikdörtgenlerden oluşan grafik türü nedir?",
        options: ["A) Sütun Grafiği", "B) Pasta Grafiği", "C) Histogram", "D) Poligon", "E) Yığılmalı Çizgi"],
        correct: 2
    },
    {
        question: "95- Bir 'Frekans Poligonu (Çizgi grafiği)' oluşturmak için, istatistiksel olarak hangi grafiğin bitişik sütunlarının tam tepe orta noktaları bir çizgi ile birleştirilir?",
        options: ["A) Pasta Grafiği", "B) Sütun Grafiği", "C) Çubuk Grafiği", "D) Histogram", "E) Halka Grafiği"],
        correct: 3
    },

    // 20. Dağılım Şekilleri (Çarpıklık / Kayışlılık)
    {
        question: "96- Uygulanan deneme sınavının grafiğinde, kuyruğun sağa doğru (pozitif yöne) çok uzadığı görülmüştür. Bu durum sınıf için ne ifade eder?",
        options: ["A) Öğrenciler çok başarılı olmuştur.", "B) Ortalama Mod'dan küçüktür.", "C) Sınav öğrencilere zor gelmiş, puanlar düşük bandında yığılmıştır.", "D) Sınav çok kolaydır.", "E) Dağılım simetriktir."],
        correct: 2
    },
    {
        question: "97- İstatistiksel hesaplamalar sonucunda Mod=80, Medyan=70 ve Ortalama=60 (Ort < Medyan < Mod) çıkmışsa bu dağılımın şekli ve sınıfın durumu nasıldır?",
        options: ["A) Sağa Çarpık (Zor sınav)", "B) Sola Çarpık (Kolay sınav, sınıf başarılı)", "C) Normal Dağılım", "D) Bimodal Dağılım", "E) U Dağılım"],
        correct: 1
    },
    {
        question: "98- Testin öğrencilere çok kolay geldiği ve sınıftaki büyük çoğunluğun yüksek puan alarak yığılmayı yüksek notlarda (sağ tarafta) oluşturduğu dağılıma ne ad verilir?",
        options: ["A) Sağa Çarpık (Pozitif Kayışlı)", "B) Sola Çarpık (Negatif Kayışlı)", "C) Simetrik Dağılım", "D) Sivri Dağılım", "E) Basık Dağılım"],
        correct: 1
    },
    {
        question: "99- Merkezi eğilim ölçülerinin büyüklük sıralamasının (Aritmetik Ortalama > Medyan > Mod) şeklinde gerçekleştiği pozitif kayışlı grafik türünün adı nedir?",
        options: ["A) Sola Çarpık Dağılım", "B) Sağa Çarpık Dağılım", "C) Normal Dağılım", "D) Çift Tepeli Dağılım", "E) Standart Eğri"],
        correct: 1
    },
    {
        question: "100- Sınıfın test puanlarının istatistiksel analizi sonucunda Aritmetik Ortalama, Medyan (Ortanca) ve Mod (Tepe Değer) ölçülerinin birbirine tam olarak eşit çıktığı (Ort=Med=Mod) eğri türü hangisidir?",
        options: ["A) Sola Çarpık", "B) Sağa Çarpık", "C) Bimodal (İki Modlu)", "D) Çan Eğrisi (Normal / Simetrik Dağılım)", "E) U Eğrisi"],
        correct: 3
    }
];
