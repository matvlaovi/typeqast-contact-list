import {trigger, transition, style, animate, query, stagger} from '@angular/animations';
import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit, OnChanges {

    @Input() showFavorites: boolean;

    public searchTerm: string = '';

    public data1 = ['test1', 'Addie Hernandez', 'Oscar Arnold', 'Neki Random Lik', 'test5',
        'test6', 'test7', 'test8', 'test9', 'test10', 'test11', 'test12', 'test13', 'test14'];

    public data: any[];

    constructor() { }

    ngOnChanges(): void {
        if (this.showFavorites) {
            this.data = this.data1.slice(10);
        } else {
            this.data = this.data1;
        }
    }

    ngOnInit(): void {
    }

}
