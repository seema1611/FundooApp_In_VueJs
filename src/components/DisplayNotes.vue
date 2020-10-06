<template>
  <div class="display-notes">
    <div 
      class="note-cards" 
      v-for="note in noteList" 
      v-bind:key="note.id">

      <md-card md-with-hover>
        <div 
          class="card-items" 
          @click="updateBoxData(note)">

          <label 
            class="content-part"
            >{{ note.title }}</label><br />

          <label 
            class="description-part"
            >{{ note.description }}</label><br />

        </div>
        <div v-if="iconCategory == 'trash'" class="notebox-icons">
          <DeletePermanent v-bind:noteId="note.id" />
        </div>        

        <div v-else class="icon-notes">
          <IconColorPalette />
          <IconArchive />
          <DeleteNotes v-bind:note="note.id" />
        </div>
      </md-card>
    </div>
    <UpdateNote
      v-if="showUpdateBox"
      v-bind:showUpdateBox="showUpdateBox"
      v-bind:noteData="noteData"
    />
  </div>
</template>

<script>
import IconColorPalette from "./IconColorPalette";
import IconArchive from "./IconArchive";
import DeleteNotes from "./DeleteNotes";
import UpdateNote from "./UpdateNote";
import DeletePermanent from "./DeletePermanent";
import { eventBus } from "../main";

export default {
  name: "DisplayNotes",
  props: ["noteList", "iconCategory"],
  data() {
    return {
      cardId: [],
      showUpdateBox: false,
      noteData: {},
    };
  },
  components: {
    IconColorPalette,
    IconArchive,
    DeleteNotes,
    UpdateNote,
    DeletePermanent,
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

</style>