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
    authorh5.innerHTML = author;
    authordiv.appendChild(authorh5);

    var teldiv = document.createElement("div");
    teldiv.className = "col s6";
    var telp = document.createElement("p");
    telp.innerHTML = tel;
    teldiv.appendChild(telp);

    var budgetdiv = document.createElement("div");
    budgetdiv.classList = "col s6";
    var budgetp = document.createElement("p");
    budgetp.innerHTML = budget;
    budgetdiv.appendChild(budgetp);

    var streetdiv = document.createElement("div");
    streetdiv.className = "col s6";
    var streetp = document.createElement("p");
    streetp.innerHTML = street;
    streetdiv.appendChild(streetp);

    var demanddiv = document.createElement("div");
    demanddiv.className = "col s6";
    var demandp = document.createElement("p");
    demandp.innerHTML = demand;
    demanddiv.appendChild(demandp);

    row.appendChild(authordiv);
    row.appendChild(teldiv);
    row.appendChild(budgetdiv);
    row.appendChild(streetdiv);
    row.appendChild(demanddiv);

    container.appendChild(row);

    var cardaction = document.createElement("div");
    cardaction.className = "card-action";
    var a = document.createElement('a');
    a.href = "#detail";
    cardaction.appendChild(a);

    card.appendChild(container);

    col.appendChild(card);
    col.appendChild(cardaction);

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
    var div = newcard(data[item].author,data[item].street,data[item].tel,data[item].budget,data[item].time,data[item].address,data[item].lng,data[item].lat);
    $("#cardholder")[0].appendChild(div);
}

var map = new BMap.Map("bdmap");