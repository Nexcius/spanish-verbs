import{TenseType} from "./tense.js"

export enum PronounType {
    FIRST_PERSON_SINGULAR,
    SECOND_PERSON_SINGULAR,
    THIRD_PERSON_SINGULAR,
    FIRST_PERSON_PLURAL,
    SECOND_PERSON_PLURAL,
    THIRD_PERSON_PLURAL
}

export class Pronoun {
    spanish: string
    english: string
    description: string

    constructor(spanish: string, english: string, description: string) {
        this.spanish = spanish
        this.english = english
        this.description = description
    }
}

export const PRONOUNS: { [key in PronounType]: Pronoun } = {
    [PronounType.FIRST_PERSON_SINGULAR]:    new Pronoun("yo",               "I",                "First person singular"),
    [PronounType.SECOND_PERSON_SINGULAR]:   new Pronoun("tú",               "you (singular)",   "Second person singular"),
    [PronounType.THIRD_PERSON_SINGULAR]:    new Pronoun("él/ella/Ud.",      "he/she/it",        "Third person singular"),
    [PronounType.FIRST_PERSON_PLURAL]:      new Pronoun("nosotros",         "we",               "First person plural"),
    [PronounType.SECOND_PERSON_PLURAL]:     new Pronoun("vosotros",         "you (plural)",     "Second person plural"),
    [PronounType.THIRD_PERSON_PLURAL]:      new Pronoun("ellos/ellas/Uds.", "they",             "Third person plural"),
}

export class Word{
    spanish: string
    english: string

    constructor(spanish: string, english: string) {
        this.spanish = spanish
        this.english = english
    }
}

export type Conjugation = [Word, Word, Word, Word, Word, Word]

export class Verb {
    base: string
    translation: string
    conjugations: { [key in TenseType]: Conjugation }

    constructor(base: string, translation: string, conjugations: { [key in TenseType]: Conjugation }) {
        this.base = base
        this.translation = translation
        this.conjugations = conjugations
    }

    getConjugation(tense: TenseType, pronoun: PronounType): Word {
        this.conjugations
        return this.conjugations[tense][pronoun]
    }

    linkDictionary = `https://www.spanishdict.com/translate/${this.base}`
    linkConjugation = `https://www.spanishdict.com/conjugate/${this.base}`
    linkExamples = `https://www.spanishdict.com/examples/${this.base}`    
}
