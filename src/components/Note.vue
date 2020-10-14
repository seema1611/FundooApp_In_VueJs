<template>
  <div>
    <CreateNote />
    <md-progress-spinner :class="{visible:!visible}" :md-stroke="2" md-mode="indeterminate"></md-progress-spinner>
    <DisplayNote v-bind:noteList="filteredList"  />
  </div>
</template>

<script>
import CreateNote from "./CreateNote";
import DisplayNote from "./DisplayNotes";
import NoteService from "../services/NoteService";
import { eventBus } from "../main";

export default {
  data() {
    return {
      noteList: [],
      searchText:'',
      visible: false,      
    };
  },
  components: {
    CreateNote,
    DisplayNote,
  },
  methods: {
    fetchNotes: function () {
      this.visible = true;
      NoteService.fetchNotesList().
      then((response) => {    
        response.data.data.data.forEach((element) => {
          this.visible = false;
          if (element.isDeleted == false && element.isArchived == false) {
            this.noteList.push(element);
          }
        });
      });
    },
    
    fetchTrashList: function () {
      NoteService.fetchTrashNotesList().then((response) => {      
        this.noteList = response.data.data.data;
      });
    },
  },

  created() {
    this.fetchNotes();
     eventBus.$on("searchNotesWithTitle", (data) => {
      this.searchText=data;
    })
    eventBus.$on("getAfterUpdatedNoteList", () => { 
      this.noteList = [];
      this.fetchNotes();
    }); 
    eventBus.$emit("sendIdList",this.noteList.id)
  },

  computed:{
    filteredList:function(){
      return this.noteList.filter((note)=>{
        return note.title.match(this.searchText);
      })
    }
  }

};
</script>

<style scoped>
.md-progress-spinner {
  margin-top: 15%;
  margin-left: 15%;
}

.visible {
  display: none;
}

</style>