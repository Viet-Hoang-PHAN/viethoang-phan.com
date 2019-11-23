<template>
  <div id="contact">
    <v-container class="pt-2">
      <h2
        class="display-3 font-weight-light white--text"
        id="contact-title"
      >Mon profil vous intéresse ?</h2>
    </v-container>
    <v-footer :absolute="this.$vuetify.breakpoint.xs ? false : true" color="black" dark class="d-flex align-end">
      <v-row>
        <v-col
          cols="12"
          sm="4"
        >
        <div class="pb-4">CONTACT</div>
        Téléphone : <a href="tel:+33613493579" class="contact-link">+33 6 13 49 35 79</a> <br/>
        Mail : <a href="mailto:viet-hoang.phan@live.fr" class="contact-link">viet-hoang.phan@live.fr</a>
        </v-col>
        <v-col
          cols="12"
          sm="4"
          class="text-center"
        >
        <a href="http://" target="_blank" rel="noopener noreferrer"></a>
        <a :href="resumePDF" class="contact-link">Télécharge mon CV</a> <br/>
        <a href="https://www.linkedin.com/in/viet-hoang-phan-750290183/" class="contact-link">Ou suis moi sur LinkedIn</a>
        </v-col>
        <v-col
          cols="12"
          sm="4"
          class="text-right"
        >
        <div class="pb-4">ADRESSE</div>
        <p>Viet-Hoang PHAN<br/>275 Route de Seysses<br/>31100 TOULOUSE</p>
        </v-col>
<v-col cols="12" class="text-center">
          {{ new Date().getFullYear() }} —
          <strong>Viet-Hoang PHAN</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      resumePDF: require("./../assets/CV_Viet-Hoang_PHAN.pdf")
    }
  }
};
</script>

<style lang="scss">
#contact {
  background: url("../assets/samurai.jpg") center no-repeat;
  background-size: cover;
  height: 100%;
  padding-top: 64px;
}

#contact-title {
  text-align: center;
  top: 15%;
  position: relative;
  animation: glow 1s ease-in-out infinite alternate;
  text-shadow: 0 0 10px white, 0 0 20px #ffe082, 0 0 30px #ffe082;
}

.contact-link {
  text-shadow: none;
  transition: 0.3s ease-in-out;
}

.contact-link:hover {
  text-shadow: 0 0 10px white, 0 0 20px #ffe082, 0 0 30px #ffe082;
}

@media (max-width: 600px) {
  #contact {
    height: 150%;
  }
}
</style>