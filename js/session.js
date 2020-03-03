import { zeroPad } from "./util.js";
var Session = (function () {
    function Session() {
        this.words = new Array();
        this.startTime = Date.now();
    }
    Session.prototype.addResult = function (word, correct) {
        this.words.push([word, correct]);
    };
    Session.prototype.correctPercentage = function () {
        var correctCount = this.words.filter(function (v) { return v[1]; }).length;
        return correctCount == 0 ? 0 : Math.floor(correctCount * 100 / this.words.length);
    };
    Session.prototype.duration = function () {
        var duration = (Date.now() - this.startTime) / 1000;
        var seconds = Math.floor(duration % 60);
        var minutes = Math.floor(duration / 60);
        return zeroPad(minutes, 2) + ":" + zeroPad(seconds, 2);
    };
    return Session;
}());
export { Session };
