import { ITableRowData } from "../components/generic-table/table-interface"

export interface ICustomerPageDataInterface{
    name:string,
    customer_id:string,
    customer_code:string,
    customer_payment_terms:string,
    contacts:[
        {
            client_name:string,
            client_number:string,
            client_email:string
        },
        {
            client_name:string,
            client_number:string,
            client_email:string
        }
    ],
    payment_counter:[
        {
            non_confirmation_invoices_price:string,
            total_non_confirmation_invoices_amount:string,
        },
        {
            open_invoices_price: string,
            open_invoices_amount: string,
        },
        {
            debt_price: string,
            debt_amount: string,
        },
    ],
    total_payment_amount:number,
    // all_projects:[],
    all_invoices:ITableRowData[]
 
    
    

    
    
}

export interface customerCardsText{
    text:string


}