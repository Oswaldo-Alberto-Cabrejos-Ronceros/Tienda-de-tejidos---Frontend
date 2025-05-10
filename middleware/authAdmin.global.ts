export default defineNuxtRouteMiddleware((to, from) => {
const authStore = useAuthStore();
const isAdmin = authStore.isAdmin;
if(to.path.startsWith('/admin')&& !isAdmin){
    return navigateTo('/')
}
})
