var _a, _b, _c, _d;
import { TenseType } from "./tense.js";
import { Verb, Word } from "./verb.js";
function lw(spanish, english) {
    if (typeof english === "string") {
        return [
            new Word(spanish[0], english),
            new Word(spanish[1], english),
            new Word(spanish[2], english),
            new Word(spanish[3], english),
            new Word(spanish[4], english),
            new Word(spanish[5], english),
        ];
    }
    else {
        return [
            new Word(spanish[0], english[0]),
            new Word(spanish[1], english[1]),
            new Word(spanish[2], english[2]),
            new Word(spanish[3], english[3]),
            new Word(spanish[4], english[4]),
            new Word(spanish[5], english[5]),
        ];
    }
}
export var VERBS = [
    new Verb("ser", "to be (permanent)", (_a = {},
        _a[TenseType.INDICATIVE_PRESENT] = lw(["soy", "eres", "es", "somos", "soís", "son"], ["am", "are", "is", "are", "are", "are"]),
        _a[TenseType.INDICATIVE_PRETERITE] = lw(["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"], ["was", "were", "was", "were", "were", "were"]),
        _a[TenseType.INDICATIVE_IMPERFECT] = lw(["era", "eras", "era", "eramos", "érais", "eran"], ["was", "were", "was", "were", "were", "were"]),
        _a[TenseType.INDICATIVE_CONDITIONAL] = lw(["sería", "serías", "sería", "seríamos", "seríais", "serían"], "would be"),
        _a[TenseType.INDICATIVE_FUTURE] = lw(["seré", "serás", "será", "seremos", "seréis", "serán"], "will be"),
        _a), true),
    new Verb("estar", "to be (temporary)", (_b = {},
        _b[TenseType.INDICATIVE_PRESENT] = lw(["estoy", "estás", "está", "estamos", "estáis", "están"], ["am", "are", "is", "are", "are", "are"]),
        _b[TenseType.INDICATIVE_PRETERITE] = lw(["estuve", "estuviste", "estuvo", "estuvimos", "estuvisteis", "estuvieron"], ["was", "were", "was", "were", "were", "were"]),
        _b[TenseType.INDICATIVE_IMPERFECT] = lw(["estaba", "estabas", "estaba", "estábamos", "estabais", "estaban"], ["was", "were", "was", "were", "were", "were"]),
        _b[TenseType.INDICATIVE_CONDITIONAL] = lw(["estaría", "estarías", "estaría", "estaríamos", "estaríais", "estarían"], "would be"),
        _b[TenseType.INDICATIVE_FUTURE] = lw(["estaré", "estarás", "estará", "estaremos", "estaréis", "estarán"], "will be"),
        _b), true),
    new Verb("tener", "to have", (_c = {},
        _c[TenseType.INDICATIVE_PRESENT] = lw(["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"], ["have", "have", "has", "have", "have", "have"]),
        _c[TenseType.INDICATIVE_PRETERITE] = lw(["tuve", "tuviste", "tuvo", "tuvimos", "tuvisteis", "tuvieron"], ["had", "had", "had", "had", "had", "had"]),
        _c[TenseType.INDICATIVE_IMPERFECT] = lw(["tenía", "tenías", "tenía", "teníamos", "teníais", "tenían"], ["had", "had", "had", "had", "had", "had"]),
        _c[TenseType.INDICATIVE_CONDITIONAL] = lw(["tendría", "tendrías", "tendría", "tendríamos", "tendríais", "tendrían"], "would have"),
        _c[TenseType.INDICATIVE_FUTURE] = lw(["tendré", "tendrás", "tendrá", "tendremos", "tendréis", "tendrán"], "will have"),
        _c), false),
    new Verb("haber", "to have", (_d = {},
        _d[TenseType.INDICATIVE_PRESENT] = lw(["he", "has", "ha/hay", "hemos", "habéis", "han"], ["have", "have", "has", "have", "have", "have"]),
        _d[TenseType.INDICATIVE_PRETERITE] = lw(["hube", "hubiste", "hubo", "hubimos", "hubisteis", "hubieron"], ["had", "had", "had", "had", "had", "had"]),
        _d[TenseType.INDICATIVE_IMPERFECT] = lw(["había", "habías", "había", "habíamos", "habíais", "habían"], ["had", "had", "had", "had", "had", "had"]),
        _d[TenseType.INDICATIVE_CONDITIONAL] = lw(["habría", "habrías", "habría", "habríamos", "habríais", "habrían"], "would have"),
        _d[TenseType.INDICATIVE_FUTURE] = lw(["habré", "habrás", "habrá", "habremos", "habréis", "habrán"], "will have"),
        _d), false),
];
