<template>
  <div class="archive">
    <md-icon @click.native="sendToArchive">archive</md-icon>
  </div>
</template>

<script>
import NoteService from '../services/NoteService'
import { eventBus } from "../main";

export default {
  name: "IconArchive",
  props:["note"],
  methods:{
    sendToArchive:function(){
      const archiveData={
        isArchived:true,
        noteIdList:[this.note]
      }
      NoteService.archiveNotes(archiveData)
      .then(()=>{
        eventBus.$emit("getAfterUpdatedNoteList");
      })
      .catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>

<style scoped>
.archive {
  cursor: pointer;
  margin-left: 5px;
}
</style>