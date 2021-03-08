<template>
  <v-card color="grey lighten-4" flat height="50px" tile>
    <v-toolbar color="indigo" dense dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="color--white">Vuetify</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-badge
        :value="hover"
        color="deep-purple accent-4"
        content="9999+"
        left
        transition="slide-x-transition"
      >
        <v-hover v-model="hover">
          <v-icon color="grey lighten-1" large> mdi-account </v-icon>
        </v-hover>
      </v-badge>

      <div class="hidden-sm-and-down">
        <router-link to="/">
          <v-btn text> HOME </v-btn>
        </router-link>
        <router-link to="/About">
        <v-btn text> About</v-btn>
        </router-link>
        
        <router-link to="/Contact">
          <v-btn text> Contact us</v-btn>
        </router-link>
        <router-link to="/Login">
          <v-btn text> Login</v-btn>
        </router-link>
      </div>
      <div class="hidden-md-and-up">
        <v-navigation-drawer v-model="drawer" absolute temporary height="300px">
          <v-list-item>
            <v-list-item-avatar>
              <v-img
                src="https://randomuser.me/api/portraits/men/78.jpg"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>John Leider</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense>
            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </div>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
      ],
    };
  },
  data: () => ({
    hover: false,
  }),
};
</script>