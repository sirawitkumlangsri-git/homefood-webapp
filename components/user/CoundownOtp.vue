<template>
  <div>
    <p class="text-base mt-4">00 : {{ countdown }} วินาที</p>
  </div>
</template>

<script setup>
const countdown = ref(60);

// ฟังก์ชันนับเวลาถอยหลัง
const startCountdown = () => {
  timer = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value -= 1;
    } else {
      clearInterval(timer);
    }
  }, 1000); // ลดลงทุกๆ 1 วินาที
};

// ฟังก์ชันหยุดการนับเวลาเมื่อ component ถูกทำลาย
onUnmounted(() => {
  clearInterval(timer); // หยุดการนับเวลาถอยหลังเมื่อ component ถูกทำลาย
});

onMounted(() => {
  startCountdown();
});
</script>

<style>

</style>