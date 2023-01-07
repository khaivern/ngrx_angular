import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
    slides: Slide[] = []

    constructor() {}

    ngOnInit(): void {
        this.slides = [
            new Slide('jun', 'https://via.placeholder.com/1104x386/86ffff?text=jun jun', 'Commence'),
            new Slide('sk', 'https://via.placeholder.com/1104x386/ab8dff?text=cat person', 'Operation'),
            new Slide('hui chin', 'https://via.placeholder.com/1104x386/8dff8d?text=chinese teacher', 'Brainwash'),
            new Slide('cynni', 'https://via.placeholder.com/1104x386/f5f650?text=scary boss', 'Master Shifu'),
        ]
    }

    onItemChange($event: any): void {
        // console.log('Carousel onItemChange', $event);
    }
}

class Slide {
    constructor(
        public title: string,
        public src: string,
        public subtitle: string
    ) {}
}
