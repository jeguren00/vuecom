import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createAuth0 } from '@auth0/auth0-vue'

createApp(App)
    .use(router)
    .use(createAuth0({
        domain: 'dev-6hhdb6sa.us.auth0.com',
        client_id: 'bD5f7uPYPEsnxSaRQrItjHoie5CyCWle',
        redirect_uri: window.location.origin,
        useRefreshTokens: true,
        cacheLocation: 'localstorage',
        audience: "https://vuecom-fawn.vercel.app/api",
      }))
    .mount('#app')