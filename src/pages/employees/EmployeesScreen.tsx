import { Paginate } from "../../components/employees/Paginate";
import { useAxios } from "../../hooks/useAxios";
import { useNavigate } from 'react-router-dom';
import { MainLayout } from "../../components/layout/MainLayout";

export const EmployeesScreen = () => {

    const navigate = useNavigate();
    const { data, loading } = useAxios();

    return (
        <MainLayout>
            <div className="employees__content" >
                <h1>Employees</h1>
                <Paginate data={data} />
            </div>
        </MainLayout>
    )
}
