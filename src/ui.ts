import { TENSE_TYPE_ALL, TENSES, TenseType, Tense, DEFAULT_ENABLED_TENSES } from "./tense.js";
import { VERBS } from "./data.js";
import { App } from "./app.js";
import { Verb } from "./verb.js";

export function initTenseList(app: App, domTenseSelection: HTMLUListElement) {
    domTenseSelection.innerHTML = ""

    TENSE_TYPE_ALL.forEach(tense => {
        let node = document.createElement("li") as HTMLLIElement
        node.innerText = TENSES[tense].name
            node.onclick = () => { 
            if (node.classList.contains("disabled")) {
                node.classList.remove("disabled")
            } else {
                node.classList.add("disabled")
            }
            app.update()
        }
        if(DEFAULT_ENABLED_TENSES.indexOf(tense) < 0) {
            node.classList.add("disabled")
        }
        domTenseSelection.appendChild(node)
    });
}

export function getSelectedTenses(domTenseSelection: HTMLUListElement): TenseType[] {
    let selectedTenseList = Array.from(domTenseSelection.children)

    let blacklisted = selectedTenseList
        .filter(i => i.classList.contains("disabled"))
        .map(i => i.innerHTML)

    return TENSE_TYPE_ALL
        .filter(tense => blacklisted.indexOf(TENSES[tense].name) < 0)        
}

export function initVerbList(app: App, domVerbSelection: HTMLUListElement) {
    domVerbSelection.innerHTML = ""

    VERBS
        .forEach(v => {
            let node = document.createElement("li") as HTMLLIElement
            node.innerText = v.base
            node.onclick = () => { 
                if (node.classList.contains("disabled")) {
                    node.classList.remove("disabled")
                } else {
                    node.classList.add("disabled")
                }
                app.update()
            }
            if(!v.enabledByDefault) {
                node.classList.add("disabled")
            }
            domVerbSelection.appendChild(node)
        })
}

export function getSelectedVerbs(domVerbSelection: HTMLUListElement): Verb[] {
    let selectedVerbList = Array.from(domVerbSelection.children)

    let blacklisted = selectedVerbList
        .filter(i => i.classList.contains("disabled"))
        .map(i => i.innerHTML)

    return VERBS.filter(verb => blacklisted.indexOf(verb.base) < 0)
}
