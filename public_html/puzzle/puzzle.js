/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var fitxes_inici = {
        fitxa1: "img1"
    , fitxa2: "img3"
    , fitxa3: "img4"
    , fitxa4: "img7"
    , fitxa5: "img6"
    , fitxa6: "img2"
    , fitxa7: "img4"
    , fitxa8: "img9"
    , fitxa9: "img8"
};

var fitxes_final = {
        fitxa1: "img1"
    , fitxa2: "img2"
    , fitxa3: "img3"
    , fitxa4: "img4"
    , fitxa5: "img5"
    , fitxa6: "img6"
    , fitxa7: "img7"
    , fitxa8: "img8"
    , fitxa9: "img9"
};

$(document).ready(iniciar);

function iniciar() {
    
    $("#fichas_desordenadas>img").click(selecciona_ficha);
    $("#ficha_seleccionada").click(devuelve_ficha);
    $(".tablero>div>div").click(coloca_ficha);
    $("button.btn-info").click(check);
    
}

function selecciona_ficha() {
    if($("#ficha_seleccionada").children("img").length === 1) {
        $("#ficha_seleccionada>img").appendTo("#fichas_desordenadas");
        $(this).appendTo("#ficha_seleccionada");
    }else {
        $(this).appendTo("#ficha_seleccionada");
    }
}

function devuelve_ficha() {
    if($("#ficha_seleccionada").children("img").length === 1) {
        $("#ficha_seleccionada>img").appendTo("#fichas_desordenadas");
    }
}

function coloca_ficha() {
    if($(this).children().length === 0) {
        $("#ficha_seleccionada>img").off();
        $("#ficha_seleccionada>img").appendTo($(this));
    }else{
        if($("#ficha_seleccionada").children().length!==0) {
            var imatge = $("#ficha_seleccionada>img");
        }
        $(this).children("img").click(selecciona_ficha);
        $(this).children("img").appendTo("#ficha_seleccionada");
        imatge.appendTo($(this));
    }
}

function check() {
    var casillas = $(".tablero>div>div");
    var valid = true;
    casillas.each(function(i) {
        var imatge = $(this).children().attr("src");
        var ruta = fitxes_final["fitxa"+(i+1)];
        ruta+=".jpg";
        if(imatge!==ruta) {
            valid = false;
            return false;
        }
    });
    if(valid===true) {
        alert("Well Done!");
    }else {
        alert("Try Again!");
    }
}