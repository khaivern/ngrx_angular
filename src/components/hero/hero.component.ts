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
            new Slide('jun', 'https://via.placeholder.com/1104x384?text=jun jun', 'Commence'),
            new Slide('sk', 'https://via.placeholder.com/1104x385?text=cat person', 'Operation'),
            new Slide('hui chin', 'https://via.placeholder.com/1104x386?text=chinese teacher', 'Brainwash'),
            new Slide('cynni', 'https://via.placeholder.com/1104x387?text=scary boss', 'Master Shifu'),
        ]
    }

    onItemChange($event: any): void {
        console.log('Carousel onItemChange', $event);
    }
}

class Slide {
    constructor(
        public title: string,
        public src: string,
        public subtitle: string
    ) {}
}
