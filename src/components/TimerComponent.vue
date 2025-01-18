<template>
  <div>
    <h1>Timer: {{ count }} seconds</h1>
    <button @click="start" :disabled="isRunning">Start</button>
    <button @click="stop" :disabled="!isRunning">Stop</button>
    <button @click="handleReset(0)">Reset</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTimer } from '../composable/useTimer';

export default defineComponent({
  setup() {
    const { count, isRunning, start, stop, reset } = useTimer(0);

    const handleReset = (_event: MouseEvent, newInitialValue: number = 0) => {
      reset(newInitialValue); 
    };

    return {
      count,
      isRunning,
      start,
      stop,
      reset,
      handleReset 
    };
  },
});
</script>

<style scoped>
h1 {
  font-size: 2em;
  margin-bottom: 20px;
}
button {
  padding: 10px 20px;
  font-size: 1em;
  margin: 5px;
}
button:disabled {
  background-color: lightgray;
}
</style>
