const uploadURL = "php/upload.php";
const deleteURL = "/php/delete.php";

function ajaxtest()
{
    var name = $("#name")[0].value;
    var author = $("#author")[0].value;
    var street = $("#street")[0].value;
    var tel = $("#tel")[0].value;
    var budget = $("#budget")[0].value;
    var demand = $("#demand")[0].value;
    var address = $("#address")[0].value;

    if (!author||!address||!tel||!demand||!name)
    {
        alert("请填写必要信息");
        $("#name").addClass("invalid");
        $("#author").addClass("invalid");
        $("#tel").addClass("invalid");
        $("#address").addClass("invalid");
        $("#demand").addClass("invalid");
        return;
    } 

    if(uploadcoords != undefined)
        $.ajax({
            url: uploadURL,        
            type: "post",
            dataType:"text",
            async: false,
            data: {"name":name, "author": author, "street": street,"tel" : tel, "budget": budget, "demand": demand, "address": address, "lng":uploadcoords.lng, "lat":uploadcoords.lat},
            success: function(result){
                alert(result);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown){
                alert(XMLHttpRequest.status);
                alert(XMLHttpRequest.readyState);
                alert(textStatus);
            }
        });
    else
    $.ajax({
        url: uploadURL,        
        type: "post",
        dataType:"text",
        async: false,
        data: {"name":name, "author": author, "street": street,"tel" : tel, "budget": budget, "demand": demand, "address": address, "lng":"0", "lat":"0"},
        success: function(result){
            alert("上传成功");
            $("#name")[0].value = "";
            $("#author")[0].value = "";
            $("#street")[0].value = "";
            $("#tel")[0].value = "";
            $("#budget")[0].value = "";
            $("#demand")[0].value = "";
            $("#address")[0].value = "";

        },
        error: function (XMLHttpRequest, textStatus, errorThrown){
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        }
    });
}

function deleteAjax(id){
    var passwd = $("#passwd")[0].value;
    $("#passwd")[0].value = "";
    $.ajax({
        url: deleteURL,        
        type: "post",
        dataType:"text",
        async: false,
        data: {"id":id,"passwd":passwd},
        success: function(result){
            alert(result);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown){
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        }
    });
}