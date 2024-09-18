import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2bf4ac228ada4ba8a17f419740b39a6c",
  },
});
