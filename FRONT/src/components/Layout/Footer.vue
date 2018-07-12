<template>
    <footer>
      <b-container>
        <b-row>
          <b-col md="12">
            <router-link to="/mention_legales">Mention légales</router-link>
            <router-link to="/condition_general">Conditions générales de ventes</router-link>
          </b-col>
        </b-row>
      </b-container>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss" scoped>
  @import "../../variables";

  footer {
    height: 50px;
    padding: 10px;
    top: 90px;
    position: relative;
    display: flex;
    background-color: #efefefef;
    @media screen and (max-width: 767px) {
      top: 60px;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 767px){
        flex-direction: column;
      }
      a {
        color: $blue;
        margin-right: 15px;
        -webkit-transition: color 0.5s;
        -moz-transition: color 0.5s;
        -ms-transition: color 0.5s;
        -o-transition: color 0.5s;
        transition: color 0.5s;
        &:last-child{
          margin-right: 0;
        }
        &:hover {
          color: $yellow;
        }
      }
    }
  }
</style>
