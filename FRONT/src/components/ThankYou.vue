<template>
  <section class="ctn-general ctn-thankyou">
    <h1>Merci pour votre commande !<br> Elle sera prête d'ici 30 min !</h1>
    <p>N'oubliez pas de venir la chercher à notre food truck sur le parvis de la défense </p>
    <a href="/" class="btn-perso">Retournez à l'accueil</a>
  </section>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "ThankYou",
    methods : {
      ...mapActions [(
        'clearstate'
      )]
    }
  }
</script>

<style lang="scss" scoped>
  @import "../variables";

  .ctn-thankyou {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh - 140px);
    color: white;
    background-color: $yellow;
    background-image: url("../assets/payment.png");
    background-size: 100%;
    background-position: center;
    h1 {
      font-family: 'Gotham-Bold';
      color: $blue;
    }
    p {
      width: 40%;
      margin: 20px auto;
      font-size: 1.5em;
    }
  }

  .btn-perso {
    margin: 0;
    border-color: $blue;
    color: $blue;
    margin: 20px auto;
    &:hover {
      background-color: $blue;
      border-color: $blue;
      color: white;
    }
  }
</style>
