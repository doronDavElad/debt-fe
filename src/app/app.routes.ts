import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
loadComponent:()=>
import('./pages/invoices/invoices.component').then((m=>m.InvoicesComponent))
},
    {
        path:'invoices',
loadComponent:()=>
import('./pages/invoices/invoices.component').then((m=>m.InvoicesComponent))
},
    {
        path:'customers',
loadComponent:()=>
import('./pages/customers/customers.component').then((m=>m.CustomersComponent))
},
    {
        path:'customer',
loadComponent:()=>
import('./pages/customer/customer.component').then((m=>m.CustomerComponent))
},
    {
        path:'archive',
loadComponent:()=>
import('./pages/archive-page/archive-page.component').then((m=>m.ArchivePageComponent))
},

];
