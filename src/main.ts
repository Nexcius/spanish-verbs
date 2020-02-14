import{data} from "./data.js"
import { TenseType, TENSES } from "./tense.js"
import { randomEnum, normalizeString } from "./util.js"
import { PronounType, Verb, PRONOUNS } from "./verb.js"
import { Session } from "./session.js"

// https://www.grammarly.com/blog/verb-conjugation/
// https://www.spanishdict.com/conjugate/ser

enum AppState {
    QUERY, FEEDBACK
}

function tryGa(v: any) {
    try {
        ga(v)
    } catch (error) {
        console.warn("Error:" + error)
    }
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

    private disableVosotros: boolean
    private verbs: Verb[]

    session = new Session()

    private static TIMEOUT_DURATION: number = 3000
    

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

        this.disableVosotros = false
        this.verbs = data
        this.next()
    }

    setDisableNosotros(flag: boolean) {
        this.disableVosotros = flag
    }

    getVerbList(): [string, boolean][] {
        let allVerbs = data.map((verb) => verb.base)
        let selectedVerbs = this.verbs.map((verb) => verb.base)
        return allVerbs.map((verb) => [verb, selectedVerbs.indexOf(verb) >= 0] )
    }

    blacklistVerbs(verbsBlacklist: string[]) {
        this.verbs = data.filter(verb => verbsBlacklist.indexOf(verb.base) < 0)
    }

    handleInput() {
        if (this.state === AppState.QUERY) {
            this.check()
        } else {
            this.next()
        }
    }

    private randomVerb() {
        this.currentVerb = this.verbs[Math.floor(Math.random() * this.verbs.length)]
        this.currentTense = randomEnum(TenseType)
        
        do {
            this.currentPronoun = randomEnum(PronounType)
        } while (this.disableVosotros && this.currentPronoun === PronounType.SECOND_PERSON_PLURAL)
    }

    next() {
        this.state = AppState.QUERY
        this.domInput.value = ""
        this.domInput.style.color = "black"
        this.randomVerb()

        let conj = this.currentVerb.getConjugation(this.currentTense, this.currentPronoun)
    
        this.domVerbBase.innerText = this.currentVerb.base
        this.domVerbTranslation.innerText = this.currentVerb.translation

        this.domConjEnglish.innerText = `${PRONOUNS[this.currentPronoun].english} ${conj.english}`
        this.domTense.innerText = TENSES[this.currentTense].name
        this.domTenseHelp.innerHTML = TENSES[this.currentTense].description 
            + "<br><br>Example: "
            + TENSES[this.currentTense].example

        // tryGa("send", "event", "Interaction", "New Word")
    }

    check() {
        this.state = AppState.FEEDBACK
        let anwer = this.domInput.value.trim().toLowerCase()
        let target = this.currentVerb.getConjugation(this.currentTense, this.currentPronoun)

        if (anwer === target.spanish) {
            this.domInput.style.color = "green"
            this.session.addResult(target.spanish, true)
        } else if (normalizeString(anwer) === normalizeString(target.spanish)) {
            this.domInput.style.color = "blue"
            this.session.addResult(target.spanish, true)
        } else {
            this.domInput.style.color = "red"
            this.session.addResult(target.spanish, false)
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
    
    const app = new Main(domVerbBase, domVerbTranslation, domConjEnglish, domTense, domTenseHelp, domInput);

    domInput.onkeyup = (e) => {
        if(e.keyCode === 13) {
            e.preventDefault()
            app.handleInput()
        }
    }
})();
