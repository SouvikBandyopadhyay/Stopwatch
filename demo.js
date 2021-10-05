function start(params) {
    ID=window.setInterval(timer,10);
    
        document.getElementById("startbutton").innerHTML='<button onclick="stopit()" class="button12">Stop</button>';
    
}
function stopit(params) {
    
    window.clearInterval(ID);
    
        document.getElementById("startbutton").innerHTML='<button onclick="start()" class="button12">Start</button>';
   
}
function reset(params) {
   
    seconds=0;
    mins=0;
    window.clearInterval(ID);
    document.getElementById("screen").innerHTML="00:00.00";
    
        document.getElementById("startbutton").innerHTML='<button onclick="start()" class="button12">Start</button>';
    
    
    

    
}

function display(var1){
    document.getElementById("screen").innerHTML=var1;
}

var milisec=0;
var seconds=0;
var mins=0;
var hours=0;
var scr="";
function timer(var1) {
    var miliseco,seco,min;
    if(milisec<10){
        miliseco="0"+milisec;
    }
    else{
        miliseco=milisec;
    }
    if(seconds<10){
        seco="0"+seconds;
    }
    else{
        seco=seconds;
    }
    if(mins<10){
        min="0"+mins;
    }
    else{
        min=mins;
    }
    if(hours>0){
        scr=hours+":"+min+":"+seco+"."+miliseco;
    }
    else{
        scr=min+":"+seco+"."+miliseco;
    }
    
    display(scr);
    milisec++;
    if(milisec>99){
        seconds++;
        milisec=0;
    }
    else{
    }
    if(seconds>59){
        mins++;
        seconds=0;
    }
    else{
    }
    if(mins>59){
        hours++;
        mins=0;
    }

    
}
function diffcal(var1,var2) {

    msec1=var1.substring(var1.length -2);
    sec1=var1.substring(var1.length-5,var1.length -3);
    min1=var1.substring(0,var1.length -6);


    msec2=var2.substring(var2.length -2);
    sec2=var2.substring(var2.length-5,var2.length -3);
    min2=var2.substring(0,var2.length -6);

    min3=min1-min2;
    sec3=sec1-sec2;
    if (sec1<sec2){
        sec3=parseInt(sec1)+60-parseInt(sec2);
        min3=min3-1;
    }
    else{
        sec3=sec1-sec2;
    }
    if (msec1<msec2){
        msec3=parseInt(msec1)+100-parseInt(msec2);
        sec3=sec3-1;
    }
    else{
        msec3=msec1-msec2;
    }
    if(sec3<10){
        sec3="0"+sec3;
    }
    if(msec3<10){
        msec3="0"+msec3;
    }
    s="<span class='pofdif'> &nbsp ...+"+min3+":"+sec3+":"+msec3+"</span>";
    return s;
    
}

var last="00:00:00";

function lap(params) {

        var lapping=document.getElementById("screen").innerHTML;
        var lapped=document.getElementById("score").innerHTML;
        

        var s=diffcal(lapping,last);
        document.getElementById("score").innerHTML="<p>"+lapping +s +"</p>" +"<br>" +lapped;
        
        last=lapping;

        
        

}
function clearlap(){
    document.getElementById("score").innerHTML="";
    document.getElementById("differ").innerHTML="";
    last="00:00:00";

}
var theme=0;
function themechange(params){
    console.log(theme);
    if(theme==0){
        theme=1;
        document.getElementById("darkmain").id="lightmain";
        document.getElementById("theme").innerHTML='<img src="/imgs/moon.webp" alt="">';
        
    }
    
    else{
        theme=0;
        document.getElementById("lightmain").id="darkmain";
        document.getElementById("theme").innerHTML='<img src="/imgs/sun.jpg" alt="">';
    }
    
}