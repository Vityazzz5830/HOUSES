$('.usehouse-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  infinite: true,
  dots: false,
  autoplay: true,
});

$('.materials-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  infinite: true,
  dots: false,
  autoplay: true,
});

$('.reviews-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  infinite: true,
  dots: false,
  autoplay: true,
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






/*-----input number mask------*/
document.addEventListener("DOMContentLoaded", function () {
    var phoneInputs = document.querySelectorAll('input[data-tel-input]');
    
    var getInputNumbersValue = function (input) {
        // Return stripped input value â€” just numbers
        return input.value.replace(/\D/g, '');
    }

    var onPhonePaste = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        var pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            var pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                // Attempt to paste non-numeric symbol â€” remove all non-numeric symbols,
                // formatting will be in onPhoneInput handler
                input.value = inputNumbersValue;
                return;
            }
        }
    }

    var onPhoneInput = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = "";

        if (!inputNumbersValue) {
            return input.value = "";
        }

        if (input.value.length != selectionStart) {
            // Editing in the middle of input, not last symbol
            if (e.data && /\D/g.test(e.data)) {
                // Attempt to input non-numeric symbol
                input.value = inputNumbersValue;
            }
            return;
        }

        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
            var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
    }
    var onPhoneKeyDown = function (e) {
        // Clear input after remove last symbol
        var inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 8 && inputValue.length == 1) {
            e.target.value = "";
        }
    }
    for (var phoneInput of phoneInputs) {
        phoneInput.addEventListener('keydown', onPhoneKeyDown);
        phoneInput.addEventListener('input', onPhoneInput, false);
        phoneInput.addEventListener('paste', onPhonePaste, false);
    }
})

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
