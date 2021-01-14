<template>
  <v-app>
    <template v-if="$store.state.auth.token">
      <navigation :drawer="drawer" />
      <layout-header :drawer="drawer" @toggleDrawer="drawer = !drawer" />
      <v-main v-if="!$store.state.auth.loggingOut">
        <router-view />
      </v-main>
      <layout-footer />
    </template>
    <template v-else>
      <v-main v-if="!$store.state.auth.loggingOut">
        <router-view />
      </v-main>
    </template>
  </v-app>
</template>

<script>
import Navigation from '@/components/layout/navigation';
import LayoutHeader from '@/components/layout/layout-header';
import LayoutFooter from '@/components/layout/layout-footer';

export default {
  name: 'App',

  components: {
    'navigation' : Navigation,
    'layout-header': LayoutHeader,
    'layout-footer': LayoutFooter,
  },

  data: () => ({
    drawer: false
  }),
};
</script>
