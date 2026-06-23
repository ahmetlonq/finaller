// resources/sorular.js

const quizData = [
    // 1. Ölçme Türleri (Dolaylı / Doğrudan Ölçme)
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

    // 2. Ölçme Araçlarında Aranan Nitelikler (Güvenirlik)
    {
        question: "3- Bir başarı testinin, farklı zamanlarda aynı öğrenci grubuna uygulandığında birbirine çok yakın puanlar vermesi, testin en çok hangi özelliğinin yüksek olduğunu gösterir?",
        options: ["A) Kapsam Geçerliği", "B) Güvenirlik (Kararlılık)", "C) Kullanışlılık", "D) Yordama Geçerliği", "E) Objektiflik"],
        correct: 1
    },
    {
        question: "4- Aşağıdakilerden hangisi bir testin güvenirliğini doğrudan düşüren bir hata kaynağıdır?",
        options: ["A) Sabit Hata", "B) Sistematik Hata", "C) Kapsam Hatası", "D) Tesadüfi Hata", "E) Dizgi Hatası"],
        correct: 3
    },

    // 3. Yapılış Amacına Göre Değerlendirme (Tanıma ve Yerleştirme)
    {
        question: "5- Bir üniversitenin yabancı diller yüksekokulu, sene başında öğrencilere bir sınav uygulamış ve 70 puanın altında alan öğrencileri İngilizce hazırlık sınıfına almıştır. Bu uygulama hangi değerlendirme türüne örnektir?",
        options: ["A) Biçimlendirme ve yetiştirmeye yönelik", "B) Mutlak değerlendirme", "C) Değer biçmeye yönelik", "D) Bağıl değerlendirme", "E) Tanıma ve yerleştirmeye yönelik"],
        correct: 4
    },
    {
        question: "6- Ünite sonlarında öğrencilerin öğrenme eksikliklerini ve bu eksikliklerin kaynağını belirlemek amacıyla not kaygısı olmadan yapılan değerlendirme türü aşağıdakilerden hangisidir?",
        options: ["A) Tanıma ve yerleştirme", "B) Değer biçmeye yönelik", "C) Biçimlendirme ve yetiştirmeye yönelik", "D) Düzey belirleyici", "E) Gözleme dayalı"],
        correct: 2
    },

    // 4. Ölçüt Türleri (Mutlak ve Bağıl Ölçüt)
    {
        question: "7- Aşağıdaki değerlendirme kurallarından hangisinde 'bağıl ölçüt' kullanılmıştır?",
        options: ["A) Yüksek lisans müracaatları için ALES'ten en az 70 puan almak gereklidir.", "B) Sınıf ortalamasının üzerinde puan alan öğrenciler dersten başarılı sayılacaktır.", "C) Doktora başvurusu için yabancı dil sınavından en az 55 alınmalıdır.", "D) Ehliyet sınavını geçmek için 100 üzerinden 70 almak şarttır.", "E) Askeri liselere başvuruda boy uzunluğu en az 165 cm olmalıdır."],
        correct: 1
    },
    {
        question: "8- Bir iş başvurusunda şirketin 'İlgili alanda en az 5 yıllık tecrübesi olan adaylar mülakata çağrılacaktır' şeklinde bir kural belirlemesi hangi ölçüt türüne girer?",
        options: ["A) Tanımlanmış ölçüt", "B) Bağıl ölçüt", "C) Doğal ölçüt", "D) Mutlak ölçüt", "E) İstatistiksel ölçüt"],
        correct: 3
    },

    // 5. Geçerlik Türleri (Kapsam Geçerliği)
    {
        question: "9- Eğitim bilimleri sınavına hazırlanan bir aday, sınava girdiğinde soruların tamamının sadece 'Ölçmede Hata' ünitesinden sorulduğunu, diğer hiçbir konudan soru gelmediğini fark etmiştir. Bu sınavın öncelikle hangi niteliğinin düşük olduğu söylenebilir?",
        options: ["A) Güvenirlik", "B) Yordama geçerliği", "C) Objektiflik", "D) Kapsam geçerliği", "E) Görünüş geçerliği"],
        correct: 3
    },
    {
        question: "10- Bir sınavın kapağında 'Matematik Testi' yazmasına rağmen soruları inceleyen öğrencinin içeride ağırlıklı olarak 'Fizik' problemlerinin bulunduğunu görmesi durumunda, bu testin hangi niteliğinden yoksun olduğu söylenir?",
        options: ["A) Görünüş geçerliği", "B) İç tutarlılık", "C) Kapsam geçerliği", "D) Yapı geçerliği", "E) Eşdeğerlik"],
        correct: 0
    },

    // 6. Hata Türleri (Sistematik Hata)
    {
        question: "11- Bir öğretmenin, okuduğu sınav kağıtlarında sadece yazısı güzel olan öğrencilere fazladan 10 puan vermesi hangi hata türüne örnektir?",
        options: ["A) Sabit Hata", "B) Tesadüfi Hata", "C) Sistematik Hata", "D) Ölçme Hatası", "E) Standart Hata"],
        correct: 2
    },
    {
        question: "12- Bir marketteki terazinin, tartılan her ürünü gerçek ağırlığının %10'u kadar eksik tarttığı fark edilmiştir. Bu terazinin yaptığı hata türü hangisidir?",
        options: ["A) Sabit Hata", "B) Sistematik Hata", "C) Tesadüfi Hata", "D) Kapsam Hatası", "E) Beklenen Hata"],
        correct: 1
    },

    // 7. Ölçek Türleri (Eşit Aralıklı Ölçek)
    {
        question: "13- Bilişim Teknolojileri sınavından Ayşe 80, Mehmet ise 40 puan almıştır. Bu ölçme sonuçlarına bakılarak aşağıdaki yorumlardan hangisi yapılamaz?",
        options: ["A) Ölçme sonuçları eşit aralıklı ölçek düzeyindedir.", "B) Ayşe, Mehmet'ten 40 puan fazla almıştır.", "C) Ayşe'nin bilgisi Mehmet'in bilgisinin tam iki katıdır.", "D) Kullanılan sıfır noktası bağıl (izafi) sıfırdır.", "E) Dolaylı ölçme yapılmıştır."],
        correct: 2
    },
    {
        question: "14- Aşağıdaki değişkenlerden hangisi 'eşit oranlı' ölçek düzeyinde ölçülmektedir?",
        options: ["A) Öğrencilerin akademik başarı puanları", "B) Bugün havanın 25 Santigrat derece olması", "C) Sınıftaki öğrencilerin boy uzunlukları", "D) İlgi envanterinden alınan standart puanlar", "E) Takvimdeki yılın 2026 olması"],
        correct: 2
    },

    // 8. Güvenirlik Belirleme Yöntemleri (Test-Tekrar Test)
    {
        question: "15- Bir araştırmacı geliştirdiği 'Mesleki İlgi Envanterini' bir gruba uygulamış, 3 hafta sonra aynı envanteri aynı gruba tekrar uygulayarak puanlar arasındaki korelasyonu 0.85 bulmuştur. Bu araştırmacı testin hangi özelliğinin yüksek olduğunu kanıtlamıştır?",
        options: ["A) İç tutarlılık", "B) Kararlılık", "C) Kapsam geçerliği", "D) Objektiflik", "E) Yordama geçerliği"],
        correct: 1
    },
    {
        question: "16- Test-tekrar test yönteminde, iki uygulama arasındaki sürenin 6 ay gibi çok uzun bir zaman dilimi olması durumunda aşağıdakilerden hangisinin gerçekleşmesi beklenir?",
        options: ["A) Güvenirlik katsayısının yapay olarak yüksek çıkması", "B) Öğrencilerin soruları tamamen hatırlaması", "C) Ölçülen özellikte değişim olacağı için korelasyonun düşmesi", "D) Kapsam geçerliğinin artması", "E) Sistematik hatanın ortadan kalkması"],
        correct: 2
    },

    // 9. Madde İstatistikleri (Madde Güçlük İndeksi)
    {
        question: "17- 100 kişilik bir sınıfa uygulanan bir sınavda, 3. soruyu 90 öğrenci doğru cevaplamıştır. Bu soru için aşağıdakilerden hangisi kesinlikle söylenebilir?",
        options: ["A) Çok zor bir sorudur.", "B) Madde güçlük indeksi 0.90'dır ve çok kolay bir sorudur.", "C) Ayırt ediciliği çok yüksektir.", "D) Madde güçlük indeksi 0.10'dur.", "E) Testten derhal çıkarılmalıdır."],
        correct: 1
    },
    {
        question: "18- Eğitimde kullanılacak genel bir başarı testindeki soruların ortalama güçlük indeksi (p) ideal olarak hangi değere yakın olmalıdır?",
        options: ["A) 0.10", "B) 0.30", "C) 0.50", "D) 0.90", "E) 1.00"],
        correct: 2
    },

    // 10. Madde İstatistikleri (Madde Ayırt Edicilik İndeksi)
    {
        question: "19- Yapılan bir madde analizi sonucunda, bir sorunun ayırt edicilik indeksi -0.15 olarak hesaplanmıştır. Öğretmen bu soruyla ilgili nasıl bir işlem yapmalıdır?",
        options: ["A) Soruyu olduğu gibi testte bırakmalıdır.", "B) Soruyu biraz zorlaştırarak kullanmalıdır.", "C) Sorunun çeldiricilerini güçlendirmelidir.", "D) Soru çok kolay olduğu için başa almalıdır.", "E) Soru ters çalışmaktadır, kesinlikle testten çıkarmalıdır."],
        correct: 4
    },
    {
        question: "20- Madde ayırt edicilik indeksi 0.45, madde güçlük indeksi 0.20 olan bir soru için hangisi söylenebilir?",
        options: ["A) Kolay ve ayırt edici değildir.", "B) Orta güçlükte ve ayırt edicidir.", "C) Zor ve ayırt ediciliği yüksek bir sorudur.", "D) Zor ve ayırt ediciliği düşük bir sorudur.", "E) Çok kolay ancak ayırt edicidir."],
        correct: 2
    },

    // 11. Geçerlik Türleri (Yordama Geçerliği)
    {
        question: "21- Bir şirket, işe alım sürecinde uyguladığı yetenek testinden yüksek puan alan adayları işe almış; ancak bu personellerin iş başındaki performanslarının çok düşük olduğunu gözlemlemiştir. Bu durum, uygulanan yetenek testinin öncelikle hangi niteliğinin düşük olduğunu gösterir?",
        options: ["A) Kapsam Geçerliği", "B) Yordama Geçerliği", "C) Yapı Geçerliği", "D) İç Tutarlılık", "E) Kararlılık"],
        correct: 1
    },
    {
        question: "22- Yordama geçerliğini belirlemek isteyen bir araştırmacı, ölçüt puanını ne zaman elde etmelidir?",
        options: ["A) Ölçme işlemiyle eş zamanlı olarak", "B) Ölçme işleminden çok önce", "C) Ölçme işleminden belirli bir süre sonra, gelecekte", "D) Sınav soruları hazırlanmadan önce", "E) Testi iki yarıya böldükten hemen sonra"],
        correct: 2
    },

    // 12. Güvenirlik Belirleme Yöntemleri (KR-20)
    {
        question: "23- KR-20 güvenirlik katsayısı 0.88 olarak hesaplanan çoktan seçmeli bir başarı testi için aşağıdakilerden hangisi söylenemez?",
        options: ["A) Maddeler birbirleriyle uyumludur.", "B) Test heterojen (çok boyutlu) bir yapıdadır.", "C) Öğrenciler soruları okurken tesadüfi hataya az düşmüştür.", "D) İç tutarlılık yüksektir.", "E) Testin güvenirliği kabul edilebilir düzeyin (0.70) üzerindedir."],
        correct: 1
    },
    {
        question: "24- Bir öğretmen, hazırladığı testin güvenirliğini hesaplamak istemektedir. Testi bir kez uygulamış, soruları 1 ve 0 şeklinde puanlamış ve soruların madde güçlük indekslerinin birbirinden farklı olduğunu görmüştür. Bu öğretmen hangi güvenirlik belirleme yöntemini kullanmalıdır?",
        options: ["A) Test-Tekrar Test", "B) Eşdeğer Formlar", "C) Cronbach Alfa", "D) KR-20", "E) KR-21"],
        correct: 3
    },

    // 13. Merkezi Eğilim Ölçüleri (Medyan)
    {
        question: "25- Bir öğrenci grubunun Bilişim Teknolojileri dersinden aldığı puanlar: 10, 80, 85, 90, 95 şeklindedir. Bu veri grubu için en uygun merkezi eğilim ölçüsü hangisi olmalıdır?",
        options: ["A) Aritmetik Ortalama", "B) Medyan (Ortanca)", "C) Mod (Tepe Değer)", "D) Ranj", "E) Standart Sapma"],
        correct: 1
    },
    {
        question: "26- Öğrenci sayısının çift sayı (örneğin 20 kişi) olduğu sıralı bir puan dağılımında medyan nasıl bulunur?",
        options: ["A) En çok tekrar eden puan bulunur.", "B) Ortadaki iki puan toplanıp ikiye bölünür.", "C) Puanların tamamı toplanıp 20'ye bölünür.", "D) En yüksek puandan en düşük puan çıkarılır.", "E) Ortadaki puanlardan büyük olanı seçilir."],
        correct: 1
    },

    // 14. Merkezi Dağılım Ölçüleri (Standart Sapma)
    {
        question: "27- İki farklı şubede uygulanan aynı matematik testinde; A Şubesinin Standart Sapması 4, B Şubesinin Standart Sapması 12 olarak bulunmuştur. B şubesi için hangisi kesinlikle doğrudur?",
        options: ["A) B şubesindeki öğrenciler konuyu daha iyi anlamıştır.", "B) B şubesi daha homojen bir gruptur.", "C) B şubesinde öğrenciler arasındaki öğrenme farklılaşması daha fazladır.", "D) B şubesinde testin güvenirliği daha düşüktür.", "E) İki sınıfın da en yüksek notu aynıdır."],
        correct: 2
    },
    {
        question: "28- Bir öğretmenin uyguladığı testin sonucunda varyansın (ve standart sapmanın) 0 (sıfır) çıktığı görülmüştür. Bu durumun en olası nedeni nedir?",
        options: ["A) Sınıftaki tüm öğrencilerin aynı puanı almış olması.", "B) Testin çok zor olması.", "C) Testin çok uzun olması.", "D) Öğrencilerin tamamının dökülmesi.", "E) Soruların geçerliğinin yüksek olması."],
        correct: 0
    },

    // 15. Standart Puanlar (Z Puanı)
    {
        question: "29- Sınıf aritmetik ortalamasının 50, standart sapmanın 10 olduğu bir BÖTE sınavında Ahmet 80 puan almıştır. Ahmet'in Z ve T puanı sırasıyla kaçtır?",
        options: ["A) Z = +2, T = 70", "B) Z = +3, T = 80", "C) Z = +1, T = 60", "D) Z = -3, T = 20", "E) Z = 0, T = 50"],
        correct: 1
    },
    {
        question: "30- Bir öğrencinin girdiği 5 farklı dersin Z puanları şöyledir: Türkçe: -1, Tarih: 0, Coğrafya: +1.5, Matematik: +0.5, Fizik: -2. En başarılı ve en başarısız olduğu dersler hangileridir?",
        options: ["A) Coğrafya – Tarih", "B) Matematik – Fizik", "C) Coğrafya – Fizik", "D) Tarih – Türkçe", "E) Matematik – Türkçe"],
        correct: 2
    },

    // 16. Yapılış Amacına Göre Değerlendirme (Değer Biçmeye Yönelik)
    {
        question: "31- Bir yabancı dil kursunda, dönem sonu uygulanan sınav sonucunda 70 ve üzeri puan alanlara 'B2 Seviyesi İngilizce Sertifikası' verilmiştir. Bu uygulama hangi amaca yönelik bir değerlendirmedir?",
        options: ["A) Biçimlendirme ve yetiştirmeye yönelik", "B) Tanıma ve yerleştirmeye yönelik", "C) Değer biçmeye yönelik", "D) İzlemeye yönelik", "E) Tanılayıcı değerlendirme"],
        correct: 2
    },
    {
        question: "32- Değer biçmeye yönelik değerlendirme ile ilgili aşağıdakilerden hangisi yanlıştır?",
        options: ["A) Öğrencinin başarılı olup olmadığına karar verilir.", "B) Temel amacı öğrenme eksikliklerini anında tespit edip gidermektir.", "C) Genellikle bir dönemin, kursun veya ünitenin sonunda uygulanır.", "D) Not verme amacı taşır.", "E) Başarı testleri bu amaca hizmet eder."],
        correct: 1
    },

    // 17. Geçerlik Türleri (Yapı Geçerliği)
    {
        question: "33- Geliştirdiği 'Matematiğe Karşı Tutum' ölçeğini öğrencilere uygulayan bir öğretmen, ölçekteki tüm maddelerin birbiriyle yüksek düzeyde ilişkili olduğunu ve tek bir boyutu ölçtüğünü kanıtlamıştır. Bu durum testin hangi niteliğini gösterir?",
        options: ["A) Yordama geçerliği", "B) Görünüş geçerliği", "C) Kapsam geçerliği", "D) Yapı geçerliği", "E) Kararlılık"],
        correct: 3
    },
    {
        question: "34- Aşağıdaki durumlardan hangisi bir sınavın yapı geçerliğini doğrudan düşürür?",
        options: ["A) Fen Bilimleri sınavında soruların çok uzun ve karmaşık edebi paragraflardan oluşması.", "B) Sınavda kopya çekilmesi.", "C) Soruların testin kapsadığı ünitelere eşit dağıtılmaması.", "D) Öğretmenin öğrencilerin kağıtlarını yanlı okuması.", "E) Testteki soru sayısının çok fazla olması."],
        correct: 0
    },

    // 18. Hata Türleri (Tesadüfi Hata)
    {
        question: "35- Sınav kağıtlarını okurken çok yorgun olan bir öğretmenin, bazı kağıtlara yanlışlıkla 5 puan eksik, bazılarına ise 10 puan fazla vermesi aşağıdaki hata türlerinden hangisine girer?",
        options: ["A) Sabit Hata", "B) Sistematik Hata", "C) Tesadüfi Hata", "D) Beklenen Hata", "E) Ölçüt Hatası"],
        correct: 2
    },
    {
        question: "36- Tesadüfi hataların ölçme sonuçları üzerindeki etkisi ile ilgili hangisi doğrudur?",
        options: ["A) Ölçme aracının geçerliğini doğrudan, güvenirliğini dolaylı düşürür.", "B) Testin yordama gücünü artırır.", "C) İstatistiksel formüllerle kesin olarak belirlenip puanlardan düşülebilir.", "D) Ölçme aracının doğrudan güvenirliğini düşürür.", "E) Sadece öğrenciden kaynaklanabilir."],
        correct: 3
    },

    // 19. Verilerin Görselleştirilmesi (Histogram)
    {
        question: "37- Bir sınıftaki öğrencilerin matematik testinden aldıkları puanların (sürekli veri) dağılımını grafiksel olarak göstermek isteyen bir öğretmenin hangi grafiği kullanması istatistiksel olarak en doğrudur?",
        options: ["A) Sütun (Bar) Grafiği", "B) Histogram", "C) Pasta Grafiği", "D) Dağılım Poligonu", "E) Halka Grafiği"],
        correct: 1
    },
    {
        question: "38- Histogram grafiği ile Sütun (Bar) grafiği arasındaki temel istatistiksel fark nedir?",
        options: ["A) Histogram sadece nitel veriler için kullanılır.", "B) Sütun grafiği eşit oranlı ölçek gerektirir.", "C) Histogramdaki bitişik sütunlar, x eksenindeki verilerin sürekli (kesintisiz) bir değişken olduğunu ifade eder.", "D) Histogramda y eksenine hiçbir zaman frekans değeri yazılamaz.", "E) Sütun grafiğinde çubuklar yatay, histogramda dikey çizilmek zorundadır."],
        correct: 2
    },

    // 20. Dağılım Şekilleri (Çarpıklık)
    {
        question: "39- Bir okulda uygulanan deneme sınavının dağılım grafiği incelendiğinde, grafiğin kuyruğunun sağa doğru (pozitif yöne) uzadığı görülmüştür. Bu sınav ve grup için aşağıdakilerden hangisi kesinlikle söylenebilir?",
        options: ["A) Öğrenciler sınavda çok başarılı olmuştur.", "B) Aritmetik ortalama, Mod değerinden daha küçüktür.", "C) Sorular öğrencilere genel olarak zor gelmiştir.", "D) Testin güvenirliği mükemmeldir.", "E) Dağılım simetriktir."],
        correct: 2
    },
    {
        question: "40- İstatistiksel hesaplamalar sonucunda Mod değerinin 80, Medyan değerinin 70 ve Aritmetik Ortalamanın 60 olduğu tespit edilen bir puan dağılımının grafiği nasıldır?",
        options: ["A) Sağa Çarpık (Pozitif Kayışlı)", "B) Sola Çarpık (Negatif Kayışlı)", "C) Normal (Simetrik) Dağılım", "D) Çift Tepeli (Bimodal) Dağılım", "E) U Tipi Dağılım"],
        correct: 1
    }
];
  
