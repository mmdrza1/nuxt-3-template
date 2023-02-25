export default defineNuxtRouteMiddleware((to, from) => {
  console.log("auth page", to, from);
});
