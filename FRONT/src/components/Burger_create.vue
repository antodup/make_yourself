<template>
  <section class="ctn-general ctn-burger-create">
    <b-container class="height100">
      <b-row class="height100">
        <!--COL-LEFT : INGREDIENT-->
        <b-col md="2" class="img-group-ingredient">
          <draggable class="list-group-item active ingredient-bread"
                     element="section" v-model="loadedIngredient.pains"
                     :options="dragOptions"
                     :move="onMove"
                     @start="isDragging=true"
                     @end="isDragging=false">
            <transition-group type="transition" :name="'flip-list'">
              <div v-for="element in loadedIngredient.pains"
                   v-bind:style="{ 'background-image': 'url(' + element.src + ')' }"
                   :key="element.name" class="">
                <p class="description-ingredient">{{element.name}}</p>
              </div>
            </transition-group>
          </draggable>

          <draggable class="list-group-item disabled ingredient-condiment"
                     element="section"
                     v-model="loadedIngredient.condiments"
                     :options="dragOptions"
                     :move="onMove"
                     @start="isDragging=true"
                     @end="isDragging=false">
            <transition-group type="transition" :name="'flip-list'">
              <div v-for="element in loadedIngredient.condiments"
                   v-bind:style="{ 'background-image': 'url(' + element.src + ')' }"
                   :key="element.name">
                <p class="description-ingredient">{{element.name}}</p>
              </div>
            </transition-group>
          </draggable>

          <draggable class="list-group-item disabled ingredient-proteine"
                     element="section"
                     v-model="loadedIngredient.proteines"
                     :options="dragOptions"
                     :move="onMove"
                     @start="isDragging=true" @end="isDragging=false">
            <transition-group type="transition" :name="'flip-list'">
              <div v-for="element in loadedIngredient.proteines"
                   v-bind:style="{ 'background-image': 'url(' + element.src + ')' }"
                   :key="element.name">
                <p class="description-ingredient">{{element.name}}</p>
              </div>
            </transition-group>
          </draggable>

        </b-col>
        <!--COL-RIGHT : BURGER-->
        <b-col md="10">
          <section class="ctn-burger-compose">
            <section class="ctn-entete">
              <article>
                <router-link to="">Burger</router-link>
                <span> > </span>
                <router-link to="">Boissons & Dessert</router-link>
              </article>
              <h1 class="title_create_burger">Créer votre burger, en glissant chacun
                des élements pour le composer </h1>
            </section>
            <section class="burger-compose">

              <draggable element="section"
                         class="drag1 ingredient burger-pain"
                         v-model="result.resultPain"
                         :move="onMove"
                         :options="dragOptions2"
                         id="drag1">
                <button class="btn-change" @click="changeIngredient" :key="key">
                  <img src="../assets/icones/change.svg" alt="change"/>
                </button>
                <p class="blue">Glissez ici votre pain</p>
                <transition-group name="no" class="img-group ctn-img-compose" tag="section">

                  <div class="list-group-item burger-pain" v-for="element in result.resultPain" :key="element.src"
                       v-bind:style="{ 'background-image': 'url(' + element.src + ')' }">
                  </div>
                </transition-group>
              </draggable>

              <draggable element="section"
                         class="ingredient burger-condiment"
                         v-model="result.resultCondiment1"
                         :move="onMove"
                         :options="dragOptions2"
                         id="drag2">
                <button class="btn-change" @click="changeIngredient" :key="key">
                  <img src="../assets/icones/change.svg" alt="change"/>
                </button>
                <p>Glissez ici votre condiment</p>
                <transition-group name="no" class="img-group ctn-img-compose" tag="section">
                  <div class="list-group-item burger-condiment" v-for="element in result.resultCondiment1"
                       :key="element.src"
                       v-bind:style="{ 'background-image': 'url(' + element.src + ')' }">
                  </div>
                </transition-group>
              </draggable>

              <draggable element="section"
                         class="ingredient burger-proteines"
                         v-model="result.resultProteines"
                         :move="onMove"
                         :options="dragOptions2"
                         id="drag3">
                <button class="btn-change" @click="changeIngredient" :key="key"><img src="../assets/icones/change.svg"
                                                                                     alt="change"/></button>
                <p>Glissez ici votre : steak, veggie, poisson </p>
                <transition-group name="no" class="img-group ctn-img-compose" tag="section">
                  <div class="list-group-item burger-proteines" v-for="element in result.resultProteines"
                       :key="element.src"
                       v-bind:style="{ 'background-image': 'url(' + element.src + ')' }">
                  </div>
                </transition-group>
              </draggable>

              <draggable element="section"
                         class="ingredient burger-condiment"
                         v-model="result.resultCondiment2"
                         :move="onMove"
                         :options="dragOptions2"
                         id="drag4">
                <button class="btn-change" @click="changeIngredient" :key="key"><img src="../assets/icones/change.svg"
                                                                                     alt="change"/></button>
                <p>Glissez ici votre condiment</p>
                <transition-group name="no" class="img-group ctn-img-compose" tag="section">
                  <div class="list-group-item burger-condiment" v-for="element in result.resultCondiment2"
                       :key="element.src"
                       v-bind:style="{ 'background-image': 'url(' + element.src + ')' }">
                  </div>
                </transition-group>
              </draggable>

              <draggable element="section"
                         class="ingredient burger-condiment"
                         v-model="result.resultCondiment3"
                         :move="onMove"
                         :options="dragOptions2"
                         id="drag5">
                <button class="btn-change" @click="changeIngredient" :key="key">
                  <img src="../assets/icones/change.svg" alt="change"/>
                </button>
                <p>Glissez ici votre condiment</p>

                <transition-group name="no" class="img-group ctn-img-compose" tag="section">
                  <div class="list-group-item burger-condiment" v-for="element in result.resultCondiment3"
                       :key="element.src"
                       v-bind:style="{ 'background-image': 'url(' + element.src + ')' }">
                  </div>
                </transition-group>
              </draggable>

              <draggable element="section"
                         class="ingredient drag1 burger-pain2"
                         v-model="result.resultPain"
                         :move="onMove"
                         :options="dragOptions2">
                <transition-group name="no" class="img-group ctn-img-compose" tag="section">
                  <div class="list-group-item burger-pain2" v-for="element in result.resultPain" :key="element.src"
                       v-bind:style="{ 'background-image': 'url(' + element.src + ')' }"></div>
                </transition-group>
              </draggable>
              <!--todo : a voir pour le chevron avec fontawesome-->
              <a @click="addBurgerClick" class="btn-perso">Valider ><i
                class="fal fa-chevron-right"></i></a>
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

  export default {
    components: {
      draggable
    },
    data() {
      return {
        key: "key",
        result: {
          resultPain: [],
          resultCondiment1: [],
          resultProteines: [],
          resultCondiment2: [],
          resultCondiment3: [],
        },
        editable: true,
        isDragging: false,
        delayedDragging: false
      }
    },
    methods: {
      ...mapActions([
        'addBurger'
      ]),
      clone: function (ingredient) {
        return {
          ingredient: ingredient.loadedIngredient
        }
      },
      addBurgerClick() {
        if (this.result.resultPain.length == 0 || this.result.resultCondiment1.length == 0 || this.result.resultCondiment2.length == 0 || this.result.resultCondiment3.length == 0 || this.result.resultProteines.length == 0) {
          alert("Vous devez impérativement remplir tous les ingrédients !")
        } else {
          const payload = this.result
          this.addBurger(payload)
          this.$router.push("/votre_burger");
        }
      },
      onMove({relatedContext, draggedContext}) {
        const relatedElement = relatedContext.element;
        const draggedElement = draggedContext.element;
        return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      },
      changeIngredient: function (event) {
        var parentClearDiv = event.path[1].parentElement
        var ingredientBread = document.querySelectorAll(".ingredient-bread")
        var ingredrientCondiment = document.querySelectorAll(".ingredient-condiment")
        var ingredrientProteine = document.querySelectorAll(".ingredient-proteine")
        var pIngredient = document.querySelectorAll(".ingredient p")

        if (this.result.resultPain[0] || this.result.resultCondiment1[0] || this.result.resultProteines[0] || this.result.resultCondiment2[0] || this.result.resultCondiment3[0]) {
          for (var i = 0; i < parentClearDiv.classList.length; i++) {
            if (parentClearDiv.classList[i] == "burger-pain") {
              this.result.resultPain = []
              this.loadedIngredient.pains.forEach(function (pains) {
                if (pains.fixed === true) {
                  pains.fixed = false
                }
              })
              document.querySelectorAll(".drag1").forEach(function (ctn_bread) {
                ctn_bread.classList.remove("ctn_ingredient_full")
              })
              document.querySelector("#drag1").children[1].style.display = "block";

              ingredrientCondiment.forEach(function (condiment) {
                condiment.classList.remove("active")
                condiment.classList.add("disabled")
              })
              ingredrientProteine.forEach(function (proteine) {
                proteine.classList.remove("active")
                proteine.classList.add("disabled")
              })
              ingredientBread.forEach(function (bread) {
                bread.classList.remove("disabled")
                bread.classList.add("active")
              })
            }
            if (parentClearDiv.classList[i] == "burger-condiment") {
              this.loadedIngredient.condiments.forEach(function (condiments) {
                if (condiments.fixed === true) {
                  condiments.fixed = false
                }
              })
              if (parentClearDiv.getAttribute("id") == "drag2") {
                this.result.resultCondiment1 = [];
                document.querySelector("#drag2").classList.remove("ctn_ingredient_full")
              }
              if (parentClearDiv.getAttribute("id") == "drag4") {
                this.result.resultCondiment2 = [];
                document.querySelector("#drag4").classList.remove("ctn_ingredient_full")
              }
              if (parentClearDiv.getAttribute("id") == "drag5") {
                this.result.resultCondiment3 = [];
                document.querySelector("#drag5").classList.remove("ctn_ingredient_full")
              }
              ingredrientCondiment.forEach(function (condiment) {
                condiment.classList.remove("disabled")
                condiment.classList.add("active")
              })
              ingredrientProteine.forEach(function (proteine) {
                proteine.classList.remove("active")
                proteine.classList.add("disabled")
              })
              ingredientBread.forEach(function (bread) {
                bread.classList.remove("active")
                bread.classList.add("disabled")
              })
            }
            if (parentClearDiv.classList[i] == "burger-proteines") {
              this.result.resultProteines = []
              this.loadedIngredient.proteines.forEach(function (proteines) {
                if (proteines.fixed === true) {
                  proteines.fixed = false
                }
              })
              document.querySelector("#drag3").classList.remove("ctn_ingredient_full")
              ingredrientCondiment.forEach(function (condiment) {
                condiment.classList.remove("active")
                condiment.classList.add("disabled")
              })
              ingredrientProteine.forEach(function (proteine) {
                proteine.classList.remove("disabled")
                proteine.classList.add("active")
              })
              ingredientBread.forEach(function (bread) {
                bread.classList.remove("active")
                bread.classList.add("disabled")
              })
            }
          }
        }
        if (this.result.resultPain.length == 0 && this.result.resultCondiment1.length == 0 && this.result.resultProteines.length == 0 && this.result.resultCondiment2.length == 0 && this.result.resultCondiment3.length == 0) {
          console.log("ok")
          ingredientBread.forEach(function (bread) {
            bread.classList.remove("disabled")
            bread.classList.add("active")
          })
          ingredrientCondiment.forEach(function (condiment) {
            condiment.classList.remove("active")
            condiment.classList.add("disabled")
          })
          ingredrientProteine.forEach(function (proteine) {
            proteine.classList.remove("active")
            proteine.classList.add("disabled")
          })
          for (var i = 0; i < pIngredient.length; i++) {
            pIngredient[i].style.color = "white"
          }
        }
      }
    },
    mounted() {
      if (this.loadedModify == "yes") {
        this.result = this.loadedBurger
      }
    },
    computed: {
      ...mapGetters([
        'loadedIngredient',
        'loadedBurger',
        'loadedModify'
      ]),
      dragOptions() {
        return {
          animation: 0,
          group: 'description',
          disabled: !this.editable,
          ghostClass: 'ghost',
          group: {name: 'ingredient', src: '', id: "", fixed: "", pull: 'clone'}
        };
      },
      dragOptions2() {
        return {
          animation: 0,
          group: 'description',
          disabled: !this.editable,
          ghostClass: 'ghost',
          group: 'ingredient'
        };
      },
      listString() {
        return JSON.stringify(this.ingredients, null, 2);
      },
      list2String() {
        return JSON.stringify(this.result.resultPain, null, 2);
      }
    },
    watch: {
      isDragging(newValue) {
        if (newValue) {
          this.delayedDragging = true
          return
        }
        this.$nextTick(() => {
          this.delayedDragging = false
          var pIngredient = document.querySelector(".ingredient p")
          var ingredientBread = document.querySelectorAll(".ingredient-bread")
          var ingredrientCondiment = document.querySelectorAll(".ingredient-condiment")
          var ingredrientProteine = document.querySelectorAll(".ingredient-proteine")
          pIngredient.style.display = "none";

          if (this.result.resultPain[0]) {
            ingredientBread.forEach(function (bread) {
              bread.classList.remove("active")
              bread.classList.add("disabled")
            })
            ingredrientCondiment.forEach(function (condiment) {
              condiment.classList.remove("disabled")
              condiment.classList.add("active")
              condiment.classList.add("active")
            })
            document.querySelectorAll(".drag1").forEach(function (ctn_bread) {
              ctn_bread.classList.add("ctn_ingredient_full")
            })
            document.querySelector("#drag2 p").style.color = "#312783"
            // this.result.resultPain[0].fixed = true
          }
          if (this.result.resultPain[1]) {
            this.result.resultPain.splice(-1, 1)
          }
          if (this.result.resultCondiment1[0]) {
            if (this.result.resultCondiment1[0].type != "condiments") {
              document.querySelector("#drag2 section").innerHTML = ""
            } else {
              ingredrientCondiment.forEach(function (condiment) {
                condiment.classList.remove("active")
                condiment.classList.add("disabled")
              })

              ingredrientProteine.forEach(function (proteines) {
                proteines.classList.remove("disabled")
                proteines.classList.add("active")
              })
              document.querySelector("#drag2").classList.add("ctn_ingredient_full")
              document.querySelector("#drag3 p").style.color = "#312783"
            }
            //this.result.resultCondiment1[0].fixed = true
          }
          if (this.result.resultCondiment1[1]) {
            this.result.resultCondiment1.splice(-1, 1)
          }
          if (this.result.resultProteines[0]) {
            if (this.result.resultProteines[0].type != "proteines") {
              document.querySelector("#drag3 section").innerHTML = ""

            } else {
              ingredrientProteine.forEach(function (proteines) {
                proteines.classList.remove("active")
                proteines.classList.add("disabled")
              })

              ingredrientCondiment.forEach(function (condiment) {
                condiment.classList.remove("disabled")
                condiment.classList.add("active")
              })
              document.querySelector("#drag3").classList.add("ctn_ingredient_full")
              document.querySelector("#drag4 p").style.color = "#312783"
              //this.result.resultProteines[0].fixed = true
            }
          }
          if (this.result.resultProteines[1]) {
            this.result.resultProteines.splice(-1, 1)
          }
          if (this.result.resultCondiment2[0]) {
            if (this.result.resultCondiment2[0].type != "condiments") {
              document.querySelector("#drag4 section").innerHTML = ""

            } else {
              ingredrientCondiment.forEach(function (condiment) {
                condiment.classList.remove("disabled")
                condiment.classList.add("active")
              })
              //this.result.resultCondiment2[0].fixed = true
            }
            document.querySelector("#drag4").classList.add("ctn_ingredient_full")
            document.querySelector("#drag5 p").style.color = "#312783"
          }

          if (this.result.resultCondiment2[1]) {
            this.result.resultCondiment2.splice(-1, 1)
          }

          if (this.result.resultCondiment3[0]) {
            if (this.result.resultCondiment3[0].type != "condiments") {
              document.querySelector("#drag5 section").innerHTML = ""
            } else {
              ingredrientCondiment.forEach(function (condiment) {
                condiment.classList.remove("disabled")
                condiment.classList.add("active")
              })
              this.result.resultCondiment3[0].fixed = true
              document.querySelector("#drag5").classList.add("ctn_ingredient_full")
            }
          }
          if (this.result.resultCondiment3[1]) {
            this.result.resultCondiment3.splice(-1, 1)
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../variables";

  .ctn-burger-create {
    height: calc(100vh - 140px);
    background-image: url("../assets/burger_creation/creation_burger_v2.png");
    background-position: center 70%;
    background-size: cover;
    @media screen and (max-width: 767px) {
      height: 100vh;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape){
      height: auto;
    }
    .height100 {
      height: 100%;
    }
    .slide {
      img {
        width: 100%;
      }
    }
  }

  .no-move {
    transition: transform 0s;
  }

  .ghost {
    opacity: .5;
    background: #C8EBFB;
  }

  .img-group-ingredient {
    height: 100%;
    background-color: $blue;
    box-shadow: 0 0 13px 3px #1d1a3863;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media screen and (max-width: 767px) {
      height: 150px;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape){
      height: auto;
    }
    span {
      height: 100%;
      @media screen and (max-width: 767px) {
        display: flex;
        align-items: center;
      }
      div {
        background-size: cover;
        padding: 0;
        @media screen and (max-width: 767px) {
          margin-left: 10px;
          &:first-child {
            margin-left: 0;
          }
        }
      }
    }
    .description-ingredient {
      font-size: 1.2em;
      margin-bottom: 0;
      padding-top: 2px;
      color: white;
      background-color: $blue;
      top: 82%;
      position: relative;
    }
  }

  .ctn-img-compose {
    background-color: transparent;
    box-shadow: none;
    height: 100%;
    width: 100%;
  }

  .list-group-item {
    cursor: move;
    width: 100%;
    height: auto;
    border-radius: 0;
    border: none;
    padding: 0;
    overflow: hidden;
    div {
      width: 100%;
      height: 120px;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait){
      span {
        display: flex;
        flex-direction: column;
        height: 70vh;
        justify-content: space-between;
      }
    }
  }



  .list-group-item i {
    cursor: pointer;
  }

  .ctn-burger-compose {
    position: relative;
    height: calc(100vh - 140px);
  }

  .burger-compose {
    height: auto;
    width: 100%;
    top: 8%;
    position: relative;
    @media screen and (max-width: 767px) {
      top: 5%;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
      top: 20%;
    }

      section {
      div {
        background-size: cover;
        width: 100%;
        height: 100% !important;
        left: 0 !important;
      }
    }
  }

  .ingredient {
    margin-bottom: 15px;
    border: 2px white dashed;
    background-color: rgba(255, 255, 255, 0.4);
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 40%;
    position: relative;
    display: flex;
    align-items: center;
    @media screen and (max-width: 767px) {
      width: 90%;
      left: 10% !important;
      transform: translateX(0);
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
      width: 62%;
    }
      p {
      font-weight: bold;
      color: white;
      font-size: 1.4em;
      width: 100%;
      position: absolute;
      margin-bottom: 0;
    }

    .blue {
      color: $blue;
    }
  }

  .burger-pain {
    height: 65px !important;
    border-radius: 60px 60px 20px 20px !important;
  }

  .burger-pain2 {
    height: 50px !important;
    border-radius: 20px 20px 60px 60px !important;
  }

  .burger-condiment {
    height: 30px !important;
    border-radius: 15px !important;
    position: relative !important;
    transform: translateX(0) !important;
    &:nth-child(2) {
      left: 36% !important;
      @media screen and (max-width: 767px) {
        left: 10% !important;
      }
    }

    &:nth-child(4) {
      left: 32% !important;
      @media screen and (max-width: 767px) {
        left: 10% !important;
      }
    }
    &:nth-child(5) {
      left: 27% !important;
      @media screen and (max-width: 767px) {
        left: 10% !important;
      }
    }
  }

  .burger-proteines {
    height: 50px !important;
    border-radius: 25px !important;
    position: relative !important;
    transform: translateX(0) !important;;
    left: 25% !important;
    @media screen and (max-width: 767px) {
      left: 10% !important;
    }
  }

  .active {
    display: block;
  }

  .disabled {
    display: none;
  }

  .list-group-item.active {
    background-color: transparent;
  }

  .btn-change {
    position: absolute;
    left: -20%;
    border: solid 2px white;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border-radius: 25px;
    transition: background-color 0.5s;
    @media screen and (max-width: 767px) {
      left: -15%;
      transform: rotate(90deg);
    }
    img {
      width: 75%;
    }
    &:hover {
      background-color: $blue;
      border-color: $blue;
    }
  }

  .ctn_ingredient_full {
    border: none;
    box-shadow: rgba(0, 0, 0, 0.2) 0 0 20px 1px;
  }

  .btn-perso {
    position: absolute;
    right: 35px;
    bottom: -2%;
    padding: 10px 40px;
    font-size: 1.5em;
    color: white !important;
    @media screen and (max-width: 767px) {
      right: 0;
      left: 0;
      bottom: 0;
      position: relative;
      top: 7px;
      padding: 14px 40px;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
      position: relative;
      right: 0;
      top: 20px;
    }
    &:hover {
      color: white !important;;
    }
  }

  .ctn-entete {
    top: 3%;
    position: relative;

    .title_create_burger {
      font-size: 2em;
      font-weight: bold;
      color: white;
      text-align: center;
      width: 51%;
      margin: 0 auto;
      @media screen and (max-width: 767px) {
        display: none;
      }
      @media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
        width: 85%;
      }
    }
    article {
      margin-bottom: 15px;
      font-size: 1.2em;
      color: white;
      @media screen and (max-width: 767px) {
        display: none;
      }
      a {
        color: white;
      }
      a:first-child {
        color: $blue;
      }
    }
  }

</style>
