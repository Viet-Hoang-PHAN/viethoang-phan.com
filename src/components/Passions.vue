<template>
  <div id="passions">
    <v-container>
      <v-layout wrap>
        <v-col cols="12">
          <h3 class="display-2 my-6">Mes passions ?</h3>
        </v-col>
        <v-col v-for="(passion, index) in passions" :key="index" cols="4">
          <v-row justify="center">
            <h4 class="display-1 passion-text">{{passion.text}}</h4>
            <v-img
              :src="passion.imgLink"
              height="300px"
              width="300px"
              contain
              class="passion-images"
            ></v-img>
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
          text: "La cuisine",
          imgLink: require("../assets/cutting_board.svg")
        },
        {
          text: "La culture japonaise",
          imgLink: require("../assets/japan.svg")
        },
        {
          text: "Les jeux vidéos",
          imgLink: require("../assets/master_sword.svg")
        }
      ]
    };
  }
};
</script>

<style lang="scss">
#passions {
  background-color: #bbdefb;
}

.passion-text {
  bottom: 0px;
  width: 300px;
  height: 300px;
  text-align: center;
}
.passion-images {
  position: absolute;
}
.passion-text:hover .passion-images {
  animation: slideLeft 1s;
}

@keyframes slideLeft {
  100% {
    left: 0;
  }
}
</style>