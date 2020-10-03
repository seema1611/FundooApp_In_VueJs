<template>
  <div class="display-notes">
    <div class="note-cards" v-for="note in noteList" v-bind:key="note">
      <md-card>
        <label class="note-content">{{ note.title }}</label
        ><br />
        <label class="note-description note-content">{{ note.description }}</label
        ><br />
        <div class="note-item">
          <ColorPalette />
          <Archive />
          <button>More</button>
        </div>
      </md-card>
    </div>
  </div>
</template>
<script>
import NoteService from "../services/NoteService";
import ColorPalette from "./ColorPalette";
import Archive from "./Archive";

export default {
  name: "DisplayNotes",
  data() {
    return {
      noteList: [],
    };
  },
  components: {
    ColorPalette,
    Archive,
  },
  methods: {
    fetchNotes: function () {
      NoteService.fetchNotesList().then((response) => {
        this.noteList = response.data.data.data;
      });
    },
  },
  mounted() {
    this.fetchNotes();
  },
};
</script>
<style scoped>
.display-notes {
  display: flex;
  margin-top: 2%;
  margin-left: 18%;
  flex-direction: row;
  max-width: 1000px;
  min-width: 1000px;
  flex-wrap: wrap;
}

.md-card {
  margin: 8px;
  display: flex;
  flex-direction: column;
  border-radius: 5%;
  height: min-content;
  width: 190px;
  text-align: start;
  padding: 18px;
}

.note-content {
  font-weight: bold;
  font-size: 18px;
  max-width: 90%;
  opacity: 0.6;
  cursor: text;
  margin: 0px 0px 10px 0px;
}

.note-description {
  font-size: 16px;
  font-weight: 500;
}

.note-item {
  display: flex;
  flex-direction: row;
  /* align-items: flex-start; */
  justify-content: space-evenly;
}

button {
    border: none;
    background-color: white;
    font-size: 15px;
    cursor: pointer;
}

button :hover {
    background-color: gray;
}
</style>