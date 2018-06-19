<template>
  <header>
    <nav>
      <section id="menu-burger" @click="MenuBurger">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </section>
      <section id="ctn-burger" class="div-burger">
        <ul>
          <li>
            <a href="/#shop">Commander</a>
          </li>
          <li>
            <a href="/#about">A propos de nous</a>
          </li>
          <li>
            <a href="/#where">Où sommes nous ?</a>
          </li>
          <li>
            <a href="/#contact">Contactez nous !</a>
          </li>
        </ul>
      </section>
      <b-container>
        <b-row>
          <b-col md="5" class="ctn-left">
            <ul>
              <li>
                <a href="/#shop">Commander</a>
              </li>
              <li>
                <a href="/#about">A propos de nous</a>
              </li>
            </ul>
          </b-col>
          <b-col md="2">
            <h1><router-link to="/"><img src="../../assets/logo.svg" alt="Make YourSelf"></router-link></h1>
          </b-col>
          <b-col md="5" class="ctn-right">
            <ul>
              <li>
                <a href="/#where">Où sommes nous ?</a>
              </li>
              <li>
                <a href="/#contact">Contactez nous !</a>
              </li>
            </ul>
          </b-col>
          <p>{{loadedHeader}}</p>
        </b-row>
      </b-container>
    </nav>
  </header>
</template>
<script src="../JS%20file/main_front.js"></script>
<script>
  import Vuex from 'vuex'

  export default {
    name: "Header",
    data() {
      return {
        header : null,
      }
    },
    computed: {
      ...Vuex.mapGetters([
        'loadedHeader'
      ]),
    },
    methods: {
      /* todo : Faire la partie JS du responsive : Menu Burger */
      MenuBurger() {
        var menuBurger = document.querySelector("#menu-burger");
        menuBurger.addEventListener("click", function () {
          document.querySelector("#menu-burger").classList.toggle("change")
          document.querySelector("#ctn-burger").style.display = "block"
          if (menuBurger.classList[0] != "change") {
            document.querySelector("#ctn-burger").style.display = "none"
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../variables";
  /*Responsive*/
  .bar1, .bar2, .bar3 {
    width: 35px;
    height: 2px;
    background-color: #333;
    margin: 9px 0;
    transition: 0.4s;
    background-color: $yellow;
  }

  .change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
  }

  .change .bar2 {
    opacity: 0;
  }

  .change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }

  /*Desktop*/
  header {
    padding: 10px;
    box-shadow: 0 1px 20px #5f490a85;
    position: fixed;
    width: 100vw;
    background-color: $white;
    z-index: 99999;
    top: 0;
    nav {
      @media screen and (max-width: 767px) {
        display: flex;
        align-items: center;
      }
    }
    #menu-burger {
      display: none;
      @media screen and (max-width: 767px) {
        display: block;
      }
    }
    div {
      width: 100%;
      height: 70px;
      display: flex;
      align-items: center;
      @media screen and (max-width: 767px) {
        width: auto
      }
      h1 {
        width: 100%;
        @media screen and (max-width: 767px) {
          text-align: right;
          margin: 0;
        }
        img {
          height: 100%;

        }
      }
    }

    .div-burger {
      width: 0vw;
      display: none;
      @media screen and (max-width: 767px) {
        position: absolute;
        top: 90px;
        width: 100vw;
        left: 0;
        height: calc(100vh - 90px);
        background-color: $blue;
      }

    }
    .ctn-left {
      text-align: right;
      @media screen and (max-width: 767px) {
        display: none;
      }
    }
    .ctn-right {
      text-align: left;
      @media screen and (max-width: 767px) {
        display: none;
      }
    }
    ul {
      list-style: none;
      margin-bottom: 0;
      width: 100%;
      li {
        display: inline-block;
        margin-right: 15px;
        &:last-child {
          margin-right: 0;
        }
        a {
          color: $grey;
          font-family: 'Gotham-Medium';
          font-size: 1.3em;
          -webkit-transition: color 0.5s;
          -moz-transition: color 0.5s;
          -ms-transition: color 0.5s;
          -o-transition: color 0.5s;
          transition: color 0.5s;
          &:hover {
            color: $yellow;
            text-decoration: none;
          }
          @media screen and (max-width: 767px) {
            display: none;
          }
        }

      }
    }
  }
</style>
