<template>
  <div class="archive-display">
    <DisplayNotes
      v-bind:noteList="archiveList"
      v-bind:iconCategory="iconCategory"
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
import DisplayNotes from "./DisplayNotes";
import NoteService from "../services/NoteService";
import {eventBus} from '../main'
export default {
  name: "Archive",
  data() {
    return {
      archiveList: [],
      iconCategory: "archive",
      showSnackbar:false, 
      result: "",
    };
  },
  components: {
    DisplayNotes,
  },
  methods: {
    fetchArchiveList: function () {
      NoteService.fetchArchiveNotes().then((response) => {
        this.archiveList = response.data.data.data;
      });
    },
  },
  created() {
    if (localStorage.getItem("token") == undefined) {
      this.$router.push("/");
    }
    this.fetchArchiveList();
    eventBus.$on("unarchivedNote", () => {
      this.archiveList = [];
      this.fetchArchiveList();
      this.showSnackbar=true
      this.result = "UnArchive Note Note Successfully";        
    });
  },
};
</script>

<style scoped>
.archive-display {
  display: flex;
  margin-top: 1%;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
}
</style>