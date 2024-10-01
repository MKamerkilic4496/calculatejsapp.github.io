NOTE:HTML,CSS AND JAVASCRİPT CODES LISTED BELOW

HTML PARTS:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hesap Makinesi</title>
    <link rel="stylesheet" href="Hesap.css">
</head>
<body>
    <div class="icerik">
        <table>
            <tr>
                <td colspan="5" id="islem">0</td>
            </tr>

            <tr>
                <td colspan="5" id="gosterge"></td>
            </tr>

            <tr>
                <td class="btn rakam">7</td>
                <td class="btn rakam">8</td>
                <td class="btn rakam">9</td>
                <td class="btn opr">/</td>
                <td class="btn btnCE">CE</td>
            </tr>
            <tr>
                <td class="btn rakam">4</td>
                <td class="btn rakam">5</td>
                <td class="btn rakam">6</td>
                <td class="btn opr">x</td>
                <td class="btn btnC">C</td>
            </tr>
            <tr>
                <td class="btn rakam">1</td>
                <td class="btn rakam">2</td>
                <td class="btn rakam">3</td>
                <td class="btn opr">-</td>
                <td rowspan="2" class="btn esit">=</td>
            </tr>
            <tr>
                <td colspan="2" class="btn rakam">0</td>
                <td class="btn nokta">.</td>
                <td class="btn opr">+</td>
                
            </tr>
        </table>
    </div>

    




    <script src="index.js"></script>
</body>
</html>
CSS PART:
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body,html{
    height: 100%;
    background-color: teal;
}
table{
    background-color: #E84545;
    border: 2px solid #53354A;
    border-spacing: 10px;
    margin: auto;
    margin-top: 50px;
    text-align: center;
    border-radius: 25px;
}
table .btn{
    width: 80px;
    background-color: #2B2E4A;
    color: white;
    line-height: 300%;
    font-size: 150%;
    border-radius: 25px;
}
table .btn:hover{
    background-color: rgb(164,163,163);
    color: white;
    cursor: pointer;
}
#islem,#gosterge{
    padding: 15px;
    text-align: right;
    background-color: rgb(164,163,163);
    border-radius: 20px;
}
#islem{
    font-size: 200%;
}
JS PART:

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
    // btnCE progresses
    btnCE.onclick=function(){
        islem.textContent="0";
        gosterge.textContent="";
        sonuc=0;
        opt="";
    }
    // equal progresses
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
