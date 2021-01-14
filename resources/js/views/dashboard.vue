<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
        Hello World!
      <v-btn
      @click="testAPI()"
      >TEST</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import Axios from '@/utils/axios';

export default {
  name: 'Dashboard',
  components: {
  },
  data: () => ({
  }),
  computed: {
  },
  watch: {
  },
  created() {
  },
  methods: {
    async testAPI () {

      try {
        const response = await Axios.post('/auth/me');
        console.log(response);
      }
      catch (error) {
        console.log(error);
      }
    }
  },
};
</script>

<style scoped>

</style>
