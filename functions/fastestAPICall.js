import fetchData from "./apiCall.js";

const fastestAPICall = () => {
  Promise.race([fetchData(8), fetchData(2), fetchData(4)])
    .then((dataArray) => {
      console.log("All data:", dataArray);
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
    });
};

export default fastestAPICall;
