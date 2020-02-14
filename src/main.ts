import{data} from "./data.js"
import { Tense, tenseName, TenseHelp } from "./tense.js"
import { randomEnum, normalizeString } from "./util.js"
import { Pronoun, pronounName, Verb } from "./verb.js"
import { Language } from "./localization.js"

// https://www.grammarly.com/blog/verb-conjugation/
// https://www.spanishdict.com/conjugate/ser

enum AppState {
    QUERY, FEEDBACK
}

class Main {
    domVerb: HTMLHeadingElement
    domTranslation: HTMLParagraphElement
    domTense: HTMLSpanElement
    domTenseHelp: HTMLSpanElement
    domPronoun: HTMLDivElement
    domInput: HTMLInputElement

    currentVerb: Verb
    currentTense: Tense
    currentPronoun: Pronoun
    state: AppState

    language: Language = Language.ENGLISH

    constructor(
            domVerb: HTMLHeadingElement,
            domTranslation: HTMLParagraphElement,
            domTense: HTMLSpanElement,
            domTenseHelp: HTMLSpanElement,
            domPronoun: HTMLDivElement,
            domInput: HTMLInputElement) {

        this.domVerb = domVerb
        this.domTranslation = domTranslation
        this.domTense = domTense
        this.domTenseHelp = domTenseHelp
        this.domPronoun = domPronoun
        this.domInput = domInput

        this.next()
    }

    handleInput() {
        if (this.state === AppState.QUERY) {
            this.check()
        } else {
            this.next()
        }
    }

    private randomVerb() {
        this.currentVerb = data[Math.floor(Math.random() * data.length)]
        this.currentTense = randomEnum(Tense)
        this.currentPronoun = randomEnum(Pronoun)
    }

    next() {
        this.state = AppState.QUERY
        this.domInput.value = ""
        this.domInput.style.color = "black"
        this.randomVerb()

        console.log(this.currentVerb.getConjugation(this.currentTense, this.currentPronoun))
    
        this.domVerb.innerText = this.currentVerb.base
        this.domTranslation.innerText = this.currentVerb.translation
        this.domTense.innerHTML = tenseName(this.currentTense, this.language)
        this.domTenseHelp.innerHTML = TenseHelp.for(this.currentTense).description 
            + "<br><br>Example: "
            + TenseHelp.for(this.currentTense).example
        this.domPronoun.innerText = pronounName(this.currentPronoun, this.language)

    }

    check() {
        this.state = AppState.FEEDBACK

        let anwer = this.domInput.value.trim().toLowerCase()
        let correct = this.currentVerb.getConjugation(this.currentTense, this.currentPronoun)

        if (anwer === correct) {
            this.domInput.style.color = "green"
        } else if (normalizeString(anwer) === normalizeString(correct)) {
            this.domInput.style.color = "blue"
        } else {
            this.domInput.style.color = "red"
        }

        this.domInput.value = correct


        // console.log(this.domInput.value + " - " + this.currentVerb. + " ::: " + (this.domInput.value === answer))
    }
}

(function() {  
    const domVerb: HTMLHeadingElement = document.getElementById("verb") as HTMLHeadingElement
    const domTranslation: HTMLParagraphElement = document.getElementById("translation") as HTMLParagraphElement
    const domTense: HTMLSpanElement = document.getElementById("tense")
    const domTenseHelp: HTMLSpanElement = document.getElementById("tense-help")
    const domPronoun: HTMLDivElement = document.getElementById("pronoun") as HTMLDivElement

    const domInput: HTMLInputElement = document.getElementById("input") as HTMLInputElement
    // const domSubmit: HTMLButtonElement = document.getElementById("submit") as HTMLButtonElement
    
    const app = new Main(domVerb, domTranslation, domTense, domTenseHelp, domPronoun, domInput);

    domInput.onkeyup = (e) => {
        if(e.keyCode === 13) {
            e.preventDefault()
            app.handleInput()
        }
    }    
})();
