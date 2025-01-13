import axios from "axios";
import { buildings_base_url} from "../../../utils/base_url";

const getAllBuildings = async () => {
  const response = await axios.get(`${buildings_base_url}`);
  console.log(response)
  return response.data;
};


const buildingsService = {
  getAllBuildings
};

export default buildingsService;
