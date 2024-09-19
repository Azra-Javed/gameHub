import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "44ede774706e4f3ca3bd24fbda3816df",
  },
});
