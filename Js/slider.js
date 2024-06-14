/*evenement au clic sur la fonction "changeSlide()", */
/*param -1 sur la fonction précédente,
param +1 sur la fonction suivante */

/* Variable de type tableau */

const slide = ["coworking.jpg", "group.jpg", "bureau.jpg"];
let numero = 0;

let ChangeSlide = (sens) => {
    numero = numero + sens;
    if(numero > slide.length -1)
        numero = 0;
    if(numero < 0)
        numero = slide.length -1
    document.getElementById("slide").src="assets/images/slider/" + slide[numero];
    //setInterval("ChangeSlide(1)", 4000);

};


