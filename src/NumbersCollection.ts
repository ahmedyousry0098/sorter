import { Sorter } from "./Sorter"

export class NumsCollection extends Sorter{
    constructor (public collection: number[]) {
        super()
    }

    get length(): number {
        return this.collection.length
    }

    compare(index: number) {
        return this.collection[index] > this.collection[index+1]
    }

    swap(index: number) {
        const leftHand = this.collection[index]
        this.collection[index] = this.collection[index+1]
        this.collection[index+1] = leftHand
    }

}
