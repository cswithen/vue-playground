import api from "../../api/imgur";
import { router } from "../../main";

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
  async uploadImages(context, images) {
    // Get access token
    const { token } = context.rootState.auth;

    // Call our API module to do the upload
    await api.uploadImages(images, token);

    // Redirect our user to ImageList component
    router.push("/");
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
