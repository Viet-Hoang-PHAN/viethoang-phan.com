<template>
  <div id="resume">
    <v-container class="d-flex flex-wrap">
      <v-layout wrap>
        <v-row>
          <v-col>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, natus ab modi consequuntur quas tempora iste aliquid fugit eligendi nobis aperiam soluta voluptates, assumenda cumque adipisci, expedita quasi commodi totam.</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col></v-col>
          <v-col>
            <div
              class="about-me"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laudantium deserunt, assumenda ducimus, itaque dolorem nulla sapiente fuga obcaecati, temporibus commodi quos ipsam repellendus quo illo aut provident nam. Sunt.</div>
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss">
#resume {
  height: 100%;
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