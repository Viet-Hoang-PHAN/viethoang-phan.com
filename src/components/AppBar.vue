<template>
  <v-app-bar app class="d-flex align-end" color="transparent" flat>
    <h1 class="headline text-uppercase title">
      <router-link to="/">
        <span class="name font-weight-light font-italic px-1">Viet-Hoang</span>
        <span class="font-weight-regular name font-italic px-1">Phan</span>
      </router-link>
    </h1>
    <v-spacer></v-spacer>
    <v-btn
      v-for="(route, index) in this.routes"
      :key="index"
      :to="route.path"
      text
      color="white"
      class="mx-2"
    >{{ route.text }}</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data: () => {
    return {
      routes: [
        { path: "/", text: "Accueil" },
        { path: "/mon-cv", text: "Mon CV" },
        { path: "/contact", text: "Contact" }
      ]
    };
  }
};
</script>

<style lang="scss">
h1 > a {
  text-decoration: none;
  color: black;
}

.name {
  font-family: "Merriweather", serif;
  color: white;
  opacity: 0.9;
}

.v-toolbar__content {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
}
</style>