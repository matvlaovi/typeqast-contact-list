import {Component, OnInit} from '@angular/core';

import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactNumber} from '../models/contact-number.model';
import {Contact} from '../models/contact.model';
import {ContactService} from '../services/contact.service';

@Component({
    selector: 'app-contact-manage',
    templateUrl: './contact-manage.component.html',
    styleUrls: ['./contact-manage.component.scss']
})
export class ContactManageComponent implements OnInit {

    public form: FormGroup;

    public isEdit = false;
    public contact: Contact;

    public get numbers() {
        return this.form.get('numbers') as FormArray;
    }

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private service: ContactService,
        private snackBar: MatSnackBar,
        private router: Router,) {
    }

    public ngOnInit(): void {
        const contact = this.route.snapshot.data.contact;
        this.contact = contact;

        if (contact) {
            this.isEdit = true;
        }

        this.initializeForm(contact);
    }

    private initializeForm(contact?: Contact) {
        this.form = this.formBuilder.group({
            name: [contact?.name, Validators.required],
            email: [{value: contact?.email, disabled: !!this.contact}, Validators.required],
            numbers: this.formBuilder.array(
                this.buildNumbersFormArray(contact?.numbers)
            )
        });
    }

    private buildNumbersFormArray(numbers: ContactNumber[]): FormGroup[] {
        if (!numbers) {
            return [this.formBuilder.group({
                number: [''],
                type: [''],
            })];
        }

        return numbers.map(x => this.formBuilder.group({
            number: [x.number],
            type: [x.type],
        }));
    }

    public addNumber(): void {
        this.numbers.push(this.formBuilder.group({
            number: [''],
            type: ['']
        }));
    }

    public removeNumber(index: number): void {
        this.numbers.removeAt(index);
    }

    public deleteContact() {
        this.service.deleteContact(this.contact.email);

        this.snackBar.open(
            'Contact successfully deleted', 'OK', {
            duration: 2000,
            horizontalPosition: 'right',
        });

        this.router.navigateByUrl('');
    }

    public cancel(): void {
        this.router.navigateByUrl('');
    }

    public save(): void {
        if (!this.form.valid) {
            this.form.markAllAsTouched();
            return;
        }

        let model = this.form.getRawValue();

        if (this.isEdit) {
            this.service.updateContact(model);
        } else {
            this.service.addContact(model);
        }

        this.snackBar.open(
            'Contact successfully saved', 'OK', {
            duration: 2000,
            horizontalPosition: 'right',
        });

        this.router.navigateByUrl('');
    }
}
