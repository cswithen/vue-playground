import api from "../../api/imgur";

const state = {
  images: [],
};

const getters = {
  allImages: (state) => state.images,
};

const actions = {
  async fetchImages(context) {
    const { token } = context.rootState.auth;
    const response = await api.fetchImages(token);
    context.commit("setImages", response.data.data);
  },
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  },
};

export default {
  state: () => state,
  getters,
  actions,
  mutations,
};
