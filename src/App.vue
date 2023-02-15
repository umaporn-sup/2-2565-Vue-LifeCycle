<script setup>
import AirplaneIcon from './components/icons/AirplaneIcon.vue'
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue'
onBeforeMount(() => {
  count.value++
  console.log(`before mount...${myAudio.value.id}`)
})
onMounted(() => {
  console.log(`mounted...${myAudio.value.id}`)
})
onBeforeUpdate(() => {
  // console.log(countAtTagP)
  console.log(`before update...${countAtTagP.value.textContent}`)
})
onUpdated(() => {
  console.log(`updated...${countAtTagP.value.textContent}`)
})
console.log('created starting...')
const count = ref(0)
console.log('created ending...')
const countAtTagP = ref('')
const iconShowing = ref(true)
const sampleMusic = ref('sample.mp3')
const myAudio = ref('')
const isPlaying = ref(false)
const playPauseSong = () => {
  isPlaying.value = !isPlaying.value
  if (isPlaying.value) myAudio.value.play()
  else myAudio.value.pause()
}
</script>
<template>
  <div class="w-full p-5 space-y-2">
    <div class="flex space-x-2">
      <p ref="countAtTagP">Counter: {{ count }}</p>
      <button @click="++count" class="p-1 rounded-md bg-green-300">+1</button>
    </div>

    <div class="flex space-x-2">
      <AirplaneIcon v-if="iconShowing" />
      <button
        @click="iconShowing = !iconShowing"
        class="p-1 rounded-md bg-purple-300"
      >
        Hide/Show Icon
      </button>
    </div>
    <div class="flex space-x-2">
      <p>Sample Music</p>
      <audio :src="sampleMusic" ref="myAudio" id="myMusic-001"></audio>
      <button @click="playPauseSong" class="p-1 rounded-md bg-pink-300">
        {{ isPlaying ? 'Pause' : 'Play' }}
      </button>
    </div>
  </div>
</template>
<style scoped></style>
