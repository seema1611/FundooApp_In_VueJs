<template>
  <div class="delete-Notes" @click="DeletedNotesInTrash()"> 
    <md-icon>delete</md-icon>
  </div>
</template>

<script>
import { eventBus } from "../main";
import NoteService from "../services/NoteService";

export default {
  name: "DeleteNotes",
  props:["note"],
    data() {
    return {
      showSnackbar:false,
    };
  },
  methods: {
    DeletedNotesInTrash: function () {
      const trashData = {
        isDeleted: true,
        noteIdList: [this.note],
      };
      NoteService.DeletedNoteMoveToTrash(trashData)
      .then(() => {                
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
.delete-Notes {
  cursor: pointer;
}
</style>