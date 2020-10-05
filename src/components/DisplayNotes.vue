<template>
  <div class="display-notes">
    <div 
      class="note-cards" 
      v-for="note in noteList" 
      v-bind:key="note.id">

      <md-card>
        <div 
          class="card-items" 
          @click="updateNotes(note)">

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
  </div>
</template>

<script>
import IconColorPalette from "./IconColorPalette";
import IconArchive from "./IconArchive";
import DeleteNotes from "./DeleteNotes";
import { eventBus } from "../main";

export default {
  name: "DisplayNotes",
  props: ["noteList", "iconCategory"],
  data() {
    return {
      cardId: [],
      updateNotesShow: false,
      noteData: {},
    };
  },
  components: {
    IconColorPalette,
    IconArchive,
    DeleteNotes,
  },

  methods: {
    updateNotes: function (note) {
      this.updateNotesShow = true;
      this.noteData = note;
    },
  },
  created() {
    eventBus.$on("closeDialogBox", (data) => {
      this.updateNotesShow = data;
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
  flex-wrap: wrap;
}

.card-items {
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: min-content;
  text-align: start;
}

.md-card {
  width: 190px;
  margin: 8px;
  padding: 18px;
  border-radius: 5%;
}

.content-part {
  font-weight: bold;
  font-size: 18px;
  max-width: 90%;
  opacity: 0.6;
  cursor: text;
  margin: 0px 0px 10px 0px;
}

.description-part {
  font-weight: bold;
  max-width: 90%;
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