<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
    <Header />
    
      <router-view></router-view>
    
  </v-app>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',

  components: {
    Header,
  },

  data: () => ({
    //
  }),
  computed:{
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  }

};
</script>
