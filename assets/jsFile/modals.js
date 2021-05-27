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

<div class="WordSection1"> 

<h1 style="text-align:justify "><span   style=" color:#C0504D">1. </span><span   style=" color:#C0504D">Politikanın Konusu ve
Yürürlüğü </span></h1>

<p style="margin:0cm;text-align:justify "><span style="font-size:11.0pt; color:black">İşbu
Politika ve Kuralları 6698 sayılı Kişisel Verilerin
Korunması Kanunu (“Kanun”) 7 Nisan 2016 tarihinde yürürlüğe girmesi
ile Kanun’da “veri sorumlusu” olarak sınıflandırılan ve
kişisel verilerin işleme amaçlarını ve vasıtalarını
belirleyen, veri kayıt sisteminin kurulmasından ve yönetilmesinden
sorumlu gerçek veya tüzel kişilerden sayılan </span><b><span style="font-size:11.0pt; color:black">TÜRKİYE
GENÇLİK VAKFI </span></b><b><span   style="font-size:11.0pt;
 color:black">(“</span></b><span style="font-size:
11.0pt; color:black">TÜGVA”)<b>’in Kanun
kapsamında vakıf içinde uymakla yükümlü olduğu kuralları
belirlemektedir. </b></span></p>

<h1 style="text-align:justify "><span   style=" color:#C0504D">2. </span><span   style=" color:#C0504D">Tanımlar ve
Kısaltmalar</span></h1>

<h2 style="text-align:justify "><span   style=" color:#C0504D">2.1. </span><span   style=" color:#C0504D">Tanımlar</span></h2>

<p   ><b><span   style=" color:#1F497D">Açık rıza</span></b><span   style=" color:#1F497D">:</span><span   style=" color:black"> Belirli bir konuya
ilişkin, bilgilendirilmeye dayanan ve özgür iradeyle açıklanan
rıza.</span></p>

<p   ><b><span   style=" color:#1F497D">Anonim hale getirme</span></b><span   style=" color:#1F497D">: </span><span   style=" color:black">Kişisel verinin,
kişisel veri niteliğini kaybedecek ve bu durumun geri
alınamayacağı şekilde değiştirilmesidir. Ör:
Maskeleme, toplulaştırma, veri bozma vb. tekniklerle kişisel
verinin bir gerçek kişi ile ilişkilendirilemeyecek hale getirilmesi.</span></p>

<p   ><b><span   style=" color:#1F497D">Başvuru Formu</span></b><span   style=" color:#1F497D">:</span><span   style=" color:black"> Kişisel veri sahiplerinin
haklarını kullanmak için yapacakları başvuruyu içeren “6698
Sayılı Kişisel Verilerin Korunması Kanunu Gereğince
İlgili Kişi (Kişisel Veri Sahibi) Tarafından Veri
Sorumlusuna Yapılacak Başvurulara İlişkin Başvuru
Formu”.</span></p>

<p   ><b><span   style=" color:#1F497D">Çalışan Adayı</span></b><span   style=" color:#1F497D">: </span><span   style=" color:black">Vakfımız
herhangi bir yolla iş başvurusunda bulunmuş ya da özgeçmiş
ve ilgili bilgilerini Vakfımız incelemesine açmış olan
gerçek kişiler. </span></p>

<p   ><b><span   style=" color:#1F497D">Bağışçı</span></b><span   style=" color:#1F497D">:</span><span   style=" color:black"> Vakfın
faaliyetleri için ayni ve nakdi destek sağlayan kişi ve kurumlar.</span></p>

<p   ><b><span   style=" color:#1F497D">Gönüllü</span></b><span   style=" color:#1F497D">: </span><span   style=" color:black">Vakfın faaliyetleri
çerçevesinde hiçbir ücret veya kazanç talep etmeksizin yapılan işi
yerine getiren gerçek kişi.</span></p>

<p   ><b><span   style=" color:#1F497D">İşbirliği İçinde
Olduğumuz Kurumların Çalışanları ve Yetkilileri</span></b><span   style=" color:#1F497D">:</span><span   style=" color:black"> Vakfımız her
türlü iş ilişkisi içerisinde bulunduğu kurumlarda (iş
ortağı, tedarikçi gibi, ancak bunlarla sınırlı
olmaksınız) çalışan, bu kurumların yetkilileri dâhil
olmak üzere, gerçek kişiler.</span></p>

<p   ><b><span   style=" color:#1F497D">İş Ortağı</span></b><span   style=" color:#1F497D">:</span><span   style=" color:black"> Vakfımız
faaliyetlerini yürütürken bizzat veya ilgili kurumlar ile birlikte muhtelif
projeler yürütmek, hizmet almak gibi amaçlarla iş ortaklığı
kurduğu taraflar. </span></p>

<p   ><b><span   style=" color:#1F497D">Kayıt Ortamı:</span></b><span   style=" color:black"> Tamamen veya kısmen
otomatik olan ya da herhangi bir veri kayıt sisteminin parçası olmak
kaydıyla otomatik olmayan yollarla işlenen kişisel verilerin
bulunduğu her türlü ortam.</span></p>

<p   ><b><span   style=" color:#1F497D">Kişisel veri</span></b><span   style=" color:#1F497D">:</span><span   style=" color:black"> Kimliği belirli veya
belirlenebilir gerçek kişiye ilişkin her türlü bilgi.
Dolayısıyla tüzel kişilere ilişkin bilgilerin
işlenmesi Kanun kapsamında değildir. Örneğin; ad-soyad,
TCKN, e-posta, adres, doğum tarihi, kredi kartı numarası vb.</span></p>

<p   ><b><span   style=" color:#1F497D">Kişisel verilerin işlenmesi</span></b><span   style=" color:#1F497D">:</span><span   style=" color:black"> Kişisel verilerin
tamamen veya kısmen otomatik olan ya da herhangi bir veri kayıt
sisteminin parçası olmak kaydıyla otomatik olmayan yollarla elde
edilmesi, kaydedilmesi, depolanması, muhafaza edilmesi,
değiştirilmesi, yeniden düzenlenmesi, açıklanması,
aktarılması, devralınması, elde edilebilir hâle
getirilmesi, sınıflandırılması ya da
kullanılmasının engellenmesi gibi veriler üzerinde
gerçekleştirilen her türlü işlem.</span></p>

<p  style="margin-left:0cm;text-indent:35.45pt"><b><span   style=" color:#1F497D">Kişisel veri sahibi</span></b><span   style=" color:#1F497D">: </span><span   style=" color:black">Kişisel verisi
işlenen gerçek kişi. Örneğin; çalışan adayları.</span></p>

<p   ><b><span   style=" color:#1F497D">Özel nitelikli kişisel veri</span></b><span   style=" color:#1F497D">:</span><span   style=" color:black"> Irk, etnik köken,
siyasi düşünce, felsefi inanç, din, mezhep veya diğer inançlar,
kılık kıyafet, dernek vakıf ya da sendika üyeliği,
sağlık, cinsel hayat, ceza mahkûmiyeti ve güvenlik tedbirleriyle
ilgili veriler ile biyometrik ve genetik veriler.</span></p>

<p  style="margin-left:0cm;text-indent:35.45pt"><b><span   style=" color:#1F497D">Vakıf Yetkilisi</span></b><span   style=" color:#1F497D">:</span><span   style=" color:black"> Vakıf yönetim
kurulu üyesi ve diğer yetkili gerçek kişiler.</span></p>

<p   ><b><span   style=" color:#1F497D">Tedarikçi</span></b><span   style=" color:#1F497D">:</span><span   style=" color:black"> Vakıf faaliyetlerini
yürütürken Vakıf emir ve talimatlarına uygun olarak sözleşme
temelli olarak Vakıf hizmet sunan taraflar.</span></p>

<p   ><b><span   style=" color:#1F497D">Üçüncü Kişi</span></b><span   style=" color:#1F497D">: </span><span   style=" color:black">Politika kapsamında
farklı bir şekilde tanımlanmamış olan, kişisel
verileri </span><span style="position:absolute;z-index:251661312;left:0px;
margin-left:-110px;margin-top:300px;width:83px;height:1403px"> </span><span   style=" color:black">Politika
kapsamında işlenen gerçek kişiler (Ör: Kefil, refakatçi, aile
bireyleri ve yakınlar-Veli hariç-, eski çalışanlar).</span></p>

<p   ><b><span   style=" color:#1F497D">Veri Envanteri</span></b><span   style=" color:#1F497D">:</span><span   style=" color:black"> Veri</span><span   style=" color:black"> sorumlularının
iş süreçlerine bağlı olarak gerçekleştirmekte
oldukları kişisel verileri işleme faaliyetlerini; kişisel
verileri işleme amaçları ve hukuki sebebi, veri kategorisi,
aktarılan alıcı grubu ve veri konusu kişi grubuyla
ilişkilendirerek oluşturdukları ve kişisel verilerin
işlendikleri amaçlar için gerekli olan azami muhafaza edilme süresini ve
veri güvenliğine ilişkin alınan tedbirleri açıklayarak
detaylandırdıkları envanter.</span></p>

<p   ><b><span   style=" color:#1F497D">Veri işleyen</span></b><span   style=" color:#1F497D">: </span><span   style=" color:black">Veri sorumlusunun verdiği
yetkiye dayanarak onun adına kişisel veri işleyen gerçek ve
tüzel kişi. Örneğin, Vakıf verilerini tutan bulut bilişim
firması, scriptler çerçevesinde arama yapan call-center firması vb.</span></p>

<p   ><b><span   style=" color:#1F497D">Veri Kayıt Sistemi</span></b><span   style=" color:#1F497D">:</span><span   style=" color:black"> Kişisel verilerin belirli
kriterlere göre yapılandırılarak işlendiği otomatik ya
da otomatik olmayan her türlü kayıt sistemi.</span></p>

<p   ><b><span   style=" color:#1F497D">Veri sorumlusu</span></b><span   style=" color:#1F497D">:</span><span   style=" color:black"> Kişisel verilerin
işlenme amaçlarını ve vasıtalarını belirleyen,
verilerin sistematik bir şekilde tutulduğu yeri (veri kayıt
sistemi) yöneten kişi.</span></p>

<p   ><b><span   style=" color:#1F497D">Yetki Matrisi:</span></b><b><span   style=" color:black"> </span></b><span   style=" color:black">Vakıfta kullanılan
elektronik ya da fiziksel ortamda saklanan kişisel verilere erişim
yetkilerinin kayıt altına alındığı belgedir. </span></p>

<p   ><b><span   style=" color:#1F497D">Ziyaretçi</span></b><span   style=" color:#1F497D">:</span><span   style=" color:black"> Vakfın sahip olduğu
fiziksel yerleşkelere çeşitli amaçlarla girmiş olan veya
internet sitelerimizi ziyaret eden gerçek kişiler.</span></p>

<h2 style="text-align:justify "><span   style=" color:#C0504D">2.2. </span><span   style=" color:#C0504D">Kısaltmalar</span></h2>

<p  style="margin-left:49.65pt; "><b><span   style=" color:#1F497D">KVKK (“Kanun”)</span></b><span   style=" color:#1F497D"> :</span><span   style=" color:black"> 7 Nisan 2016 tarihli
ve 29677 sayılı Resmi Gazete ’de yayımlanan, 24 Mart 2016
tarihli ve 6698 sayılı Kişisel Verilerin Korunması Kanunu</span></p>

<p  style="margin-left:49.65pt; "><b><span   style=" color:#1F497D">Anayasa</span></b><span   style=" color:#1F497D">: </span><span   style=" color:black">9 Kasım 1982
tarihli ve 17863 sayılı Resmi Gazete’ de yayımlanan; 7
Kasım 1982 tarihli ve 2709 sayılı Türkiye Cumhuriyeti
Anayasası.</span></p>

<p ><b><span   style=" 
color:#1F497D">Kurul</span></b><span   style=" 
color:#1F497D"> (“Kurul”): </span><span   style=" 
color:black">Kişisel Verileri Koruma Kurulu</span></p>

<p ><b><span   style=" 
color:#1F497D">KVK Kurumu</span></b><span   style=" 
color:#1F497D"> (“Kurum”):</span><span   style=" 
color:black"> Kişisel Verileri Koruma Kurumu</span></p>

<p ><b><span   style=" 
color:#1F497D">Vakıf/TÜGVA</span></b><span   style=" color:#1F497D">: </span><span   style=" 
color:black">TÜRKİYE</span><span style=" 
color:black"> GENÇLİK VAKFI</span></p>

<p ><b><span   style=" 
color:#1F497D">Politika</span></b><span   style=" 
color:#1F497D">: </span><span   style=" 
color:black">Vakıf Kişisel Verilerin İşlenmesi ve
Korunması Politikası</span></p>

<p  style="margin-left:49.65pt; "><b><span   style=" color:#1F497D">Türk Ceza Kanunu</span></b><span   style=" color:#1F497D"> &nbsp;(“TCK”):</span><span   style=" color:black"> 12 Ekim 2004 tarihli
ve 25611 sayılı Resmi Gazete ‘de yayımlanan; 26 Eylül 2004
tarihli ve 5237 sayılı Türk Ceza Kanunu.</span></p>

<h1 style="text-align:justify "><span   style=" color:#C0504D">3. </span><span   style=" color:#C0504D">Amaç</span><a name="_Toc382835557"></a><a name="_Toc389207732"></a><a name="_Toc249185"></a><a name="_Toc249371"></a><a name="_Toc249544"></a><a name="_Toc249731"></a><a name="_Rol_ve_Sorumluluklar"></a></h1>

<p   style="text-indent:1.0cm"><span   style=" color:black">Vakıf tarafından yürütülen kişisel
veri işleme faaliyeti ve kişisel verilerin korunmasına yönelik
benimsenen sistemler konusunda açıklamalarda bulunmak, bu kapsamda
Çalışan Adayları’mız, Bağışçılarımız,
Gönüllülerimiz, Vakıf Yetkilileri, Ziyaretçi’lerimiz, İşbirliği
İçinde </span><span style="position:absolute;z-index:251663360;left:0px;
margin-left:-110px;margin-top:482px;width:83px;height:1403px"> </span><span   style=" color:black">Olduğumuz
Kurumların Çalışanları ve Yetkilileri ile Üçüncü
Kişiler başta olmak üzere Vakfımız </span><span style="position:absolute;z-index:251710464;left:0px;margin-left:-110px;
margin-top:482px;width:83px;height:1403px"> </span><span   style=" color:black">tarafından yapılan
kişisel veri işleme faaliyetlerini tanımlamak ve uygulama
politikalarımızı belirlemek amacıyla işbu politika
kabul edilmiştir. &nbsp;</span></p>

<h1 style="text-align:justify "><a name="_Toc506193075"><span   style=" 
color:#C0504D">4. </span><span   style=" 
color:#C0504D">Kapsam ve Sorumlular</span></a></h1>

