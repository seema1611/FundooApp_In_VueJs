<template>
  <div class="display-notes">
    <div 
      class="note-cards" 
      v-for="note in noteList" 
      v-bind:key="note.id">

      <md-card>
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
        <div class="icon-notes">
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
  width: 80%;
  margin-top: 1%;
  margin-left: 16%;  
  display: flex;
  flex-direction: row;
  width: 70%;
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
  width: 190px;
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
}

.icon-notes {
  justify-content: space-evenly;
  display: flex;
  flex-direction: row;
}
</style>