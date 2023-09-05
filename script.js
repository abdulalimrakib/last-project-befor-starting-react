fetch(`https://openapi.programming-hero.com/api/ai/tools`)
    .then((response) => response.json())
    .then((value) => {
        
        let div = document.getElementById("result");
        for (let id = 0; id < 6; id++) {
            if (id ==5)
            id=7;
            let data = value.data.tools[id];

            let newDiv = document.createElement("div");
            newDiv.setAttribute("id", `${data.id}`)
            newDiv.classList.add("bg-white", "border-2", "p-5", "shadow-md", "rounded-lg", "transform", "hover:scale-105", "transition", "duration-300")
            

             let features = [];
                for (let i = 0; i < 3; i++) {
                    features.push(`${i + 1}. ${data.features[i]}`)
                }

            newDiv.innerHTML=`
                    <div onclick="handelPopUp(${data.id})">
                        <img class="rounded-md max-h-[200px] min-w-full" src="${data.image}" alt="">
                        <h3 class="py-2 font-bold text-[20px] text-start">Features</h3>
                        <ul class="text-start">
                            <li>${features[0]}</li>
                            <li>${features[1]}</li>
                            <li>${features[2]}</li>
                        </ul>
                        <hr class="my-3 mx-6 border-1 border-gray-300">
                        <h2 class="font-bold text-[20px] text-start">${data.name}</h2>
                        <p class="text-start"><i class="fa-solid fa-calendar-days pr-2"></i> ${data.published_in}</p>
                    </div>
                `;
            div.appendChild(newDiv)
        }
    })



fetch(`https://openapi.programming-hero.com/api/ai/tool/01`)
    .then((response) => response.json())
    .then((value)=>{
        
        let data= value.data;
        let popUp = document.getElementById("popUp");

        popUp.innerHTML = `
        <div class="my_style grid grid-cols-2 gap-5 w-[70%] p-16 bg-white rounded-xl">
            <div class="bg-[#FEF6F6] p-5 rounded-lg shadow-xl">
                <div>
                    <h2 class="text-[20px] font-bold">${data.description}</h2>
                </div>
                <div class="grid grid-cols-3 gap-5 py-5">
                    <div class="text-center bg-white p-3 rounded-md text-green-500 font-medium">
                        ${data.pricing[0].price}
                        ${data.pricing[0].plan}
                    </div>
                    <div class="text-center bg-white p-3 rounded-md text-yellow-500 font-medium">
                        ${data.pricing[1].price}
                        ${data.pricing[1].plan}
                    </div>
                    <div class="text-center bg-white p-3 rounded-md text-red-500 font-medium">
                        ${data.pricing[2].price}
                        ${data.pricing[2].plan}
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-5 py-5">
                    <div class="">
                    <h2 class="py-3 text-[20px] font-bold">Features</h2>
                        <ul class="">
                            <li class="list-disc">${data.features[1].feature_name}</li>
                            <li class="list-disc">${data.features[2].feature_name}</li>
                            <li class="list-disc">${data.features[3].feature_name}</li>
                        </ul>
                    </div>
                    <div>
                    <h2 class="py-3 text-[20px] font-bold">Integrations</h2>
                        <ul class="">
                            <li class="list-disc">${data.integrations[0]}</li>
                            <li class="list-disc">${data.integrations[1]}</li>
                            <li class="list-disc">${data.integrations[2]}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="bg-[#FEF6F6] p-5 rounded-lg shadow-lg">
                <img class="rounded-2xl" src="${data.image_link[0]}" alt="">
                <div class="text-center">
                    <h2 class="py-3 text-[20px] font-bold">${data.input_output_examples[0].input}</h2>
                    <p>${data.input_output_examples[0].output}</p>
                </div>
            </div>
        </div>
        `;
    })