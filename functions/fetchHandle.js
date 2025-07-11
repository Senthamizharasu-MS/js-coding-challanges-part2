import fetchData from "./apiCall.js";

const fetchHandle = async (id) => {
  try {
    const data = await fetchData(id);
    console.log("Success:", data);
  } catch (error) {
    console.error("Error:", error);
  }
};

export default fetchHandle;
