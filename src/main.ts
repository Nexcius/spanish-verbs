import { App } from "./app.js"

// https://www.grammarly.com/blog/verb-conjugation/
// https://www.spanishdict.com/conjugate/ser


(function() {  
    const domVerbBase: HTMLSpanElement = document.getElementById("verb_base")
    const domVerbTranslation: HTMLSpanElement = document.getElementById("verb_translation")
    
    const domConjSpanish: HTMLSpanElement = document.getElementById("conjugation_spanish") as HTMLSpanElement
    const domConjEnglish: HTMLSpanElement = document.getElementById("conjugation_english") as HTMLSpanElement
    const domTense: HTMLSpanElement = document.getElementById("tense")
    const domTenseHelp: HTMLSpanElement = document.getElementById("tense-help")
    const domInput: HTMLInputElement = document.getElementById("input") as HTMLInputElement

    const domDisableVosotros: HTMLInputElement = document.getElementById("disable_vosotros") as HTMLInputElement
    const domVerbSelection: HTMLUListElement = document.getElementById("verb_selection") as HTMLUListElement
    const domTenseSelection: HTMLUListElement = document.getElementById("tense_selection") as HTMLUListElement
    
    const app = new App(domVerbBase, domVerbTranslation, domConjSpanish, domConjEnglish,
        domTense, domTenseHelp, domInput, domDisableVosotros, domVerbSelection, domTenseSelection);

    domInput.onkeyup = (e) => {
        if(e.keyCode === 13) {
            e.preventDefault()
            app.handleInput()
        }
    }
    
    domDisableVosotros.onchange = (e) => {
        e.preventDefault()
        app.disableVosotros = domDisableVosotros.checked
    }
})();
