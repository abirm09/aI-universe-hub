const toolDetails = async id => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  try {
    const loadData = await fetch(url);
    const response = await loadData.json();
    const data = response.data;
    loadModal(data);
  } catch (error) {
    console.log(error);
  }
};
const loadModal = data => {
  const modalBody = document.getElementById("modal-body");
  console.log(modalBody);
};
