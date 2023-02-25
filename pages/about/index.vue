
<script setup>
import { useUserStore } from "@/stores/user";
const store = useUserStore();
</script>

<template>
  <div class="about h-full w-full">
    <h1>Welcome to the about</h1>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <NuxtLink to="/"> next </NuxtLink>
    {{ store.fullName }}
  </div>
</template>


<style>
.about {
  background: red;
}
</style>
