// export interface BillingModel {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
// }

// export interface BillingModel {
//     id: number;
//     contractType: string;
//     name: string;
// }

export class BillingModel {
    public name: string;
    public contractType: string;
    public shortCode: string;
    public cabType: string;
    public value: string;

    constructor(name: string, contractType: string, shortCode: string, cabType: string) {
        this.name = name;
        this.contractType = contractType;
        this.shortCode = shortCode;
        this.cabType = cabType;
    }
}