import {trigger, transition, style, animate, query, stagger} from '@angular/animations';
import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Contact} from 'src/app/models/contact.model';
import {ContactService} from 'src/app/services/contact.service';
import {debounceTime} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit, OnChanges {

    @Input() favoritesOnly: boolean;

    public searchControl = new FormControl();

    public contacts: Contact[] = [];

    constructor(
        private service: ContactService,
        private snackBar: MatSnackBar,) { }

    public ngOnChanges(): void {
        this.refreshList();
    }

    public ngOnInit(): void {
        this.searchControl.valueChanges.pipe(debounceTime(500)).subscribe(() => {
            this.refreshList();
        });
    }

    private refreshList(): void {
        this.contacts = this.service.getContacts(this.favoritesOnly, this.searchControl.value);
    }

    public toggleContactFavorite(contact: Contact) {
        contact.isFavorite = !contact.isFavorite;

        this.service.toggleContactFavorite(contact.email);

        this.snackBar.open(
            contact.isFavorite ? 'Contact successfully marked as favorite' :
                'Contact successfully unmarked as favorite', 'OK', {
            duration: 2000,
            horizontalPosition: 'right',
        });

        if (this.favoritesOnly) {
            this.refreshList();
        }
    }

    public deleteContact(contact: Contact) {
        this.service.deleteContact(contact.email);

        this.snackBar.open(
            'Contact successfully deleted', 'OK', {
            duration: 2000,
            horizontalPosition: 'right',
        });

        this.refreshList();
    }
}
