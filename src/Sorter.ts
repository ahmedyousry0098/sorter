export interface Sortable {
    length: number;
    compare(index: number): boolean;
    swap(index: number): void
}

export abstract class Sorter {
    abstract length: number;
    abstract swap(index: number): void
    abstract compare(index: number): boolean

    sort() {
        const {length} = this
        for (let i=0; i<length; i++) {
            for (let j=0; j<length-i-1; j++) {
                if (this.compare(j)){
                    this.swap(j)
                }
            }
        }
    }
}