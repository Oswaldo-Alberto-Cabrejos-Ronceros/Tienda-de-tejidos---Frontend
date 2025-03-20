import { defineNuxtPlugin } from "#app";

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

library.add(faFacebook)
export default defineNuxtPlugin((nuxtApp) => {
    
    nuxtApp.vueApp.component('FontAwesomeIcon',FontAwesomeIcon)
})
