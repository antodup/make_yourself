<template>
  <section class="ctn-general">
    <form  @submit.prevent="purchase">
      <section ref="card"></section>
      <button type="submit">PAYER</button>
    </form>
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
    mounted: function () {
      card = elements.create('card', {style: style});
      card.mount(this.$refs.card);
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
            self.$http.post('http://localhost:3000/payment', {
              payment: result.token,
              panier : self.loadedPanier
            })
              .then((response) => {
                console.log(response)
              })
              .catch((error) => {
                console.log(error)
              })
            console.log(result.token)
          }
        });
      }
    },
  }
</script>

<style lang="scss" scoped>
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
