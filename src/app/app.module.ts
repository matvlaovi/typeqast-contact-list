import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {ContactOverviewComponent} from './contact-overview/contact-overview.component';
import {ContactListComponent} from './contact-overview/contact-list/contact-list.component';
import {ContactManageComponent} from './contact-manage/contact-manage.component';
import {ContactService} from './services/contact.service';

import {AvatarModule} from 'ngx-avatar';
import {HttpClientModule} from '@angular/common/http';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
@NgModule({
    declarations: [
        AppComponent,
        ContactOverviewComponent,
        ContactListComponent,
        ContactManageComponent,
        ContactDetailsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatFormFieldModule,
        MatSnackBarModule,
        HttpClientModule,
        AvatarModule,
    ],
    providers: [
        ContactService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
