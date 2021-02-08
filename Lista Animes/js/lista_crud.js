var users = getDataOnLocalStorage();
renderRegisterOnHTML();

var color = getColorModeOnLocalStorage();
change_color();

// JSON
// {}


function saveData(){
    var form = document.getElementById("formManagerUser");

    var name = form.name;
    var url = form.url;
    var rate = form.rate;

    // alert(name + " " + rate + " " + remember);
    if (validateForm(name, rate, url)){
        addDataToArray(name.value, rate.value, url.value);
        hideModal();
        clearFormData();
        renderRegisterOnHTML();
        saveDataOnLocalStorage();
    }
}

function validateForm(name, rate, url){
    var fomularioValido = true;

    if(name.value.length < 5){
        fomularioValido = false;
        name.classList.add("error");
    }

    if(rate.value.length == 0){
        fomularioValido = false;
        rate.classList.add("error");
    }

    if(url.value.length == 0){
        fomularioValido = false;
        url.classList.add("error");
    }

    setTimeout(() => {
        name.classList.remove("error");
        rate.classList.remove("error");
        url.classList.remove("error");
    }, 2000);

    return fomularioValido;
}

function addDataToArray(nameP, rateP,urlP){
    var json ={
        name: nameP,
        rate: rateP,
        url: urlP
    }
    users.push(json);
}

function clearFormData(){
    var form = document.getElementById("formManagerUser");
    form.reset();
}

function hideModal(){
    var modal = $("#managerRegister");
    modal.modal('hide');
}

renderRegisterOnHTML();

function renderRegisterOnHTML(){
    var container = document.getElementById("containerRegister");
    container.innerHTML = "";   // Reseta o container
    for(var i = 0; i < users.length; i++){
        // Coloca elementos na tela
        var jsonItem = users[i];
        var elementFilled  = createElementOnHTML(jsonItem, i);
        container.appendChild(elementFilled);
    }

}

function deleteItemRegister(position) {
    users = getDataOnLocalStorage();
    users.splice(position, 1);
    saveDataOnLocalStorage();
    renderRegisterOnHTML();
}


function createElementOnHTML(jsonItem, position){
    // Permite criar elementos no HTML

    // Div principal
    var mainDiv = document.createElement("div");    // Cria o elemento
    mainDiv.classList.add("col-md-4");              // Adiciona uma classe, permite o uso do  bootstrap
    //mainDiv.innerHTML = "Teste";                    // Adiciona o conteúdo, adiciona texto

    // Card
    var carDiv = document.createElement("div");
    carDiv.classList.add("card");

    // Imagem
    var imgCardDiv =  document.createElement("img");
    imgCardDiv.src = jsonItem.url;
    imgCardDiv.classList.add("image");
    carDiv.classList.add("card-img-top");
    carDiv.style.background = color;

    mainDiv.appendChild(imgCardDiv);

    // Corpo do card
    var cardBodyCardDiv = document.createElement("div");
    cardBodyCardDiv.classList.add("card-body");
    cardBodyCardDiv.classList.add("text-center");
    carDiv.appendChild(cardBodyCardDiv);

    // h5
    var h5CardBodyCardDiv = document.createElement("h5");
    h5CardBodyCardDiv.classList.add("card-title");
    cardBodyCardDiv.appendChild(h5CardBodyCardDiv);
    h5CardBodyCardDiv.innerHTML = jsonItem.name;

    if (color == "black"){
        h5CardBodyCardDiv.style.color = "white";
    } else{
        h5CardBodyCardDiv.style.color = "black";
    }


    // Nota
    var a_CardyBody_CardDiv = document.createElement("a");
    a_CardyBody_CardDiv.classList.add("btn");
    a_CardyBody_CardDiv.classList.add("btn-success");
    a_CardyBody_CardDiv.innerHTML = jsonItem.rate;
    cardBodyCardDiv.appendChild(a_CardyBody_CardDiv);


    // Botão deletar
    var a_CardyBody_CardDiv_deleteButton = document.createElement("a");
    a_CardyBody_CardDiv_deleteButton.classList.add("btn");
    a_CardyBody_CardDiv_deleteButton.classList.add("btn-danger");
    a_CardyBody_CardDiv_deleteButton.addEventListener("click", function(){ deleteItemRegister(position) });
    a_CardyBody_CardDiv_deleteButton.innerHTML = "Excluir";

    cardBodyCardDiv.appendChild(a_CardyBody_CardDiv_deleteButton);

    mainDiv.appendChild(carDiv);

    return mainDiv;
}

document.getElementById("managerRegister").addEventListener("keyup", function (event) {
   event.preventDefault();
   if (event.keyCode === 13) {
       //document.getElementById("rate").click();
       saveData();
   }
});

function saveDataOnLocalStorage() {
    localStorage.setItem("user_list", JSON.stringify(users));
}

function getDataOnLocalStorage() {
    var dataSaved = localStorage.getItem("user_list");

    if (dataSaved == null)
    {
        return [];
    } else{
        return (JSON.parse(localStorage.getItem("user_list")));
    }
}

function switch_mode() {

    var currentColor = getColorModeOnLocalStorage();

    if (currentColor == null || currentColor == "white"){
        color = "black"
    } else{
        color = "white";
    }

    change_color();
}

function change_color() {
    var btnSwitch = document.getElementById("btn-switch-mode");
    if (color == "black"){
        btnSwitch.style.background = "white";
        btnSwitch.textContent = "Light Mode";
        btnSwitch.style.color = "black";
    }else{
        btnSwitch.style.background = "black";
        btnSwitch.textContent = "Dark Mode";
        btnSwitch.style.color = "white";
    }

    var body = document.getElementById("page-body");
    body.style.background = color;

    var card = document.getElementsByClassName("card-img-top");

    for (i = 0; i < card.length; i ++){
        card[i].style.background = color;

        console.log(card[i]);

        if (color == "black"){
            document.getElementsByClassName("card-title")[i].style.color = "white";
        }else{
            document.getElementsByClassName("card-title")[i].style.color = "black";
        }

    }
    saveColorModeOnLocalStorage();
}

function saveColorModeOnLocalStorage() {
    localStorage.setItem("colorMode", color);
}

function getColorModeOnLocalStorage() {
    var dataSaved = localStorage.getItem("colorMode");

    if (dataSaved == null)
    {
        return [];
    } else{
        return (localStorage.getItem("colorMode"));
    }
}