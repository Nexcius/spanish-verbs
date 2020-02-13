// module Dataloader {

import{Tense} from "./tense.js"
import{Verb} from "./verb.js"


export const data: Array<Verb> = [
        new Verb("ser", "to be (permanent)", {
            [Tense.INDICATIVE_PRESENT]:     ["soy", "eres", "es", "somos", "soís", "son"],
            [Tense.INDICATIVE_PRETERITE]:   ["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"],
            [Tense.INDICATIVE_IMPERFECT]:   ["era", "eras", "era", "eramos", "érais", "eran"],
            [Tense.INDICATIVE_FUTURE]:      ["seré", "serás", "será", "seremos", "seréis", "serán"],
        }),
        new Verb("estar", "to be (temporary)", {
            [Tense.INDICATIVE_PRESENT]:     ["estoy", "estás", "está", "estamos", "estáis", "están"],
            [Tense.INDICATIVE_PRETERITE]:   ["estuve", "estuviste", "estuvo", "estuvimos", "estuvisteis", "estuvieron"],
            [Tense.INDICATIVE_IMPERFECT]:   ["estaba", "estabas", "estaba", "estábamos", "estabais", "estaban"],
            [Tense.INDICATIVE_FUTURE]:      ["estaré", "estarás", "estará", "estaremos", "estaréis", "estarán"],
        }),
    ]
// }
