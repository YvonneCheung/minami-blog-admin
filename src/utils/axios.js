import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.interceptors.response.use(    
  response => {   
      if (response.status === 200) {            
          return Promise.resolve(response);        
      } else {            
          return Promise.reject(response);        
      }    
  },  
  error => {   
      if (error.response.status) {            
          switch (error.response.status) {                             
              // case 401:                    
              //     router.replace({                        
              //         path: '/login',                        
              //         query: { 
              //             redirect: router.currentRoute.fullPath 
              //         }
              //     });
              //     break;              
              // case 403:
              //      Toast({
              //         message: '登录过期，请重新登录',
              //         duration: 1000,
              //         forbidClick: true
              //     });
              //     localStorage.removeItem('token');
              //     store.commit('loginSuccess', null);
              //     setTimeout(() => {                        
              //         router.replace({                            
              //             path: '/login',                            
              //             query: { 
              //                 redirect: router.currentRoute.fullPath 
              //             }                        
              //         });                    
              //     }, 1000);                    
              //     break; 
              // case 404:
              //     Toast({
              //         message: '网络请求不存在',
              //         duration: 1500,
              //         forbidClick: true
              //     });
              //     break;
              // default:
              //     Toast({
              //         message: error.response.data.message,
              //         duration: 1500,
              //         forbidClick: true
              //     });
          }
          return Promise.reject(error.response);
      }
  }
)
