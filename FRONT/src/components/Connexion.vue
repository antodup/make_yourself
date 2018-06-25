<template>
  <section class="ctn-general">
    <form @submit.prevent="testData">
      <input type="email" placeholder="Mail" name="mail" v-model="mail">
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
        mail: '',
        password: ''
      }
    },
  }
</script>

<style scoped>

</style>
