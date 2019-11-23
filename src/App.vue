<template>
  <v-app>
    <AppBar />
      <transition :name="transitionName" mode="out-in">
        <router-view />
      </transition>
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

p {
  color: white;
}

#app {
  height: 100%;
  width: 100%;
}

.effect-enter-active {
  animation: slideDown 1s reverse;
}

.effect-leave-active {
  animation: slideDown 0.5s
}

@keyframes slideUp {
  0% {
    transform: translateY(0)
  }
  100% {
    transform: translateY(-100vh)
  }
}

@keyframes slideDown {
  0% {
    transform: translate(0);
  }
  100% {
    transform: translateY(100vh)
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