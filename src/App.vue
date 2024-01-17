<template>
  <div class="bg-slate-800 h-screen">
    <Navigation />
    <RouterView></RouterView>
  </div>
</template>
<script setup>
import Navigation from './components/Navigation.vue'
</script>