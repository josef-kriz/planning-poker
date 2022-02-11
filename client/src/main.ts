import { createApp } from "vue";
import { createVuetify } from "vuetify";
// import '@mdi/font/css/materialdesignicons.css'
import App from "./App.vue";

const app = createApp(App)
const vuetify = createVuetify({
    theme: {
        defaultTheme: 'dark'
    }
})

app.use(vuetify)

app.mount('#app')
