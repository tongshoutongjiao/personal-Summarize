~function(){var b=document.getElementById("conLeft");var d=document.getElementById("conRight");var f=$.children(b,"a");var a=$.children(d,"div");function c(h){for(var g=0;g<f.length;g++){f[g].className=null;a[g].className="con"}f[h].className="bg";a[h].className="con bg"}for(var e=0;e<f.length;e++){f[e].index=e;f[e].onclick=function(){c(this.index)}}}();
