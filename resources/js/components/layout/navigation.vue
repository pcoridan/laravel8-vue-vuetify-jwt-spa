<template>
  <v-navigation-drawer v-model="drawer" app clipped>
    <v-list dense>
      <v-list-item to="/" link>
        <v-list-item-action>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    drawer: Boolean,
  }
};
</script>

<style scoped>

</style>
