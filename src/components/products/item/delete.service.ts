import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DeleteService {
    private listUpdated: Subject<void> = new Subject();
    listUpdated$ = this.listUpdated.asObservable();

    fetchLatestList(): void {
        this.listUpdated.next();
    }
}
