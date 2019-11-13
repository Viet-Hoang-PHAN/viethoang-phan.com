<template>
  <div id="experiences">
    <v-container class="d-flex">
      <v-layout justify-center wrap>
        <v-row id="experiences-title" class="display-2" justify="center" align="center">
          <h3>Expériences Professionnelles</h3>
        </v-row>
        <v-row align="center" justify="center">
          <v-col v-for="(experience,index) in experiences" :key="index" cols="12">
            <v-card width="80%" outlined class="experience-card">
              <v-row class="ma-2">
                <v-col cols="8">
              <h4 class="headtitle">{{ experience.positionName }}</h4>
              <div class="subtitle-1">{{ experience.location }} <br/>{{ experience.duration }}</div>
                </v-col>
                <v-col cols="4" justify-self="end">
              <v-img
                :src="experience.logo.link"
                :width="experience.logo.width"
                :height="experience.logo.height"
                contain
              ></v-img>
                </v-col>
              </v-row>
              <v-row>
              <v-card-text>
              <v-card-title class="title">MISSIONS :</v-card-title>
                <ul>
                  <li
                    v-for="(assignment, index) in experience.assignments"
                    :key="index"
                  >{{assignment}}</li>
                </ul>
              </v-card-text>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      experiences: [
        {
          positionName: "Stagiaire développeur front-end",
          company: "MISNet",
          logo: {
            link: require("../assets/logo_misnet_source.png"),
            height: "100px",
            width: "auto"
          },
          location: "Airbus Defense and Space, Labège",
          duration: "27 Mai 2019 au 2 Aout 2019",
          assignments: [
            "Développer une interface utilisateur pour récupérer les informations des appareils IoTs et les configurer à distance",
            "Développement sous Django/Vue",
            "Conceptualiser et Maquetter l'application",
            "Utilisation de Git/Gitlab",
            "Déployer le projet sur un serveur Nginx"
          ]
        },
      ]
    };
  }
};
</script>

<style lang="scss">
#experiences {
  background-color: #0277bd;
  height: 130vh;
}

#experiences-title {
  width: 100%;
  text-align: center;
}

.experience-card {
  margin: auto;
}
</style>