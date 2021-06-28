import axios from "axios"

// 配置基本URL

const instance = axios.create({
    baseURL: "http://rap2api.taobao.org/app/mock/284498/"
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 请求成功，处理响应数据
    // response 响应的所有内容
    return response.data;
  }, function (error) {
    // 请求失败，处理错误响应数据
    // if (error.response && error.response.status === 401) {
    //   window.localStorage.removeItem('token')
    //   router.push('/login')
    // }
    return Promise.reject(error)
  })


// 导出
export default instance;