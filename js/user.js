//用户操作
function newuser(){
    var username = $("username").value;
    var mailaddr = $("mailaddr").value;
    var password = $("password").value;
    var passwordre = $("password-re").value;
    
    if(passwordre != password){
        alert("两次输入的密码不一致！");
        $("password").addClass("invalid");
        $("password-re").addClass("invalid");
        return;
    }

    
}