<template>
  <v-app>
    <v-app-bar app class="d-flex align-end">
      <h1 class="headline text-uppercase title">
        <router-link to="/">
        <span class="name font-weight-light font-italic px-1">Viet-Hoang</span>
        <span class="font-weight-regular name font-italic px-1">Phan</span>
        </router-link>
      </h1>
      <v-spacer></v-spacer>
      <v-btn outlined color="#1976d2" to="/" class="mx-2">Accueil</v-btn>
      <v-btn outlined color="#1976d2" to="/mon-cv" class="mx-2">Mon CV</v-btn>
      <v-btn outlined color="#1976d2" to="/contact" class="mx-2">Contact</v-btn>
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


h1 > a {
  text-decoration: none;
  color: black
}

.name {
  font-family: "Merriweather", serif;
}

.v-content {
  padding: 0 !important;
}

header {
  top: -93vh !important;
  height: 100vh !important;
  border-radius: 600px 600px 200px 200px !important;
}

.v-toolbar__content {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.effect-enter-active {
  animation: slideUp 2s;
}
.effect-leave-active {
  animation: slideOut 2s;
}

@keyframes slideUp {
  from {
    top: 100%;
  }
  to {
    top: 0;
  }
}
@keyframes slideOut {
  from {
    top: 0;
  }
  to {
    top: -168%;
  }
}
</style>