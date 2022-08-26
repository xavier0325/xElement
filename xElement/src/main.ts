import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElContainerCom from './components/container'
import ElButtonCom from './components/button'
import ElFormCom from './components/form'
import ElDialogCom from './components/dialog'
// import ElContainer from './components/Container.vue'
// import ElHeader from './components/Header.vue'
// console.log(xElement)
const app = createApp(App)
// app.component(ElContainer.name, ElContainer);
// app.component(ElHeader.name, ElHeader);
app.config.globalProperties.$XELEMENT = {
    size: 'large'
}
app.use(ElContainerCom)
    .use(ElButtonCom)
    .use(ElFormCom)
    .use(ElDialogCom)
    .mount('#app')
