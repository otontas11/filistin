let twitter=document.getElementById('twitter')
let facebook=document.getElementById('facebook')
let whatsapp=document.getElementById('whatsapp')
let instagram=document.getElementById('instagram')

var commonUrl = 'http://adimadimkudus.com';

twitter.addEventListener('click', function (event) {
    event.preventDefault();
    var url = `https://twitter.com/intent/tweet?url=${commonUrl}&hashtags=getboldify&text=adım adım kudüs`;
    TwitterWindow = window.open(url, 'TwitterWindow', width = 600, height = 300);
     

  }, false);


  whatsapp.addEventListener('click', function (event) {
    event.preventDefault();
    var url = `whatsapp://send?text=${commonUrl}`;
     window.open(url, 'TwitterWindow');


  }, false);


  facebook.addEventListener('click', function (event) {
    event.preventDefault();
    fbShare(commonUrl, 'Adım adım kudus', 'filistin işgaline hayır de');
  });
  

  function fbShare(url, title, descr) {
    var windowHeight = 350,
        windowWidth = 520,  
        alignTop = (screen.height / 2) - (windowHeight / 2),
        alignLeft = (screen.width / 2) - (windowWidth / 2),
        facebookShareUrl = 'https://www.facebook.com/sharer.php?s=100&p[title]=' + title + '&p[summary]=' + descr + '&p[url]=' + url
    
    // how to open a window - https://www.w3schools.com/jsref/met_win_open.asp
    window.open( facebookShareUrl, "","top=" + alignTop + ",left=" + alignLeft + ",width=" + windowWidth +",height=" + windowHeight);
  }