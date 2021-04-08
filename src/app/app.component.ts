import {Component, OnInit} from '@angular/core';
import {ContactService} from './services/contact.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private contactService: ContactService) {
    }

    public ngOnInit(): void {
        this.contactService.initMockData();
    }
}