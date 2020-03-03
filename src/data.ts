import{TenseType} from "./tense.js"
import{Verb, Conjugation, Word} from "./verb.js"

type SixStrings = [string, string, string, string, string, string]
function lw(spanish: SixStrings, english: SixStrings | string): Conjugation {
    if(typeof english === "string") {
        return [
            new Word(spanish[0], english),
            new Word(spanish[1], english),
            new Word(spanish[2], english),
            new Word(spanish[3], english),
            new Word(spanish[4], english),
            new Word(spanish[5], english),
        ]
    } else {
        return [
            new Word(spanish[0], english[0]),
            new Word(spanish[1], english[1]),
            new Word(spanish[2], english[2]),
            new Word(spanish[3], english[3]),
            new Word(spanish[4], english[4]),
            new Word(spanish[5], english[5]),
        ]
    }
}

export const VERBS: Array<Verb> = [
    new Verb("ser", "to be (permanent)", {
        [TenseType.INDICATIVE_PRESENT]:     lw(["soy", "eres", "es", "somos", "soís", "son"],                   ["am", "are", "is", "are", "are", "are"]),
        [TenseType.INDICATIVE_PRETERITE]:   lw(["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"],        ["was", "were", "was", "were", "were", "were"]),
        [TenseType.INDICATIVE_IMPERFECT]:   lw(["era", "eras", "era", "eramos", "érais", "eran"],               ["was", "were", "was", "were", "were", "were"]),
        [TenseType.INDICATIVE_CONDITIONAL]: lw(["sería", "serías", "sería", "seríamos", "seríais", "serían"],   "would be"),
        [TenseType.INDICATIVE_FUTURE]:      lw(["seré", "serás", "será", "seremos", "seréis", "serán"],         "will be"),
    }, true),
    new Verb("estar", "to be (temporary)", {
        [TenseType.INDICATIVE_PRESENT]:     lw(["estoy", "estás", "está", "estamos", "estáis", "están"],                    ["am", "are", "is", "are", "are", "are"]),
        [TenseType.INDICATIVE_PRETERITE]:   lw(["estuve", "estuviste", "estuvo", "estuvimos", "estuvisteis", "estuvieron"], ["was", "were", "was", "were", "were", "were"]),
        [TenseType.INDICATIVE_IMPERFECT]:   lw(["estaba", "estabas", "estaba", "estábamos", "estabais", "estaban"],         ["was", "were", "was", "were", "were", "were"]),
        [TenseType.INDICATIVE_CONDITIONAL]: lw(["estaría", "estarías", "estaría", "estaríamos", "estaríais", "estarían"],   "would be"),
        [TenseType.INDICATIVE_FUTURE]:      lw(["estaré", "estarás", "estará", "estaremos", "estaréis", "estarán"],         "will be"),
    }, true),
    new Verb("tener", "to have", {
        [TenseType.INDICATIVE_PRESENT]:     lw(["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"],     ["have", "have", "has", "have", "have", "have"]),
        [TenseType.INDICATIVE_PRETERITE]:   lw(["tuve", "tuviste", "tuvo", "tuvimos", "tuvisteis", "tuvieron"], ["had", "had", "had", "had", "had", "had"]),
        [TenseType.INDICATIVE_IMPERFECT]:   lw(["tenía", "tenías", "tenía", "teníamos", "teníais", "tenían"],   ["had", "had", "had", "had", "had", "had"]),
        [TenseType.INDICATIVE_CONDITIONAL]: lw(["tendría", "tendrías", "tendría", "tendríamos", "tendríais", "tendrían"],   "would have"),
        [TenseType.INDICATIVE_FUTURE]:      lw(["tendré", "tendrás", "tendrá", "tendremos", "tendréis", "tendrán"],         "will have"),
    }, false),
    new Verb("haber", "to have", {
        [TenseType.INDICATIVE_PRESENT]:     lw(["he", "has", "ha/hay", "hemos", "habéis", "han"],               ["have", "have", "has", "have", "have", "have"]),
        [TenseType.INDICATIVE_PRETERITE]:   lw(["hube", "hubiste", "hubo", "hubimos", "hubisteis", "hubieron"], ["had", "had", "had", "had", "had", "had"]),
        [TenseType.INDICATIVE_IMPERFECT]:   lw(["había", "habías", "había", "habíamos", "habíais", "habían"],   ["had", "had", "had", "had", "had", "had"]),
        [TenseType.INDICATIVE_CONDITIONAL]: lw(["habría", "habrías", "habría", "habríamos", "habríais", "habrían"], "would have"),
        [TenseType.INDICATIVE_FUTURE]:      lw(["habré", "habrás", "habrá", "habremos", "habréis", "habrán"],       "will have"),
    }, false),
    // new Verb("XXX", "XXX", {
    //     [TenseType.INDICATIVE_PRESENT]:     lw(["", "", "", "", "", ""], ["", "", "", "", "", ""]),
    //     [TenseType.INDICATIVE_PRETERITE]:   lw(["", "", "", "", "", ""], ["", "", "", "", "", ""]),
    //     [TenseType.INDICATIVE_IMPERFECT]:   lw(["", "", "", "", "", ""], ["", "", "", "", "", ""]),
    //     [TenseType.INDICATIVE_CONDITIONAL]: lw(["", "", "", "", "", ""], ["", "", "", "", "", ""]),
    //     [TenseType.INDICATIVE_FUTURE]:      lw(["", "", "", "", "", ""], ["", "", "", "", "", ""]),
    // }, false),
]
