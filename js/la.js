const greek = document.getElementById('greek');
const english = document.getElementById('english');

const el_txt = document.getElementsByClassName('el_txt');
const en_txt = document.getElementsByClassName('en_txt');

const nb_el = el_txt.length;
const nb_en = en_txt.length;

greek.addEventListener('click', function () {
    langue(greek, english);
});

english.addEventListener('click', function () {
    langue(english, greek);
});

function langue(langueOn, langueOff) {

    if (!langueOn.classList.contains('current_lang')) {
        langueOn.classList.toggle('current_lang');
        langueOff.classList.toggle('current_lang');
    }

    if (langueOn.innerHTML == 'Ελληνικά') {
        afficher(el_txt, nb_el);
        cacher(en_txt, nb_en);
    }

    else if (langueOn.innerHTML == 'English') {
        afficher(en_txt, nb_en);
        cacher(el_txt, nb_el);
    }
}

function afficher(txt, nb) {
    for (var i = 0; i < nb; i++) {
        txt[i].style.display = 'block';
    }
}

function cacher(txt, nb) {
    for (var i = 0; i < nb; i++) {
        txt[i].style.display = 'none';
    }
}

function init() {
    langue(greek, english);
}

init();
