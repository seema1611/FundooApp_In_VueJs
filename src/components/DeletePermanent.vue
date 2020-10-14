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
      NoteService.deletePermanent(data)
      .then(() => {
        eventBus.$emit("getDeletedInTrashList");
      })
      .catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>

<style scoped>
.delete-part {
  cursor: pointer;
  margin-top: -10%;
  margin-right: 10%;
}

.md-icon {
  margin-right: 90%;
}
</style>