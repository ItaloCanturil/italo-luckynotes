<script lang="ts" setup>
const props = defineProps<{
  title: string;
  description: string;
  host: string;
}>();
</script>

<template>
  <div
    class="w-full h-full flex flex-col justify-between items-start bg-white p-20 pt-24 pb-20"
    style="background-image: linear-gradient(135deg, #fff 0%, #eee 100%)"
  >
    <div>
      <p class="text-balance text-2xl mb-4 text-black flex items-center">
        {{ props.description }}
      </p>
      <h1 class="text-5xl text-gray-700 leading-tight pr-10">
        {{ props.title }}
      </h1>
    </div>
    <div class="font-bold text-4xl flex flex-row">{{ props.host }}</div>
  </div>
</template>
