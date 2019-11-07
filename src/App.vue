<template>
  <v-app>
    <v-app-bar app class="d-flex align-end" color="transparent" flat>
      <h1 class="headline text-uppercase title">
        <router-link to="/">
        <span class="name font-weight-light font-italic px-1">Viet-Hoang</span>
        <span class="font-weight-regular name font-italic px-1">Phan</span>
        </router-link>
      </h1>
      <v-spacer></v-spacer>
      <v-btn text color="white" to="/" class="mx-2">Accueil</v-btn>
      <v-btn text color="white" to="/mon-cv" class="mx-2">Mon CV</v-btn>
      <v-btn text color="white" to="/contact" class="mx-2">Contact</v-btn>
    </v-app-bar>
    <v-content>
      <transition :name="transitionName">
        <router-view />
      </transition>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
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


#app {
  height: 100vh;
  width: 100%;
  background: linear-gradient(2.1turn, #0288d1, #81d4fa);
}
h1 > a {
  text-decoration: none;
  color: black
}

.name {
  font-family: "Merriweather", serif;
  color: white;
  opacity: 0.8
}


.v-toolbar__content {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.8;
}

.effect-enter-active {
  animation: slideUp 2s;
}
.effect-leave-active {
  animation: slideUp 1s reverse;
}

@keyframes slideUp {
  0% {
    transform: translateY(110%);
  }
  100% {
    transform: translateY(0)
  }
}
</style>