<p   style="text-indent:21.8pt"><a name="_Toc382835558"></a><a name="_Toc389207733"></a><a name="_Toc397433545"></a><a name="_Referanslar"></a><span   style=" color:black">İşbu
politikanın kapsamı, </span><span   style=" 
color:black">Çalışan Adayları’mız,
Bağışçılarımız, Gönüllülerimiz, Vakıf
Yetkilileri, Ziyaretçi’lerimiz, İşbirliği İçinde
Olduğumuz Kurumların Çalışanları ve Yetkilileri ile
Üçüncü Kişilerin </span><span   style=" 
color:black">otomatik olan ya da herhangi bir veri kayıt sisteminin
parçası olmak kaydıyla otomatik olmayan yollarla işlenen tüm
kişisel verilerine ilişkindir.</span></p>

<p   style="text-indent:21.8pt"><span   style=" color:black">Yukarıda belirtilen kategorilerde yer alan
kişisel veri sahipleri gruplarına ilişkin işbu
Politika’nın uygulama kapsamı Politika’nın tamamı
olabileceği gibi (Ör: Ziyaretçi’miz de olan Çalışan
Adayları’mız gibi); yalnızca bir kısım hükümleri de
(Ör: yalnızca Ziyaretçi’lerimiz gibi) olabilecektir. </span></p>

<p   style="text-indent:21.8pt"><span   style=" color:windowtext">Vakfın tüm birimleri ve
çalışanları, sorumlu birimlerce Politika kapsamında
alınmakta olan teknik ve idari tedbirlerin gereği gibi
uygulanması, birim çalışanlarının eğitimi ve
farkındalığının arttırılması, izlenmesi
ve sürekli denetimi ile kişisel verilerin hukuka aykırı olarak
işlenmesinin önlenmesi, kişisel verilere hukuka aykırı
olarak erişilmesinin önlenmesi ve kişisel verilerin hukuka uygun
saklanmasının sağlanması amacıyla kişisel veri
işlenen tüm ortamlarda veri güvenliğini sağlamaya yönelik teknik
ve idari tedbirlerin alınması konularında sorumlu birimlere
aktif olarak destek verir.</span></p>

<p   style="text-indent:21.8pt"><span   style=" color:#1F497D">Sorumlu Birimler aşağıdaki
gibidir;</span></p>

<p   style="margin-left:36.0pt;text-align:justify;
 text-indent:-18.0pt"><b><span   style="font-size:11.0pt;line-height:107%; 
