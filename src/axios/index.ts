import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:9090/api'

// Add a request interceptor


// Add a response interceptor

export const login = (form: {username: string, password: string}) => {
    return axios.post("/login", form)
}

export const getEmployees = () => {
    return axios.get("/employees")
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

export const getEmployeeByPage = (page: number, size: number) => {
    return axios.get('/employees/page', {
        params: {
            page: page,
            size: size
        }
    })
}

export default axios