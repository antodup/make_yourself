<template>
  <section class="ctn-general ctn-mentionslegales">
    <b-container>
      <b-row>
        <b-col md="8">
          <h1>Conditions Générales de Ventes</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias cupiditate molestias odio optio quas
            tempora
            tempore, voluptatibus. At doloribus eveniet fuga hic incidunt ipsam molestias repellendus sit. Delectus,
            maxime.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae illum nemo possimus provident ratione? Ab
            cupiditate dolorem iure provident sunt! Amet delectus dolores fugit perferendis quae qui sint temporibus,
            voluptatum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis explicabo facere
            libero,
            magnam officia porro saepe suscipit tenetur veniam vitae voluptates? Ab est facere harum rem soluta totam.
            Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur culpa eaque eum fuga illum
            impedit
            molestiae officiis quasi sapiente sed, voluptatem. Aliquid et ipsam laborum quam sapiente ut! Lorem ipsum
            dolor
            sit amet, consectetur adipisicing elit. Eligendi optio recusandae totam. Ad amet deleniti eos error incidunt
            ipsa, ipsam magnam maxime, necessitatibus quae qui, quisquam saepe similique! Nisi, recusandae?Lorem ipsum
            dolor
            sit amet, consectetur adipisicing elit. Animi asperiores cum, dignissimos eius harum nobis odio odit
            officiis
            porro quasi sint veniam. Blanditiis dignissimos eum illo, perspiciatis quam ratione voluptate. Lorem ipsum
            dolor
            sit amet, consectetur adipisicing elit. Aliquam aliquid animi corporis deleniti, earum eius eligendi eum in
            ipsa
            libero placeat quam, quidem saepe sed suscipit, tempore veniam voluptatibus voluptatum! </p>
        </b-col>
        <b-col md="4">
          <img src="../assets/home/toque.svg" alt="">
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
  export default {
    name: "ConditionGeneral"
  }
</script>

<style lang="scss" scoped>
  @import "../variables";

  .ctn-mentionslegales {
    height: calc(100vh - 140px);
    background-color: $yellow;
    text-align: left;
    @media screen and (max-width: 767px){
      height: auto;
      padding: 15px;
    }
    h1 {
      color: $blue;
      font-family: 'Gotham-Bold';
      font-size: 2.5em;
      margin-bottom: 10px;
    }
    p {
      color: white;
      font-size: 1.3em;
    }
    img {
      @media screen and (max-width: 767px){
        display: none;
      }
    }
  }

</style>
