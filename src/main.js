import { createApp } from 'vue'
import App from './App.vue'
import { UI_component } from './components/UI/UI_component'

const app = createApp(App)

UI_component.forEach(component =>
    app.component(component.name, component)
)

app.mount('#app')
