<template>
<div id="resume">
  <AboutMe />
  <Objective />
  <Experiences />
</div>
</template>

<script>
import AboutMe from "../components/AboutMe";
import Objective from "../components/Objective";
import Experiences from '../components/Experiences'
export default {
    components: {
        AboutMe,
        Objective,
        Experiences
    }
}
</script>

<style lang="scss">
#resume {
    height: 100%;
}
</style>