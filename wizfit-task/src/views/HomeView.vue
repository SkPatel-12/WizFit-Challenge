
<template>
  <div class="flex justify-center flex-col items-center">
    <h1 class="text-2xl font-bold text-pink-600">What is WizFit Challenge?</h1>
    <img src="@/assets/images/player.png" class="w-1/6 h-1/6"/>
    <ParticipationContent/>
  </div>
</template>

<script>
import ParticipationContent from '@/components/ParticipationContent.vue'
export default {
  components: {
    ParticipationContent
  }
}
</script>