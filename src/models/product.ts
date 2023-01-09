export class Product {
    id: number;

    constructor(
        public title: string,
        public src: string,
        public price: number,
        public discount: number
    ) {
        this.id = Math.floor(Math.random() * 9999);
    }
}
