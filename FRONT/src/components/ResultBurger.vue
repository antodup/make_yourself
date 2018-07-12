<template>
  <section class="ctn-general ctn-result">
    <section class="ctn-entete">
      <article>
        <router-link to="">Burger</router-link>
        <span> > </span>
        <router-link to="">Boissons & Dessert</router-link>
      </article>
      <h1 class="title_create_burger">Et voilà votre burger !</h1>
    </section>
    <section class="ctn-burger">
      <article class="ingredient ingredient-pain" v-for="element in loadedBurger.resultPain">
        <img v-bind:src="element.src" alt="loadedBurger.resultPain.name">
      </article>
      <article class="ingredient ingredient-condiment" v-for="element in loadedBurger.resultCondiment1">
        <img v-bind:src="element.src" alt="loadedBurger.resultCondiment1.name">
      </article>
      <article class="ingredient ingredient-proteine" v-for="element in loadedBurger.resultProteines">
        <img v-bind:src="element.src" alt="loadedBurger.resultProteines.name">
      </article>
      <article class="ingredient ingredient-condiment" v-for="element in loadedBurger.resultCondiment2">
        <img v-bind:src="element.src" alt="loadedBurger.resultCondiment2.name">
      </article>
      <article class="ingredient ingredient-condiment" v-for="element in loadedBurger.resultCondiment3">
        <img v-bind:src="element.src" alt="loadedBurger.resultCondiment3.name">
      </article>
      <article class="ingredient ingredient-pain2" v-for="element in loadedBurger.resultPain">
        <img v-bind:src="element.src" alt="loadedBurger.resultPain.name">
      </article>
    </section>
    <section class="ctn-button">
      <a @click="modifyBurgerClick" class="btn-perso">< Précédent</a>
      <router-link to="/votre_panier" class="btn-perso">Suivant ></router-link>
    </section>
  </section>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "ResultBurger",
    computed: {
      ...mapGetters([
        'loadedBurger'
      ])
    },
    methods : {
      ...mapActions([
        'modifyBurger'
      ]),
      modifyBurgerClick() {
        const payload = "yes"
        this.modifyBurger(payload)
        this.$router.push("/creation_burger");

      }

    }
  }
</script>

<style lang="scss" scoped>
  @import "../variables";

  .ctn-result {
    height: calc(100vh - 140px);
    background-image: url("../assets/burger_creation/creation_burger_v2.png");
    background-position: center 55%;
    background-size: cover;
    @media screen and (max-width: 767px){
      background-position: center -7%;
      background-size: 275%;
      background-repeat: no-repeat;
    }
    @media screen and (max-width: 767px) {
      height: calc(100vh - 100px);
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
      background-position: center 53%;
      background-size: 134%;
    }
  }

  .ctn-burger {
    width: 30%;
    margin: 0 auto;
    padding-top: 41px;
    height: auto;
    @media screen and (max-width: 767px){
      width: 85%;
      padding-top: 57px;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
      width: 50%;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
      width: 40%;
    }
    .ingredient {
      width: 100%;
      overflow: hidden;
      margin-bottom: 11px;
      box-shadow: rgba(0, 0, 0, 0.2) 0 0 30px 1px;

      img {
        width: 100%;
      }
    }

    .ingredient-pain {
      height: 65px;
      border-radius: 60px 60px 20px 20px;

    }
    .ingredient-pain2 {
      height: 50px;
      border-radius: 20px 20px 60px 60px;
    }
    .ingredient-condiment {
      height: 30px;
      border-radius: 15px;
    }

    .ingredient-proteine {
      height: 50px;
      border-radius: 25px;
    }
  }
  .ctn-entete {
    top: 3%;
    position: relative;
    .title_create_burger {
      font-size: 2em;
      font-weight: bold;
      color: white;
      text-align: center;
      width: 100%;
      margin: 0 auto;
      @media screen and (max-width: 767px){
        width: 100%;
      }
    }
    article {
      margin-bottom: 15px;
      font-size: 1.2em;
      color: white;
      @media screen and (max-width: 767px){
        display: none;
      }
      a {
        color: white;
      }
      a:first-child {
        color: $blue;
      }
    }
  }

  .ctn-button {
    margin-top: 30px;
    color: white;
    a {
      margin-right: 15px;
      &:last-child {
        margin-right: 0;
      }
    }
    @media screen and (max-width: 767px){
    }
  }

</style>
