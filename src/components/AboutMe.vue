<template>
  <div id="about-me">
    <v-container class="d-flex">
      <v-layout wrap justify-center>
            <h3
              class="display-3"
            >Viet-Hoang PHAN <br/> Concepteur / Développeur web et mobile</h3>
            <v-row justify="space-around" id="my-qualities">
              <v-col
                v-for="(quality, index) in qualities"
                :key="index"
                :cols="quality.cols"
                :order="quality.order"
                :align-self="quality.align"
                class="qualities-container"
              >
                <v-img :src="quality.imgLink" height="100px" width="100px" class="quality-icon"></v-img>
                <p class="qualities">{{ quality.text }}</p>
              </v-col>
              <v-col cols="4" order="3">
                <v-img src="../assets/profil_hoang.png" max-height="300px" max-width="300px" id="profile-picture"></v-img>
              </v-col>
            </v-row>
            <div id="formations">
              <v-img src="../assets/diploma.svg" max-height="70px" max-width="70px"></v-img>
              <p id="diploma">Titre professionnel de niveau II (Bac +3) : CONCEPTEUR / DÉVELOPPEUR D'APPLICATIONS
                <br/>Adrar Digit@l Academy, Pôle Numérique de l'ADRAR
              </p>
            </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => {
    return {
      qualities: [
        {
          text: "Persévérant, je fais face à tout les problèmes",
          imgLink: require("../assets/thinking.svg"),
          cols: 2,
          order: 1,
          align: "start"
        },
        {
          text: "Altruiste, j'aide mes collègues du mieux que je peux",
          imgLink: require("../assets/social_care.svg"),
          cols: 2,
          order: 2,
          align: "center"
        },
        {
          text: "Curieux, j'aime découvrir et apprendre des technologies",
          imgLink: require("../assets/book.svg"),
          cols: 2,
          order: 4,
          align: "center"
        },
        {
          text:
            "Organisé, je planifie mes tâches à l'avance pour anticiper la suite",
          imgLink: require("../assets/calendar.svg"),
          cols: 2,
          order: 5,
          align: "start"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
#about-me {
  height: 100%;
  background-color: #039BE5;
}

h3 {
  color: white;
  opacity: 0.9;
  text-align: center;
}

.v-image {
  margin: auto;
}
.qualities {
  text-align: center;
  color: white;
}

.qualities-container {
  height: 20%;
  width: 20%;
}

.quality-icon,
#profile-picture {
  animation: slideFromBottom 2.5s;
  animation-fill-mode: forwards;
}

#my-qualities > .qualities-container:nth-child(-n + 2) > .qualities {
  animation: slideFromLeft 2s;
  animation-fill-mode: forwards;
}

#my-qualities > .qualities-container:nth-last-child(-n + 2) > .qualities,
#my-qualities > .qualities-container:nth-last-child(-n + 3) > .qualities {
  animation: slideFromRight 2s;
  animation-fill-mode: forwards;
}
#diploma {
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.5s;
}

.fade-enter-active {
  transition-delay: 0.5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

@keyframes slideFromBottom {
  0% {
    transform: translateY(50%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideFromLeft {
  0% {
    transform: translateX(-50%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideFromRight {
  0% {
    transform: translateX(50%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

</style>