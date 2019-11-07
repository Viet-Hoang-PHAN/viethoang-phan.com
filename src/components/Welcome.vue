<template>
  <div id="welcome">
    <v-container class="d-flex justify-center align-center flex-wrap">
      <v-layout justify-center text-center wrap>
        <h2 id="welcome-message" class="display-3 ma-3">Envie d'en savoir plus sur moi ?</h2>
        <v-btn
          outlined
          large
          to="/mon-cv"
          color="white"
          class="ma-3"
          id="learn-more"
        >EN APPRENDRE PLUS</v-btn>
        <footer class="welcome-footer">
          <v-row>
            <v-col>
              <p>Tu peux aussi me suivre sur les réseaux sociaux et suivre mes travaux</p>
              <v-row>
                <v-col id="social-media-icon-list">
                  <LinkedInIcon class="icon-2x"/>
                  <GithubIcon class="icon-2x"/>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </footer>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import LinkedInIcon from "vue-material-design-icons/Linkedin.vue";
import GithubIcon from "vue-material-design-icons/GithubCircle.vue"
export default {
  components: {
    LinkedInIcon,
    GithubIcon
  }
};
</script>

<style lang="scss">
#welcome {
  position: fixed;
  height: 100vh;
  width: 100%;
  background: linear-gradient(1.6turn, #0288d1, #81d4fa);
}

#welcome-message {
  color: white;
  animation: slide 1.5s reverse;
  width: 100%;
}

#learn-more {
  animation: slide 2s reverse;
}

#social-media {
  top: 10%;
  display: inline-block;
}

footer > div {
  width: 300px;
  height: 100%;
}

.welcome-footer {
  top: 75vh;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding-top: 6%;
  visibility: hidden;
  display: flex;
  justify-content: center;
  background: linear-gradient(#01579b, #81d4fa);
  border-radius: 600px 600px 200px 200px;
  position: absolute;
  opacity: 0.5;
  animation: slide-up-footer 2s 1s;
  animation-fill-mode: forwards;
}

.container {
  z-index: 1;
  height: 100vh;
}

.material-design-icon.icon-2x {
  height: 2em;
  width:2em;
  margin-left: 10px;
  margin-right: 10px;
}
 
.material-design-icon.icon-2x > .material-design-icon__svg {
  height: 2em;
  width: 2em;
}

.material-design-icon.icon-2x > .material-design-icon__svg:hover {
  background-color: white;
  opacity: 0.4;
  border-radius: 10px;
  cursor: pointer;
}


.linkedin-icon {
  opacity: 0;
  animation: icon-slide 1.5s 2s;
  animation-fill-mode: forwards;
}

.github-circle-icon {
  opacity: 0;
  animation: icon-slide 1.5s 2.5s;
  animation-fill-mode: forwards;
}

@keyframes slide-up-footer {
  from {
    visibility: hidden;
    transform: translateY(75vh);
  }
  to {
    visibility: visible;
    transform: translateY(0);
  }
}

@keyframes slide {
  from {
    opacity: 0.8;
    top: 100%;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    top: 0%;
    transform: translateY(100%);
  }
}

@keyframes icon-slide {
  0% {
    transform: translateX(70%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>