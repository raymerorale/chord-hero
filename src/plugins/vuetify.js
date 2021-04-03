import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);
const vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#027a9f',
          secondary: '#f6f5f5',
          tertiary: '#7bc5c1',
          accent: '#eab875',
          error: '#c30083',
          warning: '#d3e3e2',
          background: "#d3e0ea"
        },
      },
    },
  })

export default vuetify;