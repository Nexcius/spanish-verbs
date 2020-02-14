import{data} from "./data.js"
import { TenseType, TENSES } from "./tense.js"
import { randomEnum, normalizeString } from "./util.js"
import { PronounType, Verb, PRONOUNS } from "./verb.js"

// https://www.grammarly.com/blog/verb-conjugation/
// https://www.spanishdict.com/conjugate/ser

enum AppState {
    QUERY, FEEDBACK
}

class Main {
    domVerbBase: HTMLSpanElement
    domVerbTranslation: HTMLSpanElement
    domConjEnglish: HTMLHeadingElement
    domTense: HTMLSpanElement
    domTenseHelp: HTMLSpanElement
    domInput: HTMLInputElement

    currentVerb: Verb
    currentTense: TenseType
    currentPronoun: PronounType
    state: AppState

    constructor(
            domVerbBase: HTMLSpanElement,
            domVerbTranslation: HTMLSpanElement,
            domConjEnglish: HTMLHeadingElement,
            domTense: HTMLSpanElement,
            domTenseHelp: HTMLSpanElement,
            domInput: HTMLInputElement,) {

        this.domVerbBase =          domVerbBase
        this.domVerbTranslation =   domVerbTranslation
        this.domConjEnglish =       domConjEnglish
        this.domTense =             domTense
        this.domTenseHelp =         domTenseHelp
        this.domInput =             domInput

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
        this.currentTense = randomEnum(TenseType)
        this.currentPronoun = randomEnum(PronounType)
    }

    next() {
        this.state = AppState.QUERY
        this.domInput.value = ""
        this.domInput.style.color = "black"
        this.randomVerb()

        console.log(this.currentVerb.getConjugation(this.currentTense, this.currentPronoun))

        let conj = this.currentVerb.getConjugation(this.currentTense, this.currentPronoun)
    
        this.domVerbBase.innerText = this.currentVerb.base
        this.domVerbTranslation.innerText = this.currentVerb.translation

        this.domConjEnglish.innerText = `${PRONOUNS[this.currentPronoun].english} ${conj.english}`
        this.domTense.innerText = TENSES[this.currentTense].name
        this.domTenseHelp.innerHTML = TENSES[this.currentTense].description 
            + "<br><br>Example: "
            + TENSES[this.currentTense].example
    }

    check() {
        this.state = AppState.FEEDBACK

        let anwer = this.domInput.value.trim().toLowerCase()
        let target = this.currentVerb.getConjugation(this.currentTense, this.currentPronoun)

        if (anwer === target.spanish) {
            this.domInput.style.color = "green"
        } else if (normalizeString(anwer) === normalizeString(target.spanish)) {
            this.domInput.style.color = "blue"
        } else {
            this.domInput.style.color = "red"
        }

        this.domInput.value = target.spanish
    }
}

(function() {  
    const domVerbBase: HTMLSpanElement = document.getElementById("verb_base")
    const domVerbTranslation: HTMLSpanElement = document.getElementById("verb_translation")

    const domConjEnglish: HTMLHeadingElement = document.getElementById("conjugation_english") as HTMLHeadingElement
    
    const domTense: HTMLSpanElement = document.getElementById("tense")
    const domTenseHelp: HTMLSpanElement = document.getElementById("tense-help")

    const domInput: HTMLInputElement = document.getElementById("input") as HTMLInputElement
    // const domSubmit: HTMLButtonElement = document.getElementById("submit") as HTMLButtonElement
    
    const app = new Main(domVerbBase, domVerbTranslation, domConjEnglish, domTense, domTenseHelp, domInput);

    domInput.onkeyup = (e) => {
        if(e.keyCode === 13) {
            e.preventDefault()
            app.handleInput()
        }
    }    
})();
