import { App } from "./app.js";
(function () {
    var domVerbBase = document.getElementById("verb_base");
    var domVerbTranslation = document.getElementById("verb_translation");
    var domConjSpanish = document.getElementById("conjugation_spanish");
    var domConjEnglish = document.getElementById("conjugation_english");
    var domTense = document.getElementById("tense");
    var domTenseHelp = document.getElementById("tense-help");
    var domInput = document.getElementById("input");
    var domDisableVosotros = document.getElementById("disable_vosotros");
    var domVerbSelection = document.getElementById("verb_selection");
    var domTenseSelection = document.getElementById("tense_selection");
    var app = new App(domVerbBase, domVerbTranslation, domConjSpanish, domConjEnglish, domTense, domTenseHelp, domInput, domDisableVosotros, domVerbSelection, domTenseSelection);
    domInput.onkeyup = function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            app.handleInput();
        }
    };
    domDisableVosotros.onchange = function (e) {
        e.preventDefault();
        app.disableVosotros = domDisableVosotros.checked;
    };
})();
