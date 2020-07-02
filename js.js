
function relogioHMS() {
    var d = new Date();
    var horas = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    var a = document.getElementById("demo");
    var arr = a.childNodes;
    for(var x=0;x<arr.length;x++) {
    	arr[x].innerHTML = horas+":"+mins+":"+secs;
    }
    //below we have set in the DOM from html <h>
    
}
setInterval(relogioHMS, 1000);

