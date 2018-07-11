<template>
  <section class="ctn-general ctn-form">
    <b-col md="12">
      <form @submit.prevent="sendRegister">
        <h1>Pas encore inscrit ?</h1>
        <section class="ctn-name">
          <input type="text" placeholder="Nom" name="lastname" v-model="lastname" required>
          <input type="text" placeholder="Prénom" name="firstname" v-model="firstname" required>
        </section>
        <input type="text" placeholder="Votre N° de téléphone" name="phone" v-model="phone" required>
        <input id="mail" type="email" placeholder="Votre e-mail : makeyourself@domaine.com" name="Email" v-model="email" required>
        <div class="error-co" v-if="error == 'mail-idem'"><img src="../assets/icones/warning.svg" alt="warning error"/>Votre identifiant existe déjà</div>
        <input id="password" type="password" placeholder="Votre Mot de passe" name="Password" v-model="password" required/>
        <div class="error-co" v-if="error == 'same-password'"><img src="../assets/icones/warning.svg" alt="warning error"/>Attention votre mot de passe n'est pas le même</div>
        <input id="password1" type="password" placeholder="Confirmez votre Mot de passe" name="Confpassword" v-model="confPassword"
               required/>
        <div class="error-co" v-if="error == 'same-password'"><img src="../assets/icones/warning.svg" alt="warning error"/>Attention votre mot de passe n'est pas le même</div>

        <button type="submit" class="btn-perso">Valider</button>
      </form>
    </b-col>
  </section>
</template>

<script>
  export default {
    name: "Inscription",
    data() {
      return {
        error: '',
        lastname: '',
        firstname: '',
        phone: '',
        email: '',
        password: '',
        confPassword: ''
      }
    },
    methods: {
      sendRegister() {
        if (this.password == this.confPassword) {
          this.$http.post('http://localhost:3000/registration', {
            lastname: this.lastname,
            firstname: this.firstname,
            phone: this.phone,
            email: this.email,
            password: this.password,
          })
            .then((response) => {
              console.log(response)
              if (response.data == "mail-idem") {
                this.error = response.data;
                document.querySelector("#mail").classList.add('error-input')
              } else {
                this.$router.push('/connexion')
              }
            })
            .catch((error) => {
              console.log(error)
            })
        } else {
          this.error = 'same-password'
          document.querySelector("#password").classList.add('error-input')
          document.querySelector("#password1").classList.add('error-input')
        }
      },
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
    .ctn-name {
      display: flex;
      justify-content: space-between;
      input {
        width: 48%;
      }
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
      margin-bottom: 0;
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
