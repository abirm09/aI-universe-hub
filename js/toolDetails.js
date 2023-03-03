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
  modalBody.innerHTML = `
  <div class=" bg-red-50 border-2 border-red-300 p-5 rounded-lg">
    <div>
        <p class="text-2xl font-bold">${
          data.description ? data.description : "No data found"
        }</p>
    </div>
    <div class="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center">
        <div class="bg-white p-2 text-center rounded-md ">
            <h2 class="text-green-800 font-bold" id="pricing1">
            </h2>
        </div>
        <div class="bg-white p-2 text-center rounded-md" >
            <h2 class="text-orange-400 font-bold" id="pricing2">
            </h2>
        </div>
        <div class="bg-white p-2 text-center rounded-md">
            <h2 class="text-red-500 font-bold" id="pricing3">
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
            class="bg-red-500 px-4 py-2 rounded-lg text-white absolute top-2 right-2 select-none cursor-pointer"><span id="accuracy-number">${
              data.accuracy?.score ? data.accuracy?.score : "no data"
            }</span>% accuracy</span>
    </div>
    <div class="text-center mt-5">
        <h2 class="text-xl font-bold" id="example-input"></h2>
        <p class="mt-3" id="example-output"></p>
    </div>
</div>
  `;
  //pricing
  if (data.pricing !== null) {
    document.getElementById("pricing1").innerHTML = data.pricing[0].price;
    document.getElementById("pricing2").innerHTML = data.pricing[1].price;
    document.getElementById("pricing3").innerHTML = data.pricing[2].price;
  } else {
    document.getElementById("pricing1").innerHTML = "Free of cost";
    document.getElementById("pricing2").innerHTML = "Free of cost";
    document.getElementById("pricing3").innerHTML = "Free of cost";
  }

  //create integrations
  if (data.integrations !== null) {
    data.integrations.forEach(integration => {
      const integrationList = document.createElement("li");
      integrationList.innerHTML = `${integration}`;
      document.getElementById("integration-list").appendChild(integrationList);
    });
  } else {
    document.getElementById("integration-list").innerHTML = `No data found`;
  }

  //accuracy
  const accuracyNumber = document.getElementById("accuracy-number");
  if (accuracyNumber.innerText == "no data") {
    accuracyNumber.parentElement.classList.add("hidden");
  } else {
    accuracyNumber.parentElement.classList.remove("hidden");
  }
  if (data.input_output_examples !== null) {
    //example
    document.getElementById("example-input").innerHTML =
      data.input_output_examples[0].input;
    document.getElementById("example-output").innerHTML =
      data.input_output_examples[0].output;
  } else {
    document.getElementById("example-input").innerHTML =
      "Can you give any example?";
    document.getElementById("example-output").innerHTML =
      "No! Not Yet! Take a break!!!";
  }
};
