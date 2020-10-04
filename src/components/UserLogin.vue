<template>
  <div class="login-container">

      <div id="letter-container">
        <p class ="blue-letter">F</p>
        <p class ="red-letter">u</p>
        <p class ="yellow-letter">n</p>
        <p class ="blue-letter">d</p>
        <p class ="green-letter">o</p>
        <p class ="red-letter">o</p>
      </div>

      <div class="sign-in">
        <h2>Sign in</h2>
      </div>

      <div class="continue">
        <h3>Continue to Fundoo</h3>
      </div>

    <md-field :class="emailValidation">
      <label>Email Id</label>
      <md-input v-model="email" required></md-input>
      <span class="md-error">Email is Required</span>
    </md-field>

    <md-field :class="passwordValidation">
      <label>Password</label>
      <md-input type="password" v-model="password" required></md-input>
      <span class="md-error">Password is Required</span>
    </md-field>

    <div class="login-button">
      <div class="create-account">
        <a href="http://fundoonotes.incubation.bridgelabz.com">Create Account</a>
      </div>
      <md-button class="md-raised md-primary" @click="getLogin">Log In</md-button>
    </div>

    <router-view></router-view>
  </div>
</template>


<script>
import userService from "../services/UserService";

export default {
  name: "UserLogin",
  data() {
    return {
      cartID: "",
      email: "",
      password: "",
      result: "",
      hasEmailError: false,
      hasPasswordError:false
    };
  },
  methods: {
    getLogin: function () {
      if (this.email == "" && this.password == "") {
        return (this.hasEmailError = true),(this.hasPasswordError=true);
      }
      if(this.email==""){
        return (this.hasEmailError = true),(this.hasPasswordError=false);
      }
      if(this.password==""){
        return (this.hasEmailError = false),(this.hasPasswordError=true);
      }
      const loginDetails = {
        cartID: this.cartID,
        email: this.email,
        password: this.password,
      };
      userService.getUserLogin(loginDetails).then((response) => {
        this.result = response.data;
        localStorage.setItem("token", response.data.id);
        setTimeout(() => this.$router.push("home/note"), 3000);
      }),
        (error) => {
          console.log(error.message);
        };
      return (this.hasEmailError = false),(this.hasPasswordError=false);
    },
  },
  computed: {
    emailValidation() {
      return {
        "md-invalid": this.hasEmailError,
      };
    },
    passwordValidation() {
      return {
        "md-invalid": this.hasPasswordError,
      };
    },
  },
};
</script>


<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 30%;
  padding: 40px;
  margin-top: 8%;
  border: 0.4px solid silver;
  border-radius: 7px;
}

#letter-container {
  display: flex;
  flex-direction: row;
  font-size: 25px;
  font-family: fantasy;
  font-weight: bold;
  color: #d10303;
}

.blue-letter {
  color: #0606ff;
}

.red-letter {
  color: #D10303;
}

.yellow-letter {
  color: #f5b504;
}
.green-letter {
  color: #209720;
}

h3 {
  font-size: 20px;
  font-weight: 300;
  font-family: Roboto, "Helvetica Neue", sans-serif;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
}

.login-button {
  place-content: stretch flex-end;
  align-items: stretch;
  flex-direction: row;
  display: flex;
  width: 100%;
}

.login-button > button {
  min-width: 88px;
  line-height: 36px;
  padding: 0 16px;
  border-radius: 2px;
  overflow: visible;
  font-weight: 500;
  font-size: 15px;
  background-color: #1b66ca;
}

.create-account {
  color: #0606f8;
  cursor: pointer;
  margin-top: 18px;
  display: flex;
  flex-direction: row;
  width: 100%;
}

@media screen and (max-width: 800px) {
  .login-container {
    width: 65%;
    margin-top: 50px;
  }
}
</style>