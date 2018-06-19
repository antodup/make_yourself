<template>
  <section class="ctn-general ctn-burger-create">
    <b-container class="height100">
      <b-row class="height100">
        <!--COL-LEFT : INGREDIENT-->
        <b-col md="2" class="img-group-ingredient">
          <draggable class="list-group-item active ingredient-bread"
                     element="section" v-model="ingredients.pains"
                     :options="dragOptions"
                     :move="onMove"
                     @start="isDragging=true"
                     @end="isDragging=false">
            <transition-group type="transition" :name="'flip-list'">
              <div v-for="element in ingredients.pains"
                   v-bind:style="{ 'background-image': 'url(' + element.src + ')' }"
                   :key="element.name" class="">
                <p class="description-ingredient">{{element.name}}</p>
              </div>
            </transition-group>
          </draggable>

          <draggable class="list-group-item disabled ingredient-condiment"
                     element="section"
                     v-model="ingredients.condiments"
                     :options="dragOptions"
                     :move="onMove"
                     @start="isDragging=true"
                     @end="isDragging=false">
            <transition-group type="transition" :name="'flip-list'">
              <div v-for="element in ingredients.condiments"
                   v-bind:style="{ 'background-image': 'url(' + element.src + ')' }"
                   :key="element.name" class="handle">
                <p class="description-ingredient">{{element.name}}</p>
              </div>
            </transition-group>
          </draggable>

          <draggable class="list-group-item disabled ingredient-proteine"
                     element="section"
                     v-model="ingredients.proteines"
                     :options="dragOptions"
                     :move="onMove"
                     @start="isDragging=true" @end="isDragging=false">
            <transition-group type="transition" :name="'flip-list'">
              <div v-for="element in ingredients.proteines"
                   v-bind:style="{ 'background-image': 'url(' + element.src + ')' }"
                   :key="element.name" class="handle">
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
                         :options="dragOptions"
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
                         :options="dragOptions"
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
                         :options="dragOptions"
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
                         :options="dragOptions"
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
                         :options="dragOptions"
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
                         :options="dragOptions">
                <transition-group name="no" class="img-group ctn-img-compose" tag="section">
                  <div class="list-group-item burger-pain2" v-for="element in result.resultPain" :key="element.src"
                       v-bind:style="{ 'background-image': 'url(' + element.src + ')' }"></div>
                </transition-group>
              </draggable>
              <!--todo : a voir pour le chevron -->
              <a  @click="resultBurger" class="btn btn-perso">Valider ><i
                class="fal fa-chevron-right"></i>

              </a>
            </section>
          </section>
        </b-col>
      </b-row>
    </b-container>
    <article class="disabled">
      <img src="../assets/burger_creation/pains/pain_blanc.jpg" alt="">
      <img src="../assets/burger_creation/pains/pain_complet.jpg" alt="">
      <img src="../assets/burger_creation/pains/pain_sans_gluten.png" alt="">
      <img src="../assets/burger_creation/pains/pain_cereale.jpg" alt="">

      <img src="../assets/burger_creation/condiements/bacon.jpg" alt="">
      <img src="../assets/burger_creation/condiements/cheese.jpg" alt="">
      <img src="../assets/burger_creation/condiements/salade.jpg" alt="">
      <img src="../assets/burger_creation/condiements/tomate.jpg" alt="">

      <img src="../assets/burger_creation/proteines/boeuf.jpg" alt="">
      <img src="../assets/burger_creation/proteines/poisson.jpg" alt="">
      <img src="../assets/burger_creation/proteines/poulet.jpg" alt="">
      <img src="../assets/burger_creation/proteines/soja.jpg" alt="">
    </article>
  </section>
</template>

