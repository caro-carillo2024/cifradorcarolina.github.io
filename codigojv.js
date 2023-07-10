    
$(document).ready(function(){
//cuando pase el raton sobre el articulo, se hace grande
    $("section article").hover(function(){
        $(this).addClass("aumentado")
    })
//cuando pase el raton sobre el articulo, se comprime nuevamente
    $("section article").mouseout(function(){
        $(this).removeClass("aumentado")
    })
    
    /* codigo botones*/
    
    
    $(".anterior").click(function(){
       var desfase = 0
       $(this).parent().parent().find(".imagenes").each(function(){
            desfase = $(this).css("left")
        })
        desfase = Math.round((desfase.replace("px","")*1)/100)*100
        desfase += 200;
        console.log(desfase)
        $(this).parent().parent().find(".imagenes").each(function(){
            $(this).css("left",(desfase)+"px")
        })
    })
        
    $(".posterior").click(function(){
        var desfase =0
        $(this).parent().parent().find(".imagenes").each(function(){
            desfase = $(this).css("left")
        })
        
        desfase = Math.round((desfase.replace("px","")*1)/100)*100
        desfase -= 200;
        console.log(desfase)
        $(this).parent().parent().find(".imagenes").each(function(){
            $(this).css("left",(desfase)+"px")
        })
    })
    
    /* codigo expandir-comprimir*/
    
    $("article").click(function(){
//quita la clase abierto a los detalles
        $(this).parent().parent().next().removeClass("abierto")
        $(this).parent().parent().next().removeClass("muyabierto")
//despues de un segundo y medio, carga las nuevas caracteristicas
        var este = $(this)
        setTimeout(function(){
        
        este.parent().parent().next().find("h2").text(titulo)
         este.parent().parent().next().find("h3").text(subtitulo)
         este.parent().parent().next().find("p").text(descripcion)
         este.parent().parent().next().find("img").attr("src",imagen)
        este.parent().parent().next().addClass("abierto")
        
        },1500)
//carga los datos del titulo, texto,... del articulo que da click
        var titulo = "" 
        $(this).find("h3").each(function(){
            titulo = $(this).text()
        })
        var subtitulo = "" 
        $(this).find("h4").each(function(){
            subtitulo = $(this).text()
        })
        var descripcion = "" 
        $(this).find("p").each(function(){
            descripcion = $(this).text()
        })
        var imagen = "" 
        $(this).find("img").each(function(){
            imagen = $(this).attr("src")
        })
    })
//el cuadro de mas informacion se hace mas grande
    $(".masinfo").click(function(){
        $(this).parent().addClass("muyabierto")
    })
})
     