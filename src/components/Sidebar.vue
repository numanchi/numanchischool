<template>
  <v-navigation-drawer app v-model="drawer" disable-resize-watcher mini-variant-width="10024">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6" v-text="'TRMC'" />
          <v-list-item-subtitle v-text="'Thakur Ram Bahumukhi Campus'" />
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list expand nav tile shaped class="pl-0">
        <v-list-item-group v-model="selectedItem">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
            <v-list-item-icon class="mx-2">
              <v-icon size='20' v-text="item.icon" />
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.title" style="letter-spacing: 1px; font-weight: 400 !important; font-size: 18px !important;" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>  
</template>

<script>
export default {
  name: 'SidebarDrawer',  
  data: () => ({
    selectedItem: 0, 
  }),
  computed: {
    drawer: {
      get () { return this.$store.state.drawer },
      set (val) { this.$store.commit('SET_DRAWER', val) }
    },  
  }  
}
</script>