<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-form @keyup.native.enter="attemptLogin">
          <v-text-field
            v-model="account.email"
            label="Email"
            name="email"
            prepend-icon="mdi-account"
            type="text"
          />
          <v-text-field
            v-model="account.password"
            label="Password"
            name="password"
            prepend-icon="mdi-lock"
            type="password"
          />
          <v-btn class="float-right" color="primary" @click="attemptLogin">
            Login
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    account: {
      email: '',
      password: ''
    }
  }
  ),
  mounted() {

    this.$store.dispatch('auth/toggleLoggingOut', false);
  },
  methods: {
    async attemptLogin() {

      await this.$store.dispatch('auth/login', this.account)
        .then(() => this.$router.replace('/'))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>

</style>