<script>
  import draggable from 'vuedraggable'
  import Vuex from 'vuex'

  export default {
    components: {
      draggable
    },
    data() {
      return {
        ingredients: {
          pains: [{
            type: 'pains',
            key: '1',
            name: 'Pain Blanc',
            src: '/static/img/pain_blanc.3e60ac7.jpg',
            fixed: false
          }, {
            type: 'pains',
            name: 'Pain Complet',
            src: '/static/img/pain_complet.540009d.jpg',
            fixed: false
          }, {
            type: 'pains',
            name: 'Pain Céréale',
            src: '/static/img/pain_cereale.18daaed.jpg',
            fixed: false
          }, {
            type: 'pains',
            name: 'Pain Sans Gluten',
            src: '/static/img/pain_sans_gluten.2efd099.png',
            fixed: false
          }],
          condiments: [{
            type: 'condiments',
            name: 'Bacon',
            src: '/static/img/bacon.13abb71.jpg',
            fixed: false
          }, {
            type: 'condiments',
            name: 'Fromage',
            src: '/static/img/cheese.ef670cd.jpg',
            fixed: false
          }, {
            type: 'condiments',
            name: 'Salade',
            src: '/static/img/salade.0731351.jpg',
            fixed: false
          }, {
            type: 'condiments',
            name: 'Tomate',
            src: '/static/img/tomate.197c00b.jpg',
            fixed: false
          }],
          proteines: [{
            type: 'proteines',
            name: 'Boeuf',
            src: '/static/img/boeuf.c15a76a.jpg',
            fixed: false
          }, {
            type: 'proteines',
            name: 'Cabillaud pané',
            src: '/static/img/poisson.3c730b7.jpg',
            fixed: false
          }, {
            type: 'proteines',
            name: 'Poulet Rotit',
            src: '/static/img/poulet.4df1896.jpg',
            fixed: false
          }, {
            type: 'proteines',
            name: 'Steak de Soja',
            src: '/static/img/soja.ade812d.jpg',
            fixed: false
          }]
        },
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
      ...Vuex.mapActions([
        'changeHeader'
      ]),
      resultBurger() {
        console.log(this.result)
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

        if (this.result.resultPain[0] || this.result.resultCondiment1[0] || this.result.resultProteines[0] || this.result.resultCondiment2[0] || this.result.resultCondiment3[0]) {
          for (var i = 0; i < parentClearDiv.classList.length; i++) {
            if (parentClearDiv.classList[i] == "burger-pain") {
              this.result.resultPain = []
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
              this.ingredients.pains = [{
                type: 'pains',
                key: '1',
                name: 'Pain Blanc',
                src: '/static/img/pain_blanc.3e60ac7.jpg',
                fixed: false
              }, {
                type: 'pains',
                name: 'Pain Complet',
                src: '/static/img/pain_complet.540009d.jpg',
                fixed: false
              }, {
                type: 'pains',
                name: 'Pain Céréale',
                src: '/static/img/pain_cereale.18daaed.jpg',
                fixed: false
              }, {
                type: 'pains',
                name: 'Pain Sans Gluten',
                src: '/static/img/pain_sans_gluten.2efd099.png',
                fixed: false
              }]
            }
            if (parentClearDiv.classList[i] == "burger-condiment") {
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
              this.ingredients.condiments = [{
                type: 'condiments',
                name: 'Bacon',
                src: '/static/img/bacon.13abb71.jpg',
                fixed: false
              }, {
                type: 'condiments',
                name: 'Fromage',
                src: '/static/img/cheese.ef670cd.jpg',
                fixed: false
              }, {
                type: 'condiments',
                name: 'Salade',
                src: '/static/img/salade.0731351.jpg',
                fixed: false
              }, {
                type: 'condiments',
                name: 'Tomate',
                src: '/static/img/tomate.197c00b.jpg',
                fixed: false
              }]
            }
            if (parentClearDiv.classList[i] == "burger-proteines") {
              this.result.resultProteines = []
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
              this.ingredients.proteines = [{
                type: 'proteines',
                name: 'Boeuf',
                src: '/static/img/boeuf.c15a76a.jpg',
                fixed: false
              }, {
                type: 'proteines',
                name: 'Cabillaud pané',
                src: '/static/img/poisson.3c730b7.jpg',
                fixed: false
              }, {
                type: 'proteines',
                name: 'Poulet Rotit',
                src: '/static/img/poulet.4df1896.jpg',
                fixed: false
              }, {
                type: 'proteines',
                name: 'Steak de Soja',
                src: '/static/img/soja.ade812d.jpg',
                fixed: false
              }]
            }
          }
        }
      }
    },
    computed: {
      dragOptions() {
        return {
          animation: 0,
          group: 'description',
          disabled: !this.editable,
          ghostClass: 'ghost',
        };
      },
      listString() {
        return JSON.stringify(this.ingredients, null, 2);
      },
      list2String() {
        return JSON.stringify(this.result.resultPain, null, 2);
      },
      ...Vuex.mapGetters([
        'loadedHeader'
      ])
    },
    mounted() {
      this.changeHeader
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
            this.result.resultPain[0].fixed = true
          }
          if (this.result.resultCondiment1[0]) {
            if (this.result.resultCondiment1[0].type != "condiments") {
              document.querySelector("#drag2 section").innerHTML = ""
              this.ingredients.pains = [{
                type: 'pains',
                key: '1',
                name: 'Pain Blanc',
                src: '/static/img/pain_blanc.3e60ac7.jpg',
                fixed: false
              }, {
                type: 'pains',
                name: 'Pain Complet',
                src: '/static/img/pain_complet.540009d.jpg',
                fixed: false
              }, {
                type: 'pains',
                name: 'Pain Céréale',
                src: '/static/img/pain_cereale.18daaed.jpg',
                fixed: false
              }, {
                type: 'pains',
                name: 'Pain Sans Gluten',
                src: '/static/img/pain_sans_gluten.2efd099.png',
                fixed: false
              }]
            } else {
              ingredrientCondiment.forEach(function (condiment) {
                condiment.classList.remove("active")
                condiment.classList.add("disabled")
              })
              this.ingredients.condiments = [{
                type: 'condiments',
                name: 'Bacon',
                src: '/static/img/bacon.13abb71.jpg',
                fixed: false
              }, {
                type: 'condiments',
                name: 'Fromage',
                src: '/static/img/cheese.ef670cd.jpg',
                fixed: false
              }, {
                type: 'condiments',
                name: 'Salade',
                src: '/static/img/salade.0731351.jpg',
                fixed: false
              }, {
                type: 'condiments',
                name: 'Tomate',
                src: '/static/img/tomate.197c00b.jpg',
                fixed: false
              }]
              ingredrientProteine.forEach(function (proteines) {
                proteines.classList.remove("disabled")
                proteines.classList.add("active")
              })
              document.querySelector("#drag2").classList.add("ctn_ingredient_full")
              document.querySelector("#drag3 p").style.color = "#312783"
            }
            this.result.resultCondiment1[0].fixed = true
          }
          if (this.result.resultProteines[0]) {
            if (this.result.resultProteines[0].type != "proteines") {
              document.querySelector("#drag3 section").innerHTML = ""
              this.ingredients.proteines = [{
                type: 'proteines',
                name: 'Boeuf',
                src: '/static/img/boeuf.c15a76a.jpg',
                fixed: false
              }, {
                type: 'proteines',
                name: 'Cabillaud pané',
                src: '/static/img/poisson.3c730b7.jpg',
                fixed: false
              }, {
                type: 'proteines',
                name: 'Poulet Rotit',
                src: '/static/img/poulet.4df1896.jpg',
                fixed: false
              }, {
                type: 'proteines',
                name: 'Steak de Soja',
                src: '/static/img/soja.ade812d.jpg',
                fixed: false
              }]
            } else {
              ingredrientProteine.forEach(function (proteines) {
                proteines.classList.remove("active")
                proteines.classList.add("disabled")
              })
              this.ingredients.condiments = [{
                type: 'condiments',
                name: 'Bacon',
                src: '/static/img/bacon.13abb71.jpg',
                fixed: false
              }, {
                type: 'condiments',
                name: 'Fromage',
                src: '/static/img/cheese.ef670cd.jpg',
                fixed: false
              }, {
                type: 'condiments',
                name: 'Salade',
                src: '/static/img/salade.0731351.jpg',
                fixed: false
              }, {
                type: 'condiments',
                name: 'Tomate',
                src: '/static/img/tomate.197c00b.jpg',
                fixed: false
              }]
              ingredrientCondiment.forEach(function (condiment) {
                condiment.classList.remove("disabled")
                condiment.classList.add("active")
              })
              document.querySelector("#drag3").classList.add("ctn_ingredient_full")
              document.querySelector("#drag4 p").style.color = "#312783"
              this.result.resultProteines[0].fixed = true
            }
          }
          if (this.result.resultCondiment2[0]) {
            if (this.result.resultCondiment2[0].type != "condiments") {
              document.querySelector("#drag4 section").innerHTML = ""
              this.ingredients.condiments = [{
                type: 'condiments',
                name: 'Bacon',
                src: '/static/img/bacon.13abb71.jpg',
                fixed: false
              }, {
                type: 'condiments',
                name: 'Fromage',
                src: '/static/img/cheese.ef670cd.jpg',
                fixed: false
              }, {
                type: 'condiments',
                name: 'Salade',
                src: '/static/img/salade.0731351.jpg',
                fixed: false
              }, {
                type: 'condiments',
                name: 'Tomate',
                src: '/static/img/tomate.197c00b.jpg',
                fixed: false
              }]
            } else {
              ingredrientCondiment.forEach(function (condiment) {
                condiment.classList.remove("disabled")
                condiment.classList.add("active")
              })
              this.ingredients.condiments = [{
                type: 'condiments',
                name: 'Bacon',
                src: '/static/img/bacon.13abb71.jpg',
                fixed: false
              }, {
                type: 'condiments',
                name: 'Fromage',
                src: '/static/img/cheese.ef670cd.jpg',
                fixed: false
              }, {
                type: 'condiments',
                name: 'Salade',
                src: '/static/img/salade.0731351.jpg',
                fixed: false
              }, {
                type: 'condiments',
                name: 'Tomate',
                src: '/static/img/tomate.197c00b.jpg',
                fixed: false
              }]
              this.result.resultCondiment2[0].fixed = true
            }
            document.querySelector("#drag4").classList.add("ctn_ingredient_full")
            document.querySelector("#drag5 p").style.color = "#312783"
          }
          if (this.result.resultCondiment3[0]) {
            if (this.result.resultCondiment3[0].type != "condiments") {
              document.querySelector("#drag5 section").innerHTML = ""
              this.ingredients.condiments = [{
                type: 'condiments',
                name: 'Bacon',
                src: '/static/img/bacon.13abb71.jpg',
                fixed: false
              }, {
                type: 'condiments',
                name: 'Fromage',
                src: '/static/img/cheese.ef670cd.jpg',
                fixed: false
              }, {
                type: 'condiments',
                name: 'Salade',
                src: '/static/img/salade.0731351.jpg',
                fixed: false
              }, {
                type: 'condiments',
                name: 'Tomate',
                src: '/static/img/tomate.197c00b.jpg',
                fixed: false
              }]
            } else {
              ingredrientCondiment.forEach(function (condiment) {
                condiment.classList.remove("disabled")
                condiment.classList.add("active")
              })
              this.ingredients.condiments = [{
                type: 'condiments',
                name: 'Bacon',
                src: '/static/img/bacon.13abb71.jpg',
                fixed: false
              }, {
                type: 'condiments',
                name: 'Fromage',
                src: '/static/img/cheese.ef670cd.jpg',
                fixed: false
              }, {
                type: 'condiments',
                name: 'Salade',
                src: '/static/img/salade.0731351.jpg',
                fixed: false
              }, {
                type: 'condiments',
                name: 'Tomate',
                src: '/static/img/tomate.197c00b.jpg',
                fixed: false
              }]
              this.result.resultCondiment3[0].fixed = true
              document.querySelector("#drag5").classList.add("ctn_ingredient_full")
            }
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
    span {
      height: 100%;
      div {
        background-size: cover;
        padding: 0;
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
    section {
      div {
        background-size: cover;
        width: 100%;
        height: 100%;
        left: 0;
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
    height: 65px;
    border-radius: 60px 60px 20px 20px;

  }

  .burger-pain2 {
    height: 50px;
    border-radius: 20px 20px 60px 60px;
  }

  .burger-condiment {
    height: 30px;
    border-radius: 15px;
    position: relative;
    transform: translateX(0);
    &:nth-child(2) {
      left: 36%;
    }

    &:nth-child(4) {
      left: 32%;
    }
    &:nth-child(5) {
      left: 27%;
    }
  }

  .burger-proteines {
    height: 50px;
    border-radius: 25px;
    position: relative;
    transform: translateX(0);
    left: 25%;
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
    }
    article {
      margin-bottom: 15px;
      font-size: 1.2em;
      color: white;
      a {
        color: white;
      }
      a:first-child {
        color: $blue;
      }
    }
  }

</style>
