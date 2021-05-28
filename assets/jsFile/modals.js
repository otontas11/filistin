let kvkkModal = document.getElementById("kvkkModal");
let personalModal = document.getElementById("personalModal");
let modalTitle = document.getElementById("modalTitle");
let modalBody = document.getElementById("modalBody");

modalTitle.innerHTML = "";
modalBody.innerHTML = "";

kvkkModal.addEventListener("click", function () {
  modalTitle.innerHTML = kvkkTitle;
  modalBody.innerHTML = kvkkkParagraph;
});

personalModal.addEventListener("click", function () {
  modalTitle.innerHTML = personalTitle;
  modalBody.innerHTML = personalParagraph;
});

let kvkkTitle = `<h2 class="text-center" style="font-size: xx-large;font-family: sans-serif;"> TÜRKİYE GENÇLİK VAKFI</h2>
<h3 class="text-center"  style="font-size: x-large;font-family: sans-serif;">  KİŞİSEL VERİLERİN KORUNMASI VE İŞLENMESİ GENEL AYDINLATMA METNİ </h3>`;

let kvkkkParagraph = `

<b>1.	VERİ SORUMLUSUNUN KİMLİĞİ</b><p>
Kişisel verileriniz veri sorumlusu sıfatıyla TÜRKİYE GENÇLİK VAKFI  ( Bundan böyle “TÜGVA” veya “Vakıf” diye anılacaktır. ) tarafından, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“Kanun”) uyarınca aşağıda açıklanan kapsamda işlenebilecektir.
</p>
<b>2.	KİŞİSEL VERİLERİNİZİN İŞLENME AMACI</b><p>
Toplanan kişisel verileriniz, Kanun tarafından öngörülen temel ilkelere uygun olarak ve Kanun’un 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları dâhilinde, TÜGVA tarafından aşağıda yer alan amaçlar doğrultusunda işlenebilecektir:
<ul>

 	<li>Sponsorlara raporlama yapabilmek</li>
 	<li>Vakfın faaliyetleri hakkında bilgi vermek</li>
 	<li>Vakfın tanıtımı ve eğitim amacıyla vakfa davetinizi yapmak</li>
 	<li>Vakıf faaliyetlerini duyurabilmek</li>
 	<li>Vakfın faaliyetleri çerçevesinde konaklamanızı ve emniyetinizi sağlamak</li>
 	<li>Sosyal medyada öğrenci hikâyelerini paylaşmak</li>
 	<li>Bilimsel araştırmalar, tez çalışmaları gibi alanlarda isteğe bağlı yardımda bulunabilmeniz amacıyla tarafınıza yönlendirmede bulunmak</li>
 	<li>Yasal yükümlülüklerin ve idari yetkili kurumların taleplerinin yerine getirilmesi amaçlı kayıtları tutmak</li>
 	<li>Sizleri yeterlilik ve güvenlik açısından değerlendirebilmek</li>
 	<li>TÜGVA’nın toplum üzerinde yaratmış olduğu sosyal etkiyi ölçebilmek</li>
     
     </ul>
</p>

<b>3.	KİŞİSEL VERİLERİNİZİN AKTARILDIĞI TARAFLAR VE AKTARIM AMAÇLARI</b><p></p>
Toplanan kişisel verileriniz, Kanun tarafından öngörülen temel ilkelere uygun olarak ve Kanun’un 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları dâhilinde,  (Kanunun 4. maddesinde belirtilen amaçlar çerçevesinde) yurtiçinde ve yurtdışında bulunan depolama, arşivleme, bilişim teknolojileri desteği (hosting, bulut bilişim, e- posta ve diğer) veren kuruluşlar, işbirliği yapılan ve/veya hizmet alınan sigorta ve konaklama şirketleri, hukuk ve benzeri alanlarda destek alınan danışmanlık firmaları ve TÜGVA’nın faaliyetleri ile ilgili sair alanlarda destek üçüncü kişilere (SMS ve e-posta gönderimi, CRM sistem desteği vb.) ve belirlenen amaçlarla aktarımın gerekli olduğu diğer üçüncü kişilere, iş ortaklarımıza ve yetkili kurum ve kuruluşlara (yurt içinde veya yurt dışına) aktarılabilmektedir ve/veya erişme açabilmektedir.
</p>
 
<b>4.	KİŞİSEL VERİLERİNİZİN TOPLANMA YÖNTEMİ VE HUKUKİ SEBEBİ</b><p>
Kişisel verileriniz, TÜGVA ile yaptığınız işlemlerle bağlantılı olarak ve yukarıda belirtilen amaçlar kapsamında, otomatik veya otomatik olmayan yollarla, sözlü, yazılı veya elektronik şekilde ve aşağıdaki yöntemler vasıtasıyla toplanmaktadır. Toplanan kişisel verileriniz, Kanun’un 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları kapsamında işbu Aydınlatma Metninde belirtilen amaçlarla işlenebilmekte ve aktarılabilmektedir.
 	</p>
  
    <ul> 

    <li>TÜGVA’nın üniversiteler, kamusal alanlar ve diğer ortamlarda açmış olduğu stantlarda kurulan iletişim,    </li>
 	<li>TÜGVA resmi internet sitesi üzerinden online olarak yapmış olduğunuz başvurular,    </li>
 	<li>İnternet sitesi ziyaretleriniz, sizi tanımak için kullanılan çerezler,    </li>
 	<li>Sosyal medya kanalları, Google vb. arama motorlarının kullanımı,    </li>
 	<li>Tarafınızca doldurulan gönüllü adayı bilgi formu ve/veya gönüllü taahhütnamesi    </li>
     </ul>
     <b>5.	KİŞİSEL VERİ SAHİBİ OLARAK KANUN’UN 11. MADDESİNDE SAYILAN HAKLARI</b><p>
     Kişisel veri sahibi olarak Kanun’un 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
     
     <ul> 


 	<li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
 	<li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,</li>
 	<li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
 	<li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme,</li>
 	<li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
 	<li>Kanun’a ve ilgili diğer kanun hükümlerine uygun olarak işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması hâlinde kişisel verilerin silinmesini veya yok edilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
 	<li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkması durumunda buna itiraz etme,</li>
 	<li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.</li>


</ul>
<b>6.	KİŞİSEL VERİLERİNİZİN SAKLANMASI</b><p></p>
Kişisel verileriniz, işlenme amaçlarının gerektirdiği süreler boyunca saklanabilmektedir. Başka bir gerekçe veya hukuki sebep olmaması, uluslararası yasa veya düzenlemenin bulunmaması ve sözleşmelerden kaynaklı zorunlulukların ortadan kalkması halinde işlenme amaçları ortadan kalkan kişisel verileriniz silinmekte, yok edilmekte veya anonim hale getirilmektedir.
</p>
<b>7.	TALEPLERİNİZ İÇİN: </b><p></p>
6698 Sayılı Kanun kapsamında bizimle iletişime geçmek, geri bildirimde bulunmak, kanun kapsamında sayılı haklarınızı kullanmak ya da sorularınızı yöneltmek isterseniz, www.tugva.org/KVKKbaşvuruformu linkinden başvuru formunu doldurarak, işbu formda belirtilen usullerde vakfımıza başvurabilirsiniz. 
 Talebinizin niteliğine göre en kısa sürede ve en geç otuz gün içinde ücretsiz olarak başvurularınız sonuçlandırılacaktır; ancak ayrıca bir maliyet doğması halinde Vakıf’ın Kişisel Verileri Koruma Kurulunca belirlenecek tarifeye göre tarafınızdan ücret talep edebilme hakkı saklıdır.
</p>

`;

let personalTitle = `<h2 class="text-center"  style="font-size: xx-large;font-family: sans-serif;"> TÜRKİYE GENÇLİK VAKFI</h2>
<h3 class="text-center"  style="font-size: x-large;font-family: sans-serif;"> KİŞİSEL VERİLERİN İŞLENMESİ SAKLANMASI KORUNMASI VE İMHASI POLİTİKASI</h3>`;

