export interface EmployeeForm {
    name: string;
    last_name: string;
    birthday: number | string;
}

export interface EmployeeErrors {
    name: string;
    last_name: string;
    birthday: string;
}