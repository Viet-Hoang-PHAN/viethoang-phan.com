<template>
  <div id="welcome">
    <v-container class="d-flex justify-center align-center flex-wrap">
      <v-layout justify-center text-center wrap>
        <h2 id="welcome-message" class="display-3 ma-3">Envie de me connaître ?</h2>
        <v-btn
          outlined
          large
          to="/mon-cv"
          color="white"
          class="ma-3"
          id="learn-more"
        >EN APPRENDRE PLUS</v-btn>
        <v-footer absolute color="#01579B">
          <v-row>
            <v-col>
              <p
                id="social-media-message"
              >Tu peux aussi me suivre sur les réseaux sociaux et voir mes travaux</p>
              <v-row>
                <v-col id="social-media-icon-list">
                  <a href="https://www.linkedin.com/in/viet-hoang-phan-750290183/" target="_blank">
                    <LinkedInIcon class="icon-2x"/>
                  </a>
                  <a href="https://github.com/Viet-Hoang-PHAN/" target="_blank">
                    <GithubIcon class="icon-2x"/>
                  </a>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-footer>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import LinkedInIcon from "vue-material-design-icons/Linkedin.vue";
import GithubIcon from "vue-material-design-icons/GithubCircle.vue";
export default {
  components: {
    LinkedInIcon,
    GithubIcon
  },

  data: () => {
    return {
      socialMediaLinks: [
        "https://www.linkedin.com/in/viet-hoang-phan-750290183/",
        "https://github.com/Viet-Hoang-PHAN/"
      ]
    }
  }
};
</script>

<style lang="scss">

.v-application a {
  text-decoration: none;
  color: white !important;
}
#welcome {
  height: 100%;
}

#welcome-message {
  color: white;
  animation: slide 1.5s reverse;
  width: 100%;
}

#learn-more {
  animation: slide 1.5s reverse;
}

#social-media-message {
  width: 50%;
  margin: auto;
  color: white;
  opacity: 0;
  animation: slide 1.3s 1.5s reverse;
  animation-fill-mode: forwards;
}

.v-footer {
  visibility: hidden;
  animation: slide-up-footer 1.5s 1s;
  animation-fill-mode: forwards;
}


.container {
  height: 100%;
}

.material-design-icon.icon-2x {
  height: 2em;
  width: 2em;
  margin-left: 10px;
  margin-right: 10px;
}

.material-design-icon.icon-2x > .material-design-icon__svg {
  height: 2em;
  width: 2em;
}

.material-design-icon.icon-2x > .material-design-icon__svg:hover {
  animation: light-zoom 1s;
  animation-fill-mode: forwards;
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
  0% {
    transform: translateY(100%);
    visibility: hidden;
  }
  100% {
    transform: translateY(0);
    visibility: visible;
  }
}

@keyframes slide {
  from {
    opacity: 0.8;
    transform: translateY(0);
  }
  to {
    opacity: 0;
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

@keyframes light-zoom {
    0% {
      transform: scale(1)
    }
    100% {
      transform:scale(1.2)
    }
  }
</style>