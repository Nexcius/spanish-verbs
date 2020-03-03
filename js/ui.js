import { TENSE_TYPE_ALL, TENSES, DEFAULT_ENABLED_TENSES } from "./tense.js";
import { VERBS } from "./data.js";
export function initTenseList(app, domTenseSelection) {
    domTenseSelection.innerHTML = "";
    TENSE_TYPE_ALL.forEach(function (tense) {
        var node = document.createElement("li");
        node.innerText = TENSES[tense].name;
        node.onclick = function () {
            if (node.classList.contains("disabled")) {
                node.classList.remove("disabled");
            }
            else {
                node.classList.add("disabled");
            }
            app.update();
        };
        if (DEFAULT_ENABLED_TENSES.indexOf(tense) < 0) {
            node.classList.add("disabled");
        }
        domTenseSelection.appendChild(node);
    });
}
export function getSelectedTenses(domTenseSelection) {
    var selectedTenseList = Array.from(domTenseSelection.children);
    var blacklisted = selectedTenseList
        .filter(function (i) { return i.classList.contains("disabled"); })
        .map(function (i) { return i.innerHTML; });
    return TENSE_TYPE_ALL
        .filter(function (tense) { return blacklisted.indexOf(TENSES[tense].name) < 0; });
}
export function initVerbList(app, domVerbSelection) {
    domVerbSelection.innerHTML = "";
    VERBS
        .forEach(function (v) {
        var node = document.createElement("li");
        node.innerText = v.base;
        node.onclick = function () {
            if (node.classList.contains("disabled")) {
                node.classList.remove("disabled");
            }
            else {
                node.classList.add("disabled");
            }
            app.update();
        };
        if (!v.enabledByDefault) {
            node.classList.add("disabled");
        }
        domVerbSelection.appendChild(node);
    });
}
export function getSelectedVerbs(domVerbSelection) {
    var selectedVerbList = Array.from(domVerbSelection.children);
    var blacklisted = selectedVerbList
        .filter(function (i) { return i.classList.contains("disabled"); })
        .map(function (i) { return i.innerHTML; });
    return VERBS.filter(function (verb) { return blacklisted.indexOf(verb.base) < 0; });
}
