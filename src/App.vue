<template>
  <div id="app">
    <TimerComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TimerComponent from './components/TimerComponent.vue';

export default defineComponent({
  components: {
    TimerComponent,
  },
});
</script>
