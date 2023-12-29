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
export default axios