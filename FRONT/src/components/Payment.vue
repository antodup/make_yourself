<template>
  <section class="ctn-general ctn-payment">
    <b-container>
      <h1>Le montant de votre commande est de <span>{{infoUser.priceOrder}}€<sup>TTC</sup></span></h1>
      <section class="ctn-form">
        <form @submit.prevent="purchase">
          <h2>Mes informations</h2>
          <section class="input-left-right">
            <input type="text" value="" v-model="infoUser.firstname">
            <input type="text" v-model="infoUser.lastname">
          </section>
          <section class="input-left-right">
            <input type="text" v-model="infoUser.phone">
            <input type="text" v-model="infoUser.email">
          </section>
          <p class="txt-password" v-b-toggle.collapse1>Modifier mon mot de passe
            <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 25 45" style="enable-background:new 0 0 25 45;" xml:space="preserve">
            <title>Extra Bold Chevron Right</title>
            <desc>Created with Sketch.</desc>
            <g>
              <g>
                <path class="st0" d="M0.7,40.7c-1,1-1,2.6,0,3.5c1,1,2.6,1,3.5,0l20-20c1-1,1-2.6,0-3.5l-20-20c-1-1-2.6-1-3.5,0c-1,1-1,2.6,0,3.5
                  L19,22.5L0.7,40.7z"/>
              </g>
            </g>
            </svg>
          </p>
          <b-collapse id="collapse1" class="mt-2">
            <section class="input-left-right">
              <input type="password" placeholder="Nouveau mot de passe" v-model="newpassword"/>
              <input type="password" placeholder="Confirmer mon mot de passe" v-model="newConfirmpassword"/>
            </section>
          </b-collapse>
          <div v-if="error == 'password'">Vos mots de passe doivent être identiques</div>
          <h2>Paiement</h2>
          <section ref="payment"></section>
          <button type="submit" class="btn-perso">Valider mes informations et payer</button>
        </form>
      </section>
    </b-container>
  </section>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  let stripe = Stripe('pk_test_E50cOM2Z79H1Rc48yqeVbt53'),
    elements = stripe.elements(),
    card = undefined;

  let style = {
    base: {
      color: '#32325d',
      lineHeight: '18px',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  };
  export default {
    name: "Payment",
    data() {
      return {
        infoUser: {},
        newpassword: null,
        newConfirmpassword: null,
        error: ''
      }
    },
    mounted() {
      var vue = this
      card = elements.create('card', {style: style});
      card.mount(vue.$refs.payment);
      this.$http.get('https://make-yourself.tk/info-user')
        .then((response) => {
          console.log(response)
          this.infoUser = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    computed: {
      ...mapGetters([
        'loadedPanier',
      ]),
    },
    methods: {
      purchase() {
        let self = this;
        stripe.createToken(card).then(function (result) {
          if (result.error) {
            self.hasCardErrors = true;
            self.$forceUpdate(); // Forcing the DOM to update so the Stripe Element can update.
            return;
          } else {
            if (self.newpassword == self.newConfirmpassword) {
              self.$http.post('https://make-yourself.tk/payment', {
                payment: result.token,
                panier: self.loadedPanier,
                userInfo: self.infoUser,
                password: self.newConfirmpassword
              })
                .then((response) => {
                  console.log(response)
                })
                .catch((error) => {
                  console.log(error)
                })
              self.$router.push('/thankYou')
            } else {
              self.error = 'password'
            }
          }
        });
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "../variables";

  .ctn-payment {
    background-color: $yellow;
    height: calc(100vh - 140px);
    background-image: url("../assets/payment.png");
    background-size: 100%;
    background-position: center;
    .container {
      height: 100%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    h1 {
      font-size: 2.5em;
      color: $blue;
      font-weight: bold;
      margin-bottom: 0;
      span {
        color: white;
      }
    }
    h2 {
      font-family: 'Gotham-Book';
      margin: 20px 0px;
      font-size: 1.8em;
    }
  }

  .ctn-form {
    width: 50%;
    margin: 0 auto;
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
    .input-left-right {
      display: flex;
      align-items: center;
      justify-content: space-between;
      input {
        width: 48%;
      }
    }
    input {
      border-color: $blue;
    }
    .collapsed{
      svg {
      transform: rotate(0deg) !important;
      }
    }
    .txt-password {
      color: $blue;
      font-size: 1.4em;
      margin-top: 30px;
      margin-bottom: 0px;
      cursor: pointer;
      transition: color 0.2s;
      text-align: left;
      display: flex;
      align-items: center;
      svg {
        width: 10px;
        margin-left: 20px;
        transform: rotate(90deg);
        .st0 {
          fill: #312783;
        }
      }

      &:hover {
        color: white;
        svg  {
          .st0 {
            fill: white;
          }
        }
      }
    }
  }

  .StripeElement {
    background-color: white;
    height: 40px;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid transparent;
    box-shadow: 0 1px 3px 0 #e6ebf1;
    -webkit-transition: box-shadow 150ms ease;
    transition: box-shadow 150ms ease;
  }

  .StripeElement--focus {
    box-shadow: 0 1px 3px 0 #cfd7df;
  }

  .StripeElement--invalid {
    border-color: #fa755a;
  }

  .StripeElement--webkit-autofill {
    background-color: #fefde5 !important;
  }

</style>
