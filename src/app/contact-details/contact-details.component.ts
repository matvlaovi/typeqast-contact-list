import {Component, OnInit} from '@angular/core';

import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactNumber} from '../models/contact-number.model';
import {Contact} from '../models/contact.model';
import {ContactService} from '../services/contact.service';

@Component({
    selector: 'app-contact-details',
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

    public contact: Contact;

    constructor(
        private route: ActivatedRoute,
        private service: ContactService,
        private snackBar: MatSnackBar,
        private router: Router,) { }

    public ngOnInit(): void {
        this.contact = this.route.snapshot.data.contact;
    }

    public toggleContactFavorite() {
        this.contact.isFavorite = !this.contact.isFavorite;

        this.service.toggleContactFavorite(this.contact.email);

        this.snackBar.open(
            this.contact.isFavorite ? 'Contact successfully marked as favorite' :
                'Contact successfully unmarked as favorite', 'OK', {
            duration: 2000,
            horizontalPosition: 'right',
        });
    }

}
