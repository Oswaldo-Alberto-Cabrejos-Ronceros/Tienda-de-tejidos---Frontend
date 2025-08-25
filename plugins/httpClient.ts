import { AxiosHttpClient } from "~/services/HttpClient/infrastructure/AxiosHttpClient";

export default defineNuxtPlugin((nuxtApp) => {
const config = useRuntimeConfig();
const baseURL = config.public.apiBase as string;
//httpClient
const httpClient = new AxiosHttpClient(baseURL);
nuxtApp.provide('httpClient',httpClient);
})
