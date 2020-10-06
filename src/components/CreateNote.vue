<template>
  <div id="create-note-container">
    <div id="note-mainpart">

      <div @click="display()">
        <md-card :class="{header : isVisible}"> 
          <label class="title-first">Take a note....</label>
          </md-card>
      </div> 

      <div id="notebox">
        <md-card id = "note-card" :class="{header : !isVisible}"> 
          <md-field md-inline>
            <label class="title">Title</label>
            <md-input v-model="title"></md-input></md-field><br/>

          <md-field md-inline>
            <label>Take a note....</label>
            <md-textarea
              v-model="description"
              md-autogrow
            ></md-textarea></md-field><br/>

          <div class="notebox-icons">
            <span>
              <IconColorPalette />
              <IconArchive />
            </span>
            <button @click="addNote()">Close</button>
          </div>
          <md-snackbar 
            md-position="center" 
            :md-duration="isInfinity ? Infinity : duration" 
            :md-active.sync="showSnackbar" 
            md-persistent>
            <span>{{responseData}}</span>
          </md-snackbar>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import IconColorPalette from "./IconColorPalette";
import IconArchive from "./IconArchive";
import NoteService from "../services/NoteService";
import {eventBus} from '../main'

export default {
  data() {
    return {
      isVisible: false,
      title: "",
      description: "",
      showSnackbar:false,      
    };
  },
  components: {
    IconColorPalette,
    IconArchive,
  },
  methods: {

    addNote: function () {
      const note = {
        title: this.title,
        description: this.description,
      };
      NoteService.getAddNote(note).then((response) => {
        this.showSnackbar=true
        this.responseData = response.data;        
        this.responseData = "Add Note Successful";        
        this.title = "";
        this.description = "";
      });
      this.isVisible = false;
      eventBus.$emit("getAfterUpdatedNoteList");
    },

    display : function () {
      this.isVisible = true;
    }
  },
  created() {
    if (localStorage.getItem("token") == undefined) {
      this.$router.push("/");
    }
  },
};
</script>

<style scoped>
#create-note-container {
  width: 100%;
  margin-right: 50%;
}

#note-mainpart {
  align-items: flex-start;
  justify-content: center;
  border-radius: 7px;
  width: 46%;
  margin-top: 5%;
  margin-left: 33%;
  box-shadow: 2px 3px 5px #a19f9f;
  padding: 10px;
  font-weight: 600;
  font-size: 18px;
  cursor: text;
}

.header {
  display: none  !important;
  opacity: 0.1;
}

.md-card {
  padding: 4px;
  display: flex;
  flex-direction: column;
  box-shadow: none; 
}

.md-field {
  font-size: 16px;
  font-weight: 600;
  margin-top: -4%;
}

#notebox {
  width: 100%;
}

.notebox-icons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -5%;
}

.notebox-icons > button {
  width: 15%;
  font-size: 15px;
  display: flex;
  border: none;
  cursor: pointer;
  background-color: transparent;
}

.md-field:after, .md-field:before {
  position: relative;
}

span {
  display: flex;
  flex-direction: row;
}

.title-first {
  opacity: 0.5;
  margin-right: 374px;
}

@media screen and (max-width: 1024px) {
  #create-note-container {
    width: 100%;
    margin-left: -2%;
  }

  #note-mainpart {
    min-width: 78%;
    padding: 20px;
    margin-left: 20%;
  }

  .title-first {
    margin-right: 200px;
    font-size: 10px;
  }

}

@media screen and (max-width: 480px) {
  #create-note-container {
    width: 100%;
    margin-left: -2%;
  }

  #note-mainpart {
    min-width: 86%;
    padding: 20px;
    margin-left: 20%;
  }

  .title-first {
    margin-right: 150px;
    font-size: 15px;
  }

  #note-card {
    width: 200px;
  }
}

@media screen and (width: 320px) {
  #create-note-container {
    width: 100%;
  }

  #note-mainpart {
    min-width: 90%;
    padding: 20px;
    margin-left: 21%;
  }

  .title-first {
    margin-right: 80px;
    font-size: 15px;
    height: 2%;
  }

}

</style>









