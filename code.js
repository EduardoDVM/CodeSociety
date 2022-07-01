(() => {
    window.addEventListener('load', function () {
      new Glider(document.querySelector('.carruselCont'), {
        slidesToShow: 1,
        slidesToScroll: 'auto',
        draggable: true,
        dots: '.indicadores',
        rewind: true,
        arrows: {
          prev: '.back',
          next: '.next',
        },
      });
    });
  })();


  (() => {
    window.addEventListener('load', function () {
      new Glider(document.querySelector('.carrusel_lista'), {
        slidesToShow: 1,
        slidesToScroll: 'auto',
        draggable: true,
        dots: '.carrusel_indicador',
        rewind: true,
        arrows: {
          prev: '.btton-right',
          next: '.btton-left',
        },
      });
    });
  })();

function menu_hamburguer(btn,menu,link){
  document.addEventListener("click", e=> {
    if(e.target.matches(btn)|| e.target.matches(`${btn} *`)|| 
    e.target.matches(link)){
      document.querySelector(menu).classList.toggle("is-active")
      document.querySelectorAll(link).classList.remove("is-active")
    }
  })
}

menu_hamburguer(".cont-btn",".panel",".panel_a")
// document.addEventListener("DOMContentLoaded", e =>{
// })