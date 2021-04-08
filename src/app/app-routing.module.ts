import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactDetailsComponent} from './contact-details/contact-details.component';
import {ContactManageComponent} from './contact-manage/contact-manage.component';
import {ContactResolver} from './contact-manage/contact-resolver';
import {ContactOverviewComponent} from './contact-overview/contact-overview.component';

const routes: Routes = [
    {path: '', component: ContactOverviewComponent},
    {path: 'add', component: ContactManageComponent},
    {
        path: 'manage/:email',
        component: ContactManageComponent,
        resolve: {
            contact: ContactResolver
        }
    }, {
        path: 'details/:email',
        component: ContactDetailsComponent,
        resolve: {
            contact: ContactResolver
        }
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }