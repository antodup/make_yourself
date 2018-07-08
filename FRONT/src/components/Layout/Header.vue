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
            <h1>
              <router-link to="/" v-on:click.native="changeHeaderHome"><img src="../../assets/logo.svg"
                                                                            alt="Make YourSelf"></router-link>
            </h1>
          </b-col>
          <b-col md="4" class="ctn-right">
            <ul>
              <li>
                <a href="/#where">Où sommes nous ?</a>
              </li>
              <li>
                <a href="/#contact">Contactez nous !</a>
              </li>
            </ul>
          </b-col>
          <b-col md="1" v-if="loadedHeader == 'commander'" v-model="loadedHeader" class="button-commander">
            <section>
              <img src="../../assets/icones/profile.svg" alt="profile">
              <p v-if="loadedSession">{{loadedSession.name}}</p>
            </section>
          </b-col>
        </b-row>
      </b-container>
      <section class="profile" style="display: none;">
        <ul>
          <li>
            <router-link to="connexion">Connexion</router-link>
          </li>
          <li>
            <router-link to="inscription">Inscription</router-link>
          </li>
          <li>
            <a @click="destroy_account">Deconnexion</a>
          </li>
        </ul>
      </section>
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
      },
      ...mapActions([
        'changeHeader',
        'clearState',
      ]),
      changeHeaderHome() {
        if (this.path == "/") {
          const payload = 'normal'
          this.changeHeader(payload)
        }
        const payload = 'clear'
        this.clearState(payload)
      },
      destroy_account() {
        this.$http.get('http://localhost:3000/logout')
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
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
