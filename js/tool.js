function showinfo(info){
    $("#infotext")[0].innerHTML = info;
    $("#infoscreen").modal("open");
}

function setUser(username,email,avatar,job,jobdetail,tel){
    sessionStorage.setItem('username',username);
    sessionStorage.setItem('email',email);
    sessionStorage.setItem('avatar',avatar);
    sessionStorage.setItem('job',job);
    sessionStorage.setItem('jobdetail',jobdetail);
    sessionStorage.setItem('tel',tel);

    $("#btnSignup").style.display = "none";
    $("#btnSingin").style.display = "none";
    if(avatar != "default")$("#imgAvatar").src = avatar;
    $("#pUsername").innerHTML = username;
}