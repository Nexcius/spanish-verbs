import { zeroPad } from "./util.js"

export class Session {
    private startTime: number
    words = new Array<[string, boolean]>()

    constructor() {
        this.startTime = Date.now()
    }

    addResult(word: string, correct: boolean) {
        this.words.push([word, correct])
    }

    correctPercentage(): number {
        let correctCount = this.words.filter(function(v) { return v[1] }).length
        return correctCount == 0 ? 0 : Math.floor( correctCount * 100 / this.words.length )
    }

    duration(): string {
        let duration = (Date.now() - this.startTime) / 1000
        let seconds = Math.floor(duration % 60)
        let minutes = Math.floor(duration / 60)
        
        return `${zeroPad(minutes, 2)}:${zeroPad(seconds, 2)}`
    }
}
