<template>
  <v-toolbar
    dark
    prominent
    :elevation="4"
    max-height="60"
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>JVL</v-toolbar-title>
    
    <v-spacer></v-spacer>
    
    <router-link :to="{'name': 'home'}">
      <v-btn>
        Home
      </v-btn>
    </router-link> 
    <router-link :to="{'name': 'login'}">
      <v-btn>
        Login
      </v-btn>
    </router-link>
    <router-link :to="{'name': 'register'}">
      <v-btn>
        Register
      </v-btn>
    </router-link>
    <router-link :to="{'name': 'dashboard'}">
      <v-btn>
        User
      </v-btn>
    </router-link>
    <router-link :to="{'name': 'notes'}">
      <v-btn>
        Notes
      </v-btn>
    </router-link>

    <v-btn icon>
      <v-icon>mdi-export</v-icon>
    </v-btn>
  </v-toolbar>
</template>