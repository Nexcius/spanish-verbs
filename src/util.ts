export function exhaustiveCheck( param: never ) { }

export function randomEnum<T>(anEnum: T): T[keyof T] {
    const enumValues = Object.keys(anEnum)
        .map(n => Number.parseInt(n))
        .filter(n => !Number.isNaN(n)) as unknown as T[keyof T][]
    const randomIndex = Math.floor(Math.random() * enumValues.length)
    const randomEnumValue = enumValues[randomIndex]
    return randomEnumValue;
}

export function normalizeString(str: string): string {
    return str
        .normalize()
        .toLowerCase()
        .replace(new RegExp("á", "g"), "a")
        .replace(new RegExp("é", "g"), "e")
        .replace(new RegExp("í", "g"), "i")
        .replace(new RegExp("ó", "g"), "o")
        .replace(new RegExp("[üú]", "g"), "u")
        .replace(new RegExp("ñ", "g"), "n")
}

export function zeroPad(num: number, minLength: number): string {
    var s = num.toString()
    while (s.length < minLength) {
        s = "0" + s
    }
    return s
}
