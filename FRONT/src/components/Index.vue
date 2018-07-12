<template>
  <section class="ctn-general">
    <section id="shop" class="shop section-home">
      <b-col md="12">
        <h2>Vos envies, Vos idées ! <br> Venez commander votre burger personnalisable !</h2>
        <router-link to="/commander" class="btn-perso btn-yellow">
          Commander !
        </router-link>
      </b-col>
    </section>
    <section id="about" class="about section-home">
      <b-container>
        <b-row>
          <b-col md="6" class="text-about">
            <h2>A propos de nous ! </h2>
            <p>Nous sommes parties du constat que vous, travailleur, à l’heure du déjeuner, vous mangez toujours la même
              chose et en plus dans un temps limité. <br><br>Alors Make Yourself c’est votre nouveau food-truck qui vous
              propose des burgers hyper-personnalisés avec des produits et des ingrédients frais en moins de 30 min ! </p>
          </b-col>
          <b-col md="6">
            <img src="../assets/home/toque.svg" alt="toque make yourself">
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section id="where" class="section-home where">
      <b-container>
        <b-col md="12">
          <h2>Où nous sommes ?</h2>
          <p>Venez nous décourvrir :<br><br>

            Le <span>Mardi</span> et <span>Jeudi</span> de <span>11h30</span> à <span>15h00</span><br>
            sur le <span>Parvis de la Défense</span> (en face de la tour EDF)<br><br>

            Le <span>Lundi</span> et <span>Vendredi</span> de <span>11h00</span> à <span>14h30</span><br>
            sur la <span>place Jacques Henri Lartigue</span> à <span>Issy les Moulineaux</span></p>
        </b-col>
      </b-container>
    </section>
    <section id="contact" class="section-home contact">
      <b-container>
        <b-row>
          <b-col md="6" class="text-about">
            <img src="../assets/home/toque-yellow.svg" alt="toque make yourself">
          </b-col>
          <b-col md="6" class="ctn-form">
            <h2>Besoin d'un renseignement ? <br>Contacter nous !</h2>
            <form @submit.prevent="testData">
              <input type="text" placeholder="Nom" name="lastname" v-model="lastname">
              <input type="text" placeholder="Prénom" name="firstname" v-model="firstname">
              <input type="email" placeholder="Votre e-mail : makeyourself@domaine.com" name="Email" v-model="email">
              <textarea placeholder="Votre message" v-model="message"></textarea>
              <button class="btn-perso" type="submit">Envoyer</button>
            </form>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </section>
</template>

<script>
  import Vuex from 'vuex'

  export default {
    data() {
      return {
        lastname: '',
        firstname: '',
        email: '',
        message: ''
      }
    },
    methods: {
      testData() {
        this.$http.post('https://make-yourself.tk/test', {
          lastname: this.lastname,
          firstname: this.firstname,
          email: this.email,
          message: this.message
        })
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../variables";

  .section-home {
    width: 100%;
    height: calc(100vh - 90px);

  }

  .shop {
    background-image: url("../assets/home/partie1-burger.jpg");
    background-size: cover;
    background-position: right 28%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 90px;
    @media screen and (max-width: 767px) {
      top: 60px;
    }
      div {
      background-color: rgba(0, 0, 0, 0.54);
      padding: 20px;
      h2 {
        font-family: 'Gotham-Medium';
        color: $white;
        margin-bottom: 25px;
      }
    }
  }

  .about {
    background: radial-gradient($yellow, $yellow2);
    display: flex;
    align-items: center;
    overflow: hidden;
    @media screen and (max-width: 767px) {
      height: auto;
      padding: 15px;
    }
    .text-about {
      display: flex;
      flex-direction: column;
      justify-content: center;
      h2 {
        color: $blue;
        margin-bottom: 10px;
      }
      p {
        color: $white;
        font-size: 1.3em;
        font-family: 'Gotham-Medium';
      }
    }

    img {
      width: 100%;
      left: 30%;
      top: 10%;
      position: relative;
      transform: rotate(-10deg);
      @media screen and (max-width: 767px) {
        display: none;
      }
    }
    div {
      text-align: left;
    }
  }

  .where {
    background-image: url("../assets/home/partie2-where.jpg");
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $white;
    h2 {
      color: $yellow;
    }
    p {
      font-size: 1.7em;
      font-family: 'Gotham-Book';
      margin-bottom: 0;
      span {
        font-family: 'Gotham-Medium';
      }
    }
  }

  .contact {
    background: radial-gradient($blue, $blue2);
    overflow: hidden;
    display: flex;
    align-items: center;
    overflow: hidden;
    div {
      img {
        width: 100%;
        right: 30%;
        top: -5%;
        position: relative;
        transform: rotate(10deg);
        @media all and (max-width: 767px) {
          display: none;
        }
      }
    }
  }
</style>
