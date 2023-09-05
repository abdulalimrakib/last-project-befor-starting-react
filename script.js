

fetch(`https://openapi.programming-hero.com/api/ai/tools`)
    .then((response) => response.json())
    .then((value) => {
        
        let div = document.getElementById("result");
        for (let id = 0; id < 6; id++) {
            if(id==5)
            id=7;
            let data = value.data.tools[id];
            let newDiv = document.createElement("div");
            newDiv.classList.add("bg-white", "border-2", "p-5", "shadow-md", "rounded-lg", "transform", "hover:scale-105", "transition", "duration-300")

             console.log(data)
            // console.log(data.image)
            // console.log(data.name);
            // console.log(data.published_in);

             let features = [];
                for (let i = 0; i < 3; i++) {
                    features.push(`${i + 1}. ${data.features[i]}`)
                }
                //  console.log(features);

            newDiv.innerHTML=`
                    <a class="transform hover:scale-105 transition duration-300" href="">
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
                    </a>
                `;
            div.appendChild(newDiv)
        }


    })