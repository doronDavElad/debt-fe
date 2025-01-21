import { IDrawerOrders } from "./drawer.interface";

export const drower_data: IDrawerOrders={
    bill_number:"6464654622", 
    order_status:'נדחתה',
    start_date:1729036800000,
    last_update_data:1760572800000,
    payment_amount:1600847.32,
    payment_with_tax:1600847.32,
    sap_status:"נשלח",
    elad_employee:"פמאלה ביזלי",
    elad_unit:"Digital",

    elad_contact:{
        name:"סיוון זמיר"

    },

    customer_number:"123456",
    business_id:"306767982",
    customer_name:"אוניברסיטת בן גוריון",

    project_id:"123456",
    contract_id:"306767982",
    order_id:"306767982",

    contact_data: [
        {
            name: "סיוון זמיר",
            phone: "0547596701",
            email: "testMail@gmail.com",
        },
        {
            name: "אסתר שירייט",
            phone: "0547596701",
            email: "testMail@gmail.com",
        },
    ],

    logs:[
        {
            date:"1729036800000",
            log:"התקבל תקבול",
        },
        {
            date:"1760572800000",
            log:"טרם התקבל תקבול",
        }
    ]






}