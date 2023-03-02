// load all data or six
const loadAllTool = async showSix => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  try {
    const fetchData = await fetch(url);
    const response = await fetchData.json();
    const data = response.data.tools;
    createCard(data, showSix);
  } catch (error) {
    console.log(error);
  }
};
loadAllTool(true);
//show all card
document.getElementById("load-more-btn").addEventListener("click", () => {
  loadAllTool(false);
  document.getElementById("load-mode").classList.add("hidden");
});
