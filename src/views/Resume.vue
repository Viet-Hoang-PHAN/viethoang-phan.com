<template>
  <div id="resume">
    <v-container class="d-flex">
      <v-layout>
        <v-row>
          <v-col>
            <h3
              class="py-7"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, natus ab modi consequuntur quas tempora iste aliquid fugit eligendi nobis aperiam soluta voluptates, assumenda cumque adipisci, expedita quasi commodi totam.</h3>
            <v-row justify="space-around">
              <v-col
                v-for="(quality, index) in qualities"
                :key="index"
                :cols="quality.cols"
                :order="quality.order"
                class="qualities-container"
              >
                <div class="qualities">{{ quality.text }}</div>
              </v-col>
              <v-col cols="4" order="3">
                <v-img src="../assets/profil_hoang.png" max-height="300px" max-width="300px"></v-img>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
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
          cols: 2,
          order: 1
        },
        {
          text: "Altruiste, j'aide mes collègues du mieux que je peux",
          cols: 2,
          order: 2
        },
        {
          text: "Curieux, j'aime découvrir et apprendre des technologies",
          cols: 2,
          order: 4
        },
        {
          text:
            "Organisé, je planifie mes tâches à l'avance pour anticiper la suite",
          cols: 2,
          order: 5
        }
      ]
    };
  }
};
</script>

<style lang="scss">
#resume {
  height: 100%;
}

h3 {
  font-family: "Merriweather", serif;
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
</style>