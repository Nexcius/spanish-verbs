import { PronounType, PRONOUNS } from "./verb.js";
import { TENSES } from "./tense.js";
import { Session } from "./session.js";
import { randomEnum, normalizeString } from "./util.js";
import { initTenseList, getSelectedTenses, getSelectedVerbs, initVerbList } from "./ui.js";
var AppState;
(function (AppState) {
    AppState[AppState["QUERY"] = 0] = "QUERY";
    AppState[AppState["FEEDBACK"] = 1] = "FEEDBACK";
})(AppState || (AppState = {}));
var App = (function () {
    function App(domVerbBase, domVerbTranslation, domConjSpanish, domConjEnglish, domTense, domTenseHelp, domInput, domDisableVosotros, domVerbSelection, domTenseSelection) {
        this.session = new Session();
        this.domVerbBase = domVerbBase;
        this.domVerbTranslation = domVerbTranslation;
        this.domConjSpanish = domConjSpanish;
        this.domConjEnglish = domConjEnglish;
        this.domTense = domTense;
        this.domTenseHelp = domTenseHelp;
        this.domInput = domInput;
        this.domDisableVosotros = domDisableVosotros;
        this.domVerbSelection = domVerbSelection;
        this.domTenseSelection = domTenseSelection;
        this.disableVosotros = false;
        this.domDisableVosotros.checked = this.disableVosotros;
        initVerbList(this, this.domVerbSelection);
        initTenseList(this, this.domTenseSelection);
        this.update();
        this.next();
    }
    App.prototype.update = function () {
        this.tenses = getSelectedTenses(this.domTenseSelection);
        this.verbs = getSelectedVerbs(this.domVerbSelection);
    };
    App.prototype.handleInput = function () {
        if (this.state === AppState.QUERY) {
            this.check();
        }
        else {
            this.next();
        }
    };
    App.prototype.randomVerb = function () {
        this.currentVerb = this.verbs[Math.floor(Math.random() * this.verbs.length)];
        this.currentTense = this.tenses[Math.floor(Math.random() * this.tenses.length)];
        do {
            this.currentPronoun = randomEnum(PronounType);
        } while (this.disableVosotros && this.currentPronoun === PronounType.SECOND_PERSON_PLURAL);
    };
    App.prototype.next = function () {
        this.state = AppState.QUERY;
        this.domInput.value = "";
        this.domInput.style.color = "black";
        this.randomVerb();
        var conj = this.currentVerb.getConjugation(this.currentTense, this.currentPronoun);
        this.domVerbBase.innerText = this.currentVerb.base;
        this.domVerbTranslation.innerText = this.currentVerb.translation;
        this.domConjSpanish.innerText = PRONOUNS[this.currentPronoun].spanish;
        this.domConjEnglish.innerText = PRONOUNS[this.currentPronoun].english + " " + conj.english;
        this.domTense.innerText = TENSES[this.currentTense].name;
        this.domTenseHelp.innerHTML = TENSES[this.currentTense].description
            + "<br><br>Example: "
            + TENSES[this.currentTense].example;
    };
    App.prototype.check = function () {
        this.state = AppState.FEEDBACK;
        var givenAnswer = this.domInput.value.trim().toLowerCase();
        var targetVerb = this.currentVerb.getConjugation(this.currentTense, this.currentPronoun);
        var correctAnswers = targetVerb.spanish.split("/");
        var correctNormalizedAnswers = correctAnswers.map(function (s) { return normalizeString(s); });
        if (correctAnswers.indexOf(givenAnswer) >= 0) {
            this.domInput.style.color = "green";
            this.session.addResult(targetVerb.spanish, true);
        }
        else if (correctNormalizedAnswers.indexOf(normalizeString(givenAnswer)) >= 0) {
            this.domInput.style.color = "blue";
            this.session.addResult(targetVerb.spanish, true);
        }
        else {
            this.domInput.style.color = "red";
            this.session.addResult(targetVerb.spanish, false);
        }
        this.domInput.value = targetVerb.spanish;
    };
    App.TIMEOUT_DURATION = 3000;
    return App;
}());
export { App };
