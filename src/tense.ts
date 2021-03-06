export enum TenseType {
    INDICATIVE_PRESENT,
    INDICATIVE_PRETERITE,
    INDICATIVE_IMPERFECT,
    INDICATIVE_CONDITIONAL,
    INDICATIVE_FUTURE,
}

export const DEFAULT_ENABLED_TENSES = [TenseType.INDICATIVE_PRESENT, TenseType.INDICATIVE_PRETERITE, TenseType.INDICATIVE_IMPERFECT, TenseType.INDICATIVE_FUTURE]

export class Tense {
    name: string
    description: string
    example: string
    link: string
}

function getAllTenseTypes(): TenseType[] {
    const keys = Object.keys(TenseType).filter(k => typeof TenseType[k as any] === "number"); // ["A", "B"]
    const allTenses = keys.map(k => TenseType[k as any]).map(x => +x) as TenseType[] // [0, 1]
    return allTenses
}

export const TENSE_TYPE_ALL = getAllTenseTypes()

export const TENSES: { [Tekey in TenseType]: Tense } = {
    [TenseType.INDICATIVE_PRESENT]: {
        name: "Indicative present",
        description: "Simple present tense (el presente / el presente del indicativo) can be used to talk about habitual actions, routines, things happening now or in the near future, universal truths, facts, hypotheticals, lapses of time, and for ordering in restaurants and stores.",
        example: "I speak Spanish",
        link: "https://www.spanishdict.com/guide/spanish-present-tense-forms"
    },
    [TenseType.INDICATIVE_PRETERITE]: {
        name: "Indicative preterite",
        description: "Preterite tense (el pretérito / el pretérito perfecto simple) is used to describe actions completed at a point in the past.",
        example: "He spoke to my sister",
        link: "https://www.spanishdict.com/guide/spanish-preterite-tense-forms"
    },
    [TenseType.INDICATIVE_IMPERFECT]: {
        name: "Indicative imperfect",
        description: "Imperfect tense (el pretérito imperfecto / copretérito) is used to describe past habitual actions or to talk about what someone was doing when they were interrupted by something else.",
        example: "They used to be cool",
        link: "https://www.spanishdict.com/guide/spanish-imperfect-tense-forms"
    },
    [TenseType.INDICATIVE_CONDITIONAL]: {
        name: "Indicative conditional",
        description: "The conditional tense in Spanish (el condicional / el pospretérito) is used to talk about hypothetical situations and probabilities and to make polite requests.",
        example: "If i could sing, I would have been the best",
        link: "https://www.spanishdict.com/guide/conditional-tense"
    },
    [TenseType.INDICATIVE_FUTURE]: {
        name: "Indicative future",
        description: "There are two ways to form the future tense in Spanish: the informal future (ir + a + infinitive) and the simple future (el futuro simple). The simple future, unlike the informal future, is expressed in a single word.",
        example: "You will die",
        link: "https://www.spanishdict.com/guide/simple-future-regular-forms-and-tenses"
    },
}
