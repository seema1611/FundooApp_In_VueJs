<template>
  <div id="login-container">
    <div id ="login-page">
      <div id="letter-container">
        <p class ="blue-letter">F</p>
        <p class ="red-letter">u</p>
        <p class ="yellow-letter">n</p>
        <p class ="blue-letter">d</p>
        <p class ="green-letter">o</p>
        <p class ="red-letter">o</p>
      </div>

      <div class="sign-in">
        Sign in
      </div>

      <div class="continue">
        Continue to Fundoo
      </div>

      <md-field>
        <label>Email Id*</label>
        <md-input v-model="type"></md-input>
      </md-field>

      <md-field>
        <label>Password*</label>
        <md-input v-model="type" type="password"></md-input>
      </md-field>

      <div class="login-button"><button type="submit">Log In</button></div>
      <div class="forgot-create">Forget Password?</div>
      <div class="forgot-create">Create Account</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
#login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 35%;
  padding: 24px;
  margin-top: 5%;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

#login-page{
  align-items: center;
  text-align: center;
  min-width: 25vw;
  min-height: 65vh;
}

#letter-container {
  padding-left: 38%;
  display: flex;
  flex-direction: row;
  font-size: 25px;
  font-family: fantasy;
  font-weight: bold;
  color: #ce0707;
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

.sign-in {
  font-size: 28px;
  font-weight: bold;
}

.continue {
  font-size: 22px;
  padding-top: 13%;
}

.login-button {
  place-content: stretch flex-end;
  align-items: stretch;
  flex-direction: row;
  box-sizing: border-box;
  display: flex;
  width: 100%;
}
.login-button>button{
    min-width: 88px;
    line-height: 36px;
    padding: 0 16px;
    border-radius: 2px;
    overflow: visible;
    font-weight: 500;
    font-size: 15px;
    background-color: #6666c2;
}
.forgot-create {
    color: #0606f8;
    cursor: pointer;
    margin: 5px 0px 0px 0px;
    display: flex;
    flex-direction: row;
    width:100%;
}

</style>