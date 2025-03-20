<template>
  <table class="w-max text-zinc-800 text-center table-fixed">
    <thead> 
      <tr class="px-4 border-solid border-neutral-700 border-b">
        <th v-for="(title, index) in titles" :key="index" class="text-xl font-semibold px-4 py-1">{{ title }}</th>
      </tr>
    </thead>
    <tbody>

      <tr v-for="(item,index ) in data" :key="index" class="text-base border-solid border-neutral-700 border-b"> 
      <td v-for="(key,index) in keys" :key="index" class="px-4 py-1">{{ (item as Record<string,any>)[key]}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
const props = defineProps<{
  //debe haber la misma contidad de title que de key
  titles: string[];
  data: object[];
}>();
const keys = computed(()=>(props.data.length>0?Object.keys(props.data[0]):[]));
</script>
