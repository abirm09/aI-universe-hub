// spinner function
const spinner = spinnerShow => {
  if (spinnerShow) {
    document.getElementById("loading-spinner").classList.remove("hidden");
  } else {
    document.getElementById("loading-spinner").classList.add("hidden");
  }
};
// load all data or six
const loadAllTool = async (showSix, sort) => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  spinner(true);
  try {
    const fetchData = await fetch(url);
    const response = await fetchData.json();
    const data = response.data.tools;
    createCard(data, showSix, sort);
  } catch (error) {
    console.log(error);
  }
};
loadAllTool(true);
//show all card
document.getElementById("load-more-btn").addEventListener("click", () => {
  loadAllTool(false);
});
//sort card in  descending order
// document.getElementById("sort-btn").addEventListener("click", () => {
//   loadAllTool(false, true);
// });
