<template>
  <v-app>
    <headerMenu />
      <v-content>
        <nuxt />
      </v-content>
    <!--<footerMenu />-->
  </v-app>
</template>

<script>
import headerMenu from '~/components/layout/headerMenu.vue'
import footerMenu from '~/components/layout/footerMenu.vue'
export default {
  components: {
    headerMenu,
    footerMenu
  }
}
</script>
