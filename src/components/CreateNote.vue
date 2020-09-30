<template>
  <div id="create-note-container">
    <div id="note-mainpart">
      <div>
        <md-card id="header"> Take a note...</md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
#create-note-container {
  width: 85%;
  height: 684px;
}
#note-mainpart {
  border-radius: 7px;
  width: 40%;
  margin-top: 5%;
  align-items: flex-start;
  justify-content: center;
  cursor: text;
  margin-left: 35%;
  box-shadow: 2px 3px 5px #e2e2e2;
  padding: 10px;
  font-weight: 600;
  font-size: 18px;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
}
</style>