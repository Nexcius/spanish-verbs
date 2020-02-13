import{Tense} from "./tense.js"
import { exhaustiveCheck } from "./util.js"

export enum Pronoun {
    FIRST_PERSON_SINGULAR,
    SECOND_PERSON_SINGULAR,
    THIRD_PERSON_SINGULAR,
    FIRST_PERSON_PLURAL,
    SECOND_PERSON_PLURAL,
    THIRD_PERSON_PLURAL
}

export function pronounName(pronoun: Pronoun): string {
    switch (pronoun) {
        case Pronoun.FIRST_PERSON_SINGULAR: return "First person singular"
        case Pronoun.SECOND_PERSON_SINGULAR: return "Second person singular"
        case Pronoun.THIRD_PERSON_SINGULAR: return "Third person singular"
        case Pronoun.FIRST_PERSON_PLURAL: return "First person plural"
        case Pronoun.SECOND_PERSON_PLURAL: return "Second person plural"
        case Pronoun.THIRD_PERSON_PLURAL: return "Third person plural"
    }

    exhaustiveCheck(pronoun)
}


export type Conjugation = [string, string, string, string, string, string]

export class Verb {
    base: string
    translation: string
    conjugations: { [key in Tense]: Conjugation }

    constructor(base: string, translation: string, conjugations: { [key in Tense]: Conjugation }) {
        this.base = base
        this.translation = translation
        this.conjugations = conjugations
    }

    getConjugation(tense: Tense, pronoun: Pronoun): string {
        this.conjugations
        return this.conjugations[tense][pronoun]
    }

    linkDictionary = `https://www.spanishdict.com/translate/${this.base}`
    linkConjugation = `https://www.spanishdict.com/conjugate/${this.base}`
    linkExamples = `https://www.spanishdict.com/examples/${this.base}`    
}
