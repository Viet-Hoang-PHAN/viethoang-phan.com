<template>
  <div id="resume">
    <AboutMe />
    <Objective />
    <Experiences />
    <Skills />
    <Passions />
  </div>
</template>

<script>
import AboutMe from "../components/AboutMe";
import Objective from "../components/Objective";
import Experiences from "../components/Experiences";
import Skills from "../components/Skills";
import Passions from "../components/Passions"
export default {
  components: {
    AboutMe,
    Objective,
    Experiences,
    Skills,
    Passions
  }
};
</script>

<style lang="scss">

</style>