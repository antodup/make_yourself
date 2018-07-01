<template>
  <div id="app">
    <Header/>
    <transition name="component-fade" mode="out-in">
      <router-view/>
    </transition>
    <Footer/>
  </div>
</template>

<script>
  import Header from './components/Layout/Header'
  import Footer from './components/Layout/Footer'

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /*COLOR*/
  @import "variables";

  /*TYPO*/
  @font-face {
    font-family: "Gotham-light ";
    src: url("../src/fonts/Gotham-light.otf") format("otf");
  }

  @font-face {
    font-family: "Gotham-lightItalic ";
    src: url("../src/fonts/Gotham-lightItalic.otf") format("otf");
  }

  @font-face {
    font-family: "Gotham-Medium";
    src: url("../src/fonts/Gotham-Medium.otf") format("otf");
  }

  @font-face {
    font-family: "Gotham-Book";
    src: url("../src/fonts/Gotham-Book.otf") format("otf");
  }

  @font-face {
    font-family: "Gotham-BookItalic";
    src: url("../src/fonts/Gotham-BookItalic.otf") format("otf");
  }

  @font-face {
    font-family: "Gotham-MediumItalic";
    src: url("../src/fonts/Gotham-MediumItalic.otf") format("otf");
  }

  @font-face {
    font-family: "Gotham-Bold";
    src: url("../src/fonts/Gotham-Bold.otf") format("otf");
  }

  @font-face {
    font-family: "Gotham-BoldItalic";
    src: url("../src/fonts/Gotham-BoldItalic.otf") format("otf");
  }

  h2 {
    font-family: 'Gotham-Medium';
    margin-bottom: 0;
    @media screen and (max-width: 767px) {
      font-size: 2.5em;
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

  .ctn-general {
    top: 90px;
    position: relative;
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
</style>
