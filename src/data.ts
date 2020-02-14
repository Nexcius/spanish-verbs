// module Dataloader {

import{TenseType} from "./tense.js"
import{Verb, Conjugation, Word} from "./verb.js"

type SixStrings = [string, string, string, string, string, string]
function lw(spanish: SixStrings, english: SixStrings): Conjugation {
    return [
        new Word(spanish[0], english[0]),
        new Word(spanish[1], english[1]),
        new Word(spanish[2], english[2]),
        new Word(spanish[3], english[3]),
        new Word(spanish[4], english[4]),
        new Word(spanish[5], english[5]),
    ]
}

export const data: Array<Verb> = [
    new Verb("ser", "to be (permanent)", {
        [TenseType.INDICATIVE_PRESENT]:     lw(["soy", "eres", "es", "somos", "soís", "son"], ["am", "are", "is", "are", "are", "are"]),
        [TenseType.INDICATIVE_PRETERITE]:   lw(["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"], ["was", "were", "was", "were", "were", "were"]),
        [TenseType.INDICATIVE_IMPERFECT]:   lw(["era", "eras", "era", "eramos", "érais", "eran"], ["was", "were", "was", "were", "were", "were"]),
        [TenseType.INDICATIVE_FUTURE]:      lw(["seré", "serás", "será", "seremos", "seréis", "serán"], ["will be", "will be", "will be", "will be", "will be", "will be"]),
    }),
    new Verb("estar", "to be (temporary)", {
        [TenseType.INDICATIVE_PRESENT]:     lw(["estoy", "estás", "está", "estamos", "estáis", "están"], ["am", "are", "is", "are", "are", "are"]),
        [TenseType.INDICATIVE_PRETERITE]:   lw(["estuve", "estuviste", "estuvo", "estuvimos", "estuvisteis", "estuvieron"], ["was", "were", "was", "were", "were", "were"]),
        [TenseType.INDICATIVE_IMPERFECT]:   lw(["estaba", "estabas", "estaba", "estábamos", "estabais", "estaban"], ["was", "were", "was", "were", "were", "were"]),
        [TenseType.INDICATIVE_FUTURE]:      lw(["estaré", "estarás", "estará", "estaremos", "estaréis", "estarán"], ["will be", "will be", "will be", "will be", "will be", "will be"]),
    }),
]
