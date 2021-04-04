import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

    @Input() showFavorites: boolean;

    public searchTerm: string = '';

    public data = ['test1', 'test2', 'test3', 'test4', 'test5',
        'test6', 'test7', 'test8', 'test9', 'test10', 'test11', 'test12', 'test13', 'test14']

    constructor() { }

    ngOnInit(): void {
    }

}
