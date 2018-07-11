<template>
  <section class="ctn-general ctn-panier">
    <section class="ctn-entete">
      <article>
        <router-link to="">Burger</router-link>
        <span> > </span>
        <router-link to="">Boissons & Dessert</router-link>
      </article>
    </section>
    <b-container>
      <b-row>
        <b-col lg="6" md="12">
          <h1>Votre Burger :<span> 9€</span></h1>
          <section class="ctn-burger">
            <section class="ingredients" v-for="element in loadedBurger.resultPain">
              <article class="ingredient ingredient-pain">
                <img v-bind:src="element.src" alt="loadedBurger.resultPain.name">
              </article>
              <p>{{element.name}}</p>
            </section>
            <section class="ingredients" v-for="element in loadedBurger.resultCondiment1">
              <article class="ingredient ingredient-condiment">
                <img v-bind:src="element.src" alt="loadedBurger.resultCondiment1.name">
              </article>
              <p>{{element.name}}</p>
            </section>
            <section class="ingredients" v-for="element in loadedBurger.resultProteines">
              <article class="ingredient ingredient-proteine">
                <img v-bind:src="element.src" alt="loadedBurger.resultProteines.name">
              </article>
              <p>{{element.name}}</p>
            </section>
            <section class="ingredients" v-for="element in loadedBurger.resultCondiment2">
              <article class="ingredient ingredient-condiment">
                <img v-bind:src="element.src" alt="loadedBurger.resultCondiment2.name">
              </article>
              <p>{{element.name}}</p>
            </section>
            <section class="ingredients" v-for="element in loadedBurger.resultCondiment3">
              <article class="ingredient ingredient-condiment">
                <img v-bind:src="element.src" alt="loadedBurger.resultCondiment3.name">
              </article>
              <p>{{element.name}}</p>
            </section>
            <section class="ingredients" v-for="element in loadedBurger.resultPain">
              <article class="ingredient ingredient-pain2">
                <img v-bind:src="element.src" alt="loadedBurger.resultPain.name">
              </article>
              <p>{{element.name}}</p>
            </section>
          </section>
          <h2 class="title-res">Choisissez votre boisson et/ou votre dessert
            en glissant chacun des élements dans le panier</h2>
          <b-tabs id="tab-boisson">
            <p class="price_boisson_dessert">Votre boissons : 2.00€ / Dessert : 3.00€</p>

            <b-tab title="Boissons" active id="tab-boisson2">

              <section class="ctn-tabs-panier ctn-tabs ctn-tabs-boisson">
                <draggable class="list-group-item active"
                           element="section" v-model="boissons"
                           :options="dragOptions"
                           :move="onMove"
                           @start="isDragging=true"
                           @end="isDragging=false">
                  <transition-group type="transition" :name="'flip-list'">
                    <div v-for="element in boissons" :key="element.name" class="">
                      <img v-bind:src="element.src"/>
                      <p class="">{{element.name}}</p>
                    </div>
                  </transition-group>
                </draggable>
              </section>
            </b-tab>
            <b-tab title="Dessert">
              <section class="ctn-tabs-panier ctn-tabs ctn-tabs-dessert">
                <draggable class="list-group-item active"
                           element="section" v-model="desserts"
                           :options="dragOptions"
                           :move="onMove"
                           @start="isDragging=true"
                           @end="isDragging=false">
                  <transition-group type="transition" :name="'flip-list'">
                    <div v-for="element in desserts" :key="element.name" class="">
                      <img v-bind:src="element.src"/>
                      <p class="">{{element.name}}</p>
                    </div>
                  </transition-group>
                </draggable>
              </section>
            </b-tab>
          </b-tabs>
        </b-col>
        <b-col lg="6" md="12" class="ctn-panier-right">
          <h2 class="title_panier">Choisissez votre boisson et/ou votre dessert
            en glissant chacun des élements dans le panier</h2>
          <section class="ctn-bloc-panier ctn-tabs-panier">
            <section class="title_panier_bloc">
              <img src="../assets/panier/panier_icon.svg"/>
              <p>Panier</p>
            </section>
            <section class="ctn-global">
              <section class="ctn-burger">
                <article class="ingredient ingredient-pain" v-for="element in loadedPanier.burger.resultPain">
                  <img v-bind:src="element.src" alt="loadedBurger.resultPain.name">
                </article>
                <article class="ingredient ingredient-condiment"
                         v-for="element in loadedPanier.burger.resultCondiment1">
                  <img v-bind:src="element.src" alt="loadedBurger.resultCondiment1.name">
                </article>
                <article class="ingredient ingredient-proteine" v-for="element in loadedPanier.burger.resultProteines">
                  <img v-bind:src="element.src" alt="loadedBurger.resultProteines.name">
                </article>
                <article class="ingredient ingredient-condiment"
                         v-for="element in loadedPanier.burger.resultCondiment2">
                  <img v-bind:src="element.src" alt="loadedBurger.resultCondiment2.name">
                </article>
                <article class="ingredient ingredient-condiment"
                         v-for="element in loadedPanier.burger.resultCondiment3">
                  <img v-bind:src="element.src" alt="loadedBurger.resultCondiment3.name">
                </article>
                <article class="ingredient ingredient-pain2" v-for="element in loadedPanier.burger.resultPain">
                  <img v-bind:src="element.src" alt="loadedBurger.resultPain.name">
                </article>
              </section>
              <span class="plus">+</span>
              <section class="ctn-result-boisson">
                <span class="text-result" id="txt-boisson">Boisson</span>
                <button class="btn-change" @click="change"></button>
                <draggable class="list-group-item active"
                           element="section" v-model="resultBoissons"
                           :options="dragOptions2"
                           :move="onMove"
                           @start="isDragging=true"
                           @end="isDragging=false">
                  <transition-group type="transition" :name="'flip-list'">
                    <div v-for="element in resultBoissons" :key="element.name" ref="boissons" class="">
                      <img v-bind:src="element.src"/>
                      <p class="">{{element.name}}</p>
                    </div>
                  </transition-group>
                </draggable>
              </section>
              <span class="plus">+</span>
              <section class="ctn-result-dessert">
                <span class="text-result" id="txt-dessert">Dessert</span>
                <button class="btn-change" @click="change"></button>
                <draggable class="list-group-item active"
                           element="section" v-model="resultDesserts"
                           :options="dragOptions2"
                           :move="onMove"
                           @start="isDragging=true"
                           @end="isDragging=false">
                  <transition-group type="transition" :name="'flip-list'">
                    <div v-for="element in resultDesserts" ref="dessert" :key="element.name" class="">
                      <img v-bind:src="element.src"/>
                      <p class="">{{element.name}}</p>
                    </div>
                  </transition-group>
                </draggable>
              </section>
            </section>
            <section class="price_validate">
              <div>{{pricePanier}}€ TTC</div>
              <button @click="addPanierClick" class="btn-perso">Valider</button>
              <button @click="ignorePanierClick" class="btn-perso btn-ignorer">Passez ></button>
            </section>
          </section>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
  import draggable from 'vuedraggable'
  import {mapGetters, mapActions} from 'vuex'

  let boissons = 0,
    dessert = 0;

  export default {
    components: {
      draggable
    },
    name: "Panier",
    data() {
      return {
        key: "key",
        boissons: [],
        desserts: [],
        resultBoissons: [],
        resultDesserts: [],
        pricePanier: 0,
        editable: true,
        isDragging: false,
        delayedDragging: false
      }
    },
    mounted() {
      this.boissons = this.loadedBoissons
      this.desserts = this.loadedDesserts
      this.pricePanier = this.loadedPanier.price
    },
    computed: {
      ...mapGetters([
        'loadedBurger',
        'loadedPanier',
        'loadedBoissons',
        'loadedDesserts',
      ]),
      dragOptions() {
        return {
          animation: 0,
          group: 'description',
          disabled: !this.editable,
          ghostClass: 'ghost',
        };
      },
      dragOptions2() {
        return {
          animation: 0,
          group: 'description',
          disabled: !this.editable,
          ghostClass: 'ghost',
        };
      },
    },
    methods: {
      ...mapActions([
        'addPanier'
      ]),
      addPanierClick() {
        if (this.resultBoissons.length == 0) {
          this.resultBoissons = [{
            id: null
          }]
        }
        if (this.resultDesserts.length == 0) {
          this.resultDesserts = [{
            id: null
          }]
        }
        const payload = {
          boissons: this.resultBoissons[0],
          desserts: this.resultDesserts[0],
          price: this.pricePanier
        }
        this.addPanier(payload)
        this.$router.push("/recap_panier");
      },
      ignorePanierClick() {
        const payload = {
          price: this.pricePanier
        }
        this.addPanier(payload)
        this.$router.push("/recap_panier");
      },
      onMove({relatedContext, draggedContext}) {
        const relatedElement = relatedContext.element;
        const draggedElement = draggedContext.element;
        return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      },
      change(event) {
        var Vue = this
        console.log(this.pricePanier)
        event.path[1].classList.forEach(function (ctn) {
          if (ctn == "ctn-result-boisson" && boissons == 1) {
            Vue.pricePanier -= Vue.resultBoissons[0].price
            Vue.resultBoissons = []
            document.querySelector(".ctn-result-boisson .list-group-item span").innerHTML = ""
            Vue.boissons = Vue.loadedBoissons
            boissons = 0;
          }
          if (ctn == "ctn-result-dessert" && dessert == 1) {
            Vue.pricePanier -= Vue.resultDesserts[0].price
            Vue.resultDesserts = []
            document.querySelector(".ctn-result-dessert .list-group-item span").innerHTML = ""
            Vue.desserts = Vue.loadedDesserts
            dessert = 0;
          }
        })
      },
    },
    watch: {
      isDragging(newValue) {
        if (newValue) {
          this.delayedDragging = true
          return
        }
        this.$nextTick(() => {
          this.delayedDragging = false
          if (this.resultBoissons[1]) {
            alert("Veuillez ne mettre qu'un seul article")
            this.resultBoissons = []
            this.boissons = this.loadedBoissons
            document.querySelector("#txt-boisson").style.display = "block"

          }
          if (this.resultBoissons[0] && boissons == 0) {
            if (this.resultBoissons[0].type != 'boisson') {
              this.resultBoissons.splice(0, 1)
              this.desserts = this.loadedDesserts
            } else {
              boissons = 1;
              this.pricePanier += this.resultBoissons[0].price
              document.querySelector("#txt-boisson").style.display = "none"
            }
          }

          if (this.resultDesserts[1]) {
            alert("Veuillez ne mettre qu'un seul article")
            this.resultDesserts = []
            this.desserts = this.loadedDesserts
            document.querySelector("#txt-dessert").style.display = "block"

          }
          if (this.resultDesserts[0] && dessert == 0) {
            if (this.resultDesserts[0].type != 'dessert') {
              console.log("ok")
              this.resultDesserts.splice(0, 1)
              this.boissons = this.loadedBoissons
            } else {
              this.pricePanier += this.resultDesserts[0].price
              dessert = 1
              document.querySelector("#txt-dessert").style.display = "none"
              console.log(this.resultDesserts[0])
            }

          }
        })
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import "../variables";

  .ctn-panier {
    height: calc(100vh - 140px);
    background-image: url("../assets/panier/desserts.jpg");
    background-position: center 70%;
    background-size: cover;
    @media screen and (max-width: 767px) {
      height: auto;
    }
  }

  .title-res {
    display: none;
    color: $blue;
    font-size: 1.8em;
    margin: 20px auto;
    margin-top: 40px;
    @media screen and (max-width: 767px) {
      display: block;
    }
  }

  .ctn-burger {
    width: 100%;
    @media screen and (max-width: 767px) {
      order: 4;
    }
    .ingredients {
      width: 100%;
      display: flex;
      align-items: center;
      p {
        margin-bottom: 0;
        color: $blue;
        margin-left: 15px;
        font-size: 1.3em;
      }
    }
    .ingredient {
      width: 26%;
      overflow: hidden;
      margin-bottom: 3px;
      box-shadow: rgba(0, 0, 0, 0.2) 0 0 30px 1px;

      img {
        width: 100%;
      }
    }

    .ingredient-pain {
      height: 22px;
      border-radius: 60px 60px 20px 20px;
    }

    .ingredient-pain2 {
      height: 19px;
      border-radius: 20px 20px 60px 60px;
    }

    .ingredient-condiment {
      height: 13px;
      border-radius: 15px;
    }

    .ingredient-proteine {
      height: 20px;
      border-radius: 25px;
    }
  }

  h1 {
    color: $blue;
    font-weight: bold;
    text-align: left;
    font-size: 2.5em;
    margin-bottom: 10px;
    @media screen and (max-width: 767px) {
      margin-top: 10px;
    }
    span {
      color: white;
      font-family: 'Gotham-Medium';
    }
  }

  .price_boisson_dessert {
    font-weight: bold;
    color: white;
    text-align: left;
    margin-bottom: 0;
    font-size: 1.3em;
    position: absolute;
    top: 4%;
    right: 0;
    @media screen and (max-width: 767px) {
      top: auto;
      bottom: -25px;
    }
  }

  #tab-boisson {
    margin-top: 30px;
    position: relative;
    .nav-item {
      width: 50%;
    }
  }

  .ctn-tabs {
    height: 145px;
  }

  .ctn-panier-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 767px) {
      margin: 50px auto;
      flex-direction: column;
      .ctn-bloc-panier {
        height: auto;
      }
      .ctn-global {
        flex-direction: row-reverse;
        flex-wrap: wrap;
        height: auto !important;
      }
    }
  }

  .ctn-tabs-panier {
    width: 100%;
    background: #fff5de;
    background: -moz-radial-gradient(center, ellipse cover, #fff5de 0%, #ffe6aa 100%);
    background: -webkit-radial-gradient(center, ellipse cover, #fff5de 0%, #ffe6aa 100%);
    background: radial-gradient(ellipse at center, #fff5de 0%, #ffe6aa 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5de', endColorstr='#ffe6aa', GradientType=1);
    box-shadow: 0 1px 20px #00000021;
    .list-group-item {
      background-color: transparent;
      height: 100%;
      border: none;

      span {
        display: flex;
        align-items: center;
        height: 100%;
        div {
          width: 20%;
          height: 100%;
          @media screen and (max-width: 767px) {
            height: 75%;
            width: 33%;
          }

          color: $blue;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          p {
            margin-bottom: 0;
          }
        }
      }

    }
  }

  .ctn-tabs-boisson {
    img {
      height: 90%;
      margin-bottom: 3px;
    }
  }

  .ctn-tabs-dessert {
    img {
      width: 100%;
      height: auto;
    }
  }

  .ctn-bloc-panier {
    height: 220px;
    display: flex;
    flex-direction: column;
    .title_panier_bloc {
      display: flex;
      width: auto;
      align-items: center;
      width: 180px;
      margin: 0 auto;
      justify-content: center;
      top: -11px;
      position: relative;
      color: white;
      background-color: #ffc107;
      font-weight: bold;
      font-size: 1.5em;
      padding: 5px 0px;
      p {
        margin-bottom: 0;
      }
      img {
        width: 40px;
        margin-right: 5px;
      }
    }
    .ctn-global {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
      height: 52%;
      .ctn-burger {
        width: 20%;
        @media screen and (max-width: 767px) {
          width: 38%;
        }
        .ingredient {
          width: 100%;
          margin-bottom: 6px;

        }
        .ingredient-pain {
          height: 20.5px
        }
        .ingredient-condiment {
          height: 10px;
        }
        .ingredient-proteine {
          height: 16px;
        }
        .ingredient-pain2 {
          height: 15px;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .ctn-result-boisson {
      margin-right: 10px;
      order: 1;
    }
  }

  .ctn-result-dessert,
  .ctn-result-boisson {
    height: 100%;
    width: 23%;
    position: relative;
    z-index: 1;
    @media screen and (max-width: 767px) {
      width: 36%;
      height: 106px;
      margin-bottom: 10px;
    }

    .list-group-item {
      border: 3px dashed white;
      padding: 0;
      overflow: hidden;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      div {
        width: 100% !important;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          margin-bottom: 0 !important;
          height: 80% !important;
        }
      }
    }
    .text-result {
      position: absolute;
      top: 50%;
      left: 50%;
      color: $blue;
      font-weight: bold;
      font-size: 1.5em;
      transform: translateX(-50%) translateY(-50%);
    }
    p {
      display: none;
    }
  }

  .ctn-entete {
    position: relative;
    top: 1%;
    @media screen and (max-width: 767px) {
      display: none;
    }
    .title_create_burger {
      font-size: 2em;
      font-weight: bold;
      color: white;
      text-align: center;
      width: 51%;
      margin: 0 auto;
    }
    article {
      margin-bottom: 15px;
      font-size: 1.2em;
      color: white;
      a {
        color: white;
      }
      a:last-child {
        color: $blue;
      }
    }
  }

  .title_panier {
    color: $blue;
    font-size: 1.8em;
    margin: 20px auto;
    margin-top: 40px;
    @media screen and (max-width: 767px) {
      display: none;
    }
  }

  .price_validate {
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 767px) {
      margin-bottom: 15px;
      flex-wrap: wrap;
    }
    div {
      font-size: 1.5em;
      color: white;
      padding: 10px;
      background-color: $yellow;
      margin-right: 10px;
      font-weight: bold;
    }
    .btn-perso {
      margin: 0;
      border-color: $blue;
      color: $blue;
      padding: 7px 30px;
      &:hover {
        background-color: $blue;
        border-color: $blue;
        color: white;
      }
    }
    .btn-ignorer {
      position: absolute;
      right: 33px;
      border-color: #a9a6a6;
      color: #a9a6a6;
      @media screen and (max-width: 767px) {
        position: relative;
        right: 0;
        margin-top: 10px;
      }
      &:hover {
        background-color: #a9a6a6;
        border-color: #a9a6a6;
        color: white;
      }
    }
  }

  .plus {
    font-weight: bold;
    font-size: 4em;
    margin: 0px 10px;
    color: $blue;
    @media screen and (max-width: 767px) {
      display: none;
    }
  }

  .btn-change {
    position: absolute;
    right: -20%;
    top: -6%;
    border: solid 2px $blue;
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 25px;
    transition: background-color 0.5s;
    z-index: 99999;
    transform: rotate(-45deg);
    background-image: url("../assets/icones/change_bleu.svg");
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
    &:hover {
      background-image: url("../assets/icones/change.svg");
      background-color: $blue;
      border-color: $blue;

    }
  }


</style>
