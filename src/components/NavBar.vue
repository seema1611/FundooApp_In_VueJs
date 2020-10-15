<template>
  <div class="dashboard-container">
    <div class="navbar-container">
      <md-toolbar class="md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button
              class="md-icon-button menubtn"
              @click="toggleMenu()"
            >
              <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title">
              <img v-bind:src="require('../assets/googlekeep.png')" />
              <span id="title"> Fundoo </span>
            </span>
          </div>
          
          <div class="search-icon">
            <img class ="img-searchicon" v-bind:src="require('../assets/search.png')" /> 
          </div>         
          <md-autocomplete
            class="search"
            v-model="searchText"
            :md-options="options"
            md-layout="box"
          >
            <label>
                Search...
            </label>
          </md-autocomplete>

          <div class="md-toolbar-section-end">
            <md-menu md-size="medium" md-align-trigger>

              <md-button class="md-icon-button" md-menu-trigger>
                <img class ="img-usericon" v-bind:src="require('../assets/usericon.png')" />
              </md-button>
              
              <md-menu-content>
                <div class="profile">
                  <md-button class="md-icon-button">
                    <img class ="img-usericon" v-bind:src="require('../assets/usericon.png')" />
                  </md-button><br />                    

                  <label class="profile-name">
                    {{ firstName }} {{lastName}}
                  </label><br />
                  <label class="profile-email">{{ email }}</label
                  ><br />
                  <div id="manage">Manage your Google Account</div>
                  <md-button id="signout" @click="signout">Signout</md-button>
                </div>
              </md-menu-content>
            </md-menu>
          </div>

        </div>
      </md-toolbar>
    </div>
    <div class="navbar-items">
      <md-drawer
        :md-active.sync="showMenu"
        md-swipeable
        md-permanent="clipped"
        md-persistent="mini"
      >
        <md-list>
          <md-list-item @click="goTo('Notes')" id="Notes">
            <md-icon>emoji_objects</md-icon>
            <span class="md-list-item-text">Notes</span>
          </md-list-item>

          <md-list-item @click="goTo('Reminders')" id="Reminders">
            <md-icon>notifications</md-icon>
            <span class="md-list-item-text">Reminders</span>
          </md-list-item>

          <md-list-item @click="goTo('Labels')" id="Labels">
            <md-icon>edit</md-icon>
            <span class="md-list-item-text">Edit Labels</span>
          </md-list-item>

          <md-list-item @click="goTo('Archive')" id="Archive">
            <md-icon>archive</md-icon>
            <span class="md-list-item-text">Archive</span>
          </md-list-item>

          <md-list-item @click="goTo('Trash')" id="Trash">
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>
        </md-list>
      </md-drawer>
      <div class="component">
      <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import {eventBus} from '../main'

export default {
  name: "NavBar",
  data() {
    return {
      searchText: "",
      options: [],
      showMenu: false,
      selected: "",
      firstName: "",
      lastName: "",
      email: "",
    };
  }, 
  watch: {
    searchText: function () {
      eventBus.$emit("searchNotesWithTitle", this.searchText);
    },
  }, 
  methods: {
    toggleMenu: function () {
      if (this.showMenu == false) {
        return (this.showMenu = true);
      }
      this.showMenu = false;
    },
    goTo: function (selectedOption) {
      var styleproperty = document.getElementById(selectedOption).style;
      if (this.selected.length != 0) {
        document.getElementById(this.selected).setAttribute("style", "");
      }
      styleproperty.backgroundColor = "rgb(255, 221, 177)";
      styleproperty.borderTopRightRadius = "20px";
      styleproperty.borderBottomRightRadius = "20px";
      this.selected = selectedOption;
      if (selectedOption == "Notes") {
        this.$router.push("note");
      }
      if (selectedOption == "Trash") {
        this.$router.push("trash");
      }
      if (selectedOption == "Archive") {
        this.$router.push("archive");
      }
    },
    signout: function () {
      localStorage.removeItem("token");
      localStorage.removeItem("userfirstname");
      localStorage.removeItem("userlastname");
      localStorage.removeItem("email");
      this.$router.push("/");
    },
  },
  created() {
    this.firstName = localStorage.getItem("userfirstname");
    this.lastName = localStorage.getItem("userlastname");
    this.email = localStorage.getItem("email");
  },   
};
</script>

<style scoped>
.dashboard-container {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.navbar-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
}

.md-list-item:hover {
  cursor: pointer;
  background-color: rgb(255, 221, 177);
  border-top-right-radius: 20px;
   border-bottom-right-radius: 20px;
}

.md-toolbar.md-theme-default.md-primary {
  background-color: transparent;
  box-shadow: none;
  border-bottom: 2px solid silver;
}

.md-icon {
  color: black !important;
}

.search {
  max-width: 44%;
  display: flex;
  flex-direction: row;
  background-color:whitesmoke !important;
  color :rgb(2, 0, 0);
  margin-right: 5%;
}

.search-icon {
  background-color:whitesmoke;
  width: 40px;
  height: 40px;
}

.img-searchicon {
  margin-top: 30%;
  width: 20px;
  height: 20px;
}

.search-icon :hover{
  background-color: rgb(212, 207, 207);
  border-radius: 50%;
  border: 80px, 80px, 80px, 80px;
}

.md-toolbar 
.md-autocomplete
.md-theme-default
.md-autocomplete-box {
  height: 44px;
  border-radius: 7px;
  padding-right: inherit;
}

.md-title {
  color: grey !important;
  margin-right: 20% !important;
}

img {
  width: 14%;
}

.component {
  width: 85%;
  display: flex;
  min-height: initial;
  flex-direction: column;
}

.navbar-items {
  display: flex;
  min-height: 91vh;
}

.md-field .md-input,
.md-field .md-textarea {
  width: 100% !important;
}

.md-menu-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-height: fit-content;
}

.md-icon-button {
  border: 1px solid rgb(156, 149, 149);
  background-color: white;
}

.menubtn {
  background-color: transparent;
  border: none;
}

.img-usericon{
  width: 40px;
  height: 45px;
  margin-right: 3.0em;
  border-radius: 15px;
}

.profile {
  width: 100%;
  border-radius: 65%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-name {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  font-weight: bolder;
}

.profile-email {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  margin-top: -6%;
}

#signout {
  width: 40%;
  color: white;
  border-radius: 7px;
  color: black;
  border: 1px solid black;
}

#signout :hover {
  background-color: rgb(236, 229, 229);
}

#manage {
  margin-bottom: 7%;
  font-family: Arial, Helvetica, sans-serif;
  background-color: white;
  width: 99%;
  color:  rgb(14, 12, 12);
  border-radius: 10px;
  font-size: 15px;
  border: 1px solid black;
  cursor: pointer;
}

#manage :hover {
  background-color: rgb(236, 229, 229);
}

.md-drawer {
  width: 17%;
}

@media screen and (max-width: 1025px) {
  .navbar-items {
    min-height: 95vh;
  }

  .md-menu-content {
    width: 80%;
    left: 88px;
  }
}

@media screen and (max-width: 480px) {
  #title {
    display: none;
  }

  img {
    width: 100%;
  }

  .component {
    margin-left: 10px;
  }

  .md-drawer {
    width: 20%;
  }
}
</style>