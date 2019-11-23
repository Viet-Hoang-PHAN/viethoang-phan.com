<template>
  <div id="experiences">
    <v-container class="d-flex">
      <v-layout wrap>
        <v-row id="experiences-title" justify="center" align="center">
          <h3 class="display-1 my-6 font-weight-light">Expériences Professionnelles</h3>
        </v-row>
          <v-col v-for="(experience,index) in experiences" :key="index" cols="12" justify-self="center">
            <v-card :width="cardWidth" outlined class="experience-card pa-2" color="rgba(255,255,255,0.6)">
              <v-row class="ma-2">
                <v-col cols="12" sm="8">
                  <h4 class="headtitle">{{ experience.positionName }}</h4>
                  <div class="subtitle-1">
                    {{ experience.location }}
                    <br />
                    {{ experience.duration }}
                  </div>
                </v-col>
                <v-col cols="12" sm="4">
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
              <v-row>
                <v-card-text>
                  <v-card-title class="title">OUTILS ET TECHNOLOGIES :</v-card-title>
                  <v-chip
                    v-for="(technologie, index) in experience.technologies"
                    :key="index"
                    class="ma-1"
                  >{{ technologie }}</v-chip>
                </v-card-text>
              </v-row>
            </v-card>
          </v-col>
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
          positionName: "Stage - Développeur front-end",
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
            "Conceptualiser et Maquetter l'application",
            "Versionner le code",
            "Déployer le projet sur un serveur Nginx"
          ],
          technologies: [
            "HTML5",
            "CSS3",
            "JavaScript ES6+",
            "Vue",
            "Vuetify",
            "Vuex",
            "Vue-Router",
            "Webpack",
            "Python 3",
            "Django",
            "Django-Rest-Framework",
            "Linux",
            "Git",
            "Gitlab",
            "StarUML",
            "Adobe XD",
          ]
        }
      ]
    };
  },
  computed: {
    cardWidth () {
      const breakpoint = this.$vuetify.breakpoint;
      return breakpoint.xs ? "90%" : "80%";
    }
  }
};
</script>

<style lang="scss">
#experiences {
  // background-color: #0277bd;
  background: url("../assets/mountains.svg") center no-repeat;
  background-size: cover;
  height: 100vh;
}

#experiences-title {
  text-align: center;
}

#experiences-title > h3 {
  color: black;
}

.experience-card {
  margin: auto;
}

@media (max-width: 600px) {
  #experiences {
    height: auto;
  }
}
</style>