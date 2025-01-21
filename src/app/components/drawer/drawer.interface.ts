export interface IDrawerOrders{
    bill_number:string 
    order_status:string
    start_date:number
    last_update_data:number
    payment_amount:number
    payment_with_tax:number
    sap_status:string
    elad_employee:string
    elad_unit:string
    elad_contact:{
        name:string
    }

    customer_number:string
    business_id:string
    customer_name:string

    project_id:string
    contract_id:string
    order_id:string

    contact_data:{
        name:string
        phone:string
        email:string
    }[];

    logs:
        {
            date:string
            log:string
        }[];
    






}