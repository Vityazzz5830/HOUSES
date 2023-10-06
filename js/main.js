/*async function elementUpdate(selector) {
  try {
    var html = await (await fetch(location.href)).text();
    var newdoc = new DOMParser().parseFromString(html, 'text/html');
    document.querySelector(selector).outerHTML = newdoc.querySelector(selector).outerHTML;
    console.log('Элемент '+selector+' был успешно обновлен');
    return true;
  } catch(err) {
    console.log('При обновлении элемента '+selector+' произошла ошибка:');
    console.error(err);
    return false;
  }

}

/*
window.addEventListener('DOMContentLoaded', function () {
  
  elementUpdate('.whywe');

  elementUpdate('.team');
  elementUpdate('.questions');
  
  
  elementUpdate('.footer_mobile');
});
*/


$('.materials-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  infinite: true,
  dots: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false, 
      variableWidth: true
      }
    },
         // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.reviews-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  infinite: true,
  dots: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false, 
      variableWidth: true
      }
    },
         // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


let refresh = document.getElementsByClassName('usehouse-slider');
var tab2 = document.getElementById('tab2');


window.addEventListener('DOMContentLoaded', function () {
   $('.usehouse-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        infinite: true,
        dots: false,
        autoplay: false,
      });
});

 $(".label1").on('click',function() {
      $('.usehouse-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        infinite: true,
        dots: false,
        autoplay: false,
      });
      $('.usehouse-slider2').slick('unslick');
    });


    $(".label2").on('click',function() {
      $('.usehouse-slider2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        infinite: true,
        dots: false,
        autoplay: true,
      });
      $('.usehouse-slider').slick('unslick');
    });





/*-------------ТАБ-МЕНЮ УСЛУГИ-------------*/

let p_bold = document.getElementsByClassName('questions-list-item-title-p');
let listitem = document.getElementsByClassName('questions-list-item');
let wrapinfo = document.getElementsByClassName('questions-list-item-wrapinfo');

listitem[0].addEventListener('click', function() {
  wrapinfo[0].classList.toggle("questions-list-item-wrapinfo_js");
  listitem[0].classList.toggle("questions-list-item-btnwrap-imgactive");
  listitem[0].classList.toggle("questions-list-item-btnwrap-imgnoactive");
  p_bold[0].classList.toggle("questions-list-item-title-p_js");
  listitem[0].classList.toggle("questions-list-item_js");
});

listitem[1].addEventListener('click', function() {
  wrapinfo[1].classList.toggle("questions-list-item-wrapinfo_js");
  listitem[1].classList.toggle("questions-list-item-btnwrap-imgactive");
  listitem[1].classList.toggle("questions-list-item-btnwrap-imgnoactive");
  p_bold[1].classList.toggle("questions-list-item-title-p_js");
  listitem[1].classList.toggle("questions-list-item_js");
});

listitem[2].addEventListener('click', function() {
  wrapinfo[2].classList.toggle("questions-list-item-wrapinfo_js");
  listitem[2].classList.toggle("questions-list-item-btnwrap-imgactive");
  listitem[2].classList.toggle("questions-list-item-btnwrap-imgnoactive");
  p_bold[2].classList.toggle("questions-list-item-title-p_js");
  listitem[2].classList.toggle("questions-list-item_js");
});

listitem[3].addEventListener('click', function() {
  wrapinfo[3].classList.toggle("questions-list-item-wrapinfo_js");
  listitem[3].classList.toggle("questions-list-item-btnwrap-imgactive");
  listitem[3].classList.toggle("questions-list-item-btnwrap-imgnoactive");
  p_bold[3].classList.toggle("questions-list-item-title-p_js");
  listitem[3].classList.toggle("questions-list-item_js");
});

listitem[4].addEventListener('click', function() {
  wrapinfo[4].classList.toggle("questions-list-item-wrapinfo_js");
  listitem[4].classList.toggle("questions-list-item-btnwrap-imgactive");
  listitem[4].classList.toggle("questions-list-item-btnwrap-imgnoactive");
  p_bold[4].classList.toggle("questions-list-item-title-p_js");
  listitem[4].classList.toggle("questions-list-item_js");
});



var nameInputs = document.querySelectorAll('input[data-name-input]');

$(nameInputs).on('keypress', function() {
    var that = this;

    setTimeout(function() {
        var res = /[^аА-яЯ]/g.exec(that.value);
        console.log(res);
        that.value = that.value.replace(res, '');
    }, 0);
});


var emailInputs = document.querySelectorAll('input[data-email-input]');

$(emailInputs).on('keypress', function() {
    var that = this;

    setTimeout(function() {
        var res = /[^aA-zZ1234567890@.?!%&()><*-_]/g.exec(that.value);
        console.log(res);
        that.value = that.value.replace(res, '');
    }, 0);
});


window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('input[data-tel-input]'), function(input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);

  });

});


function initMap (){
    map = new ymaps.Map("yandexmap", {
    center: [47.218785, 39.700424],
    zoom: 17,
    controls: []
    });
}

function newMetka (){
    var myPlacemark = new ymaps.Placemark([47.218785, 39.700424], {}, {
    preset: 'islands#redDotIcon'
});
    map.geoObjects.add(myPlacemark); 
}

ymaps.ready(initMap);
ymaps.ready(newMetka);


/*--------------BURGER MENU-----------------------*/

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

const btn1 = document.querySelector("#catalogbtn");
const btn2 = document.querySelector("#materialsbtn");
const btn3 = document.querySelector("#questionsbtn");
const btn4 = document.querySelector("#reviewsbtn");
const btn5 = document.querySelector("#contactsbtn");
// Клонируем меню, чтобы задать свои стили для мобильной версии
/*const menu = document.querySelector("#menu").cloneNode(1);*/

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

//hamb.addEventListener("mouseover", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

btn1.addEventListener('click', function() {
   popup.classList.toggle("open");
   body.classList.toggle("noscroll");
   renderPopup();
});

btn2.addEventListener('click', function() {
   popup.classList.toggle("open");
   body.classList.toggle("noscroll");
   renderPopup();
});

btn3.addEventListener('click', function() {
   popup.classList.toggle("open");
   body.classList.toggle("noscroll");
   renderPopup();
});

btn4.addEventListener('click', function() {
   popup.classList.toggle("open");
   body.classList.toggle("noscroll");
   renderPopup();
});

btn5.addEventListener('click', function() {
   popup.classList.toggle("open");
   body.classList.toggle("noscroll");
   renderPopup();
});










