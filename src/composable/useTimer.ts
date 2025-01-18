import { ref } from 'vue';

export function useTimer (initialValue: number = 0){
    const count = ref<number>(initialValue);
    const isRunning = ref<boolean>(false);

    let intervalId: NodeJS.Timeout | null = null;

    const start = () => {
        if(!isRunning.value){
            isRunning.value = true;

            intervalId = setInterval(() => {
                count.value++;
            }, 1000);
        }
    };

    const stop = () => {
        if(isRunning.value){
            isRunning.value = false;

            if(intervalId){
                clearInterval(intervalId);
                intervalId = null;
            }
        }
    };

    const reset = (newInitialValue: number = initialValue)  =>  {
        stop();
        count.value = newInitialValue;
    };

    return { count, isRunning, start, stop, reset};
}