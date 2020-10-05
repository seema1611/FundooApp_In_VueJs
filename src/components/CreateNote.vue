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
              <IconColorPalette />
              <IconArchive />
            </span>
            <button @click="addNote()">Close</button>
          </div>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import IconColorPalette from "./IconColorPalette";
import IconArchive from "./IconArchive";
import NoteService from "../services/NoteService";
import {eventBus} from '../main'

export default {
  data() {
    return {
      isVisible: false,
      title: "",
      description: "",
    };
  },
  components: {
    IconColorPalette,
    IconArchive,
  },
  methods: {

    addNote: function () {
      const note = {
        title: this.title,
        description: this.description,
      };
      NoteService.getAddNote(note).then((response) => {
        this.responseData = response.data;
        this.title = "";
        this.description = "";
      });
      this.isVisible = false;
      eventBus.$emit("getAfterUpdatedNoteList");
    },

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
  width: 100%;
}
#note-mainpart {
  align-items: flex-start;
  justify-content: center;
  border-radius: 7px;
  width: 46%;
  margin-top: 5%;
  margin-left: 35%;
  box-shadow: 2px 3px 5px #a19f9f;
  padding: 10px;
  font-weight: 600;
  font-size: 18px;
  cursor: text;
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
  font-size: 16px;
  font-weight: 600;
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