<template>
  <div id="objective">
    <v-container class="d-flex align-center">
      <v-layout justify-center wrap>
        <h3 class="display-2 my-4" id="objective-title">Mon objectif ?</h3>
        <p
          class="headline my-4"
          id="objective-text"
        >Accumuler de l'expérience côté Front et Back pour devenir développeur Fullstack</p>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#objective {
  background-color: black;
  height: 70vh;
}

#objective-title,
#objective-text {
  width: 100%;
  color: white;
  text-align: center;
}
</style>