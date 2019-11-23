<template>
  <v-footer dark padless class="blue text-center">
    <v-row justify="center" no-gutters>
      <v-col cols="12" sm="6" class="py-6 blue lighten-1">
        <p class="headline font-weight-light">Le projet du site web est visible sur mon Github</p>
        <v-btn
          outlined
          href="https://github.com/Viet-Hoang-PHAN/viethoang-phan.com"
          target="_blank" rel="noopener noreferrer"
        >Voir le projet</v-btn>
      </v-col>
      <v-col cols="12" sm="6" class="py-6 blue lighten-1">
        <p class="headline font-weight-light">Besoin de plus d'informations ?</p>
        <v-btn outlined to="/contact">Contactez-moi</v-btn>
      </v-col>

      <v-col cols="12" class="py-6">
        {{ new Date().getFullYear() }} —
        <strong>Viet-Hoang PHAN</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {};
</script>

<style>
</style>