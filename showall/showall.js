const downloadURL = "../php/download.php";

function newcard(name,author,street,tel,budget,demand,time,address,lng,lat){
    var col = document.createElement("div");
    col.className = "col s12 m6";
    var card = document.createElement("div");
    card.className = "card blue-grey darken-1 hoverable"
    var container = document.createElement("div");
    // container.className = "container";
    var row = document.createElement("div");
    row.className = "row";
    
    var namediv = document.createElement("div");
    namediv.className = "col s12 m12";
    var nameh5 = document.createElement("h5");
    nameh5.innerHTML = '<i class="material-icons prefix">title</i> ' + name;
    nameh5.className = "truncate";
    namediv.appendChild(nameh5);

    var authordiv = document.createElement("div");
    authordiv.className = "col s12 m6";
    var authorh5 = document.createElement("p");
    authorh5.innerHTML = '<i class="material-icons prefix">account_circle</i> ' + author;
    authorh5.className = "truncate";
    authordiv.appendChild(authorh5);

    var teldiv = document.createElement("div");
    teldiv.className = "col s12 m6";
    var telp = document.createElement("p");
    telp.innerHTML = '<i class="material-icons prefix">phone</i> ' + tel;
    telp.className = "truncate";
    teldiv.appendChild(telp);

    var budgetdiv = document.createElement("div");
    budgetdiv.classList = "col s12 m6";
    var budgetp = document.createElement("p");
    budgetp.innerHTML = '<i class="material-icons prefix">monetization_on</i> ' + budget;
    budgetp.className = "truncate";
    budgetdiv.appendChild(budgetp);

    var streetdiv = document.createElement("div");
    streetdiv.className = "col s12 m6";
    var streetp = document.createElement("p");
    streetp.innerHTML = '<i class="material-icons prefix">domain</i> ' + street;
    streetp.className = "truncate";
    streetdiv.appendChild(streetp);

    var demanddiv = document.createElement("div");
    demanddiv.className = "col s12 m6";
    var demandp = document.createElement("p");
    demandp.innerHTML = '<i class="material-icons prefix">star</i> ' +  demand;
    demandp.className = "truncate";
    demanddiv.appendChild(demandp);

    var addressdiv = document.createElement("div");
    addressdiv.className = "col s12 m6 truncate";
    addressdiv.innerHTML = '<p><i class="material-icons prefix">place</i> ' + address + "</p>";

    row.appendChild(namediv);
    row.appendChild(authordiv);
    row.appendChild(teldiv);
    row.appendChild(budgetdiv);
    row.appendChild(streetdiv);
    row.appendChild(demanddiv);
    row.appendChild(addressdiv);

    container.appendChild(row);

    var cardaction = document.createElement("div");
    cardaction.className = "card-action";
    var a = document.createElement('a');
    // a.href = "#detail";
    a.href = 'javascript:void(0)';
    a.onclick = function (){
        $("#detail_name")[0].innerHTML = '<i class="material-icons prefix margin14">title</i>'+name;
        $("#detail_author")[0].innerHTML = '<i class="material-icons prefix margin14">account_circle</i>'+author;
        $("#detail_street")[0].innerHTML = '<i class="material-icons prefix margin14">domain</i>'+street;
        $("#detail_tel")[0].innerHTML = '<i class="material-icons prefix margin14">phone</i>'+tel;
        $("#detail_budget")[0].innerHTML = '<i class="material-icons prefix margin14">monetization_on</i>'+budget;
        $("#detail_demand")[0].innerHTML = '<i class="material-icons prefix margin14">star</i>'+demand;
        $("#detail_address")[0].innerHTML = '<i class="material-icons prefix margin14">place</i>'+address;
        $("#detail_window").modal('open');
    };
    a.innerHTML = "详情"
    cardaction.appendChild(a);

    var cardcontent = document.createElement("div");
    cardcontent.className = "card-content white-text";
    cardcontent.appendChild(container);
    card.appendChild(cardcontent);
    card.appendChild(cardaction);

    col.appendChild(card);

    return col;
}

function loadData() { 
    var jsonData;

    $.ajax({
        url: downloadURL,        
        type: "get",
        dataType: "json",
        async: false,
        success: function(data,status){
            jsonData = eval(data);          //将data字符串转换为json数组       
        },
        error: function (XMLHttpRequest, textStatus, errorThrown){
            alert("dataajax error")
        }
    });
    return jsonData;
}
var data = loadData();
for (item in data) {
    var div = newcard(data[item].name,data[item].author,data[item].street,data[item].tel,data[item].budget,data[item].demand,data[item].time,data[item].address,data[item].lng,data[item].lat);
    $("#cardholder")[0].appendChild(div);
}
var div = newcard("data[item].name","data[item].author","data[item].street","data[item].tel","data[item].budget","data[item].demand","data[item].time","data[item].address","data[item].lng","data[item].lat");
$("#cardholder")[0].appendChild(div);

var map = new BMap.Map("bdmap");
$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
