import myaxios from "../shopaixos/shopaxios"

// 退出接口
// logout()
export const logout = () => myaxios.get("signout");

// 获取用户列表

export const getUserList = (params) => myaxios.get("getAllMemberlnfo", {
    // params:params
    params
})