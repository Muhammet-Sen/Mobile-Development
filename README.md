# Mobile Development

> Muhammet ŞEN 

## Uygulama İçeriği

* Ana ekranda bir navigation yapısı kurulacak ve uygulamanın iki tab'dan oluşması sağlanacak.
* İlk tab üzerindeki bir webview ile setur.com.tr'i açacak
* İkinci tab ise data/controls.json dosyasını referans alarak;
* Dinamik bir biçimde tab içeriğini oluşturacak,
* Tab içeriği kaydırılabilir olacak,
* Tab içindeki kontroller json dosyasından okunarak ekrana çizilecek,
    "input" tipindeki kontroller kullanıcının klavye ile giriş yapabileceği metin kutuları oluşturacak,
    "input" tipindeki kontroller için "validator" değeri ilgili alanın kodda client taraflı bir doğrulama yapmasını sağlayacak,
    "choice" tipindeki kontroller kullanıcının "items" altındaki key/value eşleniklerinden oluşan değerleri seçmelerini sağlayan bir liste oluşturacak,
    "choice" tipindeki bir kontrol için "multiple" değeri true olarak belirlendiyse kullanıcı formda bu alan için birden fazla seçim yapabilecek,
    Kontroller çizildikten sonra tab içeriğinin en altında bir "Gönder" button'u yer alacak,
    "Gönder" button'una tıklandığında form değerleri firebase, telegram, e-mail v.b. bir noktaya form değerlerini gönderecek,

## Kullanılan Teknolojiler

* JavaScript
* React Native
* Git

## Gereksinimler

* Node.js [https://nodejs.org/en/download/]
* WebStorm [https://www.jetbrains.com/webstorm/download/#section=windows]
 OR
* VsCode [https://code.visualstudio.com/]

## Projenin Çalıştırılması

* Proje .zip olarak indirildikten sonra Ide de açılır.
* Terminal kısmına ` npx react-native run-android ` yazılarak çalıştırılır.