let personalParagraph = `
 
  
1. Politikanın Konusu ve Yürürlüğü 
İşbu Politika ve Kuralları 6698 sayılı Kişisel Verilerin Korunması Kanunu (“Kanun”) 
7 Nisan 2016 tarihinde yürürlüğe girmesi ile Kanun’da “veri sorumlusu” olarak sınıflandırılan
 ve kişisel verilerin işleme amaçlarını ve vasıtalarını belirleyen, veri kayıt sisteminin 
 kurulmasından ve yönetilmesinden sorumlu gerçek veya tüzel kişilerden sayılan TÜRKİYE GENÇLİK VAKFI
  (“TÜGVA”)’in Kanun kapsamında vakıf içinde uymakla yükümlü olduğu kuralları belirlemektedir. <br/><br/>

2. Tanımlar ve Kısaltmalar  <br/><br/>
2.1. Tanımlar <br/>
 <br/>Açık rıza: Belirli bir konuya ilişkin, bilgilendirilmeye dayanan ve özgür iradeyle açıklanan rıza.
 <br/>Anonim hale getirme: Kişisel verinin, kişisel veri niteliğini kaybedecek ve bu durumun geri alınamayacağı şekilde değiştirilmesidir. Ör: Maskeleme, toplulaştırma, veri bozma vb. tekniklerle kişisel verinin bir gerçek kişi ile ilişkilendirilemeyecek hale getirilmesi.
 <br/>Başvuru Formu: Kişisel veri sahiplerinin haklarını kullanmak için yapacakları başvuruyu içeren “6698 Sayılı Kişisel Verilerin Korunması Kanunu Gereğince İlgili Kişi (Kişisel Veri Sahibi) Tarafından Veri Sorumlusuna Yapılacak Başvurulara İlişkin Başvuru Formu”.
 <br/>Çalışan Adayı: Vakfımız herhangi bir yolla iş başvurusunda bulunmuş ya da özgeçmiş ve ilgili bilgilerini Vakfımız incelemesine açmış olan gerçek kişiler. 
 <br/>Bağışçı: Vakfın faaliyetleri için ayni ve nakdi destek sağlayan kişi ve kurumlar.
 <br/>Gönüllü: Vakfın faaliyetleri çerçevesinde hiçbir ücret veya kazanç talep etmeksizin yapılan işi yerine getiren gerçek kişi.
 <br/>İşbirliği İçinde Olduğumuz Kurumların Çalışanları ve Yetkilileri: Vakfımız her türlü iş ilişkisi içerisinde bulunduğu kurumlarda (iş ortağı, tedarikçi gibi, ancak bunlarla sınırlı olmaksınız) çalışan, bu kurumların yetkilileri dâhil olmak üzere, gerçek kişiler.
 <br/>İş Ortağı: Vakfımız faaliyetlerini yürütürken bizzat veya ilgili kurumlar ile birlikte muhtelif projeler yürütmek, hizmet almak gibi amaçlarla iş ortaklığı kurduğu taraflar. 
 <br/>Kayıt Ortamı: Tamamen veya kısmen otomatik olan ya da herhangi bir veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan yollarla işlenen kişisel verilerin bulunduğu her türlü ortam.
 <br/>Kişisel veri: Kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgi. Dolayısıyla tüzel kişilere ilişkin bilgilerin işlenmesi Kanun kapsamında değildir. Örneğin; ad-soyad, TCKN, e-posta, adres, doğum tarihi, kredi kartı numarası vb.
 <br/>Kişisel verilerin işlenmesi: Kişisel verilerin tamamen veya kısmen otomatik olan ya da herhangi bir veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan yollarla elde edilmesi, kaydedilmesi, depolanması, muhafaza edilmesi, değiştirilmesi, yeniden düzenlenmesi, açıklanması, aktarılması, devralınması, elde edilebilir hâle getirilmesi, sınıflandırılması ya da kullanılmasının engellenmesi gibi veriler üzerinde gerçekleştirilen her türlü işlem.
 <br/>Kişisel veri sahibi: Kişisel verisi işlenen gerçek kişi. Örneğin; çalışan adayları.
 <br/>Özel nitelikli kişisel veri: Irk, etnik köken, siyasi düşünce, felsefi inanç, din, mezhep veya diğer inançlar, kılık kıyafet, dernek vakıf ya da sendika üyeliği, sağlık, cinsel hayat, ceza mahkûmiyeti ve güvenlik tedbirleriyle ilgili veriler ile biyometrik ve genetik veriler.
 <br/>Vakıf Yetkilisi: Vakıf yönetim kurulu üyesi ve diğer yetkili gerçek kişiler.
 <br/>Tedarikçi: Vakıf faaliyetlerini yürütürken Vakıf emir ve talimatlarına uygun olarak sözleşme temelli olarak Vakıf hizmet sunan taraflar.
 <br/>Üçüncü Kişi: Politika kapsamında farklı bir şekilde tanımlanmamış olan, kişisel verileri Politika kapsamında işlenen gerçek kişiler (Ör: Kefil, refakatçi, aile bireyleri ve yakınlar-Veli hariç-, eski çalışanlar).
 <br/>Veri Envanteri: Veri sorumlularının iş süreçlerine bağlı olarak gerçekleştirmekte oldukları kişisel verileri işleme faaliyetlerini; kişisel verileri işleme amaçları ve hukuki sebebi, veri kategorisi, aktarılan alıcı grubu ve veri konusu kişi grubuyla ilişkilendirerek oluşturdukları ve kişisel verilerin işlendikleri amaçlar için gerekli olan azami muhafaza edilme süresini ve veri güvenliğine ilişkin alınan tedbirleri açıklayarak detaylandırdıkları envanter.
 <br/>Veri işleyen: Veri sorumlusunun verdiği yetkiye dayanarak onun adına kişisel veri işleyen gerçek ve tüzel kişi. Örneğin, Vakıf verilerini tutan bulut bilişim firması, scriptler çerçevesinde arama yapan call-center firması vb.
 <br/>Veri Kayıt Sistemi: Kişisel verilerin belirli kriterlere göre yapılandırılarak işlendiği otomatik ya da otomatik olmayan her türlü kayıt sistemi.
 <br/>Veri sorumlusu: Kişisel verilerin işlenme amaçlarını ve vasıtalarını belirleyen, verilerin sistematik bir şekilde tutulduğu yeri (veri kayıt sistemi) yöneten kişi.
 <br/>Yetki Matrisi: Vakıfta kullanılan elektronik ya da fiziksel ortamda saklanan kişisel verilere erişim yetkilerinin kayıt altına alındığı belgedir. 
 <br/>Ziyaretçi: Vakfın sahip olduğu fiziksel yerleşkelere çeşitli amaçlarla girmiş olan veya internet sitelerimizi ziyaret eden gerçek kişiler.
<br/><br/>
2.2. Kısaltmalar
KVKK (“Kanun”) : 7 Nisan 2016 tarihli ve 29677 sayılı Resmi Gazete ’de yayımlanan, 24 Mart 2016 tarihli ve 6698 sayılı Kişisel Verilerin Korunması Kanunu
Anayasa: 9 Kasım 1982 tarihli ve 17863 sayılı Resmi Gazete’ de yayımlanan; 7 Kasım 1982 tarihli ve 2709 sayılı Türkiye Cumhuriyeti Anayasası.
Kurul (“Kurul”): Kişisel Verileri Koruma Kurulu
KVK Kurumu (“Kurum”): Kişisel Verileri Koruma Kurumu
Vakıf/TÜGVA: TÜRKİYE GENÇLİK VAKFI
Politika: Vakıf Kişisel Verilerin İşlenmesi ve Korunması Politikası
Türk Ceza Kanunu  (“TCK”): 12 Ekim 2004 tarihli ve 25611 sayılı Resmi Gazete ‘de yayımlanan; 26 Eylül 2004 tarihli ve 5237 sayılı Türk Ceza Kanunu.
<br/><br/>
3. Amaç
Vakıf tarafından yürütülen kişisel veri işleme faaliyeti ve kişisel verilerin korunmasına yönelik benimsenen 
sistemler konusunda açıklamalarda bulunmak, bu kapsamda Çalışan Adayları’mız, Bağışçılarımız, Gönüllülerimiz, 
Vakıf Yetkilileri, Ziyaretçi’lerimiz, İşbirliği İçinde Olduğumuz Kurumların Çalışanları ve Yetkilileri ile
 Üçüncü Kişiler başta olmak üzere Vakfımız tarafından yapılan kişisel veri işleme faaliyetlerini tanımlamak
  ve uygulama politikalarımızı belirlemek amacıyla işbu politika kabul edilmiştir.  
  <br/><br/>
4. Kapsam ve Sorumlular
İşbu politikanın kapsamı, Çalışan Adayları’mız, Bağışçılarımız,
 Gönüllülerimiz, Vakıf Yetkilileri, Ziyaretçi’lerimiz, İşbirliği İçinde Olduğumuz
  Kurumların Çalışanları ve Yetkilileri ile Üçüncü Kişilerin otomatik olan ya da herhangi 
  bir veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan yollarla işlenen tüm kişisel verilerine ilişkindir.
Yukarıda belirtilen kategorilerde yer alan kişisel veri sahipleri gruplarına ilişkin işbu Politika’nın uygulama kapsamı Politika’nın tamamı olabileceği gibi (Ör: Ziyaretçi’miz de olan Çalışan Adayları’mız gibi); yalnızca bir kısım hükümleri de (Ör: yalnızca Ziyaretçi’lerimiz gibi) olabilecektir. 
Vakfın tüm birimleri ve çalışanları, sorumlu birimlerce Politika kapsamında alınmakta olan 
teknik ve idari tedbirlerin gereği gibi uygulanması, birim çalışanlarının eğitimi ve 
farkındalığının arttırılması, izlenmesi ve sürekli denetimi ile kişisel verilerin hukuka 
aykırı olarak işlenmesinin önlenmesi, kişisel verilere hukuka aykırı olarak erişilmesinin önlenmesi ve kişisel verilerin hukuka uygun saklanmasının sağlanması amacıyla kişisel veri işlenen tüm ortamlarda veri güvenliğini sağlamaya yönelik teknik ve idari tedbirlerin alınması konularında sorumlu birimlere aktif olarak destek verir.
Sorumlu Birimler aşağıdaki gibidir;
<br/><br/>
<br/> 1.	Çalışanların politikaya uygun hareket etmesinden sorumludur. (Kişisel Veriler Komitesi) <br/><br/>
<br/> 2.	Politika’nın hazırlanması, geliştirilmesi, yürütülmesi, ilgili ortamlarda yayınlanması ve güncellenmesinden sorumludur.( Kişisel Veriler Komitesi) <br/><br/>
<br/> 3.	Politika’nın uygulanmasında ihtiyaç duyulan teknik çözümlerin sunulmasından sorumludur. (Bilgi Teknolojileri Yöneticisi) <br/><br/>
<br/> 4.	Görevlerine uygun olarak Politikanın yürütülmesinden sorumludur. (İnsan Kaynakları ve Vakıf içerisinde Bölüm Yöneticileri) <br/><br/>
<br/> 5.	Veri ihlalleri bildirimlerini takip ederek Kurum’u ve hukuk danışmanlarını bilgilendirmek (Kişisel Veriler Komitesi) <br/><br/>
<br/> 4.1.  Kişisel Veri Kategorileri <br/><br/>

Aşağıda kategorik bazda ele alınan ve kimliği belirli veya belirlenebilir bir 
gerçek kişiye ait olduğu açık olan; veriler kısmen veya tamamen otomatik şekilde veya
 fiziksel veya sanal ortamlarda bulunan veri kayıt sistemlerinin bir parçası olarak manuel ve bazen otomatik yöntemlerle işlenmektedir.

4.1.1. Kimlik Bilgisi <br/><br/>
Kişinin kimliğine dair bilgilerin bulunduğu verilerdir; ad-soyad,
 T.C. kimlik numarası, uyruk bilgisi, anne adı-baba adı, doğum yeri, doğum tarihi, cinsiyet 
 gibi bilgileri içeren ehliyet, nüfus cüzdanı ve pasaport gibi belgeler ile vergi numarası, SGK numarası, imza bilgisi, taşıt plakası vb. bilgiler. <br/><br/>

4.1.2. İletişim Bilgisi <br/><br/>
Telefon numarası, adres, e-mail adresi, faks numarası, IP adresi gibi bilgiler. <br/><br/>
4.1.3. Lokasyon Verisi <br/><br/>
Kişisel veri sahibinin Vakfımız iş birimleri tarafından yürütülen operasyonlar çerçevesinde,
 vakıf hizmetlerinin yürütülmesi aşamasında veya işbirliği içerisinde olduğumuz kurumların 
 çalışanlarının vakıf araçlarını kullanırken bulunduğu yerin konumunu tespit eden bilgiler; GPS lokasyonu,
  seyahat verileri vb. Vakfımızda lokasyon verilerini izleme yetkisi Operasyonel Yönetim Direktörlüğündedir.
   Lokasyon bilgilerinin kimler tarafından görülebildiği Yetki Matrisi altında düzenlenmektedir. 
   <br/><br/>
4.1.4. Özlük Bilgisi <br/><br/>
Vakıf ile çalışma ilişkisi içerisinde olan gerçek kişilerin özlük haklarının oluşmasına temel olacak bilgilerin elde edilmesine yönelik işlenen her türlü kişisel veri <br/><br/>
4.1.5. Hukuki İşlem <br/><br/>
Vakıf hukuki alacak ve haklarının tespiti, takibi ve borçlarının ifası ve kanuni yükümlülüklerinin Vakıf politikalarına uyumu kapsamında işlenen kişisel veriler. <br/><br/>
4.1.6. Müşteri İşlem <br/><br/>
Vakıfmiz faaliyet alanı kapsamında müşteriler ile olan iş ilişkimiz süresince elde edilen kişisel veriler. <br/><br/>
4.1.7. Fiziksel Mekân Güvenlik Bilgisi <br/><br/>
Vakfa ait binalar ve koridorlar toplantı odaları ve çalışma alanları başta olmak üzere, fiziksel 
mekâna girişte, fiziksel mekânın içerisinde kalış sırasında alınan kayıtlar ve belgelere ilişkin kişisel
 veriler; kamera kayıtları, parmak izi kayıtları ve güvenlik noktasında alınan kayıtlar v.b. <br/><br/>
4.1.8. İşlem Güvenliği Verisi <br/><br/>
Vakfımız faaliyetlerini yürütürken veri sahibinin ya da vakfın teknik, idari, hukuki ve vakıf güvenliğinin
 sağlanması için işlenen, internet tabanlı programların kullanımı esnasında işlenen IP bilgileri, login kayıtları gibi kişisel veriler. <br/><br/>
4.1.9. Risk Yönetimi Verisi <br/><br/>
Vakıf faaliyetlerini yürütürken tespit edilen ve raporlanan, denetim sürecinde açığa çıkan risklerin yönetiminde işlenen kişisel veriler. <br/><br/>
4.1.10. Finansal Bilgi <br/><br/>
Vakfın kişisel veri sahibi ile kurmuş olduğu hukuki ilişkinin tipine göre yaratılan her türlü finansal sonucu gösteren bilgi, belge 
ve kayıtlara ilişkin işlenen kişisel veriler ile banka hesap numarası, IBAN numarası, kredi kartı bilgisi, finansal profil, malvarlığı verisi, gelir bilgisi gibi veriler <br/><br/>
4.1.11. Mesleki Deneyim <br/><br/>
Kişinin mesleğine ve mesleki deneyimlerine ait bilgilerin bulunduğu veriler <br/><br/>
4.1.12. Pazarlama <br/><br/>
Vakıf faaliyetinin yürütürken yapılan kampanya ve hizmetlerin tanıtımı ile pazarlama faaliyetleri neticesinde işlenen kişisel veriler.  <br/><br/>
4.1.13. Görsel/İşitsel Bilgi <br/><br/>
Kimliği belirli veya belirlenebilir bir gerçek kişiye ait olduğu açık olan; fotoğraf ve kamera kayıtları (Fiziksel Mekan Güvenlik
	 Bilgisi kapsamında giren kayıtlar hariç), ses kayıtları ile kişisel veri içeren belgelerin kopyası niteliğindeki belgelerde yer alan veriler <br/><br/>
4.1.14. Kılık Kıyafet Verisi
Vakıf tarafından çalışanlara dağıtılmak üzere onlara verilerek zimmetlenen giysilerin hazırlanması
amacıyla, Kişinin giyim kuşamına ait ayırt edici özelliğe sahip veriler (Ör: beden bilgilerinin bulunduğu veriler) <br/><br/>
4.1.15. Özel Nitelikli Kişisel Veri <br/><br/>
Kanun’nun 6. maddesinde belirtilen veriler (Ör: kan grubu da dahil sağlık verileri, biyometrik veriler, ceza mahkumiyetine ilişkin veriler ve üye olunan dernek bilgisi gibi) <br/><br/>
4.2. Kişisel Veri Sahibi Kategorileri <br/><br/>
4.2.1. Çalışan <br/><br/>
Vakıf tarafından yürütülen etkinlik, çalışan memnuniyeti, insan kaynakları, denetim, hukuki uyum vb faaliyetler çerçevesinde kişisel verileri işlenen Vakıf çalışanları  <br/><br/>
4.2.2. Ürün veya Hizmet Alan Kişi/Potansiyel Ürün veya Hizmet Alan Kişi <br/><br/>
Vakıf ile herhangi bir sözleşmesel ilişkisi olup olmadığına bakılmaksızın Vakıf iş birimlerinin yürüttüğü ve/veya yürüteceği 
operasyonlar kapsamında Vakfın iş ilişkileri üzerinden kişisel verileri elde edilen gerçek kişiler. Vakfın restoran kafeterya gibi
 şubelerinden hizmet ve ürün almak üzere gelen müşterilerimizdir ve/veya potansiyel müşterilerimizdir. <br/><br/>
4.2.3. Çalışan Adayı <br/><br/>
Vakıfa herhangi bir yolla iş başvurusunda bulunmuş ya da özgeçmiş ve ilgili bilgilerini Vakfın incelemesine açmış olan gerçek kişiler <br/><br/>
4.2.4. Bağışçı <br/><br/>
Vakfın faaliyetleri için ayni ve nakdi destek sağlayan kişi ve kurumlar. <br/><br/>
4.2.5. Gönüllü <br/><br/>
Vakfın faaliyetleri çerçevesinde hiçbir ücret veya kazanç talep etmeksizin yapılan işi yerine getiren gerçek kişi. <br/><br/>
4.2.6. Ziyaretçi <br/><br/>
Vakfın sahip olduğu fiziksel yerleşkelere çeşitli amaçlarla girmiş olan veya internet sitelerimizi ziyaret eden gerçek kişiler <br/><br/>
4.2.7. Hissedar/Ortak <br/><br/>
Vakfın yönetim kurulu üyesi ve diğer yetkili gerçek kişiler <br/><br/>
4.2.8. İş birliği İçinde Olduğumuz Kurumların Çalışanları ve Yetkilileri  <br/><br/>
Vakfın her türlü iş ilişkisi içerisinde bulunduğu kurumlarda (iş ortağı, tedarikçi gibi, ancak bunlarla sınırlı olmaksınız) çalışan, bu kurumların yetkilileri dahil olmak üzere, gerçek kişiler <br/><br/>
4.2.9. Kayıt Ortamları <br/><br/>
Kişisel veriler, Vakıf tarafından aşağıda belirtilen elektronik ve elektronik olmayan ortamlarda, veri kayıt sisteminin bir parçası olmak kaydııyla hukuka uygun olarak güvenli bir şekilde saklanır.
Elektronik Ortamlar: Sunucular (Etki alanı, yedekleme, e-posta, veritabanı, web, dosya paylaşım, vb.)  Yazılımlar (ofis yazılımları, portal)  Bilgi güvenliği cihazları (güvenlik duvarı, saldırı tespit ve engelleme, günlük kayıt dosyası, antivirüs vb. )  Kişisel bilgisayarlar (Masaüstü, dizüstü)  Mobil cihazlar (telefon, tablet vb.)  Optik diskler (CD, DVD vb.)  Çıkartılabilir bellekler (USB, Hafıza Kart vb.)  Yazıcı, tarayıcı, fotokopi makinesi
Elektronik Olmayan Ortamlar: Kağıt, Manuel veri kayıt sistemleri  <br/><br/>
5. Kişisel Verilerin Korunması <br/><br/>
5.1. Kişisel Verilerin Güvenliği <br/><br/>
Vakıf, kişisel verilerin hukuka uygun işlenmesini sağlamak için, teknolojik imkânlar ve uygulama maliyetine göre teknik ve idari tedbirler almaktadır. <br/><br/>
5.1.1. Teknik Tedbirler <br/><br/>
5.1.1.1. Vakıf bünyesinde gerçekleştirilen kişisel veri işleme faaliyetleri kurulan teknik sistemlerle denetlenmektedir. <br/><br/>
5.1.1.2. Teknik konularda bilgili personeli olan danışman firmalarla anlaşmalar yapılmaktadır. <br/><br/>
5.1.2. İdari Tedbirler <br/><br/>
5.1.2.1. Çalışanlar, kişisel verilerin korunması hukuku ve kişisel verilerin hukuka uygun olarak işlenmesi konusunda bilgilendirilmekte ve eğitilmektedir. <br/><br/>
5.1.2.2. Vakfın yürütmekte olduğu tüm faaliyetler detaylı olarak tüm iş birimleri özelinde analiz edilerek,
 bu analiz neticesinde ilgili iş birimlerinin gerçekleştirmiş olduğu faaliyetler özelinde kişisel veri işleme faaliyetleri ortaya konulmaktadır. <br/><br/>
5.1.2.3. Vakfın iş birimlerinin yürütmekte olduğu kişisel veri işleme faaliyetleri; bu faaliyetlerin Kanun’nun aradığı kişisel veri işleme şartlarına
 uygunluğun sağlanması için yerine getirilecek olan gereklilikler genel olarak ele alınmakta ve belirlenmektedir. <br/><br/>
5.1.2.4. İş birimi bazında belirlenen hukuksal uyum gerekliliklerinin sağlanması için ilgili iş birimleri özelinde farkındalık
 yaratılmakta ve uygulama kuralları belirlenmekte; bu hususların denetimini ve uygulamanın sürekliliğini sağlamak için gerekli idari tedbirler vakıf içi politikalar ve eğitimler yoluyla hayata geçirilmektedir. <br/><br/>
5.2. Kişisel Verilere Hukuka Aykırı Erişimin Engellenmesi <br/><br/>
5.2.1. Teknik Tedbirler <br/><br/>
5.2.1.1. Teknolojideki gelişmelere uygun teknik önlemler alınmakta, alınan önlemler periyodik olarak güncellenmekte ve yenilenmektedir. <br/><br/>
5.2.1.2. İş birimi bazında belirlenen hukuksal uyum gerekliliklerine uygun olarak erişim ve yetkilendirme 
konusunda gerekli teknik çözümler benimsenmektedir. Fiziksel arşivlere erişim konusunda yetki tanımlamaları  yapılmaktadır.  <br/><br/>
5.2.1.3. Erişim yetkileri sınırlandırılmakta, yetkiler düzenli olarak gözden geçirilmektedir. <br/><br/>
5.2.1.4. Virüs koruma sistemleri ve güvenlik duvarlarını içeren yazılımlar ve donanımlar kurulmaktadır. <br/><br/>
5.2.1.5. Teknik konularda bilgili personel bulunduran firmalardan danışmanlık alınmaktadır.  <br/><br/>
5.2.1.6. Kişisel verilerin toplandığı uygulamalardaki güvenlik açıklarını saptamak için düzenli olarak güvenlik taramalarından geçirilmektedir. Bulunan açıkların kapatılması sağlanmaktadır. <br/><br/>
5.2.2. İdari Tedbirler <br/><br/>
5.2.2.1. Çalışanlar, kişisel verilere hukuka aykırı erişimi engellemek için alınacak teknik tedbirler konusunda bilgilendirilmektedir. <br/><br/>
5.2.2.2. İş birimi bazında kişisel veri işlenmesi hukuksal uyum gerekliliklerine uygun olarak vakıf içinde kişisel verilere erişim ve 
yetkilendirme süreçleri tasarlanmakta ve uygulanmaktadır. Yetkilendirme Matrisi altında bu yetkilendirmeler belirlenmekte ve Yetkilendirme 
Matrisi ………………… birimi tarafından güncel tutulmaktadır.  <br/><br/>
5.2.2.3. Çalışanlar, öğrendikleri kişisel verileri Kanun hükümlerine aykırı olarak başkasına açıklayamayacağı ve işleme amacı dışında kullanamayacağı 
ve bu yükümlülüğün görevden ayrılmalarından sonra da devam edeceği konusunda bilgilendirilmekte ve bu doğrultuda kendilerinden gerekli taahhütler alınmaktadır. <br/><br/>
5.2.2.4. Vakıf tarafından kişisel verilerin hukuka uygun olarak aktarıldığı kişiler ile akdedilen sözleşmelere; kişisel verilerin aktarıldığı kişilerin, 
kişisel verilerin korunması amacıyla gerekli güvenlik tedbirlerini alacağına ve kendi kuruluşlarında bu tedbirlere uyulmasını sağlayacağına ilişkin hükümler eklenmektedir. <br/><br/>
5.3. Kişisel Verilerin Güvenli Ortamlarda Saklanması <br/><br/>
5.3.1. Teknik Tedbirler <br/><br/>
5.3.1.1. Saklanma alanlarına yönelik güvenlik sistemleri kurulmakta, alınan önlemler periyodik olarak güncellenmekte, risk teşkil eden hususlar yeniden değerlendirilerek gerekli çözümler araştırılmaktadır. <br/><br/>
5.3.1.2. Kişisel verilerin güvenli bir biçimde saklanmasını sağlamak için hukuka uygun bir biçimde yedekleme programları kullanılmaktadır. <br/><br/>
5.3.1.3. Kişisel verilerin bulunduğu arşiv alanlarında erişimler kayıt altına alınarak yetkisiz kişilerin girişleri engellenmekte, olası ihlaller anlık olarak raporlanmaktadır.  <br/><br/>
5.3.1.4. Kişisel verilerin bulunduğu veri depolama alanlarına erişimler loglanarak uygunsuz erişimler veya erişim denemeleri ilgililere anlık olarak iletilmektedir. <br/><br/>
5.3.2. İdari Tedbirler <br/><br/>
5.3.2.1. Çalışanlar, kişisel verilerin güvenli bir biçimde saklanmasını sağlamak konusunda eğitilmektedirler. <br/><br/>
5.3.2.2. Vakıf tarafından kişisel verilerin saklanması konusunda teknik gereklilikler sebebiyle dışarıdan bir hizmet alınması durumunda,
 kişisel verilerin hukuka uygun olarak aktarıldığı ilgili firmalar ile akdedilen sözleşmelere; kişisel verilerin aktarıldığı kişilerin, 
 kişisel verilerin korunması amacıyla gerekli güvenlik tedbirlerini alacağına ve kendi kuruluşlarında bu tedbirlere uyulmasını sağlanacağına ilişkin hükümlere yer verilmektedir. <br/><br/>
5.4. Tedbirlerin Denetimi <br/><br/>
Vakıf, Kanun’nun 12. maddesine uygun olarak, danışman avukatları ve bilgi sistemleri danışmanları aracılığıyla 
2 yılda bir teknik denetimleri gerçekleştirmektedir. Bu denetim sonuçları Vakfın iç işleyişi kapsamında konu ile ilgili 
bölüme raporlanmakta ve alınan tedbirlerin iyileştirilmesi için gerekli faaliyetler yürütülmektedir. <br/><br/>
5.5. Kişisel Verilerin İfşası Durumunda Alınacak Tedbirler <br/><br/>
Vakıf çalışanlarından herhangi biri kişisel verilerin işbu politikaya aykırı şekilde ve kanuni olmayan yollarla elde edildiğine,
 işlendiğine üçüncü kişilere aktarıldığına, imha edilmesi gerektiği halde imha edilmediğine şahit olursa bu durumu derhal veri sorumlusu olarak belirlenen kişilere iletecektir. 
Çalışanların bu kurallara uygun davranması konusunda yöneticilerin takip yükümlülüğü bulunmakta olup, verilerin işbu politika dışında 
aktarıldığı ya da işlendiğine dair bir şüphe olması durumunda birim müdürleri İnsan Kaynaklarını bilgilendirir. 
İnsan Kaynakları sözü edilen veri ihlalinin hukuksal sonuç doğurabilecek nitelikte olduğuna karar verirse ilgili hukuk danışmanlarını bilgilendirir. 
İlgili veri sorumlusu konuyu disiplin kuruluna sevk edecek ve ihlalde bulunanlar hakkında vakıf iç yönergeleri doğrultusunda gerekli önlemler alınacaktır. 
Vakıf ayrıca, Kanun’nun 12. maddesine uygun olarak işlenen kişisel verilerin kanuni olmayan yollarla başkaları tarafından elde edilmesi halinde bu durumu en kısa sürede ilgili kişisel veri sahibine ve Kurulu’na bildirilmesini sağlayan sistemi yürütmektedir.
Kurul tarafından gerek görülmesi halinde, bu durum, Kurul’nun internet sitesinde veya başka bir yöntemle ilan edilebilecektir.
Kurul tarafından verilen uyarıların en geç 30 gün içinde yerine getirilmesi konu hakkında danışmanlık alınmasını gerektiriyorsa ilgili konuda 
(teknik/hukuksal) danışmanlık alınarak Kurul kararlarının uygulanması sağlanacaktır.  <br/><br/>
6. Özel Nitelikli Kişisel Verilerin Korunması <br/><br/>
Kanunda birtakım kişisel verilere hukuka aykırı olarak işlendiğinde kişilerin mağduriyetine 
veya ayrımcılığa sebep olma riski nedeniyle özel önem atfedilmiştir. Bu veriler; kılık ve kıyafet,
 dernek, sağlık, ceza mahkûmiyeti ve güvenlik tedbirleriyle ilgili veriler ile biyometrik ve genetik verilerdir.
Vakıf tarafından, Kanunda “özel nitelikli” olarak belirlenen ve hukuka uygun olarak işlenen özel nitelikli 
kişisel verilerin korunmasında hassasiyetle davranılmaktadır. Bu kapsamda, Vakıf tarafından, kişisel verilerin korunması
için alınan teknik ve idari tedbirler, özel nitelikli kişisel veriler bakımından özenle uygulanmakta ve Vakıf bünyesinde gerekli denetimler sağlanmaktadır.  <br/><br/>
7. İş Birimlerinin farkındalık eğitimi ve denetimi <br/><br/>
Vakıf, kişisel verilerin hukuka aykırı olarak işlenmesini, verilere hukuka aykırı olarak erişilmesini önlemeye ve verilerin muhafazasını sağlamaya yönelik farkındalığın artırılması için iş birimlerine gerekli eğitimlerin düzenlenmesini sağlamaktadır.
Vakıf iş birimlerinin mevcut çalışanlarının ve iş birimi bünyesine yeni dahil olmuş çalışanların kişisel verilerin korunması konusunda farkındalığının oluşması için gerekli sistemler kurulmakta, konuya ilişkin ihtiyaç duyulması halinde profesyonel kişiler ile çalışılmaktadır.
Vakfın iş birimlerinin kişisel verilerin korunması ve işlenmesi konusunda farkındalığın artırılmasına yönelik yürütülen eğitim sonuçları Vakfa raporlanmaktadır. Vakıf bu doğrultuda ilgili eğitimlere, seminerlere ve bilgilendirme oturumlarına yapılan katılımları değerlendirmekte ve gerekli denetimleri yapmakta veya yaptırmaktadır. Vakıf, ilgili mevzuatın güncellenmesine paralel olarak eğitimlerini güncellemekte ve yenilemektedir.
<br/><br/>8. Kişisel Verilerin İşlenmesine İlişkin Hususlar
<br/><br/>8.1. Mevzuatta Öngörülen İlkelere Uygun Olarak İşlenmesi
 <br/><br/>8.1.1. Hukuka ve Dürüstlük Kuralına Uygun İşleme
 <br/><br/>Vakıf, Kişisel verilerin işlenmesinde hukuksal düzenlemelerle getirilen ilkeler ile genel güven ve dürüstlük kuralına uygun hareket etmektedir. Bu kapsamda Vakıf, kişisel verilerin işlenmesinde orantılılık gerekliliklerini dikkate almakta, kişisel verileri amacın gerektirdiği dışında kullanmamaktadır.
 <br/><br/>8.1.2. Doğru ve Güncel Olmasını Sağlama
 <br/><br/>Vakıf, Kişisel veri sahiplerinin temel haklarını ve kendi meşru menfaatlerini dikkate alarak işlediği kişisel verilerin doğru ve güncel olmasını sağlamaktadır. Bu doğrultuda gerekli tedbirleri almaktadır. Verilerin geçerliliği ortadan kalktığında imha edilmesini sağlamaktadır. 
 <br/><br/>8.1.3. Belirli, Açık ve Meşru Amaçlarla İşleme
 <br/><br/>Vakıf, Meşru ve hukuka uygun olan kişisel veri işleme amacını açık ve kesin olarak belirlemektedir. Vakıf, yürütmekte olduğu faaliyetler ile bağlantılı ve bunlar için gerekli olan kadar işlemektedir. Vakıf tarafından kişisel verilerin hangi amaçla işleneceği henüz kişisel veri işleme faaliyeti başlamadan ortaya konulmaktadır.
 <br/><br/>8.1.4. İşlendikleri Amaçla Bağlantılı, Sınırlı ve Ölçülü olma
 <br/><br/>Vakıf, Kişisel verileri belirlenen amaçların gerçekleştirilebilmesine elverişli bir biçimde işlemekte ve amacın gerçekleştirilmesiyle ilgili olmayan veya ihtiyaç duyulmayan kişisel verilerin işlenmesinden kaçınmaktadır. Örneğin, sonradan ortaya çıkması muhtemel ihtiyaçların karşılanmasına yönelik kişisel veri işleme faaliyeti yürütülmemektedir.
 <br/><br/>8.1.5. Gerekli Olan Süre Kadar Muhafaza Etme
 <br/><br/>Vakıf, kişisel verileri ancak ilgili mevzuatta belirtildiği veya işlendikleri amaç için gerekli olan süre kadar muhafaza etmektedir. Bu kapsamda, Vakıf öncelikle ilgili mevzuatta kişisel verilerin saklanması için bir süre öngörülüp öngörülmediğini tespit etmekte, bir süre belirlenmişse bu süreye uygun davranmakta, bir süre belirlenmemişse kişisel verileri işlendikleri amaç için gerekli olan süre kadar saklamaktadır. Sürenin bitimi veya işlenmesini gerektiren sebeplerin ortadan kalkması halinde kişisel veriler Vakıf tarafından silinmekte, yok edilmekte veya anonim hale getirilmektedir. Gelecekte kullanma ihtimali ile Vakıf tarafından kişisel veriler saklanmamaktadır.
 <br/><br/>9. Kişisel Verileri, KVKK 5.Maddesinde Belirtilen Kişisel Veri İşleme Şartlarından Bir veya Birkaçına Dayalı ve Bu Şartlarla Sınırlı Olarak İşleme 
 <br/><br/>Kişisel verilerin korunması Anayasal bir haktır. Temel hak ve hürriyetler, özlerine dokunulmaksızın yalnızca Anayasa’nın ilgili maddelerinde belirtilen sebeplere bağlı olarak ve ancak kanunla sınırlanabilir. Anayasa’nın 20. maddesinin üçüncü fıkrası gereğince, kişisel veriler ancak kanunda öngörülen hallerde veya kişinin açık rızasıyla işlenebilecektir. Vakıf bu doğrultuda ve Anayasa’ya uygun bir biçimde; kişisel verileri, ancak kanunda öngörülen hallerde veya kişinin açık rızasıyla işlemektedir. 
 <br/><br/>10. Kişisel Veri Sahibinin Aydınlatılması ve Bilgilendirilmesi
Vakıf, Kanun’nun 10. maddesine uygun olarak, kişisel verilerin elde edilmesi sırasında Kişisel Veri Sahiplerini aydınlatmaktadır. Bu kapsamda Vakıf, varsa temsilcisinin kimliği, kişisel verilerin hangi amaçla işleneceği, işlenen kişisel verilerin kimlere ve hangi amaçla aktarılabileceği, kişisel veri toplamanın yöntemi ve hukuki sebebi ile kişisel veri sahibinin sahip olduğu hakları konusunda aydınlatma yapmaktadır.
 <br/><br/>Anayasa’nın 20. maddesinde herkesin, kendisiyle ilgili kişisel veriler hakkında bilgilendirilme hakkına sahip olduğu ortaya konulmuştur. Bu doğrultuda Kanun’nun 11. maddesinde kişisel veri sahibinin hakları arasında “bilgi talep etme” de sayılmıştır. Vakıf bu kapsamda, Anayasa’nın 20. ve Kanun’nun 11. maddelerine uygun olarak Kişisel Veri Sahibi’nin bilgi talep etmesi durumunda gerekli bilgilendirmeyi yapmaktadır.
 <br/><br/>11. Özel Nitelikli Kişisel Verilerin İşlenmesi
Vakıf tarafından, Kanun ile “özel nitelikli” olarak belirlenen kişisel verilerin işlenmesinde, Kanun’nda öngörülen düzenlemelere hassasiyetle uygun davranılmaktadır.
Kanun’nun 6. maddesinde, hukuka aykırı olarak işlendiğinde kişilerin mağduriyetine veya ayrımcılığa sebep olma riski taşıyan bir takım kişisel veri “özel nitelikli” olarak belirlenmiştir. Bu veriler; kılık ve kıyafet, dernek, sağlık, ceza mahkûmiyeti, biyometrik veriler ve güvenlik tedbirleriyle ilgili veriler ile biyometrik ve genetik verilerdir.
Kanun’na uygun bir biçimde Vakıf tarafından; özel nitelikli kişisel veriler, Kurul tarafından belirlenecek olan yeterli önlemlerin alınması kaydıyla aşağıdaki durumlarda işlenmektedir:
 <br/><br/>11.1. Kişisel veri sahibinin açık rızası var ise veya
 <br/><br/>11.2. Kişisel veri sahibinin açık rızası yok ise;
 <br/><br/>11.2.1. Kişisel veri sahibinin sağlığı ve cinsel hayatı dışındaki özel nitelikli kişisel veriler, kanunlarda öngörülen hallerde,
 <br/><br/>11.2.2. Kişisel veri sahibinin sağlığına ve cinsel hayatına ilişkin özel nitelikli kişisel verileri ise ancak kamu sağlığının korunması, koruyucu hekimlik, tıbbi teşhis, tedavi ve bakım hizmetlerinin yürütülmesi, sağlık hizmetleri ile finansmanının planlanması ve yönetimi amacıyla, sır saklama yükümlülüğü altında bulunan kişiler veya yetkili kurum ve kuruluşlar tarafından işlenmektedir.
 <br/><br/>12. Verilerin Üçüncü Kişilere Aktarılması
Vakıf, hukuka uygun olan kişisel veri işleme amaçları doğrultusunda gerekli güvenlik önlemlerini alarak kişisel veri sahibinin kişisel verilerini ve özel nitelikli kişisel verilerini üçüncü kişilere aktarabilmektedir. Bu durum kimi zaman yasal bir zorunluluk gereği kamu kurum ve kuruluşlarına aktarım yapılması şeklinde olabileceği gibi bazen de sözleşmesel yükümlülüklerimizin yerine getirilmesinin bir gereği olarak üçüncü kişilere aktarım şeklinde gerçekleştirilebilmektedir. Bununla birlikte Vakıf herhangi bir ticari fayda elde etmek amacıyla Kişisel Verileri üçüncü kişilere aktarmamaktadır. Vakıf bu doğrultuda Kanun’nun 8. maddesinde öngörülen düzenlemelere uygun hareket etmektedir. 
Vakıf tarafından herhangi bir veri aktarımı olması halinde veri aktarılan kişilerin veri sorumlusu veya veri işleyen olması durumlarına göre gerekli sözleşmeler imzalatılır. Vakıf meşru ve hukuka uygun kişisel veri işleme amaçları doğrultusunda aşağıda sayılan Kanun’nun 5. maddesinde belirtilen kişisel veri işleme şartlarından bir veya birkaçına dayalı ve sınırlı olarak kişisel verileri üçüncü kişilere aktarabilmektedir:
 <br/><br/>12.1.1. Kişisel veri sahibinin açık rızası var ise,
 <br/><br/>12.1.2. Kanunlarda kişisel verinin aktarılacağına ilişkin açık bir düzenleme var ise,
 <br/><br/>12.1.3. Kişisel veri sahibinin veya başkasının hayatı veya beden bütünlüğünün korunması için zorunlu ise ve kişisel veri sahibi fiili imkânsızlık nedeniyle rızasını açıklayamayacak durumda ise veya rızasına hukuki geçerlilik tanınmıyorsa;
 <br/><br/>12.1.4. Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olmak kaydıyla sözleşmenin taraflarına ait kişisel verinin aktarılması gerekli ise,
 <br/><br/>12.1.5. Vakfın hukuki yükümlülüğünü yerine getirmesi için kişisel veri aktarımı zorunlu ise,
 <br/><br/>12.1.6. Kişisel veriler, kişisel veri sahibi tarafından alenileştirilmiş ise,
  <br/><br/>12.1.7. Kişisel veri aktarımı bir hakkın tesisi, kullanılması veya korunması için zorunlu ise,
  <br/><br/>12.1.8. Kişisel veri sahibinin temel hak ve özgürlüklerine zarar vermemek koşuluyla. 
  <br/><br/>12.2. Özel Nitelikli Kişisel Verilerin Aktarılması
Vakıf gerekli özeni göstererek, gerekli güvenlik tedbirlerini alarak ve Kurul tarafından öngörülen yeterli önlemleri alarak; meşru ve hukuka uygun kişisel veri işleme amaçları doğrultusunda kişisel veri sahibinin özel nitelikli kişisel verilerini aşağıdaki durumlarda üçüncü kişilere aktarabilmektedir.
Veri sahibinin açık rızasına dayalı olarak ve iş güvenliği, sigorta yükümlülüklerinin yerine getirilmesi, özlük haklarının yerine getirilmesi amacıyla gerekli kurum ve kuruluşlara, vakıf faaliyetleri kapsamında vakıf ile anlaşmalı üçüncü kişilere, vakıf etkinlik ve organizasyonları sebebi ile ilgili kurumlara veri aktarımı yapılmaktadır. 
Bu haller dışında Vakfımız tarafından özel nitelikli kişisel verilerin üçüncü kişilere aktarımı söz konusu değildir. 
<br/><br/>13. Verilerin Yurt Dışına Aktarılması
Vakıf özel nitelikli olsun ya da olmasın herhangi bir Kişisel Veriyi yurt dışına aktarmamaktadır. 
<br/><br/>14. İşlenme Amaçları
Vakıf, Kanun’nun 5. maddesinin 2. fıkrasında ve 6. maddenin 3. fıkrasında belirtilen kişisel veri işleme şartları içerisindeki amaçlarla ve koşullarla sınırlı olarak kişisel verileri işlemektedir. Bu amaçlar ve koşullar;
 <br/><br/>14.1.1. Vakfın ilgili faaliyette bulunmasının Kanunlarda açıkça öngörülmesi
 <br/><br/>14.1.2. Vakıf tarafından işlenmesinin bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili ve gerekli olması
 <br/><br/>14.1.3. Vakfın hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması
 <br/><br/>14.1.4. Veri sahipleri tarafından alenileştirilmiş olması şartıyla veri sahibinin alenileştirme amacıyla sınırlı bir şekilde Vakıf tarafından işlenmesi
 <br/><br/>14.1.5. Kişisel verilerin Vakıf tarafından işlenmesinin Vakfın veya veri sahiplerinin veya üçüncü kişilerin haklarının tesisi, kullanılması veya korunması için zorunlu olması
 <br/><br/>14.1.6. Veri sahiplerinin temel hak ve özgürlüklerine zarar vermemek kaydıyla Vakıf meşru menfaatleri için kişisel veri işleme faaliyetinde bulunulmasının zorunlu olması
 <br/><br/>14.1.7. Vakıf tarafından kişisel veri işleme faaliyetinde bulunulmasının kişisel veri sahibinin ya da bir başkasının hayatı veya beden bütünlüğünün korunması için zorunlu olması ve bu durumda da kişisel veri sahibinin fiili veya hukuki geçersizlik nedeniyle rızasını açıklayamayacak durumda bulunması
 <br/><br/>14.1.8. Kişisel veri sahibinin sağlığı dışındaki özel nitelikli kişisel veriler açısından kanunlarda öngörülmüş olması
 <br/><br/>14.1.9. Kişisel veri sahibinin sağlığına ilişkin özel nitelikli kişisel verileri açısından ise kamu sağlığının korunması, koruyucu hekimlik, tıbbi teşhis, tedavi ve bakım hizmetlerinin yürütülmesi, sağlık hizmetleri ile finansmanının planlanması ve yönetimi amacıyla, sır saklama yükümlülüğü altında bulunan kişiler veya yetkili kurum ve kuruluşlar tarafından işlenmesidir.
 <br/><br/>Bu kapsamda Vakıf, kişisel verilerinizi başlıca aşağıdaki amaçlarla işlemektedir: Bu amaçlar zaman içerisinde değişebilecek olup ilgili güncellemeler yapılacaktır. 
 <br/><br/>14.1.10. Çalışan Adayların Başvuru Sürecinin Yürütülmesi
 <br/><br/>14.1.11. Çalışanlar İçin İş Akdi ve Mevzuat Kaynaklı Yükümlülüklerin Yerine Getirilmesi
 <br/><br/>14.1.12. İnsan kaynakları süreçlerinin yürütülmesi
 <br/><br/>14.1.13. İş Sağlığı/ Güvenliği Faaliyetlerinin Yürütülmesi
 <br/><br/>14.1.14. Mal / Hizmet Satış Süreçlerinin Yürütülmesi
 <br/><br/>14.1.15. Mal/ Hizmet Satın Alım Süreçlerinin Yürütülmesi
 <br/><br/>14.1.16. Fiziksel Mekan Güvenliğinin Temini
 <br/><br/>14.1.17. Ürün / Hizmetlerin Pazarlama Süreçlerinin Yürütülmesi 
 <br/><br/>14.1.18. Vakıf hukuk işlerinin icrası/takibi
 <br/><br/>14.1.19. Talep ve şikayet yönetimi
 <br/><br/>14.1.20. Yetkili kuruluşlara mevzuattan kaynaklı bilgi verilmesi
Ziyaretçi kayıtlarının oluşturulması ve takibi Bahsi geçen amaçlarla gerçekleştirilen işleme faaliyetinin, Kanun kapsamında öngörülen şartlardan herhangi birini karşılamıyor olması halinde, ilgili işleme sürecine ilişkin olarak Vakıf tarafından açık rızanız temin edilmektedir.
<br/><br/>15. Saklama Süreleri
<br/><br/>Vakıf, ilgili kanunlarda ve mevzuatlarda öngörülmesi durumunda kişisel verileri bu mevzuatlarda belirtilen süre boyunca saklamaktadır. Saklama süreleri vakıfmIz veri envanterlerinde her bir veri kategorisi bazında belirtilmektedir. 
Kişisel verilerin ne kadar süre boyunca saklanması gerektiğine ilişkin mevzuatta bir süre düzenlenmemişse, Kişisel Veriler Vakfın o veriyi işlerken yürütülen faaliyet ile bağlı olarak Vakfın uygulamaları ve teamüller uyarınca işlenmesini gerektiren süre kadar işlenmekte daha sonra silinmekte, yok edilmekte veya anonim hale getirilmektedir. 
Kişisel verilerin işlenme amacı sona ermiş; ilgili mevzuat ve Vakfın belirlediği saklama sürelerinin de sonuna gelinmişse; kişisel veriler yalnızca olası hukuki uyuşmazlıklarda delil teşkil etmesi veya kişisel veriye bağlı ilgili hakkın ileri sürülebilmesi veya savunmanın tesis edilmesi amacıyla yasal zamanaşımı ve hak düşürücü süreler dikkate alınarak saklanabilmektedir. Buradaki sürelerin tesisinde bahsi geçen hakkın ileri sürülebilmesine yönelik zaman aşımı süreleri ile zaman aşımı sürelerinin geçmesine rağmen daha önce aynı konularda Vakfa yöneltilen taleplerdeki örnekler esas alınarak saklama süreleri belirlenmektedir. Bu durumda saklanan kişisel verilere herhangi bir başka amaçla erişilmemekte ve ancak ilgili hukuki uyuşmazlıkta kullanılması gerektiği zaman ilgili kişisel verilere erişim sağlanmaktadır. Burada da bahsi geçen süre sona erdikten sonra kişisel veriler silinmekte, yok edilmekte veya anonim hale getirilmektedir.
<br/><br/>16. Bina, Tesis Girişleri İle Bina Tesis İçerisinde Yapılan Kişisel Veri İşleme Faaliyetleri İle İnternet Sitesi Ziyaretçileri
Vakıf tarafından güvenliğin sağlanması amacıyla, Vakfın binalarında ve tesislerinde güvenlik kamerasıyla izleme faaliyeti ile misafir giriş çıkışlarının takibine yönelik kişisel veri işleme faaliyetinde bulunulmaktadır.
Güvenlik kameraları kullanılması ve misafir giriş çıkışlarının kayıt altına alınması yoluyla Vakıf tarafından kişisel veri işleme faaliyeti yürütülmüş olmaktadır.
<br/><br/>16.1. Vakfın Bina, Tesis Girişlerinde Ve İçerisinde Yürütülen Kamera İle İzleme Faaliyeti
 <br/><br/><br/><br/>16.1.1. Kamera ile İzleme Faaliyetinin Yasal Dayanağı
 <br/><br/>Vakıf tarafından yürütülen kamera ile izleme faaliyeti, Özel Güvenlik Hizmetlerine Dair Kanun ve ilgili mevzuata uygun olarak sürdürülmektedir.
 <br/><br/>16.1.2. Veri Koruma Mevzuatına Göre Güvenlik Kamerası ile İzleme Faaliyeti Yürütülmesi
 <br/><br/>Vakıf tarafından güvenlik amacıyla kamera ile izleme faaliyeti yürütülmesinde Kanun’da yer alan düzenlemelere uygun hareket edilmektedir. Vakıf, bina ve tesislerinde güvenliğin sağlanması amacıyla, yürürlükte bulunan ilgili mevzuatta öngörülen amaçlarla ve Kanun’da sayılan kişisel veri işleme şartlarına uygun olarak güvenlik kamerası izleme faaliyetinde bulunmaktadır.
 <br/><br/>16.1.3. Kamera ile İzleme Faaliyetinin Duyurulması
 <br/><br/>Vakıf tarafından Kanun’nun 10. Maddesine uygun olarak, kişisel veri sahibi aydınlatılmaktadır. Vakıf, genel hususlara ilişkin olarak yaptığı aydınlatmanın kamera ile izleme faaliyetine ilişkin bildirimde bulunmaktadır. Böylelikle, kişisel veri sahibinin temel hak ve özgürlüklerine zarar verilmesinin engellenmesi, şeffaflığın ve kişisel veri sahibinin aydınlatılmasının sağlanması amaçlanmaktadır.
Vakıf tarafından kamera ile izleme faaliyetine yönelik olarak; Vakfın internet sitesinde işbu Politika yayımlanmakta (çevrimiçi politika düzenlemesi) ve izlemenin yapıldığı alanların girişlerine izleme yapılacağına ilişkin bildirim yazısı asılmaktadır (yerinde aydınlatma).
<br/><br/>16.1.4. Kamera ile İzleme Faaliyetinin Yürütülme Amacı ve Amaçla Sınırlılık
<br/><br/>Vakıf, Kanun’un 4. maddesine uygun olarak, kişisel verileri işlendikleri amaçla bağlantılı, sınırlı ve ölçülü bir biçimde işlemektedir.
Vakıf tarafından video kamera ile izleme faaliyetinin sürdürülmesindeki amaç bu Politika’da sayılan amaçlarla sınırlıdır. Bu doğrultuda, güvenlik kameralarının izleme alanları, sayısı ve ne zaman izleme yapılacağı, güvenlik amacına ulaşmak için yeterli ve bu amaçla sınırlı olarak uygulamaya alınmaktadır. Kişinin mahremiyetini güvenlik amaçlarını aşan şekilde müdahale sonucu doğurabilecek alanlarda (örneğin, tuvaletler) izlemeye tabi tutulmamaktadır.
 <br/><br/>16.1.5. Elde Edilen Verilerin Güvenliğinin Sağlanması
 <br/><br/>Vakıf tarafından Kanun’un 12. maddesine uygun olarak, kamera ile izleme faaliyeti sonucunda elde edilen kişisel verilerin güvenliğinin sağlanması için gerekli teknik ve idari tedbirler alınmaktadır.
 <br/><br/>16.1.6. Kamera ile İzleme Faaliyeti ile Elde Edilen Kişisel Verilerin Muhafaza Süresi
 <br/><br/>Vakfın, kamera ile izleme faaliyeti ile elde edilen kişisel verileri muhafaza süresi ile ilgili ayrıntılı bilgiye bu Politika’ın Kişisel Verilerin Saklanma Süreleri maddesinde yer verilmiştir.
 <br/><br/>16.1.7. İzleme Sonucunda Elde Edilen Bilgilere Kimlerin Erişebildiği ve Bu Bilgilerin Kimlere Aktarıldığı
 <br/><br/>Canlı kamera görüntüleri ile dijital ortamda kaydedilen ve muhafaza edilen kayıtlara yalnızca sınırlı sayıda Vakıf çalışanının erişimi bulunmaktadır. Kayıtlara erişimi olan sınırlı sayıda kişi gizlilik taahhütnamesi ile eriştiği verilerin gizliliğini koruyacağını beyan etmektedir.
 <br/><br/>16.2. Vakfın Bina, Tesis Girişlerinde Ve İçerisinde Yürütülen Misafir Giriş Çıkışlarının Takibi
Vakıf tarafından; güvenliğin sağlanması ve bu Politika’da belirtilen amaçlarla, Vakıf binalarında ve tesislerinde misafir giriş çıkışlarının takibine yönelik kişisel veri işleme faaliyetinde bulunulmaktadır.
Misafir olarak Vakıf binalarına gelen kişilerin isim ve soyadları elde edilirken ya da Vakıf nezdinde asılan ya da diğer şekillerde misafirlerin erişimine sunulan metinler aracılığıyla söz konusu kişisel veri sahipleri bu kapsamda aydınlatılmaktadırlar. Misafir giriş-çıkış takibi yapılması amacıyla elde edilen veriler yalnızca bu amaçla işlenmekte ve ilgili kişisel veriler fiziki ortamda veri kayıt sistemine kaydedilmektedir.
<br/><br/>16.3. Vakfın Bina Ve Tesislerinde Ziyaretçilerimize Sağlanan İnternet Erişimlerine İlişkin Kayıtların Saklanması
Vakıf tarafından güvenliğin sağlanması ve bu Politika’da belirtilen amaçlarla; Vakıf tarafından bina ve tesislerimiz içerisinde kaldığınız süre boyunca talep eden Ziyaretçi’lerimize internet erişimi sağlanabilmektedir. Bu durumda internet erişimlerinize ilişkin log kayıtları 5651 Sayılı Kanun ve bu Kanuna göre düzenlenmiş olan mevzuatın amir hükümlerine göre kayıt altına alınmakta; bu kayıtlar ancak yetkili kamu kurum ve kuruluşları tarafından talep edilmesi veya Vakıf içinde gerçekleştirilecek denetim süreçlerinde ilgili hukuki yükümlülüğümüzü yerine getirmek amacıyla işlenmektedir.
Bu çerçevede elde edilen log kayıtlarına yalnızca sınırlı sayıda Vakıf çalışanının erişimi bulunmaktadır. Bahsi geçen kayıtlara erişimi olan Vakıf çalışanları bu kayıtları yalnızca yetkili kamu kurum ve kuruluşundan gelen talep veya denetim süreçlerinde kullanmak üzere erişmekte ve hukuken yetkili olan kişilerle paylaşmaktadır. Kayıtlara erişimi olan sınırlı sayıda kişi gizlilik taahhütnamesi ile eriştiği verilerin gizliliğini koruyacağını beyan etmektedir.
<br/><br/>16.4. İnternet Sitesi Ziyaretçileri
Vakfın sahibi olduğu internet sitelerinde; bu siteleri ziyaret eden kişilerin sitelerdeki ziyaretlerini ziyaret amaçlarıyla uygun bir şekilde gerçekleştirmelerini temin etmek; kendilerine özelleştirilmiş içerikler gösterebilmek ve çevrimiçi reklamcılık faaliyetlerinde bulunabilmek maksadıyla teknik vasıtalarla (Örn. Kurabiyeler-cookie gibi) site içerisindeki internet hareketlerini kaydedilmektedir.
Vakıf yapmış olduğu bu faaliyetlere ilişkin kişisel verilerin korunması ve işlenmesine ilişkin detaylı açıklamalar ilgili internet sitesi “Gizlilik Politikası” metinleri içerisinde yer almaktadır.
 <br/><br/>17. Kişisel Verilerin Silinmesi, Yok Edilmesi ve Anonimleştirilmesi
 <br/><br/>Türk Ceza Kanunu’nun 138. maddesinde ve Kanun’nun 7. maddesinde düzenlendiği üzere ilgili kanun hükümlerine uygun olarak işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması hâlinde Vakfın kararına istinaden veya kişisel veri sahibinin talebi üzerine kişisel veriler silinir, yok edilir veya anonim hâle getirilir. Bu kapsamda Vakıf ilgili yükümlülüğünü bu bölümde açıklanan yöntemlerle yerine getirmektedir.
 <br/><br/>17.1. Silinme ve Yok Edilme Teknikleri
 <br/><br/>İlgili kanun hükümlerine uygun olarak işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması hâlinde kendi kararına istinaden veya kişisel veri sahibinin talebi üzerine kişisel verileri silebilir veya yok edebilir. Vakıf tarafından en çok kullanılan silme veya yok etme teknikleri aşağıda sıralanmaktadır:
 <br/><br/>17.1.1. Fiziksel Olarak Yok Etme
 <br/><br/>Kişisel veriler herhangi bir veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan yollarla da işlenebilmektedir. Bu tür veriler silinirken/yok edilirken kişisel verinin sonradan kullanılamayacak biçimde fiziksel olarak yok edilmesi sistemi uygulanmaktadır.
 <br/><br/>17.1.2. Yazılımdan Güvenli Olarak Silme
 <br/><br/>Tamamen veya kısmen otomatik olan yollarla işlenen ve dijital ortamlarda muhafaza edilen veriler silinirken/yok edilirken; bir daha kurtarılamayacak biçimde verinin ilgili yazılımdan silinmesine ilişkin yöntemler kullanılır.
 <br/><br/>17.1.3. Taşeron Tarafından Güvenli Olarak Silme
 <br/><br/>Bazı durumlarda kendisi adına kişisel verileri silmesi için bir taşeron ile anlaşabilir. Bu durumda, kişisel veriler bu konuda uzman olan kişi/kurum tarafından bir daha kurtarılamayacak biçimde güvenli olarak silinir/yok edilir.
 <br/><br/>17.2. Anonim Hale Getirme Teknikleri
Kişisel verilerin anonimleştirilmesi, kişisel verilerin başka verilerle eşleştirilerek dahi hiçbir surette kimliği belirli veya belirlenebilir bir gerçek kişiyle ilişkilendirilemeyecek hâle getirilmesini ifade eder. Vakıf, hukuka uygun olarak işlenen kişisel verilerin işlenmesini gerektiren sebepler ortadan kalktığında kişisel verileri anonimleştirebilmektedir.
Vakıf tarafından kullanılan anonimleştirme teknikleri aşağıda sıralanmaktadır.
 <br/><br/>17.2.1. Maskeleme
 <br/><br/>Veri maskeleme ile kişisel verinin temel belirleyici bilgisini veri seti içerisinden çıkartılarak kişisel verinin anonim hale getirilmesi yöntemidir.
 <br/><br/>17.2.2. Toplulaştırma
 <br/><br/>Veri toplulaştırma yöntemi ile birçok veri toplulaştırılmakta ve kişisel veriler herhangi bir kişiyle ilişkilendirilemeyecek hale getirilmektedir.
 <br/><br/>
 <br/><br/>17.2.3. Veri Türetme
 <br/><br/>Veri türetme yöntemi ile kişisel verinin içeriğinden daha genel bir içerik oluşturulmakta ve kişisel verinin herhangi bir kişiyle ilişkilendirilemeyecek hale getirilmesi sağlanmaktadır.
 <br/><br/>17.2.4. Veri Karıştırma
 <br/><br/>Veri karma yöntemi ile kişisel veri seti içindeki değerlerinin karıştırılarak değerler ile kişiler arasındaki bağın kopartılması sağlanmaktadır.
 <br/><br/>18. Çalışan Adaylarının Kişisel Verilerinin İşlenmesi
 <br/><br/>Çalışan Adaylarının işe alım sürecinde toplanan kişisel verileri ile işin niteliğine göre toplanan özel nitelikli kişisel verileri, Vakıf tarafından; Politika’nın çeşitli maddelerinde ve aşağıda sıralanan amaçlarla işlenmektedir:
 <br/><br/>18.1. Çalışan Adayı’nın niteliğini, tecrübesini ve ilgisini açık pozisyona uygunluğunu değerlendirmek,
 <br/><br/>18.2. Gerektiği takdirde, Çalışan Adayı’nın ilettiği bilgilerin doğruluğunun kontrolünü yapmak veya üçüncü kişilerle iletişime geçip Çalışan Adayı hakkında araştırma yapmak,
 <br/><br/>18.3. Başvuru ve işe alım süreci hakkında Çalışan Adayı ile iletişime geçmek veya uygun olduğu takdirde, sonradan yurtiçinde veya yurtdışında açılan herhangi bir pozisyon için aday ile iletişime geçmek,
 <br/><br/>18.4. İlgili mevzuatın gereklerini ya da yetkili kurum veya kuruluşların taleplerini karşılamak,
 <br/><br/>18.5. Vakfın uyguladığı işe alım ilkelerini geliştirmek ve iyileştirmek.
 <br/><br/>18.6. Çalışan Adayları’nın kişisel verileri aşağıdaki yöntem ve vasıtalarla toplanabilmektedir:
 <br/><br/>18.7. Yazılı veya elektronik ortamda yayınlanan dijital başvuru formu;
 <br/><br/>Çalışan Adayları’nın Vakfa e-posta, kargo, referans ve benzeri yöntemlerle ulaştırdıkları özgeçmişler;
 <br/><br/>18.8. Video konferans, telefon gibi araçlarla veya yüz yüze mülakat yapılan hallerde, mülakat sırasında;
 <br/><br/>18.9. Çalışan Adayı tarafından iletilen bilgilerin doğruluğunu teyit etmek amacıyla yapılan kontroller ile Vakıf tarafından yapılan araştırmalar;
 <br/><br/>18.10. Tecrübesi olan uzman kişiler tarafından yapılan ve sonuçları incelenen yetenek ve kişilik özelliklerini tespit eden işe alım testleri.
 <br/><br/>19. Komite
 <br/><br/>Vakıf tarafından Kanun düzenlemelerine uygun hareket edilmesi ve Kişisel Verilerin Korunması ve İşlenmesi Politikası ve bu Politika’ya bağlı ve ilişkili diğer politikaları yönetmek üzere Vakıf üst yönetiminin kararı gereğince Kişisel Verilerin Korunması Komitesi (“Komite”) kurulmuştur.
 <br/><br/>Komite’nin görevleri:
 <br/><br/>19.1. Kişisel verilerin korunması ve işlenmesi ile ilgili temel politikaları ve gerektiğinde değişiklikleri hazırlamak ve yürürlüğe koymak ve üst yönetiminin onayına sunmak üzere Üst Yönetim’e iletmek.
 <br/><br/>19.2. Kişisel verilerin korunması ve işlenmesine ilişkin politikaların uygulanması ve denetiminin ne şekilde yerine getirileceğine karar vermek ve bu çerçevede vakıf içi görevlendirmede bulunulması ve koordinasyonun sağlanması hususlarını üst yönetimin onayına sunmak üzere Üst Yönetim’e iletmek.
 <br/><br/>19.3. Kanun ve ilgili mevzuata uyumun sağlanması için yapılması gereken hususları tespit etmek ve üst yönetimin onayına sunmak, uygulanmasını gözetmek ve koordinasyonunu sağlamak üzere Üst Yönetim’e iletmek.
 <br/><br/>19.4. Kişisel verilerin korunması ve işlenmesi konusunda Vakıf içerisinde ve Vakfın işbirliği içerisinde olduğu kurumlar nezdinde farkındalığı arttırmak.
 <br/><br/>19.5. Vakfın kişisel veri işleme faaliyetlerinde oluşabilecek riskleri tespit ederek gerekli önlemlerin alınmasını temin etmek; iyileştirme önerilerini üst yönetimin onayına sunmak üzere Üst Yönetim’e iletmek.
 <br/><br/>19.6. Kişisel verilerin korunması ve politikaların uygulanması ve yayılımı konusunda, kişisel veri sahiplerinin kişisel veri işleme faaliyetleri ve kanuni hakları konusunda bilgilendirilmelerinin sağlanması yönünde eğitimler düzenlenmesini sağlamak üzere Üst Yönetim’e iletmek.
 <br/><br/>19.7. Kişisel veri sahiplerinin başvurularını en üst düzeyde karara bağlamak üzere Üst Yönetim’e iletmek.
 <br/><br/>19.8. Kişisel verilerin korunması konusundaki gelişmeleri ve düzenlemeleri takip etmek; bu gelişmelere ve düzenlemelere uygun olarak Vakıf içinde yapılması gerekenler konusundaki önerilerini Üst Yönetim’e iletmek.
 <br/><br/>19.9. Kurul ve Kurumu ile olan ilişkileri Üst Yönetim’in koordinasyonunda yürütmek.
 <br/><br/>19.10. Vakıf Üst Yönetiminin kişisel verilerin korunması konusunda vereceği diğer görevleri icra etmek.
 <br/><br/>20. Kişisel Verilerle ilgili Talepler için kullanılacak ortamlar ve taleplerin değerlendirilmesi
 <br/><br/>Vakıf, kişisel veri sahiplerinin haklarının değerlendirilmesi ve kişisel veri sahiplerine gereken bilgilendirmenin yapılması için Kanun’nun 13. maddesine uygun olarak gerekli kanalları, iç işleyişi, idari ve teknik düzenlemeleri yürütmektedir.
 <br/><br/>Kişisel veri sahipleri aşağıda sıralanan haklarına ilişkin taleplerini başvuru formunda yazılı usülle Vakfa iletmeleri durumunda Vakıf talebin niteliğine göre talebi en geç otuz gün içinde ücretsiz olarak sonuçlandırmaktadır. Ancak, Kurula bir ücret öngörülmesi hâlinde, Vakıf tarafından Kurulca belirlenen tarifedeki ücret alınacaktır. 
 <br/><br/>20.1. Kişisel Veri Sahibinin Hakları;
 <br/><br/>20.1.1. Kişisel veri işlenip işlenmediğini öğrenme,
 <br/><br/>20.1.2. Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,
 <br/><br/>20.1.3. Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,
 <br/><br/>20.1.4. Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,
 <br/><br/>20.1.5. Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,
 <br/><br/>20.1.6. Kanun ve ilgili diğer kanun hükümlerine uygun olarak işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması hâlinde kişisel verilerin silinmesini veya yok edilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,
 <br/><br/>20.1.7. İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,
 <br/><br/>20.1.8. Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme, haklarına sahiptir.
 <br/><br/>20.2. Kişisel Veri Sahibinin Haklarını İleri Süremeyeceği Haller
 <br/><br/>Kişisel veri sahipleri, Kanun’un 28. maddesi gereğince aşağıdaki haller Kanun kapsamı dışında tutulduğundan, kişisel veri sahiplerinin bu konularda 20.1’de sayılan haklarını ileri süremezler:
 <br/><br/>20.2.1. Kişisel verilerin resmi istatistik ile anonim hâle getirilmek suretiyle araştırma, planlama ve istatistik gibi amaçlarla işlenmesi.
 <br/><br/>20.2.2. Kişisel verilerin millî savunmayı, millî güvenliği, kamu güvenliğini, kamu düzenini, ekonomik güvenliği, özel hayatın gizliliğini veya kişilik haklarını ihlal etmemek ya da suç teşkil etmemek kaydıyla, sanat, tarih, edebiyat veya bilimsel amaçlarla ya da ifade özgürlüğü kapsamında işlenmesi.
 <br/><br/>20.2.3. Kişisel verilerin millî savunmayı, millî güvenliği, kamu güvenliğini, kamu düzenini veya ekonomik güvenliği sağlamaya yönelik olarak kanunla görev ve yetki verilmiş kamu kurum ve kuruluşları tarafından yürütülen önleyici, koruyucu ve istihbari faaliyetler kapsamında işlenmesi.
 <br/><br/>20.2.4. Kişisel verilerin soruşturma, kovuşturma, yargılama veya infaz işlemlerine ilişkin olarak yargı makamları veya infaz mercileri tarafından işlenmesi.
 <br/><br/>Kanun’un 28/2 maddesi gereğince; aşağıda sıralanan hallerde kişisel veri sahipleri zararın giderilmesini talep etme hakkı hariç, 20.1’de sayılan diğer haklarını ileri süremezler:
 <br/><br/>20.2.5. Kişisel veri işlemenin suç işlenmesinin önlenmesi veya suç soruşturması için gerekli olması.
 <br/><br/>20.2.6. Kişisel veri sahibi tarafından kendisi tarafından alenileştirilmiş kişisel verilerin işlenmesi.
 <br/><br/>20.2.7. Kişisel veri işlemenin kanunun verdiği yetkiye dayanılarak görevli ve yetkili kamu kurum ve kuruluşları ile kamu kurumu niteliğindeki meslek kuruluşlarınca, denetleme veya düzenleme görevlerinin yürütülmesi ile disiplin soruşturma veya kovuşturması için gerekli olması.
 <br/><br/>20.2.8. Kişisel veri işlemenin bütçe, vergi ve mali konulara ilişkin olarak Devletin ekonomik ve mali çıkarlarının korunması için gerekli olması.
 <br/><br/>20.3. Kişisel Veri Sahibinin Haklarını Kullanması
 <br/><br/>Kişisel Veri Sahipleri bu bölümün 20.1 Başlığı altında sıralanan haklarına ilişkin taleplerini kimliklerini tespit edecek bilgi ve belgelerle ve aşağıda belirtilen yöntemlerle veya Kişisel Verileri Koruma Kurulu’nun belirlediği diğer yöntemlerle Ek-1’de yer alan Başvuru Formu’nu doldurup imzalayarak vakfa ücretsiz olarak iletebileceklerdir:
 <br/><br/>20.3.1. Web sitesindeki formun doldurulduktan sonra ıslak imzalı bir nüshasının bizzat elden veya iadeli taahhütlü posta aracılığı ile Vakıf merkez adresine iletilmesi
 <br/><br/>20.3.2. Web sitesindeki formun doldurulup 5070 Sayılı Elektronik İmza Kanunu kapsamındaki “güvenli elektronik imza” nızla imzalandıktan sonra güvenli elektronik imzalı formun Vakfın turkiyegenclikvakfi@hs01.kep.tr eelektronik posta ile gönderilmesi
 <br/><br/>Kişisel veri sahipleri adına üçüncü kişilerin başvuru talebinde bulunabilmesi için veri sahibi tarafından başvuruda bulunacak kişi adına noter kanalıyla düzenlenmiş özel vekâletname bulunmalıdır.
 <br/><br/>20.4. Kişisel Veri Sahibinin Kurul’a Şikâyette Bulunma Hakkı
 <br/><br/>Kişisel veri sahibi Kanunun 14. maddesi gereğince başvurunun reddedilmesi, verilen cevabın yetersiz bulunması veya süresinde başvuruya cevap verilmemesi hâllerinde; Vakfın cevabını öğrendiği tarihten itibaren otuz ve herhâlde başvuru tarihinden itibaren altmış gün içinde Kurul’a şikâyette bulunabilir.
 <br/><br/>21. Başvurulara Cevap Verilmesi
 <br/><br/>Vakfa yalnızca Vakfın Kanun kapsamında veri sorumlusu sayıldığı durumlarda başvuru yapılması gerekmektedir. 
 <br/><br/>21.1. Başvurulara Cevap Verilme Usulü ve Süresi
 <br/><br/>Kişisel veri sahibinin, 20.3 başlıklı kısmında yer alan usule uygun olarak talebini Vakfa iletmesi durumunda Vakıf talebin niteliğine göre en geç otuz gün içinde ilgili talebi ücretsiz olarak sonuçlandıracaktır. Ancak, Kurulca bir ücret öngörülmesi hâlinde, Vakıf tarafından başvuru sahibinden Kurulca belirlenen tarifedeki ücret alınacaktır.
 <br/><br/>21.2. Başvuruda Bulunan Kişisel Veri Sahibinden Talep Edebileceği Bilgiler
 <br/><br/>Başvuruda bulunan kişinin kişisel veri sahibi olup olmadığını tespit etmek adına ilgili kişiden bilgi talep edebilir. Kişisel veri sahibinin başvurusunda yer alan hususları netleştirmek adına, kişisel veri sahibine başvurusu ile ilgili soru yöneltebilir.
 <br/><br/>21.3. Kişisel Veri Sahibinin Başvurusunu Reddetme Hakkı
 <br/><br/>Aşağıda yer alan hallerde başvuruda bulunan kişinin başvurusunu, gerekçesini açıklayarak reddedebilir:
 <br/><br/>21.3.1. Kişisel verilerin resmi istatistik ile anonim hâle getirilmek suretiyle araştırma, planlama ve istatistik gibi amaçlarla işlenmesi.
 <br/><br/>21.3.2. Kişisel verilerin millî savunmayı, millî güvenliği, kamu güvenliğini, kamu düzenini, ekonomik güvenliği, özel hayatın gizliliğini veya kişilik haklarını ihlal etmemek ya da suç teşkil etmemek kaydıyla, sanat, tarih, edebiyat veya bilimsel amaçlarla ya da ifade özgürlüğü kapsamında işlenmesi.
 <br/><br/>21.3.3. Kişisel verilerin millî savunmayı, millî güvenliği, kamu güvenliğini, kamu düzenini veya ekonomik güvenliği sağlamaya yönelik olarak kanunla görev ve yetki verilmiş kamu kurum ve kuruluşları tarafından yürütülen önleyici, koruyucu ve istihbari faaliyetler kapsamında işlenmesi.
 <br/><br/>21.3.4. Kişisel verilerin soruşturma, kovuşturma, yargılama veya infaz işlemlerine ilişkin olarak yargı makamları veya infaz mercileri tarafından işlenmesi.
 <br/><br/>21.3.5. Kişisel veri işlemenin suç işlenmesinin önlenmesi veya suç soruşturması için gerekli olması.
 <br/><br/>21.3.6. Kişisel veri sahibi tarafından kendisi tarafından alenileştirilmiş kişisel verilerin işlenmesi.
 <br/><br/>21.3.7. Kişisel veri işlemenin kanunun verdiği yetkiye dayanılarak görevli ve yetkili kamu kurum ve kuruluşları ile kamu kurumu niteliğindeki meslek kuruluşlarınca, denetleme veya düzenleme görevlerinin yürütülmesi ile disiplin soruşturma veya kovuşturması için gerekli olması.
 <br/><br/>21.3.8. Kişisel veri işlemenin bütçe, vergi ve mali konulara ilişkin olarak Devletin ekonomik ve mali çıkarlarının korunması için gerekli olması.
 <br/><br/>21.3.9. Kişisel veri sahibinin talebinin diğer kişilerin hak ve özgürlüklerini engelleme ihtimali olması
 <br/><br/>21.3.10. Orantısız çaba gerektiren taleplerde bulunulmuş olması.
 <br/><br/>21.3.11. Talep edilen bilginin kamuya açık bir bilgi olması.
 

`;
