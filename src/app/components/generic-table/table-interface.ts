export interface ITableHeader {
    customerId:string,
    companyName:string,
    projectName:string,
    date:string,
    billNumber:string,
    secondDate:string,
    payAmount:string,
    eladEmployee: string,
    status:string 

}
export interface TableData {
    tabletitles?: any[];
    tableData?: ITableHeader[];
  }