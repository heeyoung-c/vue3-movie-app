import { createApp } from 'vue'
import App from './App'
import router from './routes'
// import router from './routes/index.js'
// 특정한 폴더에 들어있는 index 란 이름의 파일을 가져올때는 
// 이름생략 가능..
import store from './store'
import loadImage from './plugins/loadImage'

createApp(App)
  .use(router) // $route, $router
  .use(store) // $store
  .use(loadImage) // $loadImage
  .mount('#app')