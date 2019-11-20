<template>
  <div id="resume">
    <AboutMe />
    <Objective />
    <Experiences />
    <Skills />
  </div>
</template>

<script>
import AboutMe from "../components/AboutMe";
import Objective from "../components/Objective";
import Experiences from "../components/Experiences";
import Skills from "../components/Skills"
export default {
  components: {
    AboutMe,
    Objective,
    Experiences,
    Skills
  }
};
</script>

<style lang="scss">

</style>