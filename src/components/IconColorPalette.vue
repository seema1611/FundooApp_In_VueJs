<template>
  <div class="color-palette">
    <md-menu md-size="medium" md-align-trigger md-direction="top-start">
      <md-icon md-menu-trigger>palette</md-icon>
      
      <md-menu-content >
        <div class="color-items">

           <div  class="color-array" v-for="(color,index ) in colorArray" 
              v-bind:key="index"
              v-bind:style="{background : color.color}" 
              @click="changeColor(color.color)">
           </div>
           
        </div>
      </md-menu-content>

    </md-menu>
  </div>
</template>

<script>
import { eventBus } from "../main";
import NoteService from "../services/NoteService";
export default {
    name:"IconColorPalette",
   props:["note","createNote"],
    data(){
    return{
       isColorShow: false,
       noteIdList: [],
       setColor:"",
       noteId:'',
       colorArray : [
        { color: '#ffffff' }, { color: '#f61c08' }, 
        { color: '#f0b401' }, { color: '#ffea04' },
        { color: '#87fc02' }, { color: '#00eef7' }, 
        { color: '#a9eaf8' }, { color: '#3803f5' },
        { color: '#8707f7' } ,{ color: '#f5a8e2' },
        { color: '#cc5d31' }, { color: '#6a6d6d' },
      ],
    }
  },
  methods: {
    changeColor: function (colorId) {
      if (this.createNote == true) {
        eventBus.$emit("getUpdatedColorOnNotes", colorId);
      } else {
        eventBus.$emit("getUpdated", colorData);
        const colorData = {
          color: colorId,
          noteIdList: [this.note],
        };
        NoteService.changeCardColor(colorData).then(() => {
          eventBus.$emit("getAfterUpdatedNoteList");
        });
      }
    },
  },
};
</script>

<style scoped>
.color-palette {
  cursor: pointer;
}

.md-menu-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 10%;
  min-height: fit-content;
  z-index: 9999;
  position: absolute;
}

.color-items {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 6px;
}

.color-array{
  width: 22%;
  height: 35px;
  /* padding: 11%; */
  border-radius: 50%;
  margin: 2px;
  border: 1px solid rgb(204, 204, 204);
}
</style>