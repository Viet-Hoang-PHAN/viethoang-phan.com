<template>
  <div id="resume">
    <AboutMe />
    <Objective />
    <Experiences />
    <Skills />
    <Passions />
    <Footer />
  </div>
</template>

<script>
import AboutMe from "../components/AboutMe";
import Objective from "../components/Objective";
import Experiences from "../components/Experiences";
import Skills from "../components/Skills";
import Passions from "../components/Passions";
import Footer from "../components/Footer";
export default {
  components: {
    AboutMe,
    Objective,
    Experiences,
    Skills,
    Passions,
    Footer
  }
};
</script>

<style lang="scss">

</style>