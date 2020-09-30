<template>
  <div id="dashboard">
    <md-app>
      <md-app-toolbar class="md-primary" md-elevation="0">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">My Title</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>emoji_objects</md-icon>
            <span class="md-list-item-text">Notes</span>
          </md-list-item>

          <md-list-item>
            <md-icon>notifications</md-icon>
            <span class="md-list-item-text">Reminders</span>
          </md-list-item>

          <md-list-item>
            <md-icon>edit</md-icon>
            <span class="md-list-item-text">Edit Labels</span>
          </md-list-item>

          <md-list-item>
            <md-icon>archive</md-icon>
            <span class="md-list-item-text">Archive</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

        </md-list>

        
      </md-app-drawer>
    </md-app>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    data: () => ({
      menuVisible: false
    }),
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      }
    }
  }
</script>

<style scoped>

#dashboard {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.md-app {
  min-height: 350px;
  border: 1px solid rgba(#000, .12);
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

.md-list-item-text :hover {
  color: blue;
}

</style>