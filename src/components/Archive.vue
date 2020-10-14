<template>
  <div class="archive-display">
    <md-progress-spinner :class="{visible:!visible}" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
    <DisplayNotes
      v-bind:noteList="filteredList"
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
      searchText:'',
      archiveList: [],
      iconCategory: "archive",
      showSnackbar:false, 
      result: "",
      visible: false,
    };
  },
  components: {
    DisplayNotes,
  },
  methods: {
    fetchArchiveList: function () {
      this.visible = true;
      NoteService.fetchArchiveNotes()
      .then((response) => {
        this.archiveList = response.data.data.data;
        this.visible = false;
      })
      .catch((error) => {
        console.log(error);
      });
    },
  },
  created() {
    this.fetchArchiveList();
    eventBus.$on("unarchivedNote", () => {
      this.archiveList = [];
      this.fetchArchiveList();
      this.showSnackbar=true
      this.result = "UnArchive Note Successfully";    
    });
    eventBus.$on("searchNotesWithTitle", (data) => {
      this.searchText=data;
    });
  },
  computed:{
    filteredList:function () {
      return this.archiveList
      .filter((note)=>{
        return note.title.match(this.searchText);
      })
    }
  }
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

.md-progress-spinner {
  margin-top: 15%;
  margin-left: 50%;
}

.visible {
  display: none;
}
</style>