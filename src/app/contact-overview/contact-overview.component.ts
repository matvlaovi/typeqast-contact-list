import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-contact-overview',
    templateUrl: './contact-overview.component.html',
    styleUrls: ['./contact-overview.component.scss']
})
export class ContactOverviewComponent implements OnInit {

    public favoritesOnly: boolean = false;

    constructor() { }

    ngOnInit(): void {

    }

}
