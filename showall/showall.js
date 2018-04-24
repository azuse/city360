const downloadURL = "../php/download.php";

function newcard(author,street,tel,budget,demand,time,address,lng,lat){
    var col = document.createElement("div");
    col.className = "col s6";
    var card = document.createElement("div");
    card.className = "card blue-grey darken-1"
    var container = document.createElement("div");
    container.className = "container";
    var row = document.createElement("div");
    row.className = "row";
    
    var authordiv = document.createElement("div");
    authordiv.className = "col s6";
    var authorh5 = document.createElement("h5");
    authorh5.innerHTML = '<i class="material-icons prefix">account_circle</i>上传组织：' + author;
    authordiv.appendChild(authorh5);

    var teldiv = document.createElement("div");
    teldiv.className = "col s6";
    var telp = document.createElement("p");
    telp.innerHTML = '<i class="material-icons prefix">phone</i>联系方式：' + tel;
    teldiv.appendChild(telp);

    var budgetdiv = document.createElement("div");
    budgetdiv.classList = "col s6";
    var budgetp = document.createElement("p");
    budgetp.innerHTML = '<i class="material-icons prefix">monetization_on</i>预算：' + budget;
    budgetdiv.appendChild(budgetp);

    var streetdiv = document.createElement("div");
    streetdiv.className = "col s6";
    var streetp = document.createElement("p");
    streetp.innerHTML = '<i class="material-icons prefix">domain</i>所属街道' + street;
    streetdiv.appendChild(streetp);

    var demanddiv = document.createElement("div");
    demanddiv.className = "col s6";
    var demandp = document.createElement("p");
    demandp.innerHTML = '<i class="material-icons prefix">star</i>改造意向：' +  demand;
    demanddiv.appendChild(demandp);

    var addressdiv = document.createElement("div");
    addressdiv.className = "col s6";
    addressdiv.innerHTML = '<i class="material-icons prefix">place</i>地址：' + "<p>" + address + "</p>";

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
    a.href = "#detail";
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
    var div = newcard(data[item].author,data[item].street,data[item].tel,data[item].budget,data[item].demand,data[item].time,data[item].address,data[item].lng,data[item].lat);
    $("#cardholder")[0].appendChild(div);
}

var map = new BMap.Map("bdmap");