function startTime()
{
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m=checktime(m);
    s=checktime(s);
    document.getElementById('clock').innerHTML = h + "시 " + m + "분 " + s + "초";
    var t=setTimeout(startTime, 500);
}
function checktime(i)
{
    if(i<10) {i = "0" + i};
    return i;
}