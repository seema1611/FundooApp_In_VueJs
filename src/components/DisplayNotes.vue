<template>
  <div class="display-notes">

    <div 
      class="note-cards"
      v-for="note in noteList" 
      v-bind:key="note.id">
      <md-card md-with-hover
        v-bind:style="{ background: note.color }">

        <div 
          class="card-items" 
          @click="updateBoxData(note)">
          <label class="content-part">
            {{ note.title }}
          </label><br />
          <label class="description-part">
            {{ note.description }}
          </label><br />
        </div>

        <div 
          v-if="iconCategory == 'trash'" 
          class="notebox-icons">
          <DeletePermanent 
          v-bind:noteId="note.id" />
        </div>   

        <div 
          v-else-if="iconCategory == 'archive'" 
          class="icon-notes">
          <IconUnarchive v-bind:noteId="note.id"/>
        </div>  

        <div 
          v-else class="icon-notes">
          <IconColorPalette v-bind:note="note.id" />
          <IconArchive v-bind:note="note.id" />
          <DeleteNotes v-bind:note="note.id" /> 
        </div>
      </md-card>
    </div>

    <UpdateNote
      v-if="showUpdateBox"
      v-bind:showUpdateBox="showUpdateBox"
      v-bind:noteData="noteData"
    />
    <md-snackbar 
      md-position="left" 
      :md-active.sync="showSnackbar" 
      md-persistent>
      <span>{{result}}</span>
    </md-snackbar> 
  </div> 
</template>

<script>
import IconColorPalette from "./IconColorPalette";
import IconArchive from "./IconArchive";
import DeleteNotes from "./DeleteNotes";
import UpdateNote from "./UpdateNote";
import DeletePermanent from "./DeletePermanent";
import { eventBus } from "../main";
import IconUnarchive from './IconUnarchive';

export default {
  name: "DisplayNotes",
  props: ["noteList", "iconCategory"],
  data() {
    return {
      cardId: [],
      showUpdateBox: false,
      noteData: {},
      showSnackbar:false,
      result: "",
    };
  },
  components: {
    IconColorPalette,
    IconArchive,
    DeleteNotes,
    UpdateNote,
    DeletePermanent,
    IconUnarchive,
  },
  methods: {
    updateBoxData: function (note) {
      this.showUpdateBox = true;
      this.noteData = note;
    },
  },
  created() {
    eventBus.$on("closeDialogBox", (data) => { 
      this.showUpdateBox = data;
      this.showSnackbar = true;
      this.result = "Update Note Successfully"    
    });
  },
};
</script>

<style scoped>
.display-notes {
  width: 100%;
  margin-top: 1%;
  margin-left: 16%;  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.card-items {
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: min-content;
  text-align: start;
  padding: 10px;
}

.md-card {
  width: 290px;
  margin: 8px;
  padding: 18px;
  border-radius: 5%;
}

.content-part {
  width: 90%;
  word-break: break-word;
  font-weight: bold;
  font-size: 18px;
  cursor: text;
  opacity: 0.6;
  margin: 0px 0px 10px 0px;
  margin-bottom: -4%;
}

.description-part {
  font-weight: bold;
  width: 90%;
  word-break: break-word;
  opacity: 0.6;
  font-size: 18px;
  margin: 0px 0px 10px 0px;
  font-size: 16px;
  font-weight: 500;
  cursor: text;
  margin-top: -3%;
}

.icon-notes {
  justify-content: start;
  display: flex;
  flex-direction: row;
  margin-top: -10%;
}
@media screen and (max-width: 1024px) {
  .md-card {
    margin: 10px;
    width: 230px;
  }
}
@media screen and (max-width: 480-px) {
  .md-card {
    margin: 10px;
    width: 230px;
  }
}
@media screen and (max-width: 320px) {
  .md-card {
    margin: 10px;
    width: 230px;
  }
}
</style>