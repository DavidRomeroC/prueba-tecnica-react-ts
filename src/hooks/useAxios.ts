import { useEffect, useState } from "react";
import axios from "axios";
import { DataAxios } from "./interfaceHooks";

export const useAxios = () => {

    const [data, setData] = useState<DataAxios>({
        data: [],
        loading: true,
        error: null
    });

    useEffect(() => {
        axios.get(`https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/david_romero`)
            .then(response => {
                setData({
                    data: response.data.data.employees,
                    loading: false,
                    error: null
                });
            })
            .catch(error => {
                setData({
                    data: [],
                    loading: false,
                    error: error.message
                });
            })
    }, []);

    return data;
}