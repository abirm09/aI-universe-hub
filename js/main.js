const toolsCard = document.getElementById("tools-card");
const createCard = (data, showSix) => {
  if (showSix) {
    data = data.slice(0, 6);
  }
  data.forEach(tool => {
    const card = document.createElement("div");
    card.classList.add(
      "card",
      "w-80",
      "md:w-96",
      "bg-base-100",
      "shadow-xl",
      "mx-auto"
    );
    card.innerHTML = `
    <figure class="px-3 pt-3">
        <img src="${tool.image}"
            alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body p-4">
        <div>
            <h2 class="font-semibold text-2xl text-left">Features </h2>
            <ol class="list-decimal ml-5 mt-4">
                <li>${tool.features[0]}</li>
                <li>${tool.features[1]}</li>
                <li>${tool.features[2]}</li>
            </ol>
        </div>
        <hr>
        <div class="card-actions justify-between mt-4 items-end">
            <div>
                <h2 class="font-semibold text-2xl text-left">${tool.name} </h2>
                <div class="mt-2">
                    <span><i class="fa-regular fa-calendar"></i></span> <span>${tool.published_in}</span>
                </div>
            </div>
            <label class="btn btn-outline btn-primary rounded-full" for="showToolDetails" onclick="toolDetails('${tool.id}')"><i
                    class="fa-solid fa-arrow-right"></i></label>
        </div>
    </div>
    `;
    toolsCard.appendChild(card);
  });
};
