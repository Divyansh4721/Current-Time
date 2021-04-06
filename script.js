var d = new Date();
var t=document.getElementById("abc");
setInterval(function(){
  var d = new Date();
  t.style.backgroundColor='#'+Math.floor(Math.random()*16777215).toString(16)
  t.innerText=d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
},1000)
