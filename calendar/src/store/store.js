import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

import User from '../modules/User'

Vue.use(Vuex);
Vue.use(axios);
export const store = new Vuex.Store({
  modules:{
    User,

  }

});
