function allright()
{
    var doc = document;
    var name = doc.getElementById('userName').value;
    if(!doc.getElementById('userId').value) {
        alert('아이디를 입력하지 않았습니다');
        return false;
    }
    if(!doc.getElementById('userPass').value) {
        alert('비밀번호를 입력하지 않았습니다');
        return false;
    }
    if(!doc.getElementById('userTell').value) {
        alert('전화번호를 입력하지 않았습니다');
        return false;
    }
    if(!doc.getElementById('userName').value) {
        alert('이름을 입력하지 않았습니다');
        return false;
    }
    if(doc.getElementById('userPass').value != doc.getElementById('userConfirm').value) {
        alert('비밀번호가 일치하지 않습니다');
        return false;
    }
    alert(name + "님 환영합니다.");
    location.href="http://127.0.0.1:5500/starthome/main.html";
    return;
}