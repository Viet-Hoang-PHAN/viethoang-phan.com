<template>
  <v-app>
    <AppBar />
    <v-content>
      <transition :name="transitionName" mode="out-in">
        <router-view />
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";

export default {
  name: "App",
  components: {
    AppBar
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      if (from.meta.transitionName === "effect") {
        this.transitionName = from.meta.transitionName;
      } else {
        this.transitionName = to.meta.transitionName;
      }
      next();
    });
  },
  data: () => ({
    transitionName: "effect"
  })
};
</script>


<style lang="scss">

*{
  box-sizing: border-box;
}

#app {
  height: 100vh;
  width: 100%;
  background: linear-gradient(2.1turn, #0288d1, #81d4fa);
}

.effect-enter-active {
  animation: slideUp 1s reverse;
}

.effect-leave-active {
  animation: slideUp 0.5s
}

@keyframes slideUp {
  0% {
    transform: translateY(0)
  }
  100% {
    transform: translateY(-100vh)
  }
}

@keyframes fade {
  0% {
    opacity: 1
  }
  100% {
    opacity: 0
  }
}

</style>