color:#1F497D">1.<span style="font:7.0pt &quot;Times New Roman&quot;">&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></b><span style="font-size:11.0pt;line-height:107%;font-family:
&quot;sans-serif&quot;,sans-serif">Çalışanların politikaya uygun hareket
etmesinden sorumludur. (</span><span   style="font-size:11.0pt;
line-height:107%;font-family:&quot;sans-serif&quot;,sans-serif">Kişisel Veriler Komitesi)</span></p>

<p   style="margin-left:36.0pt;text-align:justify;
 text-indent:-18.0pt"><b><span   style="font-size:11.0pt;line-height:107%; 
color:#1F497D">2.<span style="font:7.0pt &quot;Times New Roman&quot;">&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></b><span style="font-size:11.0pt;line-height:107%;font-family:
&quot;sans-serif&quot;,sans-serif">Politika’nın hazırlanması, geliştirilmesi,
yürütülmesi, ilgili ortamlarda yayınlanması ve güncellenmesinden
sorumludur.(</span><span   style="font-size:11.0pt;line-height:107%;
font-family:&quot;sans-serif&quot;,sans-serif"> Kişisel Veriler Komitesi</span><span style="font-size:11.0pt;line-height:107%;font-family:&quot;sans-serif&quot;,sans-serif">)</span></p>

<p   style="margin-left:36.0pt;text-align:justify;
 text-indent:-18.0pt"><b><span   style="font-size:11.0pt;line-height:107%; 
color:#1F497D">3.<span style="font:7.0pt &quot;Times New Roman&quot;">&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></b><span style="font-size:11.0pt;line-height:107%;font-family:
&quot;sans-serif&quot;,sans-serif">Politika’nın uygulanmasında ihtiyaç duyulan teknik
çözümlerin sunulmasından sorumludur. (</span><span   style="font-size:11.0pt;line-height:107%;font-family:&quot;sans-serif&quot;,sans-serif">Bilgi
Teknolojileri Yöneticisi</span><span style="font-size:11.0pt;line-height:107%;
font-family:&quot;sans-serif&quot;,sans-serif">)</span></p>

<p   style="margin-left:36.0pt;text-align:justify;
 text-indent:-18.0pt"><b><span style="font-size:
11.0pt;line-height:107%; color:#1F497D">4.<span style="font:7.0pt &quot;Times New Roman&quot;">&nbsp;&nbsp;&nbsp;&nbsp; </span></span></b><span style="font-size:11.0pt;line-height:107%;font-family:&quot;sans-serif&quot;,sans-serif">Görevlerine
uygun olarak Politikanın yürütülmesinden sorumludur. (</span><span   style="font-size:11.0pt;line-height:107%;font-family:&quot;sans-serif&quot;,sans-serif">İnsan
Kaynakları ve Vakıf içerisinde Bölüm Yöneticileri</span><span style="font-size:11.0pt;line-height:107%;font-family:&quot;sans-serif&quot;,sans-serif">)</span></p>

<p   style="margin-left:36.0pt;text-align:justify;
 text-indent:-18.0pt"><b><span style="font-size:
11.0pt;line-height:107%; color:#1F497D">5.<span style="font:7.0pt &quot;Times New Roman&quot;">&nbsp;&nbsp;&nbsp;&nbsp; </span></span></b><span style="font-size:11.0pt;line-height:107%;font-family:&quot;sans-serif&quot;,sans-serif">Veri
ihlalleri bildirimlerini takip ederek Kurum’u ve hukuk
danışmanlarını bilgilendirmek (Kişisel Veriler
Komitesi)</span></p>

<h2 style="text-align:justify "><a name="_Tanımlar_ve_Kısaltmalar"></a><span   style=" color:#C0504D">4.1. </span><span   style=" color:#C0504D">Kişisel Veri Kategorileri</span></h2>

<p   style="margin-left:14.2pt;text-align:justify; "><span style=" color:black">Aşağıda
kategorik bazda ele alınan ve kimliği belirli veya belirlenebilir bir
gerçek kişiye ait olduğu açık olan; veriler kısmen veya
tamamen otomatik şekilde veya fiziksel veya sanal ortamlarda bulunan veri
kayıt sistemlerinin bir parçası olarak manuel ve bazen otomatik
yöntemlerle işlenmektedir.</span></p>

<h3 style="margin-left:21.3pt; "><b><i><span   style=" color:#C0504D">4.1.1. </span></i></b><i><span   style=" color:#C0504D">Kimlik Bilgisi</span></i></h3>

<p   style="margin-left:14.2pt;text-align:justify; "><span style=" color:black">Kişinin
kimliğine dair bilgilerin bulunduğu verilerdir; ad-soyad, T.C. kimlik
numarası, uyruk bilgisi, anne adı-baba adı, doğum yeri,
doğum tarihi, cinsiyet gibi bilgileri içeren ehliyet, nüfus cüzdanı
ve pasaport gibi belgeler ile vergi numarası, SGK numarası, imza
bilgisi, taşıt plakası vb. bilgiler.</span></p>

<h3 style="margin-left:21.3pt; "><b><i><span   style=" color:#C0504D">4.1.2. </span></i></b><i><span   style=" color:#C0504D">İletişim
Bilgisi</span></i></h3>

<p   style="margin-left:14.2pt;text-align:justify; "><span style=" color:black">Telefon
numarası, adres, e-mail adresi, faks numarası, IP adresi gibi
bilgiler.</span></p>

<h3 style="margin-left:21.3pt; "><b><i><span   style=" color:#C0504D">4.1.3. </span></i></b><i><span   style=" color:#C0504D">Lokasyon Verisi</span></i></h3>

<p   style="margin-left:14.2pt;text-align:justify; "><span style="position:absolute;z-index:251665408;left:0px;
margin-left:-110px;margin-top:750px;width:83px;height:1403px"> </span><span style=" color:black">Kişisel veri sahibinin Vakfımız
iş birimleri tarafından yürütülen operasyonlar çerçevesinde, vakıf
hizmetlerinin yürütülmesi aşamasında veya işbirliği
içerisinde olduğumuz kurumların çalışanlarının vakıf
araçlarını kullanırken bulunduğu yerin konumunu tespit eden
bilgiler; GPS lokasyonu, seyahat verileri vb. Vakfımızda lokasyon
verilerini izleme yetkisi Operasyonel Yönetim Direktörlüğündedir. Lokasyon
bilgilerinin kimler tarafından görülebildiği Yetki Matrisi
altında düzenlenmektedir. </span></p>

<h3 style="margin-left:21.3pt; "><b><i><span   style=" color:#C0504D">4.1.4. </span></i></b><i><span   style=" color:#C0504D">Özlük Bilgisi</span></i></h3>

<p   style="margin-left:14.2pt;text-align:justify; "><span style=" color:black">Vakıf
ile </span><span style=" color:black">çalışma</span><span style=" color:black"> ilişkisi içerisinde olan
gerçek kişilerin özlük haklarının oluşmasına temel
olacak bilgilerin elde edilmesine yönelik işlenen her türlü kişisel
veri</span></p>

<h3 style="margin-left:21.3pt; "><b><i><span   style=" color:#C0504D">4.1.5. </span></i></b><i><span   style=" color:#C0504D">Hukuki
İşlem</span></i></h3>

<p   style="margin-left:14.2pt;text-align:justify; "><span   style=" color:black">Vakıf
</span><span style=" color:black">hukuki</span><span   style=" color:black"> alacak ve
haklarının tespiti, takibi ve borçlarının ifası ve
kanuni yükümlülüklerinin Vakıf politikalarına uyumu kapsamında
işlenen kişisel veriler.</span></p>

<h3 style="margin-left:21.3pt; "><b><i><span   style=" color:#C0504D">4.1.6. </span></i></b><i><span   style=" color:#C0504D">Müşteri
İşlem</span></i></h3>

<p   style="margin-left:14.2pt;text-align:justify; "><span   style=" color:black">Vakıfmiz
</span><span style=" color:black">faaliyet</span><span   style=" color:black"> alanı
kapsamında müşteriler ile olan iş ilişkimiz süresince elde
edilen kişisel veriler.</span></p>

<h3 style="margin-left:21.3pt; "><b><i><span   style=" color:#C0504D">4.1.7. </span></i></b><i><span   style=" color:#C0504D">Fiziksel Mekân
Güvenlik Bilgisi</span></i></h3>

<p   style="margin-left:14.2pt;text-align:justify; "><span style=" color:black">Vakfa
ait binalar ve koridorlar toplantı odaları ve çalışma
alanları başta olmak üzere, fiziksel mekâna </span><span style=" color:black">girişte</span><span style=" color:black">, fiziksel mekânın
içerisinde kalış sırasında alınan kayıtlar ve
belgelere ilişkin kişisel veriler; kamera kayıtları, parmak
izi kayıtları ve güvenlik noktasında alınan kayıtlar
v.b.</span></p>

<h3 style="margin-left:21.3pt; "><b><i><span   style=" color:#C0504D">4.1.8. </span></i></b><i><span   style=" color:#C0504D">İşlem
Güvenliği Verisi</span></i></h3>

<p   style="margin-left:14.2pt;text-align:justify; "><span   style=" color:black">Vakfımız
</span><span style=" color:black">faaliyetlerini</span><span   style=" color:black"> yürütürken veri
sahibinin ya da vakfın teknik, idari, hukuki ve vakıf
güvenliğinin sağlanması için işlenen, internet tabanlı
programların kullanımı esnasında işlenen IP bilgileri,
login kayıtları gibi kişisel veriler.</span></p>

<h3 style="margin-left:21.3pt; "><b><i><span   style=" color:#C0504D">4.1.9. </span></i></b><i><span   style=" color:#C0504D">Risk Yönetimi Verisi</span></i></h3>

<p   style="margin-left:14.2pt;text-align:justify; "><span   style=" color:black">Vakıf
faaliyetlerini yürütürken tespit edilen ve raporlanan, denetim sürecinde
açığa çıkan risklerin </span><span style=" 
color:black">yönetiminde</span><span   style=" 
color:black"> işlenen kişisel veriler.</span></p>

<h3 style="margin-left:21.3pt; "><b><i><span   style=" color:#C0504D">4.1.10. </span></i></b><i><span   style=" color:#C0504D">Finansal Bilgi</span></i></h3>

<p   style="margin-left:14.2pt;text-align:justify; "><span style=" color:black">Vakfın
</span><span style=" color:black">kişisel</span><span style=" color:black"> veri sahibi ile kurmuş
olduğu hukuki ilişkinin tipine göre yaratılan her türlü finansal
sonucu gösteren bilgi, belge ve kayıtlara ilişkin işlenen
kişisel veriler ile banka hesap numarası, IBAN numarası, kredi
kartı bilgisi, finansal profil, malvarlığı verisi, gelir
bilgisi gibi veriler</span></p>

<h3 style="margin-left:21.3pt; "><b><i><span   style=" color:#C0504D">4.1.11. </span></i></b><i><span   style=" color:#C0504D">Mesleki Deneyim</span></i></h3>

<p   style="margin-left:14.2pt;text-align:justify; "><span style=" color:black">Kişinin
mesleğine ve mesleki deneyimlerine ait bilgilerin bulunduğu veriler</span></p>

<h3 style="margin-left:21.3pt; "><b><i><span   style=" color:#C0504D">4.1.12. </span></i></b><i><span   style=" color:#C0504D">Pazarlama</span></i></h3>

<p   style="margin-left:14.2pt;text-align:justify; "><span   style=" color:black">Vakıf
faaliyetinin yürütürken yapılan </span><span style=" 
color:black">kampanya ve hizmetlerin tanıtımı ile pazarlama
faaliyetleri </span><span style="position:absolute;z-index:251667456;
left:0px;margin-left:-110px;margin-top:962px;width:83px;height:1403px"> </span><span style=" color:black">neticesinde işlenen
kişisel veriler. </span></p>

<h3 style="margin-left:21.3pt; "><b><i><span   style=" color:#C0504D">4.1.13. </span></i></b><i><span   style=" color:#C0504D">Görsel/İşitsel
Bilgi</span></i></h3>

<p   style="margin-left:14.2pt;text-align:justify; "><span style=" color:black">Kimliği
belirli veya belirlenebilir bir gerçek kişiye ait olduğu açık
olan; fotoğraf ve kamera kayıtları (Fiziksel Mekan Güvenlik
Bilgisi kapsamında giren kayıtlar hariç), ses kayıtları ile
kişisel veri </span><span style="position:absolute;z-index:251712512;
left:0px;margin-left:-110px;margin-top:980px;width:83px;height:1403px"></span><span style=" color:black">içeren belgelerin kopyası
niteliğindeki belgelerde yer alan veriler</span></p>

<h3 style="margin-left:21.3pt; "><b><i><span   style=" color:#C0504D">4.1.14. </span></i></b><i><span   style=" color:#C0504D">Kılık
Kıyafet Verisi</span></i></h3>

<p   style="margin-left:14.2pt;text-align:justify; "><span style=" color:black">Vakıf
tarafından çalışanlara dağıtılmak üzere onlara
verilerek zimmetlenen giysilerin </span><span style=" 
color:black">hazırlanması</span><span style=" 
color:black"> amacıyla, Kişinin giyim kuşamına ait
ayırt edici özelliğe sahip veriler (Ör: beden bilgilerinin
bulunduğu veriler)</span></p>

<h3 style="margin-left:21.3pt; "><b><i><span   style=" color:#C0504D">4.1.15. </span></i></b><i><span   style=" color:#C0504D">Özel Nitelikli
Kişisel Veri</span></i></h3>

<p   style="margin-left:14.2pt;text-align:justify; "><span style=" color:black">Kanun’nun</span><span style=" color:black"> 6. maddesinde belirtilen
veriler (Ör: kan grubu da dahil sağlık verileri, biyometrik veriler, ceza
mahkumiyetine ilişkin veriler ve üye olunan dernek bilgisi gibi)</span></p>

<h2 style="text-align:justify "><span   style=" color:#C0504D">4.2. </span><span   style=" color:#C0504D">Kişisel Veri Sahibi
Kategorileri</span></h2>

<h3 style="margin-left:70.9pt;text-indent:-42.55pt"><b><span   style=" color:#C0504D">4.2.1. </span></b><b><span   style=" color:#C0504D">Çalışan</span></b></h3>

<p   style="margin-left:14.2pt;text-align:justify; "><span style=" color:black">Vakıf
tarafından yürütülen etkinlik, çalışan memnuniyeti, insan
kaynakları, denetim, hukuki uyum vb faaliyetler çerçevesinde kişisel
verileri işlenen Vakıf çalışanları </span></p>

<h3 style="margin-left:70.9pt;text-indent:-42.55pt"><b><span   style=" color:#C0504D">4.2.2. </span></b><b><span   style=" color:#C0504D">Ürün veya Hizmet Alan
Kişi/Potansiyel Ürün veya Hizmet Alan Kişi</span></b></h3>

<p   style="margin-left:14.2pt;text-align:justify; "><span style=" color:black">Vakıf
ile herhangi bir sözleşmesel ilişkisi olup olmadığına
bakılmaksızın Vakıf iş birimlerinin yürüttüğü
ve/veya yürüteceği operasyonlar kapsamında Vakfın iş
ilişkileri üzerinden kişisel verileri elde edilen gerçek kişiler.
Vakfın restoran kafeterya gibi şubelerinden hizmet ve ürün almak
üzere gelen müşterilerimizdir ve/veya potansiyel müşterilerimizdir.</span></p>

<h3 style="margin-left:70.9pt;text-indent:-42.55pt"><b><span   style=" color:#C0504D">4.2.3. </span></b><b><span   style=" color:#C0504D">Çalışan
Adayı</span></b></h3>

<p   style="margin-left:14.2pt;text-align:justify; "><span style=" color:black">Vakıfa
herhangi bir yolla iş başvurusunda bulunmuş ya da özgeçmiş
ve ilgili bilgilerini Vakfın incelemesine açmış olan gerçek
kişiler</span></p>

<h3 style="margin-left:70.9pt;text-indent:-42.55pt"><b><span   style=" color:#C0504D">4.2.4. </span></b><b><span   style=" color:#C0504D">Bağışçı</span></b></h3>

<p   style="margin-left:14.2pt;text-align:justify; "><span style=" color:black">Vakfın
faaliyetleri için ayni ve nakdi destek sağlayan kişi ve kurumlar.</span></p>

<h3 style="margin-left:70.9pt;text-indent:-42.55pt"><b><span   style=" color:#C0504D">4.2.5. </span></b><b><span   style=" color:#C0504D">Gönüllü</span></b></h3>

<p   style="margin-left:14.2pt;text-align:justify; "><span style=" color:black">Vakfın
faaliyetleri çerçevesinde hiçbir ücret veya kazanç talep etmeksizin
yapılan işi yerine getiren gerçek kişi.</span></p>

<h3 style="margin-left:70.9pt;text-indent:-42.55pt"><b><span   style=" color:#C0504D">4.2.6. </span></b><b><span   style=" color:#C0504D">Ziyaretçi</span></b></h3>

<p   style="margin-left:14.2pt;text-align:justify; "><span style=" color:black">Vakfın
sahip olduğu fiziksel yerleşkelere çeşitli amaçlarla girmiş
olan veya internet sitelerimizi ziyaret eden gerçek kişiler</span></p>

<h3 style="margin-left:70.9pt;text-indent:-42.55pt"><b><span   style=" color:#C0504D">4.2.7. </span></b><b><span   style=" color:#C0504D">Hissedar/Ortak</span></b></h3>

<p   style="margin-left:14.2pt;text-align:justify; "><span style=" color:black">Vakfın
yönetim kurulu üyesi ve diğer yetkili gerçek kişiler</span></p>

<h3 style="margin-left:70.9pt;text-indent:-42.55pt"><b><span   style=" color:#C0504D">4.2.8. </span></b><b><span   style=" color:#C0504D">İş
birliği İçinde Olduğumuz Kurumların
Çalışanları ve Yetkilileri </span></b></h3>

<p   style="margin-left:14.2pt;text-align:justify; "><span style="position:absolute;z-index:251669504;left:0px;
margin-left:-110px;margin-top:1202px;width:83px;height:1403px"> </span><span style=" color:black">Vakfın her türlü iş
ilişkisi içerisinde bulunduğu kurumlarda (iş ortağı,
tedarikçi gibi, ancak bunlarla sınırlı olmaksınız)
çalışan, bu kurumların yetkilileri dahil olmak üzere, gerçek
kişiler</span></p>

<h3 style="margin-left:70.9pt;text-indent:-42.55pt"><b><span   style=" color:#C0504D">4.2.9. </span></b><b><span   style=" color:#C0504D">Kayıt
Ortamları</span></b></h3>

<p   style="margin-left:14.2pt;text-align:justify; "><span style=" color:black">Kişisel
veriler, Vakıf tarafından aşağıda belirtilen
elektronik ve elektronik olmayan ortamlarda, veri kayıt sisteminin bir
parçası olmak kaydııyla hukuka uygun olarak güvenli bir
şekilde saklanır.</span></p>

<p   style="margin-left:14.2pt;text-align:justify; "><b><span style=" color:#1F497D">Elektronik
Ortamlar</span></b><span style=" color:#1F497D">:</span><span style=" color:#1F497D"> </span><span style=" color:black">Sunucular (Etki alanı,
yedekleme, e-posta, veritabanı, web, dosya paylaşım, vb.) </span><span style="font-family:Symbol;color:black">ü</span><span style=" 
color:black"> Yazılımlar (ofis yazılımları, portal) </span><span style="font-family:Symbol;color:black">ü</span><span style=" 
color:black"> Bilgi güvenliği cihazları (güvenlik duvarı,
saldırı tespit ve engelleme, günlük kayıt dosyası,
antivirüs vb. ) </span><span style="font-family:Symbol;color:black">ü</span><span style=" color:black"> Kişisel bilgisayarlar
(Masaüstü, dizüstü) </span><span style="font-family:Symbol;color:black">ü</span><span style=" color:black"> Mobil cihazlar (telefon,
tablet vb.) </span><span style="font-family:Symbol;color:black">ü</span><span style=" color:black"> Optik diskler (CD, DVD vb.) </span><span style="font-family:Symbol;color:black">ü</span><span style=" 
color:black"> Çıkartılabilir bellekler (USB, Hafıza Kart vb.) </span><span style="font-family:Symbol;color:black">ü</span><span style=" 
color:black"> Yazıcı, tarayıcı, fotokopi makinesi</span></p>

<p    ><span   style=" 
color:black">Elektronik Olmayan Ortamlar:</span><span   style=" color:black"> Kağıt, Manuel veri kayıt
sistemleri </span></p>

<h1 style="text-align:justify "><a name="_Toc506193078"><span   style=" 
color:#C0504D">5. </span><span   style=" 
color:#C0504D">Kişisel Verilerin Korunması</span></a></h1>

<h2 style="text-align:justify "><span   style=" color:#C0504D">5.1. </span><span   style=" color:#C0504D">Kişisel Verilerin
Güvenliği</span></h2>

<p   style="margin-left:14.2pt;text-align:justify; "><span style=" color:black">Vakıf,
kişisel verilerin hukuka uygun işlenmesini sağlamak için,
teknolojik imkânlar ve uygulama maliyetine göre teknik ve idari tedbirler
almaktadır.</span></p>

<h3 style="margin-left:1.0cm; "><b><span   style=" color:#C0504D">5.1.1. </span></b><span   style=" color:#C0504D">Teknik Tedbirler</span></h3>

<h4 style="margin-left:3.0cm;text-indent:-42.5pt"><span   style=" color:#C0504D">5.1.1.1. </span><span   style=" color:black ">Vakıf
bünyesinde gerçekleştirilen kişisel veri işleme faaliyetleri
kurulan teknik sistemlerle denetlenmektedir.</span></h4>

<h4 style="margin-left:3.0cm;text-indent:-42.5pt"><span   style=" color:#C0504D">5.1.1.2. </span><span   style=" color:black ">Teknik
konularda bilgili personeli olan danışman firmalarla anlaşmalar
yapılmaktadır.</span></h4>

<h3 style="margin-left:70.9pt; "><b><span   style=" color:#C0504D">5.1.2. </span></b><span   style=" color:black">İdari Tedbirler</span></h3>

<h4 style="margin-left:3.0cm;text-indent:-42.5pt"><span   style=" color:#C0504D">5.1.2.1. </span><span   style=" color:black ">Çalışanlar,
kişisel verilerin korunması hukuku ve kişisel verilerin hukuka
uygun olarak işlenmesi konusunda bilgilendirilmekte ve
eğitilmektedir.</span></h4>

<h4 style="margin-left:3.0cm;text-indent:-42.5pt"><span   style=" color:#C0504D">5.1.2.2. </span><span   style=" color:black ">Vakfın
yürütmekte olduğu tüm faaliyetler detaylı olarak tüm iş
birimleri özelinde </span><span style="position:absolute;z-index:251671552;
left:0px;margin-left:-110px;margin-top:1360px;width:83px;height:1403px"> </span><span   style=" color:black ">analiz
edilerek, bu analiz neticesinde ilgili iş birimlerinin
gerçekleştirmiş olduğu faaliyetler özelinde kişisel veri
işleme faaliyetleri ortaya konulmaktadır.</span></h4>

<h4 style="margin-left:3.0cm;text-indent:-42.5pt"><span   style=" color:#C0504D">5.1.2.3. </span><span   style=" color:black ">Vakfın
iş birimlerinin yürütmekte olduğu kişisel veri işleme
faaliyetleri; bu faaliyetlerin Kanun’nun aradığı kişisel
veri işleme şartlarına uygunluğun sağlanması için
yerine getirilecek olan gereklilikler genel olarak ele alınmakta ve
belirlenmektedir.</span></h4>

<h4 style="margin-left:3.0cm;text-indent:-42.5pt"><span   style=" color:#C0504D">5.1.2.4. </span><span   style=" color:black ">İş
birimi bazında belirlenen hukuksal uyum gerekliliklerinin
sağlanması için ilgili iş birimleri özelinde
farkındalık yaratılmakta ve uygulama kuralları
belirlenmekte; bu hususların denetimini ve uygulamanın
sürekliliğini sağlamak için gerekli idari tedbirler vakıf içi
politikalar ve eğitimler yoluyla hayata geçirilmektedir.</span></h4>

<h2 style="text-align:justify "><span   style=" color:#C0504D">5.2. </span><span   style=" color:#C0504D">Kişisel Verilere Hukuka
Aykırı Erişimin Engellenmesi</span></h2>

<h3 style="margin-left:70.9pt; "><b><span   style=" color:#C0504D">5.2.1. </span></b><span   style=" color:black">Teknik Tedbirler</span></h3>

<h4 style="margin-left:3.0cm;text-indent:-42.5pt"><span   style=" color:#C0504D">5.2.1.1. </span><span   style=" color:black ">Teknolojideki
gelişmelere uygun teknik önlemler alınmakta, alınan önlemler
periyodik olarak güncellenmekte ve yenilenmektedir.</span></h4>

<h4 style="margin-left:3.0cm;text-indent:-42.5pt"><span   style=" color:#C0504D">5.2.1.2. </span><span   style=" color:black ">İş
birimi bazında belirlenen hukuksal uyum gerekliliklerine uygun olarak
erişim ve yetkilendirme konusunda gerekli teknik çözümler
benimsenmektedir. Fiziksel arşivlere erişim konusunda yetki
tanımlamaları yapılmaktadır. </span></h4>

<h4 style="margin-left:3.0cm;text-indent:-42.5pt"><span   style=" color:#C0504D">5.2.1.3. </span><span   style=" color:black ">Erişim
yetkileri sınırlandırılmakta, yetkiler düzenli olarak
gözden geçirilmektedir.</span></h4>

<h4 style="margin-left:3.0cm;text-indent:-42.5pt"><span   style=" color:#C0504D">5.2.1.4. </span><span   style=" color:black ">Virüs
koruma sistemleri ve güvenlik duvarlarını içeren yazılımlar
ve donanımlar kurulmaktadır.</span></h4>

<h4 style="margin-left:3.0cm;text-indent:-42.5pt"><span   style=" color:#C0504D">5.2.1.5. </span><span   style=" color:black ">Teknik
konularda bilgili personel bulunduran firmalardan danışmanlık
alınmaktadır. </span></h4>

<h4 style="margin-left:3.0cm;text-indent:-42.5pt"><span   style=" color:#C0504D">5.2.1.6. </span><span   style=" color:black ">Kişisel
verilerin toplandığı uygulamalardaki güvenlik
açıklarını saptamak için düzenli olarak güvenlik
taramalarından geçirilmektedir. Bulunan açıkların
kapatılması sağlanmaktadır.</span></h4>

<h3 style="margin-left:70.9pt; "><b><span   style=" color:#C0504D">5.2.2. </span></b><span   style=" color:black">İdari Tedbirler</span></h3>

<h4 style="margin-left:3.0cm;text-indent:-42.5pt"><span   style=" color:#C0504D">5.2.2.1. </span><span   style=" color:black ">Çalışanlar,
kişisel verilere hukuka aykırı erişimi engellemek için
alınacak teknik tedbirler konusunda bilgilendirilmektedir.</span></h4>

<h4 style="margin-left:3.0cm;text-indent:-42.5pt"><span   style=" color:#C0504D">5.2.2.2. </span><span   style=" color:black ">İş
birimi bazında kişisel veri işlenmesi hukuksal uyum
gerekliliklerine uygun olarak vakıf içinde kişisel verilere
erişim ve yetkilendirme süreçleri tasarlanmakta ve uygulanmaktadır.
Yetkilendirme Matrisi altında bu yetkilendirmeler belirlenmekte ve
Yetkilendirme Matrisi ………………… birimi tarafından güncel tutulmaktadır.
</span></h4>

<h4 style="margin-left:3.0cm;text-indent:-42.5pt"><span   style=" color:#C0504D">5.2.2.3. </span><span   style=" color:black ">Çalışanlar,
öğrendikleri kişisel verileri Kanun hükümlerine aykırı
olarak başkasına açıklayamayacağı ve işleme
amacı dışında kullanamayacağı ve bu
yükümlülüğün görevden ayrılmalarından sonra da devam
edeceği konusunda bilgilendirilmekte ve bu doğrultuda kendilerinden
gerekli taahhütler alınmaktadır.</span></h4>

<h4 style="margin-left:3.0cm;text-indent:-42.5pt"><span   style=" color:#C0504D">5.2.2.4. </span><span   style=" color:black ">Vakıf
tarafından kişisel verilerin hukuka uygun olarak
aktarıldığı kişiler ile akdedilen sözleşmelere;
kişisel verilerin aktarıldığı kişilerin,
kişisel verilerin korunması amacıyla gerekli güvenlik
tedbirlerini alacağına ve kendi kuruluşlarında bu
tedbirlere uyulmasını sağlayacağına ilişkin
hükümler eklenmektedir.</span></h4>

<h2 style="text-align:justify "><span   style=" color:#C0504D">5.3. </span><span   style=" color:#C0504D">Kişisel Verilerin
Güvenli Ortamlarda Saklanması</span></h2>

<h3 style="margin-left:70.9pt; "><b><span   style=" color:#C0504D">5.3.1. </span></b><span   style=" color:black">Teknik Tedbirler</span></h3>

<h4 style="margin-left:3.0cm;text-indent:-42.5pt"><span   style=" color:#C0504D">5.3.1.1. </span><span   style=" color:black ">Saklanma
alanlarına yönelik güvenlik sistemleri kurulmakta, alınan önlemler
periyodik olarak güncellenmekte, risk teşkil eden hususlar yeniden
değerlendirilerek gerekli çözümler araştırılmaktadır.</span></h4>

<h4 style="margin-left:3.0cm;text-indent:-42.5pt"><span   style=" color:#C0504D">5.3.1.2. </span><span   style=" color:black ">Kişisel
verilerin güvenli bir biçimde saklanmasını sağlamak için hukuka
uygun bir </span><span style="position:absolute;z-index:251673600;left:0px;
margin-left:-110px;margin-top:1640px;width:83px;height:1403px"> </span><span   style=" color:black ">biçimde
yedekleme programları kullanılmaktadır.</span></h4>

<h4 style="margin-left:3.0cm;text-indent:-42.5pt"><span   style=" color:#C0504D">5.3.1.3. </span><span   style=" color:black ">Kişisel
verilerin bulunduğu arşiv alanlarında erişimler kayıt
altına alınarak yetkisiz kişilerin girişleri engellenmekte,
olası ihlaller anlık olarak raporlanmaktadır. </span></h4>

<h4 style="margin-left:3.0cm;text-indent:-42.5pt"><span   style=" color:#C0504D">5.3.1.4. </span><span   style=" color:black ">Kişisel
verilerin bulunduğu veri depolama alanlarına erişimler
loglanarak uygunsuz erişimler veya erişim denemeleri ilgililere
anlık olarak iletilmektedir.</span></h4>

<h3 style="margin-left:70.9pt; "><b><span   style=" color:#C0504D">5.3.2. </span></b><span   style=" color:black">İdari Tedbirler</span></h3>

<h4 style="margin-left:3.0cm;text-indent:-42.5pt"><span   style=" color:#C0504D">5.3.2.1. </span><span   style=" color:black ">Çalışanlar,
kişisel verilerin güvenli bir biçimde saklanmasını sağlamak
konusunda eğitilmektedirler.</span></h4>

<h4 style="margin-left:3.0cm;text-indent:-42.5pt"><span   style=" color:#C0504D">5.3.2.2. </span><span   style=" color:black ">Vakıf
tarafından kişisel verilerin saklanması konusunda teknik
gereklilikler sebebiyle dışarıdan bir hizmet alınması
durumunda, kişisel verilerin hukuka uygun olarak
aktarıldığı ilgili firmalar ile akdedilen
sözleşmelere; kişisel verilerin aktarıldığı
kişilerin, kişisel verilerin korunması amacıyla gerekli
güvenlik tedbirlerini alacağına ve kendi kuruluşlarında bu
tedbirlere uyulmasını sağlanacağına ilişkin
hükümlere yer verilmektedir.</span></h4>

<h2 style="text-align:justify "><span   style=" color:#C0504D">5.4. </span><span   style=" color:#C0504D">Tedbirlerin Denetimi</span></h2>

<p   ><span   style=" 
color:black">Vakıf, Kanun’nun 12. maddesine uygun olarak, danışman
avukatları ve bilgi sistemleri danışmanları
aracılığıyla 2 yılda bir teknik denetimleri
gerçekleştirmektedir. Bu denetim sonuçları Vakfın iç
işleyişi kapsamında konu ile ilgili bölüme raporlanmakta ve
alınan tedbirlerin iyileştirilmesi için gerekli faaliyetler
yürütülmektedir.</span></p>

<h2 style="text-align:justify "><span   style=" color:#C0504D">5.5. </span><span   style=" color:#C0504D">Kişisel Verilerin
İfşası Durumunda Alınacak Tedbirler</span></h2>

<p   ><span   style=" 
color:black">Vakıf çalışanlarından herhangi biri
kişisel verilerin işbu politikaya aykırı şekilde ve
kanuni olmayan yollarla elde edildiğine, işlendiğine üçüncü
kişilere aktarıldığına, imha edilmesi gerektiği
halde imha edilmediğine şahit olursa bu durumu derhal veri sorumlusu
olarak belirlenen kişilere iletecektir. </span></p>

<p   ><span   style=" 
color:black">Çalışanların bu kurallara uygun davranması
konusunda yöneticilerin takip yükümlülüğü bulunmakta olup, verilerin
işbu politika dışında aktarıldığı ya da
işlendiğine dair bir şüphe olması durumunda birim müdürleri
İnsan Kaynaklarını bilgilendirir. </span></p>

<p   ><span   style=" 
color:black">İnsan Kaynakları sözü edilen veri ihlalinin hukuksal
sonuç doğurabilecek nitelikte olduğuna karar verirse ilgili hukuk
danışmanlarını bilgilendirir. </span></p>

<p   ><span   style=" 
color:black">İlgili veri sorumlusu konuyu disiplin kuruluna sevk edecek ve
ihlalde bulunanlar hakkında vakıf iç yönergeleri doğrultusunda
gerekli önlemler alınacaktır. </span></p>

<p   ><span   style=" 
color:black">Vakıf ayrıca, Kanun’nun 12. maddesine uygun olarak
işlenen kişisel verilerin kanuni olmayan yollarla başkaları
tarafından elde edilmesi halinde bu durumu en kısa sürede ilgili
kişisel veri sahibine ve Kurulu’na bildirilmesini sağlayan sistemi
yürütmektedir.</span></p>

<p   ><span   style=" 
color:black">Kurul tarafından gerek görülmesi halinde, bu durum, Kurul’nun
internet sitesinde veya başka bir yöntemle ilan edilebilecektir.</span></p>

<p   ><span   style=" 
color:black">Kurul tarafından verilen uyarıların en geç 30 gün
içinde yerine getirilmesi konu hakkında danışmanlık
alınmasını gerektiriyorsa ilgili konuda (teknik/hukuksal)
danışmanlık alınarak Kurul kararlarının
uygulanması sağlanacaktır. </span></p>

<h1 style="text-align:justify "><a name="_Toc506193079"><span   style=" 
color:#C0504D">6. </span><span   style=" 
color:#C0504D">Özel Nitelikli Kişisel Verilerin Korunması</span></a></h1>

<p   style="margin-left:1.0cm; "><span   style=" color:black">Kanunda birtakım
kişisel verilere hukuka aykırı olarak işlendiğinde
kişilerin mağduriyetine </span><span style="position:absolute;
z-index:251675648;left:0px;margin-left:-110px;margin-top:1890px;width:83px;
height:1403px"> </span><span   style=" color:black">veya
ayrımcılığa sebep olma riski nedeniyle özel önem
atfedilmiştir. Bu veriler; kılık ve kıyafet, dernek,
sağlık, ceza mahkûmiyeti ve güvenlik tedbirleriyle ilgili veriler ile
biyometrik ve genetik verilerdir.</span></p>

<p   style="margin-left:1.0cm; "><span   style=" color:black">Vakıf tarafından, Kanunda
<i>“özel nitelikli”</i> olarak belirlenen ve hukuka uygun olarak işlenen
özel nitelikli kişisel verilerin korunmasında hassasiyetle
davranılmaktadır. Bu kapsamda, Vakıf tarafından,
kişisel verilerin korunması için alınan teknik ve idari
tedbirler, özel nitelikli kişisel veriler bakımından özenle
uygulanmakta ve Vakıf bünyesinde gerekli denetimler
sağlanmaktadır. </span></p>

<h1 style="text-align:justify "><a name="_Toc506193080"><span   style=" 
color:#C0504D">7. </span><span   style=" 
color:#C0504D">İş Birimlerinin farkındalık eğitimi ve
denetimi</span></a></h1>

<p   style="margin-left:1.0cm; "><span   style=" color:black">Vakıf, kişisel
verilerin hukuka aykırı olarak işlenmesini, verilere hukuka
aykırı olarak erişilmesini önlemeye ve verilerin
muhafazasını sağlamaya yönelik farkındalığın
artırılması için iş birimlerine gerekli eğitimlerin
düzenlenmesini sağlamaktadır.</span></p>

<p   style="margin-left:1.0cm; "><span   style=" color:black">Vakıf iş birimlerinin
mevcut çalışanlarının ve iş birimi bünyesine yeni
dahil olmuş çalışanların kişisel verilerin
korunması konusunda farkındalığının
oluşması için gerekli sistemler kurulmakta, konuya ilişkin
ihtiyaç duyulması halinde profesyonel kişiler ile
çalışılmaktadır.</span></p>

<p   style="margin-left:1.0cm; "><span   style=" color:black">Vakfın iş
birimlerinin kişisel verilerin korunması ve işlenmesi konusunda
farkındalığın artırılmasına yönelik
yürütülen eğitim sonuçları Vakfa raporlanmaktadır. Vakıf bu
doğrultuda ilgili eğitimlere, seminerlere ve bilgilendirme
oturumlarına yapılan katılımları değerlendirmekte
ve gerekli denetimleri yapmakta veya yaptırmaktadır. Vakıf,
ilgili mevzuatın güncellenmesine paralel olarak eğitimlerini
güncellemekte ve yenilemektedir.</span></p>

<h1 style="text-align:justify "><a name="_Toc506193082"><span   style=" 
color:#C0504D">8. </span><span   style=" 
color:#C0504D">Kişisel Verilerin İşlenmesine İlişkin
Hususlar</span></a></h1>

<h2 style="text-align:justify "><span   style=" color:#C0504D">8.1. </span><span   style=" color:#C0504D">Mevzuatta Öngörülen
İlkelere Uygun Olarak İşlenmesi</span></h2>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">8.1.1. </span></b><b><span   style=" color:#C0504D">Hukuka ve Dürüstlük
Kuralına Uygun İşleme</span></b></h3>

<p   style="margin-left:1.0cm; "><span   style=" color:black">Vakıf, Kişisel
verilerin işlenmesinde hukuksal düzenlemelerle getirilen ilkeler ile genel
güven ve dürüstlük kuralına uygun hareket etmektedir. Bu kapsamda Vakıf,
kişisel verilerin işlenmesinde orantılılık
gerekliliklerini dikkate almakta, kişisel verileri amacın
gerektirdiği dışında kullanmamaktadır.</span></p>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">8.1.2. </span></b><b><span   style=" color:#C0504D">Doğru ve Güncel
Olmasını Sağlama</span></b></h3>

<p   style="margin-left:1.0cm; "><span   style=" color:black">Vakıf, Kişisel veri
sahiplerinin temel haklarını ve kendi meşru menfaatlerini
dikkate alarak işlediği kişisel verilerin doğru ve güncel
olmasını sağlamaktadır. Bu doğrultuda gerekli
tedbirleri almaktadır. Verilerin geçerliliği ortadan
kalktığında imha edilmesini sağlamaktadır. </span></p>

<h3><b><span   style=" color:#C0504D">8.1.3. </span></b><b><span   style=" color:#C0504D">Belirli, Açık ve
Meşru Amaçlarla İşleme</span></b></h3>

<p   style="margin-left:1.0cm; "><span   style=" color:black">Vakıf, Meşru ve
hukuka uygun olan kişisel veri işleme amacını açık ve
kesin olarak belirlemektedir. Vakıf, yürütmekte olduğu faaliyetler
ile bağlantılı ve bunlar için gerekli olan kadar
işlemektedir. Vakıf tarafından kişisel verilerin hangi
amaçla işleneceği henüz kişisel veri işleme faaliyeti
başlamadan ortaya konulmaktadır.</span></p>

<h3><b><span   style=" color:#C0504D">8.1.4. </span></b><b><span   style=" color:#C0504D">İşlendikleri
Amaçla Bağlantılı, Sınırlı ve Ölçülü olma</span></b></h3>

<p   style="margin-left:1.0cm; "><span   style=" color:black">Vakıf, Kişisel
verileri belirlenen amaçların gerçekleştirilebilmesine elverişli
bir biçimde işlemekte ve amacın gerçekleştirilmesiyle ilgili
olmayan veya ihtiyaç duyulmayan kişisel verilerin işlenmesinden
kaçınmaktadır. Örneğin, sonradan ortaya çıkması
muhtemel ihtiyaçların karşılanmasına yönelik kişisel
veri işleme faaliyeti yürütülmemektedir.</span></p>

<h3><b><span   style=" color:#C0504D">8.1.5. </span></b><b><span   style=" color:#C0504D">Gerekli Olan Süre
Kadar Muhafaza Etme</span></b></h3>

<p   style="margin-left:1.0cm; "><span   style=" color:black">Vakıf, kişisel
verileri ancak ilgili mevzuatta belirtildiği veya işlendikleri amaç
için gerekli olan </span><span style="position:absolute;z-index:251677696;
left:0px;margin-left:-110px;margin-top:2143px;width:83px;height:1403px"> </span><span   style=" color:black">süre kadar muhafaza
etmektedir. Bu kapsamda, Vakıf öncelikle ilgili mevzuatta kişisel
verilerin saklanması için bir süre öngörülüp öngörülmediğini tespit
etmekte, bir süre belirlenmişse bu süreye uygun davranmakta, bir süre
belirlenmemişse kişisel verileri işlendikleri amaç için gerekli
olan süre kadar saklamaktadır. Sürenin bitimi veya işlenmesini
gerektiren sebeplerin ortadan kalkması halinde kişisel veriler Vakıf
tarafından silinmekte, yok edilmekte veya anonim hale getirilmektedir.
Gelecekte kullanma ihtimali ile Vakıf tarafından kişisel veriler
saklanmamaktadır.</span></p>

<h1 style="text-align:justify "><a name="_Toc506193083"><span   style=" 
color:#C0504D">9. </span><span   style=" 
color:#C0504D">Kişisel Verileri, KVKK 5.Maddesinde Belirtilen Kişisel
Veri İşleme Şartlarından Bir veya Birkaçına
Dayalı ve Bu Şartlarla Sınırlı Olarak İşleme</span></a><span   style=" color:#C0504D"> </span></h1>

<p    ><span   style=" 
color:black">Kişisel verilerin korunması Anayasal bir haktır.
Temel hak ve hürriyetler, özlerine dokunulmaksızın yalnızca
Anayasa’nın ilgili maddelerinde belirtilen sebeplere bağlı
olarak ve ancak kanunla sınırlanabilir. Anayasa’nın 20.
maddesinin üçüncü fıkrası gereğince, kişisel veriler ancak
kanunda öngörülen hallerde veya kişinin açık rızasıyla
işlenebilecektir. Vakıf bu doğrultuda ve Anayasa’ya uygun bir
biçimde; kişisel verileri, ancak kanunda öngörülen hallerde veya
kişinin açık rızasıyla işlemektedir. </span></p>

<h1 style="text-align:justify "><a name="_Toc506193085"><span   style=" 
color:#C0504D">10. </span><span   style=" 
color:#C0504D">Kişisel Veri Sahibinin Aydınlatılması ve
Bilgilendirilmesi</span></a></h1>

<p    ><span   style=" 
color:black">Vakıf, Kanun’nun 10. maddesine uygun olarak, kişisel
verilerin elde edilmesi sırasında Kişisel Veri Sahiplerini
aydınlatmaktadır. Bu kapsamda Vakıf, varsa temsilcisinin
kimliği, kişisel verilerin hangi amaçla işleneceği,
işlenen kişisel verilerin kimlere ve hangi amaçla aktarılabileceği,
kişisel veri toplamanın yöntemi ve hukuki sebebi ile kişisel
veri sahibinin sahip olduğu hakları konusunda aydınlatma
yapmaktadır.</span></p>

<p    ><span   style=" 
color:black">Anayasa’nın 20. maddesinde herkesin, kendisiyle ilgili
kişisel veriler hakkında bilgilendirilme hakkına sahip
olduğu ortaya konulmuştur. Bu doğrultuda Kanun’nun 11.
maddesinde kişisel veri sahibinin hakları arasında “bilgi talep
etme” de sayılmıştır. Vakıf bu kapsamda,
Anayasa’nın 20. ve Kanun’nun 11. maddelerine uygun olarak Kişisel
Veri Sahibi’nin bilgi talep etmesi durumunda gerekli bilgilendirmeyi
yapmaktadır.</span></p>

<h1 style="text-align:justify "><a name="_Toc506193086"><span   style=" 
color:#C0504D">11. </span><span   style=" 
color:#C0504D">Özel Nitelikli Kişisel Verilerin İşlenmesi</span></a></h1>

<p    ><span   style=" 
color:black">Vakıf tarafından, Kanun ile “özel nitelikli” olarak
belirlenen kişisel verilerin işlenmesinde, Kanun’nda öngörülen
düzenlemelere hassasiyetle uygun davranılmaktadır.</span></p>

<p    ><span   style=" 
color:black">Kanun’nun 6. maddesinde, hukuka aykırı olarak
işlendiğinde kişilerin mağduriyetine veya
ayrımcılığa sebep olma riski taşıyan bir
takım kişisel veri “özel nitelikli” olarak belirlenmiştir. Bu
veriler; kılık ve kıyafet, dernek, sağlık, ceza
mahkûmiyeti, biyometrik veriler ve güvenlik tedbirleriyle ilgili veriler ile
biyometrik ve genetik verilerdir.</span></p>

<p    ><span   style=" 
color:black">Kanun’na uygun bir biçimde Vakıf tarafından; özel
nitelikli kişisel veriler, Kurul tarafından belirlenecek olan yeterli
önlemlerin alınması kaydıyla aşağıdaki durumlarda
işlenmektedir:</span></p>

<h2 style="text-align:justify "><span   style=" color:#C0504D">11.1. </span><span   style=" color:black ">Kişisel
veri sahibinin açık rızası var ise veya</span></h2>

<h2 style="text-align:justify "><span   style=" color:#C0504D">11.2. </span><span   style=" color:black ">Kişisel
veri sahibinin açık rızası yok ise;</span></h2>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">11.2.1. </span></b><span   style=" color:black">Kişisel veri
sahibinin sağlığı ve cinsel hayatı
dışındaki özel nitelikli kişisel veriler, kanunlarda
öngörülen hallerde,</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">11.2.2. </span></b><span style="position:absolute;z-index:251679744;left:0px;margin-left:-110px;
margin-top:2369px;width:83px;height:1403px"> </span><span   style=" color:black">Kişisel veri
sahibinin sağlığına ve cinsel hayatına ilişkin
özel nitelikli kişisel verileri ise ancak kamu
sağlığının korunması, koruyucu hekimlik,
tıbbi teşhis, tedavi ve bakım hizmetlerinin yürütülmesi,
sağlık hizmetleri ile finansmanının planlanması ve yönetimi
amacıyla, sır saklama yükümlülüğü altında bulunan
kişiler veya yetkili kurum ve kuruluşlar tarafından
işlenmektedir.</span></h3>

<h1 style="text-align:justify "><a name="_Toc506193087"><span   style=" 
color:#C0504D">12. </span><span   style=" 
color:#C0504D">Verilerin Üçüncü Kişilere Aktarılması</span></a></h1>

<p    ><span   style=" 
color:black">Vakıf, hukuka uygun olan kişisel veri işleme
amaçları doğrultusunda gerekli güvenlik önlemlerini alarak
kişisel veri sahibinin kişisel verilerini ve özel nitelikli
kişisel verilerini üçüncü kişilere aktarabilmektedir. Bu durum kimi
zaman yasal bir zorunluluk gereği kamu kurum ve kuruluşlarına
aktarım yapılması şeklinde olabileceği gibi bazen de sözleşmesel
yükümlülüklerimizin yerine getirilmesinin bir gereği olarak üçüncü
kişilere aktarım şeklinde gerçekleştirilebilmektedir. Bununla
birlikte Vakıf herhangi bir ticari fayda elde etmek amacıyla
Kişisel Verileri üçüncü kişilere aktarmamaktadır. Vakıf bu
doğrultuda Kanun’nun 8. maddesinde öngörülen düzenlemelere uygun hareket
etmektedir. </span></p>

<p  style="margin-left:14.2pt; "><span   style=" color:black">Vakıf tarafından
herhangi bir veri aktarımı olması halinde veri aktarılan
kişilerin veri sorumlusu veya veri işleyen olması
durumlarına göre gerekli sözleşmeler imzalatılır. Vakıf
meşru ve hukuka uygun kişisel veri işleme amaçları
doğrultusunda aşağıda sayılan Kanun’nun 5. maddesinde
belirtilen kişisel veri işleme şartlarından bir veya
birkaçına dayalı ve sınırlı olarak kişisel
verileri üçüncü kişilere aktarabilmektedir:</span></p>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">12.1.1. </span></b><span   style=" color:black">Kişisel veri
sahibinin açık rızası var ise,</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">12.1.2. </span></b><span   style=" color:black">Kanunlarda kişisel
verinin aktarılacağına ilişkin açık bir düzenleme var
ise,</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">12.1.3. </span></b><span   style=" color:black">Kişisel veri
sahibinin veya başkasının hayatı veya beden
bütünlüğünün korunması için zorunlu ise ve kişisel veri sahibi
fiili imkânsızlık nedeniyle rızasını
açıklayamayacak durumda ise veya rızasına hukuki geçerlilik
tanınmıyorsa;</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">12.1.4. </span></b><span   style=" color:black">Bir sözleşmenin
kurulması veya ifasıyla doğrudan doğruya ilgili olmak
kaydıyla sözleşmenin taraflarına ait kişisel verinin
aktarılması gerekli ise,</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">12.1.5. </span></b><span   style=" color:black">Vakfın hukuki
yükümlülüğünü yerine getirmesi için kişisel veri aktarımı
zorunlu ise,</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">12.1.6. </span></b><span   style=" color:black">Kişisel veriler,
kişisel veri sahibi tarafından alenileştirilmiş ise,</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">12.1.7. </span></b><span   style=" color:black">Kişisel veri
aktarımı bir hakkın tesisi, kullanılması veya
korunması için zorunlu ise,</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">12.1.8. </span></b><span style="position:absolute;z-index:251681792;left:0px;margin-left:-110px;
margin-top:2551px;width:83px;height:1403px"> </span><span   style=" color:black">Kişisel veri
sahibinin temel hak ve özgürlüklerine zarar vermemek koşuluyla. </span></h3>

<h2 style="text-align:justify "><span   style=" color:#C0504D">12.2. </span><span   style=" color:#C0504D">Özel Nitelikli Kişisel
Verilerin Aktarılması</span></h2>

<p  style="margin-left:14.2pt; "><span   style=" color:black">Vakıf gerekli özeni
göstererek, gerekli güvenlik tedbirlerini alarak ve Kurul tarafından
öngörülen yeterli önlemleri alarak; meşru ve hukuka uygun kişisel
veri işleme amaçları doğrultusunda kişisel veri sahibinin
özel nitelikli kişisel verilerini aşağıdaki durumlarda
üçüncü kişilere aktarabilmektedir.</span></p>

<p  style="margin-left:14.2pt; "><span   style=" color:black">Veri sahibinin açık
rızasına dayalı olarak ve iş güvenliği, sigorta
yükümlülüklerinin yerine getirilmesi, özlük haklarının yerine
getirilmesi amacıyla </span><span   style=" 
color:black">gerekli kurum ve kuruluşlara</span><span   style=" color:black">, </span><span   style=" color:black">vakıf faaliyetleri
kapsamında vakıf ile anlaşmalı üçüncü kişilere, vakıf
etkinlik ve organizasyonları sebebi ile ilgili kurumlara</span><span   style=" color:black"> veri
aktarımı yapılmaktadır. </span></p>

<p  style="margin-left:14.2pt; "><span   style=" color:black">Bu haller
dışında </span><span   style=" 
color:black">Vakfımız</span><span   style=" 
color:black"> </span><span   style=" 
color:black">tarafından özel nitelikli kişisel verilerin üçüncü
kişilere aktarımı söz konusu değildir. </span></p>

<h1 style="text-align:justify "><a name="_Toc506193088"><span   style=" 
color:#C0504D">13. </span><span   style=" 
color:#C0504D">Verilerin Yurt Dışına Aktarılması</span></a></h1>

<p    ><span   style=" 
color:black">Vakıf özel nitelikli olsun ya da olmasın herhangi bir
Kişisel Veriyi yurt dışına aktarmamaktadır. </span></p>

<h1 style="text-align:justify "><a name="_Toc506193089"><span   style=" 
color:#C0504D">14. </span><span   style=" 
color:#C0504D">İşlenme Amaçları</span></a></h1>

<p    ><span   style=" 
color:black">Vakıf, Kanun’nun 5. maddesinin 2. fıkrasında ve 6.
maddenin 3. fıkrasında belirtilen kişisel veri işleme
şartları içerisindeki amaçlarla ve koşullarla
sınırlı olarak kişisel verileri işlemektedir. Bu
amaçlar ve koşullar;</span></p>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">14.1.1. </span></b><span   style=" color:black">Vakfın ilgili
faaliyette bulunmasının Kanunlarda açıkça öngörülmesi</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">14.1.2. </span></b><span   style=" color:black">Vakıf
tarafından işlenmesinin bir sözleşmenin kurulması veya
ifasıyla doğrudan doğruya ilgili ve gerekli olması</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">14.1.3. </span></b><span   style=" color:black">Vakfın hukuki
yükümlülüğünü yerine getirebilmesi için zorunlu olması</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">14.1.4. </span></b><span   style=" color:black">Veri sahipleri
tarafından alenileştirilmiş olması şartıyla veri
sahibinin alenileştirme amacıyla sınırlı bir
şekilde Vakıf tarafından işlenmesi</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">14.1.5. </span></b><span   style=" color:black">Kişisel verilerin Vakıf
tarafından işlenmesinin Vakfın veya veri sahiplerinin veya
üçüncü kişilerin haklarının tesisi, kullanılması veya
korunması için zorunlu olması</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">14.1.6. </span></b><span   style=" color:black">Veri sahiplerinin temel
hak ve özgürlüklerine zarar vermemek kaydıyla Vakıf meşru
menfaatleri için kişisel veri işleme faaliyetinde
bulunulmasının zorunlu olması</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">14.1.7. </span></b><span   style=" color:black">Vakıf
tarafından kişisel veri işleme faaliyetinde
bulunulmasının kişisel veri sahibinin ya da bir
başkasının hayatı veya beden bütünlüğünün
korunması için zorunlu olması ve bu durumda da kişisel veri
sahibinin fiili veya hukuki geçersizlik nedeniyle rızasını
açıklayamayacak durumda bulunması</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">14.1.8. </span></b><span   style=" color:black">Kişisel veri
sahibinin sağlığı dışındaki özel nitelikli
kişisel veriler açısından kanunlarda öngörülmüş olması</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">14.1.9. </span></b><span   style=" color:black">Kişisel veri
sahibinin sağlığına ilişkin özel nitelikli kişisel
verileri açısından ise kamu sağlığının
korunması, koruyucu hekimlik, tıbbi teşhis, tedavi ve bakım
hizmetlerinin yürütülmesi, sağlık hizmetleri ile
finansmanının planlanması ve yönetimi amacıyla, sır
saklama yükümlülüğü altında bulunan kişiler veya yetkili kurum
ve kuruluşlar tarafından işlenmesidir.</span></h3>

<p   style="margin-left:42.55pt; "><span   style=" color:black">Bu kapsamda Vakıf,
kişisel verilerinizi başlıca aşağıdaki amaçlarla
işlemektedir: Bu amaçlar zaman içerisinde değişebilecek olup
ilgili güncellemeler yapılacaktır. </span></p>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">14.1.10. </span></b><span   style=" color:black">Çalışan
Adayların Başvuru Sürecinin Yürütülmesi</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">14.1.11. </span></b><span style="position:absolute;z-index:251683840;left:0px;margin-left:-110px;
margin-top:2802px;width:83px;height:1403px"> </span><span   style=" color:black">Çalışanlar
İçin İş Akdi ve Mevzuat Kaynaklı Yükümlülüklerin Yerine
Getirilmesi</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">14.1.12. </span></b><span   style=" color:black">İnsan
kaynakları süreçlerinin yürütülmesi</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">14.1.13. </span></b><span   style=" color:black">İş
Sağlığı/ Güvenliği Faaliyetlerinin Yürütülmesi</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">14.1.14. </span></b><span   style=" color:black">Mal / Hizmet
Satış Süreçlerinin Yürütülmesi</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">14.1.15. </span></b><span   style=" color:windowtext">Mal/</span><span   style=" color:black"> </span><span   style=" color:black">Hizmet Satın Alım
Süreçlerinin Yürütülmesi</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">14.1.16. </span></b><span   style=" color:black">Fiziksel Mekan
Güvenliğinin Temini</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">14.1.17. </span></b><span   style=" color:black">Ürün / Hizmetlerin
Pazarlama Süreçlerinin Yürütülmesi </span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">14.1.18. </span></b><span   style=" color:black">Vakıf hukuk
işlerinin icrası/takibi</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">14.1.19. </span></b><span   style=" color:black">Talep ve şikayet
yönetimi</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">14.1.20. </span></b><span   style=" color:black">Yetkili
kuruluşlara mevzuattan kaynaklı bilgi verilmesi</span></h3>

<p   style="margin-left:42.55pt; "><span   style=" color:black">Ziyaretçi
kayıtlarının oluşturulması ve takibi </span><span   style=" color:black">Bahsi geçen amaçlarla
gerçekleştirilen işleme faaliyetinin, Kanun kapsamında öngörülen
şartlardan herhangi birini karşılamıyor olması
halinde, ilgili işleme sürecine ilişkin olarak Vakıf
tarafından açık rızanız temin edilmektedir.</span></p>

<h1 style="text-align:justify "><a name="_Toc506193090"><span   style=" 
color:#C0504D">15. </span><span   style=" 
color:#C0504D">Saklama Süreleri</span></a></h1>

<p    ><span   style=" 
color:black">Vakıf, ilgili kanunlarda ve mevzuatlarda öngörülmesi
durumunda kişisel verileri bu mevzuatlarda belirtilen süre boyunca
saklamaktadır. Saklama süreleri </span><span   style=" color:black">vakıfmIz</span><span   style=" color:black"> </span><span   style=" color:black">veri envanterlerinde her bir
veri kategorisi bazında belirtilmektedir. </span></p>

<p    ><span   style=" 
color:black">Kişisel verilerin ne kadar süre boyunca saklanması
gerektiğine ilişkin mevzuatta bir süre düzenlenmemişse,
Kişisel Veriler Vakfın o veriyi işlerken yürütülen faaliyet ile
bağlı olarak Vakfın uygulamaları ve teamüller uyarınca
işlenmesini gerektiren süre kadar işlenmekte daha sonra silinmekte,
yok edilmekte veya anonim hale getirilmektedir. </span></p>

<p    ><span   style=" 
color:black">Kişisel verilerin işlenme amacı sona ermiş;
ilgili mevzuat ve Vakfın belirlediği saklama sürelerinin de sonuna
gelinmişse; kişisel veriler yalnızca olası hukuki
uyuşmazlıklarda delil teşkil etmesi veya kişisel veriye
bağlı ilgili hakkın ileri sürülebilmesi veya savunmanın
tesis edilmesi amacıyla yasal zamanaşımı ve hak
düşürücü süreler dikkate alınarak saklanabilmektedir. Buradaki
sürelerin tesisinde bahsi geçen hakkın ileri sürülebilmesine yönelik zaman
aşımı süreleri ile zaman aşımı sürelerinin
geçmesine rağmen daha önce aynı konularda Vakfa yöneltilen
taleplerdeki örnekler esas alınarak saklama süreleri belirlenmektedir. Bu
durumda saklanan kişisel verilere herhangi bir başka amaçla
erişilmemekte ve ancak ilgili hukuki uyuşmazlıkta
kullanılması gerektiği zaman ilgili kişisel verilere
erişim sağlanmaktadır. Burada da bahsi geçen süre sona erdikten
sonra kişisel veriler silinmekte, yok edilmekte veya anonim hale
getirilmektedir.</span></p>

<h1 style="text-align:justify "><a name="_Toc506193094"><span   style=" 
color:#C0504D">16. </span><span   style=" 
color:#C0504D">Bina, Tesis Girişleri İle Bina Tesis İçerisinde
Yapılan Kişisel Veri İşleme Faaliyetleri İle
İnternet Sitesi Ziyaretçileri</span></a></h1>

<p    ><span   style=" 
color:black">Vakıf tarafından güvenliğin sağlanması
amacıyla, Vakfın binalarında ve tesislerinde güvenlik
kamerasıyla izleme faaliyeti ile misafir giriş
çıkışlarının takibine yönelik kişisel veri
işleme faaliyetinde bulunulmaktadır.</span></p>

<p    ><span   style=" 
color:black">Güvenlik kameraları kullanılması ve misafir
giriş çıkışlarının kayıt altına
alınması yoluyla Vakıf tarafından kişisel veri
işleme faaliyeti yürütülmüş olmaktadır.</span></p>

<h2 style="text-align:justify "><span   style=" color:#C0504D">16.1. </span><span   style=" color:#C0504D">Vakfın Bina, Tesis
Girişlerinde Ve İçerisinde Yürütülen Kamera İle İzleme
Faaliyeti</span></h2>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">16.1.1. </span></b><span   style=" color:#C0504D">Kamera ile
İzleme Faaliyetinin Yasal Dayanağı</span></h3>

<p  style="margin-left:42.55pt; "><span   style=" color:black">Vakıf tarafından
yürütülen kamera ile izleme faaliyeti, Özel Güvenlik Hizmetlerine Dair Kanun ve
ilgili mevzuata uygun olarak sürdürülmektedir.</span></p>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">16.1.2. </span></b><span style="position:absolute;z-index:251685888;left:0px;margin-left:-110px;
margin-top:3063px;width:83px;height:1403px"> </span><span   style=" color:#C0504D">Veri Koruma
Mevzuatına Göre Güvenlik Kamerası ile İzleme Faaliyeti
Yürütülmesi</span></h3>

<p  style="margin-left:42.55pt; "><span   style=" color:black">Vakıf tarafından
güvenlik amacıyla kamera ile izleme faaliyeti yürütülmesinde Kanun’da yer
alan düzenlemelere uygun hareket edilmektedir. Vakıf, bina ve tesislerinde
güvenliğin sağlanması amacıyla, yürürlükte bulunan ilgili
mevzuatta öngörülen amaçlarla ve Kanun’da sayılan kişisel veri
işleme şartlarına uygun olarak güvenlik kamerası izleme
faaliyetinde bulunmaktadır.</span></p>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">16.1.3. </span></b><span   style=" color:#C0504D">Kamera ile
İzleme Faaliyetinin Duyurulması</span></h3>

<p  style="margin-left:42.55pt; "><span   style=" color:black">Vakıf tarafından Kanun’nun
10. Maddesine uygun olarak, kişisel veri sahibi
aydınlatılmaktadır. Vakıf, genel hususlara ilişkin
olarak yaptığı aydınlatmanın kamera ile izleme
faaliyetine ilişkin bildirimde bulunmaktadır. Böylelikle,
kişisel veri sahibinin temel hak ve özgürlüklerine zarar verilmesinin
engellenmesi, şeffaflığın ve kişisel veri sahibinin
aydınlatılmasının sağlanması
amaçlanmaktadır.</span></p>

<p  style="margin-left:42.55pt; "><span   style=" color:black">Vakıf tarafından
kamera ile izleme faaliyetine yönelik olarak; Vakfın internet sitesinde
işbu Politika yayımlanmakta (çevrimiçi politika düzenlemesi) ve
izlemenin yapıldığı alanların girişlerine izleme
yapılacağına ilişkin bildirim yazısı
asılmaktadır (yerinde aydınlatma).</span></p>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">16.1.4. </span></b><span   style=" color:#C0504D">Kamera ile
İzleme Faaliyetinin Yürütülme Amacı ve Amaçla
Sınırlılık</span></h3>

<p  style="margin-left:42.55pt; "><span   style=" color:black">Vakıf, Kanun’un 4.
maddesine uygun olarak, kişisel verileri işlendikleri amaçla
bağlantılı, sınırlı ve ölçülü bir biçimde
işlemektedir.</span></p>

<p  style="margin-left:42.55pt; "><span   style=" color:black">Vakıf tarafından
video kamera ile izleme faaliyetinin sürdürülmesindeki amaç bu Politika’da
sayılan amaçlarla sınırlıdır. Bu doğrultuda,
güvenlik kameralarının izleme alanları, sayısı ve ne
zaman izleme yapılacağı, güvenlik amacına ulaşmak için
yeterli ve bu amaçla sınırlı olarak uygulamaya
alınmaktadır. Kişinin mahremiyetini güvenlik
amaçlarını aşan şekilde müdahale sonucu doğurabilecek
alanlarda (örneğin, tuvaletler) izlemeye tabi tutulmamaktadır.</span></p>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">16.1.5. </span></b><span   style=" color:#C0504D">Elde Edilen Verilerin
Güvenliğinin Sağlanması</span></h3>

<p  style="margin-left:42.55pt; "><span   style=" color:black">Vakıf tarafından Kanun’un
12. maddesine uygun olarak, kamera ile izleme faaliyeti sonucunda elde edilen
kişisel verilerin güvenliğinin sağlanması için gerekli
teknik ve idari tedbirler alınmaktadır.</span></p>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">16.1.6. </span></b><span   style=" color:#C0504D">Kamera ile
İzleme Faaliyeti ile Elde Edilen Kişisel Verilerin Muhafaza Süresi</span></h3>

<p  style="margin-left:42.55pt; "><span   style=" color:black">Vakfın, kamera ile izleme
faaliyeti ile elde edilen kişisel verileri muhafaza süresi ile ilgili
ayrıntılı bilgiye bu Politika’ın Kişisel Verilerin
Saklanma Süreleri maddesinde yer verilmiştir.</span></p>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">16.1.7. </span></b><span   style=" color:#C0504D">İzleme Sonucunda
Elde Edilen Bilgilere Kimlerin Erişebildiği ve Bu Bilgilerin Kimlere
Aktarıldığı</span></h3>

<p  style="margin-left:42.55pt; "><span   style=" color:black">Canlı kamera görüntüleri
ile dijital ortamda kaydedilen ve muhafaza edilen kayıtlara yalnızca
sınırlı sayıda Vakıf çalışanının
erişimi bulunmaktadır. Kayıtlara erişimi olan
sınırlı sayıda kişi gizlilik taahhütnamesi ile
eriştiği verilerin gizliliğini koruyacağını beyan
etmektedir.</span></p>

<h2 style="text-align:justify "><span   style=" color:#C0504D">16.2. </span><span   style=" color:#C0504D">Vakfın Bina, Tesis
Girişlerinde Ve İçerisinde Yürütülen Misafir Giriş
Çıkışlarının Takibi</span></h2>

<p    ><span   style=" 
color:black">Vakıf tarafından; güvenliğin sağlanması
ve bu Politika’da belirtilen amaçlarla, Vakıf binalarında ve
tesislerinde misafir giriş çıkışlarının takibine
yönelik kişisel veri işleme faaliyetinde bulunulmaktadır.</span></p>

<p    ><span   style=" 
color:black">Misafir olarak Vakıf binalarına gelen kişilerin
isim ve soyadları elde edilirken ya da Vakıf nezdinde asılan ya
da diğer şekillerde misafirlerin erişimine sunulan metinler
aracılığıyla söz konusu kişisel </span><span style="position:absolute;z-index:251687936;left:0px;margin-left:-110px;
margin-top:3309px;width:83px;height:1403px"> </span><span   style=" color:black">veri sahipleri bu
kapsamda aydınlatılmaktadırlar. Misafir
giriş-çıkış takibi yapılması amacıyla elde
edilen veriler yalnızca bu amaçla işlenmekte ve ilgili kişisel
veriler fiziki ortamda veri kayıt sistemine kaydedilmektedir.</span></p>

<h2 style="text-align:justify "><span   style=" color:#C0504D">16.3. </span><span   style=" color:#C0504D">Vakfın Bina Ve
Tesislerinde Ziyaretçilerimize Sağlanan İnternet Erişimlerine
İlişkin Kayıtların Saklanması</span></h2>

<p   ><span   style=" 
color:black">Vakıf tarafından güvenliğin sağlanması ve
bu Politika’da belirtilen amaçlarla; Vakıf tarafından bina ve
tesislerimiz içerisinde kaldığınız süre boyunca talep eden
Ziyaretçi’lerimize internet erişimi sağlanabilmektedir. Bu durumda
internet erişimlerinize ilişkin log kayıtları 5651
Sayılı Kanun ve bu Kanuna göre düzenlenmiş olan mevzuatın
amir hükümlerine göre kayıt altına alınmakta; bu kayıtlar
ancak yetkili kamu kurum ve kuruluşları tarafından talep
edilmesi veya Vakıf içinde gerçekleştirilecek denetim süreçlerinde
ilgili hukuki yükümlülüğümüzü yerine getirmek amacıyla
işlenmektedir.</span></p>

<p   ><span   style=" 
color:black">Bu çerçevede elde edilen log kayıtlarına yalnızca
sınırlı sayıda Vakıf çalışanının
erişimi bulunmaktadır. Bahsi geçen kayıtlara erişimi olan Vakıf
çalışanları bu kayıtları yalnızca yetkili kamu
kurum ve kuruluşundan gelen talep veya denetim süreçlerinde kullanmak
üzere erişmekte ve hukuken yetkili olan kişilerle
paylaşmaktadır. Kayıtlara erişimi olan
sınırlı sayıda kişi gizlilik taahhütnamesi ile
eriştiği verilerin gizliliğini koruyacağını beyan
etmektedir.</span></p>

<h2 style="text-align:justify "><span   style=" color:#C0504D">16.4. </span><span   style=" color:#C0504D">İnternet Sitesi
Ziyaretçileri</span></h2>

<p   ><span   style=" 
color:black">Vakfın sahibi olduğu internet sitelerinde; bu siteleri
ziyaret eden kişilerin sitelerdeki ziyaretlerini ziyaret amaçlarıyla
uygun bir şekilde gerçekleştirmelerini temin etmek; kendilerine
özelleştirilmiş içerikler gösterebilmek ve çevrimiçi
reklamcılık faaliyetlerinde bulunabilmek maksadıyla teknik
vasıtalarla (Örn. Kurabiyeler-cookie gibi) site içerisindeki internet
hareketlerini kaydedilmektedir.</span></p>

<p   ><span   style=" 
color:black">Vakıf yapmış olduğu bu faaliyetlere
ilişkin kişisel verilerin korunması ve işlenmesine
ilişkin detaylı açıklamalar ilgili internet sitesi “Gizlilik
Politikası” metinleri içerisinde yer almaktadır.</span></p>

<h1 style="text-align:justify "><a name="_Toc506193095"><span   style=" 
color:#C0504D">17. </span><span   style=" 
color:#C0504D">Kişisel Verilerin Silinmesi, Yok Edilmesi ve
Anonimleştirilmesi</span></a></h1>

<p    ><span   style=" 
color:black">Türk Ceza Kanunu’nun 138. maddesinde ve Kanun’nun 7. maddesinde
düzenlendiği üzere ilgili kanun hükümlerine uygun olarak
işlenmiş olmasına rağmen, işlenmesini gerektiren
sebeplerin ortadan kalkması hâlinde Vakfın kararına istinaden
veya kişisel veri sahibinin talebi üzerine kişisel veriler silinir,
yok edilir veya anonim hâle getirilir. Bu kapsamda Vakıf ilgili
yükümlülüğünü bu bölümde açıklanan yöntemlerle yerine getirmektedir.</span></p>

<h2 style="text-align:justify "><span   style=" color:#C0504D">17.1. </span><span   style=" color:#C0504D">Silinme ve Yok Edilme
Teknikleri</span></h2>

<p   ><span   style=" 
color:black">İlgili kanun hükümlerine uygun olarak işlenmiş
olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan
kalkması hâlinde kendi kararına istinaden veya kişisel veri
sahibinin talebi üzerine kişisel verileri silebilir veya yok edebilir. Vakıf
tarafından en çok kullanılan silme veya yok etme teknikleri
aşağıda sıralanmaktadır:</span></p>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">17.1.1. </span></b><span   style=" color:#C0504D">Fiziksel Olarak Yok
Etme</span></h3>

<p   style="margin-left:42.55pt; "><span   style=" color:black">Kişisel veriler herhangi
bir veri kayıt sisteminin parçası olmak kaydıyla otomatik
olmayan yollarla da işlenebilmektedir. Bu tür veriler silinirken/yok
edilirken kişisel verinin sonradan kullanılamayacak biçimde fiziksel
olarak yok edilmesi sistemi </span><span style="position:absolute;z-index:251689984;
left:0px;margin-left:-110px;margin-top:3535px;width:83px;height:1403px"> </span><span   style=" color:black">uygulanmaktadır.</span></p>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">17.1.2. </span></b><span   style=" color:#C0504D">Yazılımdan
Güvenli Olarak Silme</span></h3>

<p   style="margin-left:42.55pt; "><span   style=" color:black">Tamamen veya kısmen
otomatik olan yollarla işlenen ve dijital ortamlarda muhafaza edilen
veriler silinirken/yok edilirken; bir daha kurtarılamayacak biçimde
verinin ilgili yazılımdan silinmesine ilişkin yöntemler
kullanılır.</span></p>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">17.1.3. </span></b><span   style=" color:#C0504D">Taşeron
Tarafından Güvenli Olarak Silme</span></h3>

<p   style="margin-left:42.55pt; "><span   style=" color:black">Bazı durumlarda kendisi
adına kişisel verileri silmesi için bir taşeron ile
anlaşabilir. Bu durumda, kişisel veriler bu konuda uzman olan
kişi/kurum tarafından bir daha kurtarılamayacak biçimde güvenli
olarak silinir/yok edilir.</span></p>

<h2 style="text-align:justify "><span   style=" color:#C0504D">17.2. </span><span   style=" color:#C0504D">Anonim Hale Getirme
Teknikleri</span></h2>

<p   ><span   style=" 
color:black">Kişisel verilerin anonimleştirilmesi, kişisel
verilerin başka verilerle eşleştirilerek dahi hiçbir surette
kimliği belirli veya belirlenebilir bir gerçek kişiyle
ilişkilendirilemeyecek hâle getirilmesini ifade eder. Vakıf, hukuka
uygun olarak işlenen kişisel verilerin işlenmesini gerektiren
sebepler ortadan kalktığında kişisel verileri
anonimleştirebilmektedir.</span></p>

<p  style="margin-left:0cm;text-indent:35.45pt"><span   style=" color:black">Vakıf tarafından
kullanılan anonimleştirme teknikleri aşağıda
sıralanmaktadır.</span></p>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">17.2.1. </span></b><span   style=" color:#C0504D">Maskeleme</span></h3>

<p   style="margin-left:42.55pt; "><span   style=" color:black">Veri maskeleme ile kişisel
verinin temel belirleyici bilgisini veri seti içerisinden
çıkartılarak kişisel verinin anonim hale getirilmesi yöntemidir.</span></p>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">17.2.2. </span></b><span   style=" color:#C0504D">Toplulaştırma</span></h3>

<p   style="margin-left:42.55pt; "><span   style=" color:black">Veri toplulaştırma
yöntemi ile birçok veri toplulaştırılmakta ve kişisel
veriler herhangi bir kişiyle ilişkilendirilemeyecek hale
getirilmektedir.</span></p>

<p   style="margin-left:42.55pt; "><span   style=" color:black">&nbsp;</span></p>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">17.2.3. </span></b><span   style=" color:#C0504D">Veri Türetme</span></h3>

<p   style="margin-left:42.55pt; "><span   style=" color:black">Veri türetme yöntemi ile
kişisel verinin içeriğinden daha genel bir içerik oluşturulmakta
ve kişisel verinin herhangi bir kişiyle ilişkilendirilemeyecek
hale getirilmesi sağlanmaktadır.</span></p>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">17.2.4. </span></b><span   style=" color:#C0504D">Veri
Karıştırma</span></h3>

<p   style="margin-left:42.55pt; "><span   style=" color:black">Veri karma yöntemi ile
kişisel veri seti içindeki değerlerinin
karıştırılarak değerler ile kişiler
arasındaki bağın kopartılması
sağlanmaktadır.</span></p>

<h1 style="text-align:justify "><a name="_Toc506193096"><span   style=" 
color:#C0504D">18. </span><span   style=" 
color:#C0504D">Çalışan Adaylarının Kişisel Verilerinin
İşlenmesi</span></a></h1>

<p    ><span   style=" 
color:black">Çalışan Adaylarının işe alım
sürecinde toplanan kişisel verileri ile işin niteliğine göre
toplanan özel nitelikli kişisel verileri, Vakıf tarafından;
Politika’nın çeşitli maddelerinde ve aşağıda
sıralanan </span><span style="position:absolute;z-index:251692032;
left:0px;margin-left:-110px;margin-top:3726px;width:83px;height:1403px"> </span><span   style=" color:black">amaçlarla
işlenmektedir:</span></p>

<h2 style="text-align:justify "><span   style=" color:#C0504D">18.1. </span><span   style=" color:black ">Çalışan
Adayı’nın niteliğini, tecrübesini ve ilgisini açık
pozisyona uygunluğunu değerlendirmek,</span></h2>

<h2 style="text-align:justify "><span   style=" color:#C0504D">18.2. </span><span   style=" color:black ">Gerektiği
takdirde, Çalışan Adayı’nın ilettiği bilgilerin
doğruluğunun kontrolünü yapmak veya üçüncü kişilerle
iletişime geçip Çalışan Adayı hakkında
araştırma yapmak,</span></h2>

<h2 style="text-align:justify "><span   style=" color:#C0504D">18.3. </span><span   style=" color:black ">Başvuru
ve işe alım süreci hakkında Çalışan Adayı ile
iletişime geçmek veya uygun olduğu takdirde, sonradan yurtiçinde veya
yurtdışında açılan herhangi bir pozisyon için aday ile
iletişime geçmek,</span></h2>

<h2 style="text-align:justify "><span   style=" color:#C0504D">18.4. </span><span   style=" color:black ">İlgili
mevzuatın gereklerini ya da yetkili kurum veya kuruluşların
taleplerini karşılamak,</span></h2>

<h2 style="text-align:justify "><span   style=" color:#C0504D">18.5. </span><span   style=" color:black ">Vakfın
uyguladığı işe alım ilkelerini geliştirmek ve
iyileştirmek.</span></h2>

<h2 style="text-align:justify "><span   style=" color:#C0504D">18.6. </span><span   style=" color:black ">Çalışan
Adayları’nın kişisel verileri aşağıdaki yöntem ve
vasıtalarla toplanabilmektedir:</span></h2>

<h2 style="text-align:justify "><span   style=" color:#C0504D">18.7. </span><span   style=" color:black ">Yazılı
veya elektronik ortamda yayınlanan dijital başvuru formu;</span></h2>

<p  ><span   style=" color:black">Çalışan
Adayları’nın Vakfa e-posta, kargo, referans ve benzeri yöntemlerle
ulaştırdıkları özgeçmişler;</span></p>

<h2 style="text-align:justify "><span   style=" color:#C0504D">18.8. </span><span   style=" color:black ">Video
konferans, telefon gibi araçlarla veya yüz yüze mülakat yapılan hallerde,
mülakat sırasında;</span></h2>

<h2 style="text-align:justify "><span   style=" color:#C0504D">18.9. </span><span   style=" color:black ">Çalışan
Adayı tarafından iletilen bilgilerin doğruluğunu teyit
etmek amacıyla yapılan kontroller ile Vakıf tarafından
yapılan araştırmalar;</span></h2>

<h2 style="text-align:justify "><span   style=" color:#C0504D">18.10. </span><span   style=" color:black ">Tecrübesi
olan uzman kişiler tarafından yapılan ve sonuçları
incelenen yetenek ve kişilik özelliklerini tespit eden işe alım
testleri.</span></h2>

<h1 style="text-align:justify "><a name="_Toc506193097"><span   style=" 
color:#C0504D">19. </span><span   style=" 
color:#C0504D">Komite</span></a></h1>

<p    ><span   style=" 
color:black">Vakıf tarafından Kanun düzenlemelerine uygun hareket
edilmesi ve Kişisel Verilerin Korunması ve İşlenmesi
Politikası ve bu Politika’ya bağlı ve ilişkili diğer
politikaları yönetmek üzere Vakıf üst yönetiminin kararı
gereğince Kişisel Verilerin Korunması Komitesi (“Komite”) kurulmuştur.</span></p>

<p   style="margin-left:0cm;text-indent:14.2pt"><span   style=" color:#C0504D">Komite’nin görevleri:</span></p>

<h2 style="text-align:justify "><span   style=" color:#C0504D">19.1. </span><span   style=" color:black ">Kişisel
verilerin korunması ve işlenmesi ile ilgili temel politikaları
ve gerektiğinde değişiklikleri hazırlamak ve yürürlüğe
koymak ve üst yönetiminin onayına sunmak üzere Üst Yönetim’e iletmek.</span></h2>

<h2 style="text-align:justify "><span   style=" color:#C0504D">19.2. </span><span   style=" color:black ">Kişisel
verilerin korunması ve işlenmesine ilişkin politikaların
uygulanması ve denetiminin ne şekilde yerine getirileceğine
karar vermek ve bu çerçevede vakıf içi görevlendirmede bulunulması ve
koordinasyonun sağlanması hususlarını üst yönetimin
onayına sunmak üzere Üst Yönetim’e iletmek.</span></h2>

<h2 style="text-align:justify "><span   style=" color:#C0504D">19.3. </span><span   style=" color:black ">Kanun ve
ilgili mevzuata uyumun sağlanması için yapılması gereken
hususları tespit etmek ve üst yönetimin onayına sunmak,
uygulanmasını gözetmek ve koordinasyonunu sağlamak üzere Üst
Yönetim’e iletmek.</span></h2>

<h2 style="text-align:justify "><span   style=" color:#C0504D">19.4. </span><span   style=" color:black ">Kişisel
verilerin korunması ve işlenmesi konusunda Vakıf içerisinde ve Vakfın
işbirliği içerisinde olduğu kurumlar nezdinde
farkındalığı arttırmak.</span></h2>

<h2 style="text-align:justify "><span   style=" color:#C0504D">19.5. </span><span   style=" color:black ">Vakfın
kişisel veri işleme faaliyetlerinde oluşabilecek riskleri tespit
ederek gerekli önlemlerin alınmasını temin etmek;
iyileştirme önerilerini üst yönetimin onayına sunmak üzere Üst
Yönetim’e iletmek.</span></h2>

<h2 style="text-align:justify "><span   style=" color:#C0504D">19.6. </span><span   style=" color:black ">Kişisel
verilerin korunması ve politikaların uygulanması ve
yayılımı konusunda, kişisel veri </span><span style="position:absolute;z-index:251694080;left:0px;margin-left:-110px;
margin-top:3975px;width:83px;height:1403px"> </span><span   style=" color:black ">sahiplerinin
kişisel veri işleme faaliyetleri ve kanuni hakları konusunda
bilgilendirilmelerinin sağlanması yönünde eğitimler
düzenlenmesini sağlamak üzere Üst Yönetim’e iletmek.</span></h2>

<h2 style="text-align:justify "><span   style=" color:#C0504D">19.7. </span><span   style=" color:black ">Kişisel
veri sahiplerinin başvurularını en üst düzeyde karara
bağlamak üzere Üst Yönetim’e iletmek.</span></h2>

<h2 style="text-align:justify "><span   style=" color:#C0504D">19.8. </span><span   style=" color:black ">Kişisel
verilerin korunması konusundaki gelişmeleri ve düzenlemeleri takip
etmek; bu gelişmelere ve düzenlemelere uygun olarak Vakıf içinde
yapılması gerekenler konusundaki önerilerini Üst Yönetim’e iletmek.</span></h2>

<h2 style="text-align:justify "><span   style=" color:#C0504D">19.9. </span><span   style=" color:black ">Kurul ve
Kurumu ile olan ilişkileri Üst Yönetim’in koordinasyonunda yürütmek.</span></h2>

<h2 style="text-align:justify "><span   style=" color:#C0504D">19.10. </span><span   style=" color:black ">Vakıf
Üst Yönetiminin kişisel verilerin korunması konusunda vereceği
diğer görevleri icra etmek.</span></h2>

<h1 style="text-align:justify "><a name="_Toc506193098"><span   style=" 
color:#C0504D">20. </span><span   style=" 
color:#C0504D">Kişisel Verilerle ilgili Talepler için kullanılacak
ortamlar ve taleplerin değerlendirilmesi</span></a></h1>

<p    ><span   style=" 
color:black">Vakıf, kişisel veri sahiplerinin haklarının
değerlendirilmesi ve kişisel veri sahiplerine gereken
bilgilendirmenin yapılması için Kanun’nun 13. maddesine uygun olarak
gerekli kanalları, iç işleyişi, idari ve teknik düzenlemeleri
yürütmektedir.</span></p>

<p    ><span   style=" 
color:black">Kişisel veri sahipleri aşağıda sıralanan
haklarına ilişkin taleplerini başvuru formunda yazılı
usülle Vakfa iletmeleri durumunda Vakıf talebin niteliğine göre
talebi en geç otuz gün içinde ücretsiz olarak sonuçlandırmaktadır.
Ancak, Kurula bir ücret öngörülmesi hâlinde, Vakıf tarafından Kurulca
belirlenen tarifedeki ücret alınacaktır. </span></p>

<h2 style="text-align:justify "><a name="_Ref501113201"><span   style=" 
color:#C0504D">20.1. </span><span   style=" 
color:#C0504D">Kişisel Veri Sahibinin Hakları;</span></a></h2>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">20.1.1. </span></b><span   style=" color:black">Kişisel veri
işlenip işlenmediğini öğrenme,</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">20.1.2. </span></b><span   style=" color:black">Kişisel verileri
işlenmişse buna ilişkin bilgi talep etme,</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">20.1.3. </span></b><span   style=" color:black">Kişisel verilerin
işlenme amacını ve bunların amacına uygun
kullanılıp kullanılmadığını öğrenme,</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">20.1.4. </span></b><span   style=" color:black">Yurt içinde veya yurt
dışında kişisel verilerin aktarıldığı
üçüncü kişileri bilme,</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">20.1.5. </span></b><span   style=" color:black">Kişisel verilerin
eksik veya yanlış işlenmiş olması hâlinde
bunların düzeltilmesini isteme ve bu kapsamda yapılan işlemin
kişisel verilerin aktarıldığı üçüncü kişilere
bildirilmesini isteme,</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">20.1.6. </span></b><span   style=" color:black">Kanun ve ilgili
diğer kanun hükümlerine uygun olarak işlenmiş olmasına
rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması
hâlinde kişisel verilerin silinmesini veya yok edilmesini isteme ve bu
kapsamda yapılan işlemin kişisel verilerin
aktarıldığı üçüncü kişilere bildirilmesini isteme,</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">20.1.7. </span></b><span   style=" color:black">İşlenen
verilerin münhasıran otomatik sistemler vasıtasıyla analiz
edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya
çıkmasına itiraz etme,</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">20.1.8. </span></b><span   style=" color:black">Kişisel verilerin
kanuna aykırı olarak işlenmesi sebebiyle zarara
uğraması hâlinde zararın giderilmesini talep etme,
haklarına sahiptir.</span></h3>

<h2 style="text-align:justify "><span   style=" color:#C0504D">20.2. </span><span style="position:absolute;z-index:251696128;left:0px;margin-left:-110px;
margin-top:4193px;width:83px;height:1403px"> </span><span   style=" color:#C0504D">Kişisel Veri
Sahibinin Haklarını İleri Süremeyeceği Haller</span></h2>

<p   ><span   style=" 
color:black">Kişisel veri sahipleri, Kanun’un 28. maddesi gereğince
aşağıdaki haller Kanun kapsamı dışında
tutulduğundan, kişisel veri sahiplerinin bu konularda </span><span   style=" color:black">20.1</span><span   style=" color:black">’de sayılan
haklarını ileri süremezler:</span></p>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">20.2.1. </span></b><span   style=" color:black">Kişisel verilerin
resmi istatistik ile anonim hâle getirilmek suretiyle araştırma,
planlama ve istatistik gibi amaçlarla işlenmesi.</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">20.2.2. </span></b><span   style=" color:black">Kişisel verilerin
millî savunmayı, millî güvenliği, kamu güvenliğini, kamu
düzenini, ekonomik güvenliği, özel hayatın gizliliğini veya
kişilik haklarını ihlal etmemek ya da suç teşkil etmemek
kaydıyla, sanat, tarih, edebiyat veya bilimsel amaçlarla ya da ifade
özgürlüğü kapsamında işlenmesi.</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">20.2.3. </span></b><span   style=" color:black">Kişisel verilerin
millî savunmayı, millî güvenliği, kamu güvenliğini, kamu
düzenini veya ekonomik güvenliği sağlamaya yönelik olarak kanunla
görev ve yetki verilmiş kamu kurum ve kuruluşları
tarafından yürütülen önleyici, koruyucu ve istihbari faaliyetler
kapsamında işlenmesi.</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">20.2.4. </span></b><span   style=" color:black">Kişisel verilerin
soruşturma, kovuşturma, yargılama veya infaz işlemlerine
ilişkin olarak yargı makamları veya infaz mercileri
tarafından işlenmesi.</span></h3>

<p  style="margin-left:42.55pt; "><span   style=" color:black">Kanun’un 28/2 maddesi
gereğince; aşağıda sıralanan hallerde kişisel
veri sahipleri zararın giderilmesini talep etme hakkı hariç, </span><span   style=" color:black">20.1</span><span   style=" color:black">’de sayılan
diğer haklarını ileri süremezler:</span></p>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">20.2.5. </span></b><span   style=" color:black">Kişisel veri
işlemenin suç işlenmesinin önlenmesi veya suç soruşturması
için gerekli olması.</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">20.2.6. </span></b><span   style=" color:black">Kişisel veri
sahibi tarafından kendisi tarafından alenileştirilmiş
kişisel verilerin işlenmesi.</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">20.2.7. </span></b><span   style=" color:black">Kişisel veri
işlemenin kanunun verdiği yetkiye dayanılarak görevli ve yetkili
kamu kurum ve kuruluşları ile kamu kurumu niteliğindeki meslek
kuruluşlarınca, denetleme veya düzenleme görevlerinin yürütülmesi ile
disiplin soruşturma veya kovuşturması için gerekli olması.</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">20.2.8. </span></b><span   style=" color:black">Kişisel veri
işlemenin bütçe, vergi ve mali konulara ilişkin olarak Devletin
ekonomik ve mali çıkarlarının korunması için gerekli
olması.</span></h3>

<h2 style="text-align:justify "><a name="_Ref501113384"><span   style=" 
color:#C0504D">20.3. </span><span   style=" 
color:#C0504D">Kişisel Veri Sahibinin Haklarını Kullanması</span></a></h2>

<p   ><span   style=" 
color:black">Kişisel Veri Sahipleri bu bölümün </span><span   style=" color:black">20.1</span><span   style=" color:black">
Başlığı altında sıralanan haklarına
ilişkin taleplerini kimliklerini tespit edecek bilgi ve belgelerle ve
aşağıda belirtilen yöntemlerle veya Kişisel Verileri Koruma
Kurulu’nun belirlediği diğer yöntemlerle Ek-1’de yer alan Başvuru
Formu’nu doldurup imzalayarak vakfa ücretsiz olarak iletebileceklerdir:</span></p>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">20.3.1. </span></b><span   style=" color:black">Web sitesindeki formun
doldurulduktan sonra ıslak imzalı bir nüshasının bizzat
elden veya iadeli taahhütlü posta aracılığı ile Vakıf
merkez adresine iletilmesi</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">20.3.2. </span></b><span   style=" color:black">Web sitesindeki formun
doldurulup 5070 Sayılı Elektronik İmza Kanunu kapsamındaki
“güvenli elektronik imza” nızla imzalandıktan sonra güvenli
elektronik imzalı formun Vakfın </span><span  ><a href="mailto:turkiyegenclikvakfi@hs01.kep.tr"><span style="font-family:&quot;sans-serif&quot;,sans-serif">turkiyegenclikvakfi@hs01.kep.tr</span></a></span><span class="MsoCommentReference"><span style=" color:black">
e</span></span><span   style=" color:black">elektronik
posta ile gönderilmesi</span></h3>

<p  style="margin-left:42.55pt; "><span   style=" color:black">Kişisel veri sahipleri
adına üçüncü kişilerin başvuru talebinde bulunabilmesi için veri
sahibi tarafından başvuruda bulunacak kişi adına noter
kanalıyla düzenlenmiş özel vekâletname bulunmalıdır.</span><span style="position:absolute;z-index:251698176;left:0px;margin-left:-110px;
margin-top:4418px;width:83px;height:1403px"> </span></p>

<h2 style="text-align:justify "><span   style=" color:#C0504D">20.4. </span><span   style=" color:#C0504D">Kişisel Veri Sahibinin Kurul’a
Şikâyette Bulunma Hakkı</span></h2>

<p   ><span   style=" 
color:black">Kişisel veri sahibi Kanunun 14. maddesi gereğince
başvurunun reddedilmesi, verilen cevabın yetersiz bulunması veya
süresinde başvuruya cevap verilmemesi hâllerinde; Vakfın
cevabını öğrendiği tarihten itibaren otuz ve herhâlde
başvuru tarihinden itibaren altmış gün içinde Kurul’a
şikâyette bulunabilir.</span></p>

<h1 style="text-align:justify "><a name="_Toc506193099"><span   style=" 
color:#C0504D">21. </span><span   style=" 
color:#C0504D">Başvurulara Cevap Verilmesi</span></a></h1>

<p   style="margin-left:35.45pt; "><span   style=" color:black">Vakfa yalnızca Vakfın
Kanun kapsamında veri sorumlusu sayıldığı durumlarda
başvuru yapılması gerekmektedir. </span></p>

<h2 style="text-align:justify "><span   style=" color:#C0504D">21.1. </span><span   style=" color:#C0504D">Başvurulara Cevap
Verilme Usulü ve Süresi</span></h2>

<p   ><span   style=" 
color:black">Kişisel veri sahibinin, </span><span   style=" color:black">20.3</span><span   style=" color:black">
başlıklı kısmında yer alan usule uygun olarak talebini
Vakfa iletmesi durumunda Vakıf talebin niteliğine göre en geç otuz
gün içinde ilgili talebi ücretsiz olarak sonuçlandıracaktır. Ancak, Kurulca
bir ücret öngörülmesi hâlinde, Vakıf tarafından başvuru
sahibinden Kurulca belirlenen tarifedeki ücret alınacaktır.</span></p>

<h2 style="text-align:justify "><span   style=" color:#C0504D">21.2. </span><span   style=" color:#C0504D">Başvuruda Bulunan
Kişisel Veri Sahibinden Talep Edebileceği Bilgiler</span></h2>

<p   ><span   style=" 
color:black">Başvuruda bulunan kişinin kişisel veri sahibi olup
olmadığını tespit etmek adına ilgili kişiden
bilgi talep edebilir. Kişisel veri sahibinin başvurusunda yer alan
hususları netleştirmek adına, kişisel veri sahibine
başvurusu ile ilgili soru yöneltebilir.</span></p>

<h2 style="text-align:justify "><span   style=" color:#C0504D">21.3. </span><span   style=" color:#C0504D">Kişisel Veri Sahibinin
Başvurusunu Reddetme Hakkı</span></h2>

<p   ><span   style=" 
color:black">Aşağıda yer alan hallerde başvuruda bulunan
kişinin başvurusunu, gerekçesini açıklayarak reddedebilir:</span></p>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">21.3.1. </span></b><span   style=" color:black">Kişisel verilerin
resmi istatistik ile anonim hâle getirilmek suretiyle araştırma,
planlama ve istatistik gibi amaçlarla işlenmesi.</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">21.3.2. </span></b><span   style=" color:black">Kişisel verilerin
millî savunmayı, millî güvenliği, kamu güvenliğini, kamu
düzenini, ekonomik güvenliği, özel hayatın gizliliğini veya
kişilik haklarını ihlal etmemek ya da suç teşkil etmemek
kaydıyla, sanat, tarih, edebiyat veya bilimsel amaçlarla ya da ifade
özgürlüğü kapsamında işlenmesi.</span></h3>

<h3 style="margin-left:42.55pt; "><b><span   style=" color:#C0504D">21.3.3. </span></b><span   style=" color:black">Kişisel verilerin
millî savunmayı, millî güvenliği, kamu güvenliğini, kamu
düzenini veya ekonomik güvenliği sağlamaya yönelik olarak kanunla
görev ve yetki verilmiş kamu kurum ve kuruluşları
tarafından yürütülen önleyici, koruyucu ve istihbari faaliyetler
kapsamında işlenmesi.</span></h3>

<h3 style="margin-left:42.55pt;text-indent:.05pt"><b><span   style=" color:#C0504D">21.3.4. </span></b><span   style=" color:black">Kişisel verilerin
soruşturma, kovuşturma, yargılama veya infaz işlemlerine
ilişkin olarak yargı makamları veya infaz mercileri
tarafından işlenmesi.</span></h3>

<h3 style="margin-left:42.55pt;text-indent:.05pt"><b><span   style=" color:#C0504D">21.3.5. </span></b><span   style=" color:black">Kişisel veri
işlemenin suç işlenmesinin önlenmesi veya suç soruşturması için
gerekli olması.</span></h3>

<h3 style="margin-left:42.55pt;text-indent:.05pt"><b><span   style=" color:#C0504D">21.3.6. </span></b><span   style=" color:black">Kişisel veri
sahibi tarafından kendisi tarafından alenileştirilmiş
kişisel verilerin işlenmesi.</span></h3>

<h3 style="margin-left:42.55pt;text-indent:.05pt"><b><span   style=" color:#C0504D">21.3.7. </span></b><span style="position:absolute;z-index:251700224;left:0px;margin-left:-110px;
margin-top:4644px;width:83px;height:1403px"> </span><span   style=" color:black">Kişisel veri
işlemenin kanunun verdiği yetkiye dayanılarak görevli ve yetkili
kamu kurum ve kuruluşları ile kamu kurumu niteliğindeki meslek
kuruluşlarınca, denetleme veya düzenleme görevlerinin yürütülmesi ile
disiplin soruşturma veya kovuşturması için gerekli olması.</span></h3>

<h3 style="margin-left:42.55pt;text-indent:.05pt"><b><span   style=" color:#C0504D">21.3.8. </span></b><span   style=" color:black">Kişisel veri
işlemenin bütçe, vergi ve mali konulara ilişkin olarak Devletin
ekonomik ve mali çıkarlarının korunması için gerekli
olması.</span></h3>

<h3 style="margin-left:42.55pt;text-indent:.05pt"><b><span   style=" color:#C0504D">21.3.9. </span></b><span   style=" color:black">Kişisel veri
sahibinin talebinin diğer kişilerin hak ve özgürlüklerini engelleme
ihtimali olması</span></h3>

<h3 style="margin-left:42.55pt;text-indent:.05pt"><b><span   style=" color:#C0504D">21.3.10. </span></b><span   style=" color:black">Orantısız
çaba gerektiren taleplerde bulunulmuş olması.</span></h3>

<h3 style="margin-left:42.55pt;text-indent:.05pt"><b><span   style=" color:#C0504D">21.3.11. </span></b><span   style=" color:black">Talep edilen bilginin
kamuya açık bir bilgi olması.<b> </b></span></h3>

</div>
`;
