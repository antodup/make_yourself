<template>
  <section class="ctn-general">
    <form @submit.prevent="sendRegister" style="margin: 50px 0">
      <input type="text" placeholder="Nom" name="lastname" v-model="lastname" required>
      <input type="text" placeholder="Prénom" name="firstname" v-model="firstname" required>
      <input type="text" placeholder="Votre N° de téléphone" name="phone" v-model="phone" required>
      <input type="email" placeholder="Votre e-mail : makeyourself@domaine.com" name="Email" v-model="email" required>
      <div v-model="error">{{error}}</div>
      <input type="password" placeholder="Votre Mot de passe" name="Password" v-model="password" required/>
      <input type="password" placeholder="Confirmez votre Mot de passe" name="Confpassword" v-model="confPassword" required/>
      <button type="submit">Valider</button>
    </form>
  </section>
</template>

<script>
  export default {
    name: "Inscription",
    data() {
      return {
        error : '',
        lastname: '',
        firstname: '',
        phone : '',
        email: '',
        password: '',
        confPassword: ''
      }
    },
    methods : {
      sendRegister() {
        if (this.password == this.confPassword) {
          this.$http.post('http://localhost:3000/registration', {
            lastname: this.lastname,
            firstname: this.firstname,
            phone :this.phone,
            email: this.email,
            password: this.password,
            confPassword: this.confPassword
          })
            .then((response) => {
              console.log(response)
              if(response.data== "votre mail est déjà enregistré") {
                this.error = response.data;
              }
            })
            .catch((error) => {
              console.log(error)
            })
        } else {
          alert('Error')
        }

      },
    }
  }
</script>

<style scoped>

</style>
