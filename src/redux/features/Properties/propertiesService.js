import axios from "axios";
import { properties_base_url } from "../../../utils/base_url";
// import { getConfig } from "../../utils/config";
// import { config } from "../../utils/config";

const getAllProperties = async () => {
  const response = await axios.get(`${properties_base_url}`);
  console.log(response)
  return response.data;
};

const propertiesService = {
  getAllProperties,
};

export default propertiesService;
