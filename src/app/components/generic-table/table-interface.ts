// export interface ITableHeader {
export interface ITableRowData {
  [key: string]: any;
    customerId?:number,
    companyName?:string,
    projectName?:string,
    date?:string,
    billNumber?:string,
    secondDate?:string,
    payAmount?:string,
    eladEmployee?: string,
    status?:string 
    customerName?:string 

}
export interface TableData {
    tableValues?: ItableValues[];
    tableData?: ITableRowData[];
  }

  export interface ItableValues {
    controlName: string;
    sort:boolean;
    type: string;
    title: string;
    mandatorySign?: boolean;
    titleColor?: string;

 
  }
// export interface ITableHeader {
//   title:string,
// }