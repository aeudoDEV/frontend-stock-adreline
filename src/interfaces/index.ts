import { ReactNode } from "react";

export interface IRouterDom {
    children: ReactNode;
}

export interface IDefaultContainer extends IRouterDom {}

export interface IDataProduct{
    productName: string;
    typeProduct: string;
    amountStock: number;
}
export interface IProductData {
    id: string;
    productName: string;
    typeProduct: string;
    amountStock: number;
    created_at: string;
}
export interface IModal extends React.FormHTMLAttributes<HTMLFormElement> {}

export interface IContextModal {
    Function?: (id:any) => Promise<void>;
}
export interface IIdTest {
    id:string;
}