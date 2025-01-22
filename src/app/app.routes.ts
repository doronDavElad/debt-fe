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
import('./pages/customers/customers.component').then((m=>m.CustomersComponent))
},

];
