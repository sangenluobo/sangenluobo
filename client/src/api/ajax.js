import axios from 'axios'

export default function ajax(url='',params={},type='GET') {
    //定义promise
    let promise;
    return new Promise((resolve,reject)=>{
      if('GET' === type){
        //拼接请求字符串
        let paramsStr = '';
        Object.keys(params).forEach(key =>{
          paramsStr += key + '='+ params[key]+'&'
        })
        //过滤最后的&
        if(paramsStr != ''){
          paramsStr = paramsStr.substr(0,paramsStr.lastIndexOf('&'));
        }
        //完整路径
        url += '?' + paramsStr
        //发送请求
        promise = axios.get(url);
      }else if('POST'===type){
        promise = axios.post(url,params)
      }
      //返回请求结果
      promise.then((response)=>{
        resolve(response)
      }).catch(error =>{
        reject(error)
      })

    })
}
