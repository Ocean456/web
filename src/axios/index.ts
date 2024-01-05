import axios from 'axios'



axios.defaults.baseURL = 'http://localhost:9090/api'


export const login = (form: { username: string, password: string }) => {
    return axios.post("/login", form)
}

export const getEmployees = () => {
    return axios.get("/employees")
}

export const getApplications = () => {
    return axios.get("/applications")
}


export const addEmployee = (employee: any) => {
    return axios.post('/employee', employee)
}


export const getEmployee = (type: string, parameter: string) => {
    return axios.get('/employee', {
        params: {
            type: type,
            parameter: parameter
        }
    })
}

export const getEmployeeCount = () => {
    return axios.get('/employees/count')
}

export const getTrainings = () => {
    return axios.get('/trainings')
}

export const getEmployeeByPage = (page: number, size: number) => {
    return axios.get('/employees/page', {
        params: {
            page: page,
            size: size
        }
    })
}

export const updateApplication = (application: any) => {
    return axios.put('/application', application)
}

export const setDimission = (employee: any) => {
    return axios.put('/employee', employee)
}

export const updateEmployee = (employee: any) => {
    return axios.put('/employee', employee)
}
export const deleteTraining = ( trainingId: number) => {
    return axios.delete('/training', {
        params: {
            trainingId: trainingId
        }
    })
}

export const addTraining = (training: any) => {
    return axios.post('/training', training)
}


export const  getAttendanceByEmployeeId = (employeeId: number) => {
    return axios.get('/attendance', {
        params: {
            employeeId: employeeId
        }
    })
}

export const getSalary = () => {
    return axios.get('/salary')
}

export const getAttendanceConfig = () => {
    return axios.get('/config/attendance')
}

export const updateAttendanceConfig = (config: any) => {
    return axios.put('/config/attendance', config)
}

export const get_salary=(id:number,month:string)=>{
    return axios.get('/search',{
        params:{
            id:id,
            month:month
        }
    })
}
export const get_salary1=(id:number)=>{
    return axios.get('/search1',{
        params:{
            id:id
        }
    })
}
export const get_salary2=(month:string)=>{
    return axios.get('/search2',{
        params:{
            month:month
        }
    })
}

export const deleteApplication=(applicationId:number)=>{
    return axios.delete('/application',{
        params: {
            applicationId: applicationId
        }
    })
}

export default axios