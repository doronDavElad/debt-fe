import { ICustomerPageDataInterface } from "../interfaces/customerPage.interface";

export const customerpageMockData:ICustomerPageDataInterface={
    name:"אוניברסיטת בן גוריון",
    customer_id:"354789654123",
    customer_code:"123456",
    customer_payment_terms:`ללא מע''מ, &#8362;, +90`,
    contacts:[
        {
            client_name:"פולה בן גוריון",
            client_number:"05475967011",
            client_email:"ploaneng@gmail.com"
        },
        {
            client_name:"אליעזר בן יהודה",
            client_number:"0504872265",
            client_email:"eliezerbenyehuda@gmail.com"
        }
    ],
    payment_counter:[
        {
            non_confirmation_invoices_price:"12449.56",
            total_non_confirmation_invoices_amount:"1",
        },
        {
            open_invoices_price: "0",
            open_invoices_amount: "0",
        },
        {
            debt_price: "0",
            debt_amount: "0",
        },
    ],
    total_payment_amount:12449.56,

    all_invoices:[
       { 
        isMarked:true,
        date:1697856000000,
        billNumber:"64641459",
        secondDate:1697856000000,
        group:"CRM",
        payAmount:"12558",
        status:"אושרה לתשלום"

    },
       { 
        isMarked:false,
        date:1697856000000,
        billNumber:"98751678",
        secondDate:1697856000000,
        group:"DIGITAL",
        payAmount:"5974",
        status:"אושרה לתשלום"

    },
       { 
        isMarked:true,
        date:1697856000000,
        billNumber:"64641459",
        secondDate:1697856000000,
        group:"CRM",
        payAmount:"23597",
        status:"אושרה לתשלום"

    }

    ]
    

    
    
}