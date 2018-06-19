<template>
  <section class="ctn-general ctn-create">
    <b-container>
      <b-col>
        <h3>Bienvenue dans VOTRE espace de création, en cliquant sur « C’est parti ! » vous pourrez<br>
          créer votre burger et choisir si vous avez envie d’une boisson ou d’un dessert alors :</h3>
        <h2>Burger ? Burger et Boisson ? Peut-être Burger et Dessert ?<br>
          Ou encore mieux les 3 ! A vous de choisir ! </h2>
        <article class="picto-commerce">
          <img src="../assets/icones/burger.svg" alt="burger">
          <span>ET / OU</span>
          <img src="../assets/icones/boisson.svg" alt="boisson">
          <span>ET / OU</span>
          <img src="../assets/icones/dessert.svg" alt="dessert">
        </article>
        <router-link to="/creation_burger" class="btn-perso">C'est parti !</router-link>
      </b-col>
    </b-container>
  </section>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  @import "../variables";

  .ctn-create {
    height: calc(100vh - 140px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url("../assets/commander/background-burger.jpg");
    background-size: 120%;
    background-position: right top;
    h3 {
      color: $blue;
      font-size: 1.5em;
      margin-bottom: 20px;
    }
    h2 {
      margin-bottom: 15px;
      color: $white;
      font-size: 2.3em;
    }

    .picto-commerce {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      padding: 0 180px;
      margin: 50px 0px;
      span {
        font-size: 2.5em;
        color: $white;
        font-family: 'gotham-medium';
      }
      img:nth-child(1) {
        width: 20%;
      }
      img:nth-child(3) {
        bottom: 14px;
        position: relative;
      }
      img:nth-child(5) {
        width: 15%;
      }
    }

    .btn-perso {
      &:hover {
        background-color: $blue;
      }
    }
  }
</style>
