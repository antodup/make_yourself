<template>
  <section class="ctn-general">
    <form @submit.prevent="connexion_account">
      <input type="email" placeholder="Mail" name="mail" v-model="email">
      <input type="password" placeholder="mot de passe" name="password" v-model="password">
      <button type="submit">Connexion</button>
    </form>
  </section>
</template>

<script>
  export default {
    name: "Connexion",
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      connexion_account() {
        this.$http.post('http://localhost:3000/connexion', {
          email: this.email,
          password: this.password
        })
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  }
</script>

<style scoped>

</style>
