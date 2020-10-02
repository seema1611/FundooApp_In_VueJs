<template>
  <div id="create-note-container">
    <div id="note-mainpart">

      <div @click="display()">
        <md-card :class="{header : isVisible}"> Take a note...</md-card>
      </div> 

      <div>
        <md-card :class="{header : !isVisible}"> 
          <md-field md-inline>
            <label>Title</label>
            <md-input v-model="title"></md-input></md-field><br/>

          <md-field md-inline>
            <label>Take a note....</label>
            <md-textarea
              v-model="description"
              md-autogrow
            ></md-textarea></md-field><br/>

          <div class="notebox-icons">
            <span>
              <ColorPalette />
              <Archive />
            </span>
            <button>Close</button>
          </div>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import ColorPalette from "./ColorPalette";
import Archive from "./Archive";

export default {
  data() {
    return {
      isVisible: false,
      title: "",
      description: "",
    };
  },

  components: {
    ColorPalette,
    Archive,
  },

  methods: {
    display : function () {
      this.isVisible = true;
    }
  },
  created() {
    if (localStorage.getItem("token") == undefined) {
      this.$router.push("/");
    }
  },
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

.header {
  display: none  !important;
  opacity: 0.1;
}

.md-card {
  padding: 4px;
  display: flex;
  flex-direction: column;
  box-shadow: none;
}

.md-field {
  font-weight: 600;
  margin: 0%;
  font-size: 16px;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
}

.notecard {
  display: none;
}

#notebox {
  width: 100%;
}

.notebox-icons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.notebox-icons > button {
  width: 15%;
  font-size: 15px;
  display: flex;
  border: none;
  cursor: pointer;
  background-color: transparent;
}

.md-field:after,
.md-field:before {
  position: relative;
}

span {
  display: flex;
  flex-direction: row;
}

</style>