<template>
  <section class="ctn-general ctn-form">
    <b-col md="12">
      <form @submit.prevent="connexion_account">
        <h1>Avant de payer<br> Connectez vous !</h1>
        <input id="mail" type="email" placeholder="Mail" name="mail" v-model="email" required>
        <div class="error-co" v-if="error == 'mail'"><img src="../assets/icones/warning.svg" alt="warning error"/>Votre
          identifiant est incorrect
        </div>
        <input id="password" type="password" placeholder="Mot de passe" name="password" v-model="password" required>
        <div class="error-co" v-if="error == 'password'"><img src="../assets/icones/warning.svg" alt="warning error"/>Votre
          mot de passe est incorrect
        </div>
        <button type="submit" class="btn-perso">Connexion</button>
        <p class="txt-form">Vous n'avez pas de compte ?
          <router-link to="/inscription" tag="a">Inscrivez vous ici !</router-link>
        </p>
      </form>
    </b-col>
  </section>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "Connexion",
    data() {
      return {
        email: '',
        password: '',
        error: '',
        user: ''
      }
    },
    computed: {
      ...mapGetters([
        'loadedPanier',
      ]),
    },
    methods: {
      ...mapActions([
        'userSession'
      ]),
      connexion_account() {
        this.$http.post('https://make-yourself.tk/connexion', {
          email: this.email,
          password: this.password,
          panier: this.loadedPanier
        })
          .then((response) => {
            console.log(response)
            if (response.data == "mail" || response.data == "password") {
              if (response.data == "mail") {
                this.error = "mail"
                document.querySelector("#mail").classList.add('error-input')
              }
              if (response.data == "password") {
                this.error = "password"
                document.querySelector("#password").classList.add('error-input')
              }
            } else {
              this.user = response.data
              const payload = this.user
              this.userSession(payload)
              this.$router.push('/payment')
            }
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../variables";

  .ctn-form {
    height: calc(100vh - 140px);
    background-image: url("../assets/commander/background-burger.jpg");
    background-size: 120%;
    background-position: right top;
    h1 {
      color: $blue;
      font-family: 'Gotham-Bold';
    }
    form {
      width: 40%;
      top: 50%;
      left: 50%;
      position: relative;
      transform: translateY(-50%) translateX(-50%);
      input {
        border-bottom-color: $blue;
        margin-bottom: 20px;
        &::placeholder {
          color: rgba(255, 255, 255, 1);
          font-family: 'Gotham-Book';
        }
      }
      .txt-form {
        color: white;
        font-size: 1.3em;
        font-family: 'Gotham-Book';
        a {
          color: white;
          transition: color 0.2s;
          &:hover {
            color: $blue;
          }
        }
      }
    }
    .btn-perso {
      margin: 0;
      border-color: $blue;
      color: $blue;
      padding: 7px 30px;
      width: 150px;
      margin: 20px auto;
      &:hover {
        background-color: $blue;
        border-color: $blue;
        color: white;
      }
    }
  }

  .error-co {
    color: red;
    font-family: 'Gotham-Bold';
    text-align: left;
    margin-top: -20px;
    display: flex;
    align-items: center;
    img {
      height: 25px;
    }
  }

  .error-input {
    border-bottom-color: red !important;
  }

</style>
