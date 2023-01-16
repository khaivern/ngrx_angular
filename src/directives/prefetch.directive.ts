import {
    Directive,
    OnInit,
    AfterViewInit,
    OnDestroy,
    Input,
    Output,
    EventEmitter,
    ElementRef,
    HostListener,
} from '@angular/core';

@Directive({
    selector: '[prefetch]',
})
export class PrefetchDirective implements OnInit, AfterViewInit, OnDestroy {
    @Input() prefetchMode: ('load' | 'hover' | 'visible')[] = ['visible'];
    @Output() prefetch = new EventEmitter<void>();

    observer?: IntersectionObserver;
    loaded = false;

    constructor(private elemRef: ElementRef) {}

    ngOnInit() {
        if (this.prefetchMode.includes('load')) {
            console.log('called at load');
            this.prefetchData();
        }
    }
    ngAfterViewInit() {
        this.observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                console.log(entry);
                if (entry.isIntersecting) {
                    console.log('called at intersecting');
                    this.prefetchData();
                    this.observer?.disconnect();
                }
            });
        });
        this.observer.observe(this.elemRef.nativeElement);
    }
    ngOnDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        if (!this.loaded && this.prefetchMode.includes('hover')) {
            this.loaded = true;
            console.log('called at mouse enter');
            this.prefetchData();
        }
    }

    prefetchData() {
        if ((<any>navigator).connection.saveData) {
            return;
        }
        this.prefetch.next();
    }
}
