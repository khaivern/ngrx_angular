export class Product {
    constructor(
        public id: string,
        public title: string,
        public src: string,
        public price: number,
        public discount: number
    ) {}
}

export function sortProductByAscendingID(p1: Product, p2: Product) {
    const compare = Number(p1.id) - Number(p2.id);

    if (compare > 0) {
        return 1;
    } else if (compare < 0) {
        return -1;
    } else {
        return 0;
    }
}
