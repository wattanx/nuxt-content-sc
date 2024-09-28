<script setup lang="ts">
import NavigationCard from '~/components/NavigationCard.vue';
</script>

<template>
  <div class="flex flex-col gap-2">
    <NavigationCard
      href="/nuxt-content"
      title="Nuxt Content with Server Components"
      description="Combine Nuxt Content with Server Components"
    />
    <NavigationCard href="/nuxt-content-sc" title="Nuxt Content with Server Components" description="Without Server Components" />
  </div>
</template>
