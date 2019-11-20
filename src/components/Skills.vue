<template>
  <div id="skills">
    <v-container>
      <v-layout wrap>
        <v-col>
          <v-row id="skills-title" justify="center" align="center" class="my-6">
            <h3 class="display-2">Compétences</h3>
          </v-row>
          <v-row justify="center" align="start">
            <v-col cols="11" md="6" id="skills-container">
              <v-row v-for="(skill, index) in skills" :key="index" class="skills-percent">
                <v-col cols="3">
                  <div class="skill-name subtitle-2">{{skill.name}}</div>
                </v-col>
                <v-col cols="9" class="pr-10" align-self="center">
                  <v-progress-linear rounded height="20" :value="skill.value"></v-progress-linear>
                </v-col>
              </v-row>
            </v-col>
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
      skills: [
        { name: "HTML5", value: 80 },
        { name: "JavaScript", value: 70 },
        { name: "CSS3", value: 80 },
        { name: "Vue", value: 60 },
        { name: "Vuex", value: 60 },
        { name: "Vuetify", value: 85 },
        { name: "Webpack", value: 30 },
        { name: "Node.js", value: 50 },
        { name: "Express", value: 35 },
        { name: "Python", value: 40 },
        { name: "Django", value: 40 },
        { name: "PHP", value: 45},
        { name: "Symfony", value: 30},
        { name: "Java", value: 50},
        { name: "Android", value: 35},
        { name: "MongoDB", value: 30 },
        { name: "MySQL", value: 50 },
        { name: "AWS", value: 20 },
        { name: "Linux", value: 20},
        { name: "Git", value: 55}
      ]
    };
  }
};
</script>

<style>
#skills {
  background: url("../assets/cherry_blossom.svg") center no-repeat;
  background-size: cover;
}

#skills-title {
  text-align: center;
  margin: auto;
}

#skills-title > h3 {
  color: black;
}

#skills-container {
  background-color: rgba(255,255,255,0.6);
  border-radius: 3px;
  border: 1px solid white;
}

.skill-name {
  text-align: center;
}

</style>