export function exhaustiveCheck(param) { }
export function randomEnum(anEnum) {
    var enumValues = Object.keys(anEnum)
        .map(function (n) { return Number.parseInt(n); })
        .filter(function (n) { return !Number.isNaN(n); });
    var randomIndex = Math.floor(Math.random() * enumValues.length);
    var randomEnumValue = enumValues[randomIndex];
    return randomEnumValue;
}
export function normalizeString(str) {
    return str
        .normalize()
        .toLowerCase()
        .replace(new RegExp("á", "g"), "a")
        .replace(new RegExp("é", "g"), "e")
        .replace(new RegExp("í", "g"), "i")
        .replace(new RegExp("ó", "g"), "o")
        .replace(new RegExp("[üú]", "g"), "u")
        .replace(new RegExp("ñ", "g"), "n");
}
export function zeroPad(num, minLength) {
    var s = num.toString();
    while (s.length < minLength) {
        s = "0" + s;
    }
    return s;
}
