function showinfo(info){
    $("#infotext")[0].innerHTML = info;
    $("#infoscreen").modal("open");
}

function setUser(username,email,avatar,job,jobdetail,tel){
    sessionStorage.setItem('login',true);
    sessionStorage.setItem('username',username);
    sessionStorage.setItem('email',email);
    sessionStorage.setItem('avatar',avatar);
    sessionStorage.setItem('job',job);
    sessionStorage.setItem('jobdetail',jobdetail);
    sessionStorage.setItem('tel',tel);

    $("#btnSignup")[0].style.display = "none";
    $("#btnSignin")[0].style.display = "none";
    if(avatar == "default")$("#imgAvatar").src = "default.jpg";
    else $("#imgAvatar").src = avatar;
    $("#imgAvatar")[0].style.display = "inline";
    $("#pUsername")[0].innerHTML = username;
    $("#pUsername")[0].style.display = "inline";
}

function setUserFromSesssion(){
    if(sessionStorage.getItem('login')){
        $("#btnSignup")[0].style.display = "none";
        $("#btnSignin")[0].style.display = "none";
        if(sessionStorage.getItem('avatar') == "default")$("#imgAvatar").src = "default.jpg";
        else $("#imgAvatar").src = sessionStorage.getItem('avatar');
        $("#imgAvatar")[0].style.display = "inline";
        $("#pUsername")[0].innerHTML = sessionStorage.getItem('username');
        $("#pUsername")[0].style.display = "inline";
    }
}