<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="header">
      <nav>
        <img src="@/assets/images/banner.png" alt="Banner" class="w-full h-[100px] object-fill" />
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.header {
  height: 15%;
}
</style>
