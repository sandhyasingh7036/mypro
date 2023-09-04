function gototop(){
    window.scrollTo({top:0,behavior:"smooth"})
}

var result =document.getElementById("mybtn");
window.onscroll=function(){
    if (document.body.scrollTop>50 ||document.documentElement.scrollTop>50){
    result.style.display="block"
}
else
{
    result.style.display="none"
}
}
function fun(){
    var lessdata=document.getElementById("myspan1")
    var more=document.getElementById("myspan2")
    var btn=document.getElementById("myspan3")
    if(lessdata.style.display=='none'){
        lessdata.style.display='inline';
        more.style.display='none'
        btn.innerHTML="Read More"
    }
    else{
        lessdata.style.display='none'
        more.style.display="inline"
        btn.innerHTML="Read Less"
    }
}
function fun1(){
    var lessdata=document.getElementById("myspan4")
    var more=document.getElementById("myspan5")
    var btn=document.getElementById("myspan6")
    if(lessdata.style.display=='none'){
        lessdata.style.display='inline';
        more.style.display='none'
        btn.innerHTML="Read More"
    }
    else{
        lessdata.style.display='none'
        more.style.display="inline"
        btn.innerHTML="Read Less"
    }
}
function fun2(){
    var lessdata=document.getElementById("myspan7")
    var more=document.getElementById("myspan8")
    var btn=document.getElementById("myspan9")
    if(lessdata.style.display=='none'){
        lessdata.style.display='inline';
        more.style.display='none'
        btn.innerHTML="Read More"
    }
    else{
        lessdata.style.display='none'
        more.style.display="inline"
        btn.innerHTML="Read Less"
    }
}
function fun3(){
    var lessdata=document.getElementById("myspan10")
    var more=document.getElementById("myspan11")
    var btn=document.getElementById("myspan12")
    if(lessdata.style.display=='none'){
        lessdata.style.display='inline';
        more.style.display='none'
        btn.innerHTML="Read More"
    }
    else{
        lessdata.style.display='none'
        more.style.display="inline"
        btn.innerHTML="Read Less"
    }
}