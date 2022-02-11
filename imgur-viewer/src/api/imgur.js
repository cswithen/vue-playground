import qs from "qs";

import { imgurId } from "../../secrets";
const ROOT_URL = "https://api.imgur.com";

export default {
  login() {
    const querystring = {
      client_id: imgurId,
      response_type: "token",
    };

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      querystring
    )}`;
  },
};