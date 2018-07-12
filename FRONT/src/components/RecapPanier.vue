<template>
  <section class="ctn-general ctn-recap">
    <h1>Voici un p’tit récap’ de votre déjeuner !</h1>
    <section class="ctn-panier">
      <section class="ctn-burger">
        <section class="ingredients" v-for="element in loadedPanier.burger.resultPain">
          <article class="ingredient ingredient-pain">
            <img v-bind:src="element.src" alt="loadedBurger.resultPain.name">
          </article>
        </section>
        <section class="ingredients" v-for="element in loadedPanier.burger.resultCondiment1">
          <article class="ingredient ingredient-condiment">
            <img v-bind:src="element.src" alt="loadedBurger.resultCondiment1.name">
          </article>
        </section>
        <section class="ingredients" v-for="element in loadedPanier.burger.resultProteines">
          <article class="ingredient ingredient-proteine">
            <img v-bind:src="element.src" alt="loadedBurger.resultProteines.name">
          </article>
        </section>
        <section class="ingredients" v-for="element in loadedPanier.burger.resultCondiment2">
          <article class="ingredient ingredient-condiment">
            <img v-bind:src="element.src" alt="loadedBurger.resultCondiment2.name">
          </article>
        </section>
        <section class="ingredients" v-for="element in loadedPanier.burger.resultCondiment3">
          <article class="ingredient ingredient-condiment">
            <img v-bind:src="element.src" alt="loadedBurger.resultCondiment3.name">
          </article>
        </section>
        <section class="ingredients" v-for="element in loadedPanier.burger.resultPain">
          <article class="ingredient ingredient-pain2">
            <img v-bind:src="element.src" alt="loadedBurger.resultPain.name">
          </article>
        </section>
      </section>
      <span v-if="loadedPanier.boissons.id != null" class="txt-recap">+</span>
      <section v-if="loadedPanier.boissons.id != null" class="ctn-boissons">
        <img v-bind:src="loadedPanier.boissons.src" alt="">
      </section>
      <span v-if="loadedPanier.desserts.id != null" class="txt-recap">+</span>
      <section v-if="loadedPanier.desserts.id != null" class="ctn-desserts">
        <img v-bind:src="loadedPanier.desserts.src" alt="">
      </section>
      <span class="txt-recap">=</span>
      <span class="txt-recap">{{loadedPanier.price}}€<sup class="ttc">TTC</sup></span>
    </section>
    <h2>Votre Commande sera prête dans 30min !*</h2>
    <p>*Ceci est un temps estimé</p>
    <router-link to="/connexion" tag="button" class="btn-perso">COMMANDER</router-link>
  </section>

</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "RecapPanier",
    computed: {
      ...mapGetters([
        'loadedPanier'
      ]),
    }
  }
</script>

<style lang="scss" scoped>
  @import "../variables";

  .ctn-recap {
    height: calc(100vh - 140px);
    background-image: url("../assets/commander/background-burger.jpg");
    background-size: 120%;
    background-position: right top;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 767px){
      background-size: cover;
      height: calc(100vh - 100px);
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
      background-size: cover;
    }
    h1 {
      color: white;
      font-family: 'Gotham-Bold';
      font-size: 2.5em;
    }
    h2 {
      font-size: 1.8em;
      color: white;
      font-family: 'Gotham-Book';
    }
    p {
      color: white;
    }
  }

  .ctn-panier {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0px;
    @media screen and (max-width: 767px){
      flex-wrap: wrap;
      margin: 20px 0px;
    }
    .ctn-burger {
      width: 16%;
      @media screen and (max-width: 767px){
        width: 41%;
      }
      .ingredient {
        width: 100%;
        overflow: hidden;
        margin-bottom: 8px;
        box-shadow: rgba(0, 0, 0, 0.2) 0 0 30px 1px;

        img {
          width: 100%;
        }
      }

      .ingredient-pain {
        height: 22px;
        border-radius: 60px 60px 20px 20px;
      }

      .ingredient-pain2 {
        height: 19px;
        border-radius: 20px 20px 60px 60px;
      }

      .ingredient-condiment {
        height: 13px;
        border-radius: 15px;
      }

      .ingredient-proteine {
        height: 20px;
        border-radius: 25px;
      }
    }
    .ctn-desserts {
      width: 20%;
      @media screen and (max-width: 767px){
        width: 40%;
      }
      img {
        width: 100%;
      }
    }

    .ctn-boissons {
      width: 18%;
      img {
        width: auto;
        height: 170px;
      }
    }

    .txt-recap {
      font-size: 3em;
      font-family: 'gotham-bold';
      color: $blue;
      margin: 0 15px;
      &:last-child {
        margin-right: 0;
      }
    }
    .ttc {
      margin-left: 0;
      margin-right: 0;
    }

  }

  .btn-perso {
    margin: 0;
    border-color: $blue;
    color: $blue;
    padding: 7px 30px;
    &:hover {
      background-color: $blue;
      border-color: $blue;
      color: white;
    }
  }
</style>
