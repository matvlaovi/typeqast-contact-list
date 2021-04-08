import {ContactNumber} from "./contact-number.model";

export interface Contact {
    name: string;
    email: string;
    numbers: ContactNumber[];
    isFavorite: boolean;
}