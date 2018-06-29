<template>
  <section class="ctn-general ctn-panier">
    <section class="ctn-entete">
      <article>
        <router-link to="">Burger</router-link>
        <span> > </span>
        <router-link to="">Boissons & Dessert</router-link>
      </article>
    </section>
    <b-container>
      <b-row>
        <b-col md="4">
          <h1>Votre Burger :<span> 9€</span></h1>
          <section class="ctn-burger">
            <section class="ingredients" v-for="element in loadedBurger.resultPain">
              <article class="ingredient ingredient-pain">
                <img v-bind:src="element.src" alt="loadedBurger.resultPain.name">
              </article>
              <p>{{element.name}}</p>
            </section>
            <section class="ingredients" v-for="element in loadedBurger.resultCondiment1">
              <article class="ingredient ingredient-condiment">
                <img v-bind:src="element.src" alt="loadedBurger.resultCondiment1.name">
              </article>
              <p>{{element.name}}</p>
            </section>
            <section class="ingredients" v-for="element in loadedBurger.resultProteines">
              <article class="ingredient ingredient-proteine">
                <img v-bind:src="element.src" alt="loadedBurger.resultProteines.name">
              </article>
              <p>{{element.name}}</p>
            </section>
            <section class="ingredients" v-for="element in loadedBurger.resultCondiment2">
              <article class="ingredient ingredient-condiment">
                <img v-bind:src="element.src" alt="loadedBurger.resultCondiment2.name">
              </article>
              <p>{{element.name}}</p>
            </section>
            <section class="ingredients" v-for="element in loadedBurger.resultCondiment3">
              <article class="ingredient ingredient-condiment">
                <img v-bind:src="element.src" alt="loadedBurger.resultCondiment3.name">
              </article>
              <p>{{element.name}}</p>
            </section>
            <section class="ingredients" v-for="element in loadedBurger.resultPain">
              <article class="ingredient ingredient-pain2">
                <img v-bind:src="element.src" alt="loadedBurger.resultPain.name">
              </article>
              <p>{{element.name}}</p>

            </section>
          </section>
        </b-col>
        <b-col md="8">
          <b-tabs id="tab-boisson">
            <b-tab title="Boissons" active id="tab-boisson2">
              <section class="ctn-tabs-panier ctn-tabs">
                hello
              </section>
            </b-tab>
            <b-tab title="Dessert">
              <section class="ctn-tabs-panier ctn-tabs">
                CAVA
              </section>
            </b-tab>
          </b-tabs>
          <p class="price_boisson_dessert">Votre boissons : 1.50€ / Dessert : 3.00€</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12">
          <h2 class="title_panier">Choisissez votre boisson ou votre dessert
            en glissant chacun des élements dans le panier</h2>
          <section class="ctn-bloc-panier ctn-tabs-panier">
            <section class="title_panier_bloc">
              <img src="../assets/panier/panier_icon.svg"/>
              <p>Panier</p>
            </section>
            <section class="ctn-global">
              <section class="ctn-burger">
                <article class="ingredient ingredient-pain" v-for="element in loadedPanier.burger.resultPain">
                  <img v-bind:src="element.src" alt="loadedBurger.resultPain.name">
                </article>
                <article class="ingredient ingredient-condiment"
                         v-for="element in loadedPanier.burger.resultCondiment1">
                  <img v-bind:src="element.src" alt="loadedBurger.resultCondiment1.name">
                </article>
                <article class="ingredient ingredient-proteine" v-for="element in loadedPanier.burger.resultProteines">
                  <img v-bind:src="element.src" alt="loadedBurger.resultProteines.name">
                </article>
                <article class="ingredient ingredient-condiment"
                         v-for="element in loadedPanier.burger.resultCondiment2">
                  <img v-bind:src="element.src" alt="loadedBurger.resultCondiment2.name">
                </article>
                <article class="ingredient ingredient-condiment"
                         v-for="element in loadedPanier.burger.resultCondiment3">
                  <img v-bind:src="element.src" alt="loadedBurger.resultCondiment3.name">
                </article>
                <article class="ingredient ingredient-pain2" v-for="element in loadedPanier.burger.resultPain">
                  <img v-bind:src="element.src" alt="loadedBurger.resultPain.name">
                </article>
              </section>
            </section>
            <section class="price_validate">
              <div>{{loadedPanier.price}}€ TTC</div>
              <router-link to="" tag="button" class="btn-perso">Valider</router-link>
            </section>
          </section>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
  import draggable from 'vuedraggable'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "Panier",
    data() {
      return {
        tabIndex: 0
      }
    },
    computed: {
      ...mapGetters([
        'loadedBurger',
        'loadedPanier'
      ])
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  @import "../variables";

  .ctn-panier {
    height: calc(100vh - 140px);
    background-image: url("../assets/panier/desserts.jpg");
    background-position: center 70%;
    background-size: cover;
  }

  .ctn-burger {
    width: 100%;
    .ingredients {
      width: 100%;
      display: flex;
      align-items: center;
      p {
        margin-bottom: 0;
        color: $blue;
        margin-left: 15px;
        font-size: 1.3em;
      }
    }
    .ingredient {
      width: 40%;
      overflow: hidden;
      margin-bottom: 3px;
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

  h1 {
    color: $blue;
    font-weight: bold;
    text-align: left;
    font-size: 2.5em;
    margin-bottom: 10px;
    span {
      color: white;
      font-family: 'Gotham-Medium';
    }
  }

  .price_boisson_dessert {
    font-weight: bold;
    color: white;
    text-align: left;
  }

  .ctn-tabs {
    height: 145px;
  }

  .ctn-tabs-panier {
    width: 100%;
    background: #fff5de;
    background: -moz-radial-gradient(center, ellipse cover, #fff5de 0%, #ffe6aa 100%);
    background: -webkit-radial-gradient(center, ellipse cover, #fff5de 0%, #ffe6aa 100%);
    background: radial-gradient(ellipse at center, #fff5de 0%, #ffe6aa 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5de', endColorstr='#ffe6aa', GradientType=1);
    box-shadow: 0 1px 20px #00000021;
  }

  .ctn-bloc-panier {
    height: 220px;
    display: flex;
    flex-direction: column;
    .title_panier_bloc {
      display: flex;
      width: auto;
      align-items: center;
      width: 180px;
      margin: 0 auto;
      justify-content: center;
      top: -11px;
      position: relative;
      color: white;
      background-color: #ffc107;
      font-weight: bold;
      font-size: 1.5em;
      padding: 5px 0px;
      p {
        margin-bottom: 0;
      }
      img {
        width: 40px;
        margin-right: 5px;
      }
    }
    .ctn-global {
      display: flex;
      align-items: center;
      justify-content: center;
      .ctn-burger {
        width: 11%;
        .ingredient {
          width: 100%;
          margin-bottom: 6px;

        }
        .ingredient-pain {
          height: 20.5px
        }
        .ingredient-condiment {
          height: 10px;
        }
        .ingredient-proteine {
          height: 16px;
        }
        .ingredient-pain2 {
          height: 15px;
        }
      }
    }
  }

  .ctn-entete {
    position: relative;
    .title_create_burger {
      font-size: 2em;
      font-weight: bold;
      color: white;
      text-align: center;
      width: 51%;
      margin: 0 auto;
    }
    article {
      margin-bottom: 15px;
      font-size: 1.2em;
      color: white;
      a {
        color: white;
      }
      a:last-child {
        color: $blue;
      }
    }
  }

  .title_panier {
    color: $blue;
    font-size: 1.8em;
    margin: 20px auto;
  }

  .price_validate {
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      font-size: 1.5em;
      color: white;
      padding: 10px;
      background-color: $yellow;
      margin-right: 10px;
      font-weight: bold;
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
  }


</style>
