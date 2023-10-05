window.addEventListener('DOMContentLoaded', function () {
   MicroModal.init({
      openTrigger: 'data-custom-open',
      closeTrigger: 'data-micromodal-close',
      disableScroll: true,
      disableFocus: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,
   });
});

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

var ordercall_btn1 = document.getElementsByClassName("form_contacts-sendbtn-item-modal")[0];
console.log(ordercall_btn1);

//Кнопки перехода
ordercall_btn1.addEventListener("click", function () {
  event.preventDefault(); 

    MicroModal.show('modal-consult');
    MicroModal.close('modal-сatalog_item');
});

const btnclose = document.querySelector("#modal_closebtn");
var body1 = document.getElementsByTagName('body')[0]

btnclose.addEventListener("click", function () {
  event.preventDefault(); 
    MicroModal.close('modal-consult');
    body1.setAttribute('style', 'overflow-y: scroll');
});

/*
const over = document.getElementsByClassName("modal__overlay")[0];

over.addEventListener("click", function () {
  event.preventDefault(); 
    MicroModal.close('modal-consult');
});*/







const modal2 = document.querySelector("#modal-consult");


 modal2.addEventListener('click', e => { // при клике в любом месте окна браузера
    const target = e.target // находим элемент, на котором был клик
    if (!target.closest('.modal__content-consult') && !target.closest('.form_contacts-sendbtn-modal')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
      MicroModal.close('modal-consult'); // то закрываем окно навигации, удаляя активный класс
    }
  })
