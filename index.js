// Genel Değişkenler

var durum=false, opt="",sonuc=0;

// nesnelerin oluşturulması
let rakam=document.querySelectorAll('.rakam');
let islem=document.querySelector("#islem");
var opr=document.querySelectorAll(".opr");
let gosterge=document.querySelector("#gosterge");
let btnC=document.querySelector(".btnC");
let btnCE=document.querySelector(".btnCE");
let esit=document.querySelector(".esit");
let nokta=document.querySelector(".nokta");

// rakam işlemleri
rakam.forEach(function(element){
    // forEach ile tüm elemanları gezmesini sağlıyoruz..Element parametresi ile 
    // hangisine tıklandıysa ona işlem yaptıracağız..
    element.onclick=function(){
        // Baştaki sıfırı kaldırmak için
        if(islem.textContent=="0" || durum==true ){
            islem.textContent="";
        }
        islem.textContent+=this.textContent;
        durum=false;
    }
})

// Operatör İşlemleri
opr.forEach(function(element){
     element.onclick=function(){
        durum=true;
        var opr=this.textContent;
        gosterge.textContent=gosterge.textContent+""+islem.textContent+""+opr;
        // switch hafızaya alınan işlem anlamındadır...
        // case ile de işlem bir defa döner ve bizim istediğmiz kısmı döndürür.
        switch(opt){
            case"+":islem.textContent = (sonuc+Number(islem.textContent));break;
            case"-":islem.textContent = (sonuc-Number(islem.textContent));break;
            case"x":islem.textContent = (sonuc*Number(islem.textContent));break;
            case"/":islem.textContent = (sonuc/Number(islem.textContent));break;
        }
        sonuc=Number(islem.textContent);
        opt=opr;
     } })

    //  btnC işlemleri
    btnC.onclick=function(){
        islem.textContent="0";
    }
    // btnCE işlemleri
    btnCE.onclick=function(){
        islem.textContent="0";
        gosterge.textContent="";
        sonuc=0;
        opt="";
    }
    // eşittir işlemleri
    esit.onclick=function(){
        gosterge.textContent="";
        switch(opt){
            case"+":islem.textContent = (sonuc+Number(islem.textContent));break;
            case"-":islem.textContent = (sonuc-Number(islem.textContent));break;
            case"x":islem.textContent = (sonuc*Number(islem.textContent));break;
            case"/":islem.textContent = (sonuc/Number(islem.textContent));break;
        }
        sonuc=Number(islem.textContent);
        islem.textContent=sonuc;
        sonuc=0;
        opt="";
    }


