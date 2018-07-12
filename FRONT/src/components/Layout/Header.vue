<template>
  <header>
    <div @click="menu_burger" class="burger-menu">
      <div class="burger"></div>
      <div class="burger"></div>
      <div class="burger"></div>
    </div>
    <h1 class="ctn-logo-res">
      <router-link to="/" v-on:click.native="changeHeaderHome">
        <img src="../../assets/logo.svg" alt="Make YourSelf">
      </router-link>
    </h1>
    <nav>
      <b-container>
        <b-row>
          <b-col md="5" class="ctn-left">
            <ul>
              <li>
                <router-link to="/commander">Commander</router-link>
              </li>
              <li>
                <a href="#about">A propos de nous</a>
              </li>
            </ul>
          </b-col>
          <b-col md="2" class="ctn-logo">
            <h1>
              <router-link to="/" v-on:click.native="changeHeaderHome">
                <img src="../../assets/logo.svg" alt="Make YourSelf">
              </router-link>
            </h1>
          </b-col>
          <b-col md="5" class="ctn-right">
            <ul>
              <li>
                <a href="#where" >Où sommes nous ?</a>
              </li>
              <li>
                <a href="#contact" >Contactez nous !</a>
              </li>
            </ul>
          </b-col>
          <!--<b-col md="1" v-if="loadedHeader == 'commander'" v-model="loadedHeader" class="button-commander">
            <section @click="destroy_account">
              <img src="../../assets/icones/logout.svg" alt="profile">
              <p>Déconnexion</p>
            </section>
          </b-col>-->
        </b-row>
      </b-container>
    </nav>
  </header>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "Header",
    data() {
      return {
        path: window.location.pathname
      }
    },
    computed: {
      ...mapGetters([
        'loadedHeader',
        'loadedSession'
      ])
    },
    mounted() {
      this.loadedHeader
    },
    methods: {
      ...mapActions([
        'changeHeader',
        'clearState',
      ]),
      menu_burger(event) {
        event.path[1].classList.toggle("changeBurger");
        document.querySelector("nav").classList.toggle("content_burger")
        document.querySelector("body").classList.toggle("body-res")
      },
      changeHeaderHome() {
        if (this.path == "/") {
          const payload = 'normal'
          this.changeHeader(payload)
        }
        const payload = 'clear'
        this.clearState(payload)
      },
      destroy_account() {
        if (confirm("Etes vous sur de vouloir vous déconnecter et donc d'annuler la commande ?")) {
          this.$http.get('https://make-yourself.tk/logout')
            .then((response) => {
              console.log(response)
              window.location.href = 'https://make-yourself.tk/';
            })
            .catch((error) => {
              console.log(error)
            })
        } else {
          return
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../variables";

  /*Responsive*/

  .changeBurger .burger:first-child {
    -webkit-transform: rotate(-45deg) translate(-1px,13px);;
    transform: rotate(-45deg) translate(-1px,13px);;
  }

  .changeBurger .burger:nth-child(2) {
    opacity: 0;
  }

  .changeBurger .burger:last-child {
    -webkit-transform: rotate(45deg) translate(-4px,-17px);;
    transform: rotate(45deg) translate(-4px,-17px);;
  }

  .content_burger {
    opacity: 1;
    display: flex;
    top: 60px;
  }

  .burger-menu {
    display: none;
    @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;}
    width: 40px;
    height: 26px;
    .burger {
      width: 100%;
      height: 2px;
      background-color: $yellow;
      transition: 0.3s;
    }
  }

  /*Desktop*/
  header {
    padding: 10px;
    box-shadow: 0 1px 20px #5f490a85;
    position: fixed !important;
    width: 100vw;
    background-color: $white;
    z-index: 99999;
    top: 0;
    position: relative;
    @media screen and (max-width: 767px) {
      height: 60px;
      display: flex;
      align-items: center;
    }

    .ctn-logo-res {
      display: none;
      @media screen and (max-width: 767px) {
        display: block;
        margin-bottom: 0;
        width: 290px;
        img {
          width: 110px;
        }
      }
    }
    nav {
      @media screen and (max-width: 767px) {
        display: none;
        align-items: center;
        position: absolute;
        width: 100%;
        position: absolute;
        left: 0;
        height: 100vh;
        top: 90px;
        background-color: $blue;
        opacity: 0;
        transition: opacity 0.2s;
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
        .row {
          width: auto;
          height: auto;
        }
        width: 100%;
        height: 100%;
        .ctn-logo {
          display: none;
        }
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
    .ctn-left {
      text-align: right;
      @media screen and (max-width: 767px) {
        text-align: center;
        height: auto;
      }
    }
    .ctn-right {
      text-align: left;
      @media screen and (max-width: 767px) {
        text-align: center;
        height: auto;

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
        @media screen and (max-width: 767px) {
          display: block;
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
            color: white;
            font-size: 2em;
            line-height: 4em;
          }
          @media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
            font-size: 1.1em;
          }
        }
      }
    }
    .button-commander {
      display: flex;
      padding: 0;
      justify-content: space-around;
      section {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 40%;
        cursor: pointer;
        img {
          width: 84%;
          margin-bottom: 0px;
          height: 37px;
        }
        p {
          margin-bottom: 0;
          transition: color 0.5s;
          font-size: 0.9em;
        }
        &:hover {
          p {
            color: $blue;
          }
        }
        &:active {
          p {
            color: $blue;
          }
        }
      }
    }
    .profile {
      position: absolute;
      left: 85%;
      background-color: white;
      ul {
        display: block;

        li {
          display: block;
          margin: 0;
          padding: 15px;
          &:hover {
            background-color: $yellow;
            color: white;
          }
          a {
            font-size: 1.2em;
            font-family: 'Gotham-Book';
            &:hover {
              color: white;
            }
          }
        }
      }
    }
  }
</style>
