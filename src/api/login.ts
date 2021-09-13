// 导入接口
import axios from "axios"

export const loginApi = () => {
    return axios.get('/api/login')
};