export interface DataAxios {
    data: Data | [];
    loading: boolean;
    error: null | string;
}


export interface Data {
    employees: Employee[];
}

export interface Employee {
    id:        number;
    name:      string;
    last_name: string;
    birthday:  number;
}