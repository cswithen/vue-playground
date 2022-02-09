import api from "../../api/imgur";
import qs from "qs";

const state = {
  token: null,
};

const getters = {
  isLoggedIn: (state) => !!state.token,
};

const actions = {
  login: () => {
    api.login();
  },
  finalizeLogin: (context, hash) => {
    const query = qs.parse(hash.replace("#", ""));

    context.commit("setToken", query.access_token);
  },
  logout: (context) => {
    context.commit("setToken", null);
  },
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  },
};

export default {
  state: () => state,
  getters,
  actions,
  mutations,
};
