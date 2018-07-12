<template>
  <div id="app">
    <Header/>
    <transition name="component-fade" mode="out-in">
      <router-view/>
    </transition>
    <Footer/>
    <section id="landscape" class="disabled-landscape">
      <p>Veuillez retourner puis recharger la page de votre téléphone pour une meilleure lisibilité ! ;-)</p>
    </section>
  </div>
</template>

<script>
  import Header from './components/Layout/Header'
  import Footer from './components/Layout/Footer'
  import VueAnchorRouterLink from 'vue-anchor-router-link'


  export default {
    components: {
      Header,
      Footer,
      VueAnchorRouterLink
    },
    mounted() {
      if (window.orientation == 90) {
        document.querySelector("#landscape").classList.remove("disabled-landscape")
        document.querySelector("#landscape").classList.add("active-landscape")
      } else {
        document.querySelector("#landscape").classList.remove("active-landscape")
        document.querySelector("#landscape").classList.add("disabled-landscape")
      }


    }
  }
</script>

<style lang="scss">
  /*COLOR*/
  @import "variables";

  /*TYPO*/
  @font-face {
    font-family: "Gotham-light";
    src: url("fonts/Gotham-Light.woff") format("woff");
  }

  @font-face {
    font-family: "Gotham-Medium";
    src: url("fonts/Gotham-Medium.woff") format("woff");
  }

  @font-face {
    font-family: "Gotham-Book";
    src: url("fonts/Gotham-Book.woff") format("woff");
  }

  @font-face {
    font-family: "Gotham-Bold";
    src: url("fonts/Gotham-Bold.woff") format("woff");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .disabled-landscape {
    display: none;
  }

  .active-landscape {
    display: block;
    position: absolute;
    background-color: $yellow;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 99999;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p {
      font-size: 2em;

      color: white;
    }
    img {
      width: 30%;
    }
  }

  h2 {
    font-family: 'Gotham-Medium';
    margin-bottom: 0;
    @media screen and (max-width: 767px) {
      font-size: 2.3em;
    }
  }

  body {
    font-size: 12px !important;
  }

  .btn-perso {
    width: auto;
    margin: 0 auto;
    padding: 15px 30px;
    font-size: 1.3em;
    font-family: 'Gotham-Medium';
    background-color: transparent;
    border: 2px solid $white;
    color: $white;
    cursor: pointer;
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    border-radius: 30px;
    transition: background-color 0.3s;
    text-decoration: none;
    &:hover, :active, :focus {
      color: white;
      border: $yellow 2px solid;
      background-color: $yellow;
      text-decoration: none;
    }
  }

  .btn-yellow {
    color: #FCBD22;
    border-color: $yellow;
  }

  /*BODY*/
  body {
    font-size: 12px;
  }

  .body-res {
    height: 100vh;
    overflow: hidden;
  }

  .ctn-general {
    top: 90px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    @media screen and (max-width: 767px) {
      top: 60px;
    }

  }

  #app {
    font-family: 'Gotham-Book';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #c8c8c8;
  }

  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }

  .component-fade-enter, .component-fade-leave-to
    /* .component-fade-leave-active avant la 2.1.8 */
  {
    opacity: 0;
  }

  .ctn-form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    h2 {
      color: $white;
    }
    form {
      display: flex;
      flex-direction: column;
      input {
        height: calc(70px - 20px);
        padding: 10px;
        background-color: transparent;
        border: none;
        border-bottom: $yellow solid 1px;
        color: $white;
        font-size: 1.3em;
        font-family: 'Gotham-Medium';
        &::placeholder {
          color: rgba(255, 255, 255, 0.8);
          font-family: 'Gotham-Book';
        }

      }
      textarea {
        height: calc(200px - 20px);
        padding: 10px;
        background-color: transparent;
        border: none;
        border-bottom: $yellow solid 1px;
        color: $white;
        font-size: 1.3em;
        &::placeholder {
          color: rgba(255, 255, 255, 0.8);
        }
        @media screen and (max-width: 767px) {
          height: calc(130px - 20px)
        }
      }
      button {
        margin-top: 20px;
      }
    }
  }



  .modal {
    height: 100vh;
    width: 100vw;
    .modal-content {
      background-color: #312783;
    }

    .modal-footer {
      border-top: 0px;
      display: none;
    }

    .btn-primary{
      border-radius: 20px;
      background-color: transparent;
      border: 1px solid $yellow;
      &:hover {
        background-color: $yellow;
      }
      &:active {
        background-color: $yellow !important;
        border-color: $yellow !important;
      }
      &:focus {
        box-shadow: 0 0 0 0.2rem rgba(252, 189, 34, 0.5);
      }
    }

    .btn-secondary{
      border-radius: 20px;
      background-color: transparent;
      border: 1px solid $grey;
      &:hover {
        background-color: $grey;
      }
      &:active {
        background-color: $grey !important;
        border-color: $grey !important;
      }
      &:focus {
        box-shadow: 0 0 0 0.2rem rgba(148, 145, 149, 0.5);
      }
    }

    .close {
      color: white;
    }

    .btn-perso {
      border-color: $yellow !important;
      border-radius: 40px;
      color: white !important;
      &:hover {
        background-color: $yellow !important;
      }
    }

    input{
      border-bottom-color: $yellow !important;
    }
  }


</style>
