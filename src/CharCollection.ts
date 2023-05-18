import { Sorter } from "./Sorter";

export class CharCollection extends Sorter {

    constructor(public str: string){
        super()
    }

    get length(): number {
        return this.str.length
    }

    compare(index: number): boolean {
        return this.str[index].toLowerCase() > this.str[index+1].toLowerCase()
    }

    swap(index: number): void {
        let characters = this.str.split('')
        const leftHand = characters[index]
        characters[index] = characters[index+1]
        characters[index+1] = leftHand

        this.str = characters.join("")
    }
}