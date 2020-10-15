<template>
  <div class="color-palette">
    <md-menu md-size="medium" md-align-trigger md-direction="top-start">
      <md-icon md-menu-trigger>palette</md-icon>
      
      <md-menu-content >
        <div class="color-items">
           <div  class="color-array" v-for="(color,index ) in colorArray" 
              v-bind:key="index"
              v-bind:style="{background : color.color}"
              @click="changeColor(color.color)" >
              <span class="tooltiptext">{{color.name}}</span>          
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
       showTooltip: false,  

        colorArray : [
        { color: '#ffffff', name: 'Default' }, { color: '#f61c08', name: 'Red'}, 
        { color: '#f0b401', name: 'Orange' }, { color: '#ffea04' , name: 'Yellow'},
        { color: '#87fc02', name: 'Green'}, { color: '#00eef7', name: 'Teal'}, 
        { color: '#a9eaf8', name: 'Blue'}, { color: '#3803f5', name: 'Dark blue'},
        { color: '#8707f7', name: 'Purple'} ,{ color: '#f5a8e2', name: 'Pink'},
        { color: '#cc5d31', name: 'Brown'}, { color: '#6a6d6d', name: 'Grey'},
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
        NoteService.changeCardColor(colorData)
        .then(() => { 
          eventBus.$emit("getAfterUpdatedNoteList");
        })
        .catch((error) => {
          console.log(error);
        });
      }
    },
  },
};
</script>

<style scoped>
.md-avatar {
  margin: 36px;
}

.md-tooltip {
  font-size: 15px;
}

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
  border-radius: 50%;
  margin: 2px;
  border: 1px solid rgb(204, 204, 204);
  position: relative;
  display: inline-block;
}

.color-array .tooltiptext {
  visibility: hidden;
  width: 50px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  font-size: 10px;
  position: absolute;
  z-index: 1;
}

.color-array:hover .tooltiptext {
  visibility: visible;
}

</style>