function relogioHMS() {
    var d = new Date()
    var horas = d.getHours()
    var mins = d.getMinutes()
    var secs = d.getSeconds()
    //below we have set in the DOM from html <h>
    document.h.innerHTML = horas+":"+mins+":"+secs
}
setInterval(relogioHMS, 1000)