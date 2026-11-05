<script setup lang="ts">
type Props = {
  path: string;
};

const props = defineProps<Props>();

const value = await queryCollection('content').path(props.path).first();
</script>

<template>
  <div>
    <ContentRenderer v-if="value" :value="value" />
  </div>
</template>
