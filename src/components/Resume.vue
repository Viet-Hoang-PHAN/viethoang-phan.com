<template>
    <div class="resume">
      <HelloWorld />
    </div>
</template>

<script>
import HelloWorld from "./HelloWorld";
export default {
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>