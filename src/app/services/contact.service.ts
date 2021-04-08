import {Injectable} from "@angular/core";
import {Contact} from "../models/contact.model";

@Injectable()
export class ContactService {

    storageKey = 'contacts';

    constructor() { }

    public initMockData(): void {
        const contacts: Contact[] = [
            {
                email: 'addie.hernandez@gmail.com',
                name: 'Addie Hernandez',
                isFavorite: false,
                numbers: [
                    {
                        number: '+385 21 5312 312',
                        type: 'home',
                    },
                    {
                        number: '+385 21 312 31211',
                        type: 'work',
                    },
                    {
                        number: '+385 21 984 1414',
                        type: 'husband',
                    },
                ],
            },
            {
                email: 'john.joe@gmail.com',
                name: 'John Joe',
                isFavorite: true,
                numbers: [
                    {
                        number: '+385 21 123 4567',
                        type: 'home',
                    },
                    {
                        number: '+385 88 623 66265',
                        type: 'gym',
                    },
                ],
            },
            {
                email: 'jane.smith@gmail.com',
                name: 'Jane Smith',
                isFavorite: false,
                numbers: [
                    {
                        number: '+385 21 123 4567',
                        type: 'home',
                    },
                    {
                        number: '+385 88 623 66265',
                        type: 'work',
                    },
                    {
                        number: '+385 88 623 66265',
                        type: 'cell',
                    },
                ],
            },
            {
                email: 'tom.ever@gmail.com',
                name: 'Tom Ever',
                isFavorite: false,
                numbers: [
                    {
                        number: '+385 21 123 4567',
                        type: 'home',
                    },
                    {
                        number: '+385 88 623 66265',
                        type: 'work',
                    },
                    {
                        number: '+385 88 623 66265',
                        type: 'cell',
                    },
                ],
            },
            {
                email: 'stephen.knack@gmail.com',
                name: 'Stephen Knack',
                isFavorite: true,
                numbers: [
                    {
                        number: '+385 21 123 4567',
                        type: 'home',
                    },
                    {
                        number: '+385 88 623 66265',
                        type: 'work',
                    },
                    {
                        number: '+385 88 623 66265',
                        type: 'cell',
                    },
                ],
            },
            {
                email: 'rose.bush@gmail.com',
                name: 'Rose Bush',
                isFavorite: true,
                numbers: [
                    {
                        number: '+385 21 123 4567',
                        type: 'home',
                    },
                    {
                        number: '+385 88 623 66265',
                        type: 'work',
                    },
                    {
                        number: '+385 88 623 66265',
                        type: 'cell',
                    },
                ],
            },
            {
                email: 'sam.manning@gmail.com',
                name: 'Sam Manning',
                isFavorite: true,
                numbers: [
                    {
                        number: '+385 21 123 4567',
                        type: 'home',
                    },
                    {
                        number: '+385 88 623 66265',
                        type: 'work',
                    },
                    {
                        number: '+385 88 623 66265',
                        type: 'cell',
                    },
                ],
            }
        ];

        localStorage.setItem(this.storageKey, JSON.stringify(contacts));
    }

    public getContacts(favoriteOnly: boolean, searchTerm?: string): Contact[] {
        const contactsJson = localStorage.getItem(this.storageKey);

        let contacts: Contact[] = JSON.parse(contactsJson);

        if (favoriteOnly) {
            contacts = contacts.filter(x => x.isFavorite);
        }

        if (searchTerm) {
            contacts = contacts.filter(x => x.name.includes(searchTerm) || x.email.includes(searchTerm));
        }

        return contacts;
    }

    public getContact(email: string): Contact {
        const contactsJson = localStorage.getItem(this.storageKey);

        const contacts: Contact[] = JSON.parse(contactsJson);

        return contacts.find(x => x.email === email);
    }

    public toggleContactFavorite(email: string): void {
        const contactsJson = localStorage.getItem(this.storageKey);

        const contacts: Contact[] = JSON.parse(contactsJson);

        let contact = contacts.find(x => x.email === email);

        contact.isFavorite = !contact.isFavorite;

        localStorage.setItem(this.storageKey, JSON.stringify(contacts));
    }

    public deleteContact(email: string): void {
        const contactsJson = localStorage.getItem(this.storageKey);

        let contacts: Contact[] = JSON.parse(contactsJson);

        contacts = contacts.filter(x => x.email !== email);

        localStorage.setItem(this.storageKey, JSON.stringify(contacts));
    }

    public addContact(contact: Contact): void {
        const contactsJson = localStorage.getItem(this.storageKey);

        let contacts: Contact[] = JSON.parse(contactsJson);

        contacts.push(contact);

        localStorage.setItem(this.storageKey, JSON.stringify(contacts));
    }

    public updateContact(contact: Contact): void {
        const contactsJson = localStorage.getItem(this.storageKey);

        let contacts: Contact[] = JSON.parse(contactsJson);

        contacts = contacts.map(x =>
            x.email === contact.email ? {...contact} : x
        );

        localStorage.setItem(this.storageKey, JSON.stringify(contacts));
    }
}