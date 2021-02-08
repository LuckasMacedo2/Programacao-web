function consultaCEP(){

    var cep = document.getElementById("cep").value;

    console.log(">>" + cep + "<<");

    var url = "https://viacep.com.br/ws/" + cep+ "/json/";

    $(".barra-progresso").show();

    // Ajax com biblioteca JQuery
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){

            // Duas formas de fazer:
            // 1
            document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            
            // 2
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);

            $("#titulo-cep").html("CEP: " + response.cep);

            $(".cep").show();
            $(".barra-progresso").hide();

        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
});
