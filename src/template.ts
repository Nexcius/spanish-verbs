import { Pronoun, PronounType } from "./verb.js"

export class Template {
    private singular: string
    private plural: string

    constructor(template: string, templatePlural: string = template) {
        this.singular = template
        this.plural = templatePlural === undefined ? template : templatePlural
    }

    get(isPlural: boolean): string {
        return isPlural ? this.plural : this.singular
    }
}


export const TEMPLATES: Template[] = [
    new Template("en Inglaterra"),
    new Template("en Inglaterra"),
]
