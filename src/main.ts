import{data} from "./data.js"
import { Tense, tenseName, TenseHelp } from "./tense.js"
import { randomEnum } from "./util.js"
import { Pronoun } from "./verb.js"

// https://www.grammarly.com/blog/verb-conjugation/
// https://www.spanishdict.com/conjugate/ser

class Main {
    domVerb: HTMLHeadingElement
    domTranslation: HTMLParagraphElement
    domTense: HTMLSpanElement
    domTenseHelp: HTMLSpanElement

    constructor(
            domVerb: HTMLHeadingElement,
            domTranslation: HTMLParagraphElement,
            domTense: HTMLSpanElement,
            domTenseHelp: HTMLSpanElement) {

        this.domVerb = domVerb
        this.domTranslation = domTranslation
        this.domTense = domTense
        this.domTenseHelp = domTenseHelp

        console.log("ASDSAD")
        data.forEach( verb => console.log(verb))

        
    }

    next() {
        const current = data[Math.floor(Math.random() * data.length)]
        const tense: Tense = randomEnum(Tense)
        const pronoun: Pronoun = randomEnum(Pronoun)
    
        this.domVerb.innerText = current.base
        this.domTranslation.innerText = current.translation
        this.domTense.innerText = tenseName(tense)
        this.domTenseHelp.innerHTML = TenseHelp.for(tense).description + "<br>Example: " + TenseHelp.for(tense).example
    }

    check() {

    }
}

(function() {  
    const domVerb: HTMLHeadingElement = document.getElementById("verb") as HTMLHeadingElement
    const domTranslation: HTMLParagraphElement = document.getElementById("translation") as HTMLParagraphElement
    const domTense: HTMLSpanElement = document.getElementById("tense")
    const domTenseHelp: HTMLSpanElement = document.getElementById("tense-help")

    const domInput: HTMLInputElement = document.getElementById("input") as HTMLInputElement
    const domSubmit: HTMLButtonElement = document.getElementById("submit") as HTMLButtonElement
    
    const app = new Main(domVerb, domTranslation, domTense, domTenseHelp);

    app.next()

    domSubmit.onclick = () => {
        app.next()
    }

    domInput.onkeyup = (e) => {
        if(e.keyCode === 13) {
            e.preventDefault()
            app.next()
        }
    }    
})();
