import { Verb, PronounType, PRONOUNS } from "./verb.js"
import { TenseType, TENSES } from "./tense.js"
import { Session } from "./session.js"
import { randomEnum, normalizeString } from "./util.js"
import { initTenseList, getSelectedTenses, getSelectedVerbs, initVerbList } from "./ui.js"

enum AppState {
    QUERY, FEEDBACK
}

export class App {
    domVerbBase: HTMLSpanElement
    domVerbTranslation: HTMLSpanElement
    domConjSpanish: HTMLSpanElement
    domConjEnglish: HTMLSpanElement
    domTense: HTMLSpanElement
    domTenseHelp: HTMLSpanElement
    domInput: HTMLInputElement

    domDisableVosotros: HTMLInputElement
    domVerbSelection: HTMLUListElement
    domTenseSelection: HTMLUListElement

    currentVerb: Verb
    currentTense: TenseType
    currentPronoun: PronounType
    state: AppState

    disableVosotros: boolean
    private verbs: Verb[]
    private tenses: TenseType[]

    session = new Session()

    private static TIMEOUT_DURATION: number = 3000
    

    constructor(
            domVerbBase: HTMLSpanElement,
            domVerbTranslation: HTMLSpanElement,
            domConjSpanish: HTMLSpanElement,
            domConjEnglish: HTMLSpanElement,
            domTense: HTMLSpanElement,
            domTenseHelp: HTMLSpanElement,
            domInput: HTMLInputElement,
            domDisableVosotros: HTMLInputElement,
            domVerbSelection: HTMLUListElement,
            domTenseSelection: HTMLUListElement) {

        this.domVerbBase =          domVerbBase
        this.domVerbTranslation =   domVerbTranslation
        this.domConjSpanish =       domConjSpanish
        this.domConjEnglish =       domConjEnglish
        this.domTense =             domTense
        this.domTenseHelp =         domTenseHelp
        this.domInput =             domInput
        this.domDisableVosotros =   domDisableVosotros
        this.domVerbSelection =     domVerbSelection
        this.domTenseSelection =    domTenseSelection

        this.disableVosotros = false
        this.domDisableVosotros.checked = this.disableVosotros

        initVerbList(this, this.domVerbSelection)
        initTenseList(this, this.domTenseSelection)
        this.update()
        this.next()
    }

    update() {
        this.tenses = getSelectedTenses(this.domTenseSelection)
        this.verbs = getSelectedVerbs(this.domVerbSelection)
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
        this.currentTense = this.tenses[Math.floor(Math.random() * this.tenses.length)]
        
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

        this.domConjSpanish.innerText = PRONOUNS[this.currentPronoun].spanish
        this.domConjEnglish.innerText = `${PRONOUNS[this.currentPronoun].english} ${conj.english}`

        this.domTense.innerText = TENSES[this.currentTense].name
        this.domTenseHelp.innerHTML = TENSES[this.currentTense].description 
            + "<br><br>Example: "
            + TENSES[this.currentTense].example
    }

    check() {
        this.state = AppState.FEEDBACK
        let givenAnswer = this.domInput.value.trim().toLowerCase()
        
        let targetVerb = this.currentVerb.getConjugation(this.currentTense, this.currentPronoun)
        let correctAnswers: string[] = targetVerb.spanish.split("/")
        let correctNormalizedAnswers: string[] = correctAnswers.map(s => normalizeString(s))

        if (correctAnswers.indexOf(givenAnswer) >= 0) {
            this.domInput.style.color = "green"
            this.session.addResult(targetVerb.spanish, true)
        } else if (correctNormalizedAnswers.indexOf(normalizeString(givenAnswer)) >= 0) {
            this.domInput.style.color = "blue"
            this.session.addResult(targetVerb.spanish, true)
        } else {
            this.domInput.style.color = "red"
            this.session.addResult(targetVerb.spanish, false)
        }

        this.domInput.value = targetVerb.spanish
    }
}
