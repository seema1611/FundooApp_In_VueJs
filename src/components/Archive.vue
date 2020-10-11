<template>
  <div class="archive-display">
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
    this.fetchArchiveList();
    eventBus.$on("unarchivedNote", () => {
      this.archiveList = [];
      this.fetchArchiveList();
      this.showSnackbar=true
      this.result = "UnArchive Note Successfully";    
    });
    eventBus.$on("searchCard", (data) => {
      this.searchText=data;
    });
  },
  computed:{
    filteredList:function(){
      return this.archiveList.filter((note)=>{
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
</style>