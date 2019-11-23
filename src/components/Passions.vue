<template>
  <div id="passions">
    <v-container>
      <v-layout wrap>
        <v-col cols="12">
          <h3 class="display-1 my-6 font-weight-light" id="passion-title">Mes passions ?</h3>
        </v-col>
        <v-col v-for="(passion, index) in passions" :key="index" cols="12" md="4">
          <v-row justify="center" class="passion-container">
            <v-img
              :src="passion.imgLink"
              :height="sizeImg"
              :width="sizeImg"
              contain
              class="passion-images"
            ></v-img>
            <div class="passion-text">
            <h4 class="title">{{passion.title}}</h4>
            <p>{{passion.text}}</p>
            </div>
          </v-row>
        </v-col>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      passions: [
        {
          title: "La cuisine",
          text: "Notamment la cuisine française et asiatique",
          imgLink: require("../assets/cutting_board.svg"),
        },
        {
          title: "La culture japonaise",
          text: "Arts Martiaux, Animation, Manga, Traditions, Folklore etc...",
          imgLink: require("../assets/japan.svg"),
        },
        {
          title: "Les jeux vidéos",
          text: "Principalement MMORPG, RPG et J-RPG",
          imgLink: require("../assets/master_sword.svg"),
        }
      ]
    };
  },
  computed: {
    sizeImg () {
      const breakpoint = this.$vuetify.breakpoint;
      return breakpoint.xs ? "200px" : "300px"
    }
  }
};
</script>

<style lang="scss">
#passions {
  background-color: #bbdefb;
}

.passion-text {
  position: relative;
  top: 0;
  width: 300px;
  height: 100px;
  text-align: center;
  background-color: black;
  opacity: 0.6;
  color: white;
  transition: 1s ease-in-out;
}
.passion-container:hover .passion-text{
  top: -100px;
}

.passion-container {
  width: 300px;
  height: 300px;
  margin: auto;
  overflow: hidden;
}

#passion-title {
  color: black;
}

@media (max-width: 960px) {
  .passion-text {
    transition: none;
    top: -100px;
  }

  .passion-container {
  width: 200px;
  height: 200px;
}
}
</style>