import { AuthenticationServiceImpl } from "~/services/Authentication/infrastructure/AuthenticationServiceImpl";

export default defineNuxtPlugin((nuxtApp) => {
const config = useRuntimeConfig();
const baseURL = config.public.apiBase as string;
//authenticationService
const authenticationService = new AuthenticationServiceImpl(baseURL);
})
