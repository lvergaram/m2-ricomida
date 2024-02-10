$("#enviarCorreo").click(function(){
    // Mostrar una alerta con el mensaje "El correo fue enviado correctamente..."
    alert("El correo fue enviado correctamente...");
  });
;

$( "#ingredientes" ).on( "dblclick", function(){
    $(this).hasClass("text-danger") ?
    $(this).removeClass("text-danger")
    :$(this).addClass("text-danger")
  } );

$( "#preparacion" ).on( "dblclick", function(){
    $(this).hasClass("text-danger") ?
    $(this).removeClass("text-danger")
    :$(this).addClass("text-danger")
  } );

  $(".card-title").click(function(){
    //alert("clic on"+$(this).innerHtml.stringify());
    $(this).closest(".card").toggle();
  });


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))