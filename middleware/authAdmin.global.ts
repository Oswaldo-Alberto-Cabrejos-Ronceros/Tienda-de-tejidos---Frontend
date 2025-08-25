export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  if (import.meta.client) authStore.recoverUserFromSession();
  const isAdmin = authStore.isAdmin;
  if (to.path.startsWith("/admin") && !isAdmin) {
    return navigateTo("/");
  }
});
