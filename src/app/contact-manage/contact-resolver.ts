import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Contact} from "../models/contact.model";
import {ContactService} from "../services/contact.service";

@Injectable({providedIn: 'root'})
export class ContactResolver implements Resolve<any> {

    constructor(private service: ContactService) { }

    resolve(route: ActivatedRouteSnapshot): Contact {
        return this.service.getContact(route.paramMap.get('email'));
    }
}