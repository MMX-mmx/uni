//引入封装的axios配置文件
import request from "../utils/request"


export default {
    //轮播图接口
    getBanner(){
       return request({url : "/db.json"});
    },
    //登录接口
    login(){
        return request({url : "/login", method : "post", data : {name : "jack", pass : "123456"}})
    }
}
