import{exhaustiveCheck} from "./util.js"
import { localizedString, Language } from "./localization.js"

export enum Tense {
    INDICATIVE_PRESENT,
    INDICATIVE_PRETERITE,
    INDICATIVE_IMPERFECT,
    INDICATIVE_FUTURE
}

export function tenseName(tense: Tense, language: Language): string {
    switch (tense) {
        case Tense.INDICATIVE_PRESENT: return localizedString(language).indicativePresent
        case Tense.INDICATIVE_PRETERITE: return localizedString(language).indicativePreterite
        case Tense.INDICATIVE_IMPERFECT: return localizedString(language).indicativeImperfect
        case Tense.INDICATIVE_FUTURE: return localizedString(language).indicativeFuture
    }

    exhaustiveCheck(tense)
}

const indicativePresentHelp: TenseHelp = {
    description: "Simple present tense (el presente / el presente del indicativo) can be used to talk about habitual actions, routines, things happening now or in the near future, universal truths, facts, hypotheticals, lapses of time, and for ordering in restaurants and stores.",
    example: "I speak Spanish",
    link: "https://www.spanishdict.com/guide/spanish-present-tense-forms"
}

const indicativePreteriteHelp: TenseHelp = {
    description: "Preterite tense (el pretérito / el pretérito perfecto simple) is used to describe actions completed at a point in the past.",
    example: "He spoke to my sister",
    link: "https://www.spanishdict.com/guide/spanish-preterite-tense-forms"
}

const indicativeImperfectHelp: TenseHelp = {
    description: "Imperfect tense (el pretérito imperfecto / copretérito) is used to describe past habitual actions or to talk about what someone was doing when they were interrupted by something else.",
    example: "They used to be cool",
    link: "https://www.spanishdict.com/guide/spanish-imperfect-tense-forms"
}

const indicativeFutureHelp: TenseHelp = {
    description: "There are two ways to form the future tense in Spanish: the informal future (ir + a + infinitive) and the simple future (el futuro simple). The simple future, unlike the informal future, is expressed in a single word.",
    example: "You will die",
    link: "https://www.spanishdict.com/guide/simple-future-regular-forms-and-tenses"
}

export class TenseHelp {
    description: string
    example: string
    link: string      
    
    static for(tense: Tense): TenseHelp {
        switch (tense) {
            case Tense.INDICATIVE_PRESENT:      return indicativePresentHelp
            case Tense.INDICATIVE_PRETERITE:    return indicativePreteriteHelp
            case Tense.INDICATIVE_IMPERFECT:    return indicativeImperfectHelp
            case Tense.INDICATIVE_FUTURE:       return indicativeFutureHelp
        }

        exhaustiveCheck(tense)
    }
}

// export namespace TenseHelp {
    

//     export function getDescription(tense: Tense): TenseHelp {
//         switch (tense) {
//             case Tense.INDICATIVE_PRESENT:      return indicativePresentHelp
//             case Tense.INDICATIVE_PRETERITE:    return indicativePreteriteHelp
//             case Tense.INDICATIVE_IMPERFECT:    return indicativeImperfectHelp
//             case Tense.INDICATIVE_FUTURE:       return indicativeFutureHelp
//         }

//         exhaustiveCheck(tense)
//     }
// }
