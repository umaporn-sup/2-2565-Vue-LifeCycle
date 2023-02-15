import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
console.log('before create...')
const myApp = createApp(App)
myApp.mount('#app')
console.log('after mounted...')
