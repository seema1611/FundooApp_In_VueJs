<template>
  <div class="color-palette">
    <md-menu md-size="medium" md-align-trigger md-direction="top-start">
      <md-icon md-menu-trigger>palette</md-icon>
      
      <md-menu-content >
        <div class="color-items">

           <div  class="color-array" v-for="(color,index ) in colorArray" 
              v-bind:key="index"
              v-bind:style="{background : color.color}" 
              v-bind:value="value"
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
        { color: '#ffffff', value: 'Default' }, { color: '#f61c08', value: 'Red' }, 
        { color: '#f0b401', value: 'Default' }, { color: '#ffea04', value: 'Default' },
        { color: '#87fc02', value: 'Default' }, { color: '#00eef7', value: 'Default' }, 
        { color: '#a9eaf8', value: 'Default' }, { color: '#3803f5', value: 'Default' },
        { color: '#8707f7', value: 'Default' }, { color: '#f5a8e2', value: 'Default' },
        { color: '#cc5d31', value: 'Default' }, { color: '#6a6d6d', value: 'Default' },
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