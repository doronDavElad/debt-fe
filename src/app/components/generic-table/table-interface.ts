// export interface ITableHeader {
export interface ITableRowData {
  [key: string]: any;
  isMarked:boolean
    customerId?:number,
    companyName?:string,
    projectName?:string,
    date?:number,
    billNumber?:string,
    secondDate?:number,
    payAmount?:string,
    eladEmployee?: string,
    status?:string 
    customerName?:string,
    group?:string,
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