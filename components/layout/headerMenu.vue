<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      fixed
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      fixed
      app
    >
      <v-btn
        icon
        dark
        @click.stop="drawer = !drawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        dark
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      right: true,
      rightDrawer: false,
      items: [
        {
          icon: 'home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'fastfood',
          title: 'Zomato',
          to: '/zomato'
        },
        {
          icon: 'chat',
          title: 'Chat',
          to: '/chat'
        },
        {
          icon: 'security',
          title: 'Auth0 for Nuxt',
          to: '/auth0'
        },
        {
          icon: 'touch_app',
          title: 'Login Firebase',
          to: '/login-firebase'
        },
        {
          icon: 'storage',
          title: 'Cloud Firestore',
          to: '/cloud-firestore'
        }
      ],
      title: "Nuxt Websites"
    }
  }
}
</script>
