//single tool details
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
//load modal function
const loadModal = data => {
  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = "";
  console.log(data);
  modalBody.innerHTML = `
  <div class=" bg-red-50 border-2 border-red-300 p-5 rounded-lg">
    <div>
        <p class="text-2xl font-bold">${
          data.description ? data.description : "No data found"
        }</p>
    </div>
    <div class="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center">
        <div class="bg-white p-2 text-center rounded-md ">
            <h2 class="text-green-800 font-bold">
                ${
                  // data.pricing[0]?.price
                  //   ? data.pricing[0]?.price
                  //   : "No data found"
                  ""
                }
            </h2>
        </div>
        <div class="bg-white p-2 text-center rounded-md">
            <h2 class="text-orange-400 font-bold">
                ${
                  // data.pricing[1]?.price
                  //   ? data.pricing[1]?.price
                  //   : "No data found"
                  ""
                }
            </h2>
        </div>
        <div class="bg-white p-2 text-center rounded-md">
            <h2 class="text-red-500 font-bold">
                ${
                  // data.pricing[2]?.price
                  //   ? data.pricing[2]?.price
                  //   : "No data found"
                  ""
                }
            </h2>
        </div>
    </div>
    <div class="grid grid-cols-1  md:grid-cols-2 gap-5 mt-5">
        <div>
            <h2 class="font-bold text-2xl">Features</h2>
            <ul class="list-disc ml-6">
                <li>${
                  data.features["1"]?.feature_name
                    ? data.features["1"]?.feature_name
                    : "No data found"
                }</li>
                <li>${
                  data.features["2"]?.feature_name
                    ? data.features["2"]?.feature_name
                    : "No data found"
                }</li>
                <li>${
                  data.features["3"]?.feature_name
                    ? data.features["3"]?.feature_name
                    : "No data found"
                }</li>
            </ul>
        </div>
        <div>
            <h2 class="font-bold text-2xl">Integrations</h2>
            <ul class="list-disc ml-6" id="integration-list">
            
            </ul>
        </div>
    </div>
</div>
<div class=" border-2 border-gray-200 p-5 rounded-lg">
    <div class="relative">
        <img src="${data.image_link[0]}" class="rounded-xl">
        <span
            class="bg-red-500 px-4 py-2 rounded-lg text-white absolute top-2 right-2 select-none cursor-pointer"><span>${
              data.accuracy?.score ? data.accuracy?.score : "No"
            }</span> accuracy</span>
    </div>
    <div class="text-center mt-5">
        <h2 class="text-xl font-bold">Lorem ipsum dolor sit amet.</h2>
        <p class="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio nostrum illum
            recusandae
            obcaecati libero earum.</p>
    </div>
</div>
  `;
  //create integrations
  if (data.integrations !== null) {
    data.integrations.forEach(integration => {
      const integrationList = document.createElement("li");
      integrationList.innerHTML = `${integration}`;
      document.getElementById("integration-list").appendChild(integrationList);
    });
  }
};
