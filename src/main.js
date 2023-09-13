import { createApp } from 'vue'
import App from './App.vue'
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'
 
window.Pusher = Pusher;
 
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'Gm3wTg.lAum2A',
    wsHost: 'realtime-pusher.ably.io',
    wsPort: 443,
    disableStats: true,
    encrypted: true,
    cluster: 'eu'
})

window.Echo.channel('property')
            .listen('.property.created', (e) => {
            console.log(e)
        })

console.log("here")

createApp(App).mount('#app')
