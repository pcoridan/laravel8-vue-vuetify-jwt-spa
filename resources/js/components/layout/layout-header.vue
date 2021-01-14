<template>
  <v-app-bar app clipped-left>
    <v-app-bar-nav-icon @click.stop="toggleDrawer()" />

      <v-toolbar-title>App</v-toolbar-title>

    <v-spacer />
    <v-btn to="/settings" icon>
      <v-icon>mdi-cog</v-icon>
    </v-btn>
    <v-btn icon @click="logout()">
      <v-icon>mdi-power-standby</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'LayoutHeader',
  props: {
    drawer: Boolean
  },
  methods: {
    toggleDrawer() {

      this.$emit('toggleDrawer');
    },
    logout() {

      this.$store.dispatch('auth/toggleLoggingOut', true);
      this.$store.dispatch('auth/logout')
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>

</style>
