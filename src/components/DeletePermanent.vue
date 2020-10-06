<template>
  <div class="delete-part">
    <md-icon @click.native="PermanentDelete">delete_forever</md-icon>
  </div>
</template>
<script>
import NoteService from "../services/NoteService";
import { eventBus } from "../main";

export default {
  name: "DeletePermanent",
  props:["noteId"],
  methods: {
    PermanentDelete: function () {
      const data = {
        noteIdList: [this.noteId],
      };
      NoteService.deletePermanent(data).then(() => {
        eventBus.$emit("getDeletedInTrashList");
      });
    },
  },
};
</script>

<style scoped>
.delete-part {
  cursor: pointer;
}
</style>