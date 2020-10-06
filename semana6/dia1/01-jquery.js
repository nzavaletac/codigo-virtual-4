/**
 * jquery, libreria de JS para manipular el DOM 
 * de una manera más fácil y corta
 */

/**
 * Seleccionar uno o mas elementos del DOM
 */
const title = $("#title");
/**
 * Modificar propiedades 
 * elemento.text()
 * GETTER y SETTER del innerTEXT de un elemento
 */
console.log(title.text())
title.text("Título Modificado")
/**
 * elemento.html()
 * GETTER y SETTER del inerrHtml de un elemento
 */
console.log($("#nav-lista").html());
$("#nav-lista").html("<li><a href='#'>Único Link</a></li>")
/**
 * selector multiple
 * JQuery puede seleccionar varios elementos de acuerdo a la regla del selector
 */
$(".parrafo").html("Nuevo texto el parrafo")
/**
 * eventos
 * Los eventos son similares a JS puro, sin embargo 
 * JQuery intenta reducir código a la hora de settear los eventos 
 * elementoJQuery.click(()=>{})
 */
$("#btnClick").click((e) => {
    console.log(e)
    console.log("Click en el Boton");
})
/**
 * Agregar clase 
 */

$("#btnTextoRojo").click((e) => {
    /**
     * elemento.addClass=Agrega una clase al o los elementos 
     * seleccionados
     */
    $(".parrafo").addClass("texto-rojo");
});

$("#btnCssTitle").click((e)=> { 
    // elemento.css("propiedad", "valor")
    $("#title").css("font-family","Helvetica")
                .css("color","green")    
});

$("#formulario").submit((e)=>{
    e.preventDefault();
    console.log($("#inputEmail").val());
})