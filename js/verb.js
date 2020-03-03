var _a;
export var PronounType;
(function (PronounType) {
    PronounType[PronounType["FIRST_PERSON_SINGULAR"] = 0] = "FIRST_PERSON_SINGULAR";
    PronounType[PronounType["SECOND_PERSON_SINGULAR"] = 1] = "SECOND_PERSON_SINGULAR";
    PronounType[PronounType["THIRD_PERSON_SINGULAR"] = 2] = "THIRD_PERSON_SINGULAR";
    PronounType[PronounType["FIRST_PERSON_PLURAL"] = 3] = "FIRST_PERSON_PLURAL";
    PronounType[PronounType["SECOND_PERSON_PLURAL"] = 4] = "SECOND_PERSON_PLURAL";
    PronounType[PronounType["THIRD_PERSON_PLURAL"] = 5] = "THIRD_PERSON_PLURAL";
})(PronounType || (PronounType = {}));
var Pronoun = (function () {
    function Pronoun(spanish, english, description) {
        this.spanish = spanish;
        this.english = english;
        this.description = description;
    }
    return Pronoun;
}());
export { Pronoun };
export var PRONOUNS = (_a = {},
    _a[PronounType.FIRST_PERSON_SINGULAR] = new Pronoun("yo", "I", "First person singular"),
    _a[PronounType.SECOND_PERSON_SINGULAR] = new Pronoun("tú", "you (singular)", "Second person singular"),
    _a[PronounType.THIRD_PERSON_SINGULAR] = new Pronoun("él/ella/Ud.", "he/she/it", "Third person singular"),
    _a[PronounType.FIRST_PERSON_PLURAL] = new Pronoun("nosotros", "we", "First person plural"),
    _a[PronounType.SECOND_PERSON_PLURAL] = new Pronoun("vosotros", "you (plural)", "Second person plural"),
    _a[PronounType.THIRD_PERSON_PLURAL] = new Pronoun("ellos/ellas/Uds.", "they", "Third person plural"),
    _a);
var Word = (function () {
    function Word(spanish, english) {
        this.spanish = spanish;
        this.english = english;
    }
    return Word;
}());
export { Word };
var Verb = (function () {
    function Verb(base, translation, conjugations, enabledByDefault) {
        if (enabledByDefault === void 0) { enabledByDefault = true; }
        this.linkDictionary = "https://www.spanishdict.com/translate/" + this.base;
        this.linkConjugation = "https://www.spanishdict.com/conjugate/" + this.base;
        this.linkExamples = "https://www.spanishdict.com/examples/" + this.base;
        this.base = base;
        this.translation = translation;
        this.conjugations = conjugations;
        this.enabledByDefault = enabledByDefault;
    }
    Verb.prototype.getConjugation = function (tense, pronoun) {
        this.conjugations;
        return this.conjugations[tense][pronoun];
    };
    return Verb;
}());
export { Verb };
