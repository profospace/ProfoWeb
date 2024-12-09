import axios from "axios";
import { properties_base_url, properties_filter_base_url } from "../../../utils/base_url";
// import { getConfig } from "../../utils/config";
// import { config } from "../../utils/config";

const getAllProperties = async () => {
  const response = await axios.get(`${properties_base_url}`);
  console.log(response)
  return response.data;
};
const getAllFilteredProperties = async (filters) => {
  console.log("filters", filters)
  const { bedrooms , bathrooms} = filters
  const response = await axios.get(`${properties_filter_base_url}?bedrooms=${bedrooms || ''}&bathrooms=${bathrooms || ''}`);
  console.log("response-filter" , response)
  return response.data.properties;
};

const propertiesService = {
  getAllProperties, getAllFilteredProperties
};

export default propertiesService;
