import{exhaustiveCheck} from "./util.js"

export enum Language {
    ENGLISH,
    SPANISH
}

export interface Localization {
    title: string
    firstPersonSingular: string
    secondPersonSingular: string
    thirdPersonSingular: string
    firstPersonPlural: string
    secondPersonPlural: string
    thirdPersonPlural: string

    indicativePresent: string
    indicativePreterite: string
    indicativeImperfect: string
    indicativeFuture: string
}

const english: Localization = {
    title: "Verb trainer",
    firstPersonSingular:   "First person singular (I)",
    secondPersonSingular:  "Second person singular (you)",
    thirdPersonSingular:   "Third person singular (he/she/it)",
    firstPersonPlural:     "First person plural (we)",
    secondPersonPlural:    "Second person plural (you)",
    thirdPersonPlural:     "Third person plural (they)",

    indicativePresent:      "Indicative present",
    indicativePreterite:    "Indicative preterite",
    indicativeImperfect:    "Indicative imperfect",
    indicativeFuture:       "Indicative future",
}

export function localizedString(language: Language): Localization {
    switch(language) {
        case Language.ENGLISH: return english
        case Language.SPANISH: return english // TODO: Implement spanish
    }

    exhaustiveCheck(language)
}