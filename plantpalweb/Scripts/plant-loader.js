const plantContainer = document.createElement('div');
plantContainer.id = 'plant-container';
document.body.appendChild(plantContainer);

function loadPlants(folderPath) {
    plantContainer.innerHTML = ""; 

    
    const files = {
        "bitkiler": [
            "bitkiler/elma.html" ,
            "bitkiler/pancar.html" ,
            "bitkiler/lahana.html" ,
            "bitkiler/kirmizibiber.html" ,
            "bitkiler/havuc.html",
            "bitkiler/maydanoz.html" ,
            "bitkiler/salatalik.html" ,
            "bitkiler/patlican.html" ,
            "bitkiler/nane.html" ,
            "bitkiler/patates.html" ,
            "bitkiler/turp.html" ,
            "bitkiler/domates.html" ,
            "bitkiler/menekse.html" ,
            "bitkiler/kaktus.html" ,
            "bitkiler/susen.html" ,
            "bitkiler/bonsai.html" ,
            "bitkiler/pasakilici.html" ,
            "bitkiler/kaucukbitkisi.html" ,
            "bitkiler/devetabani.html" ,
            "bitkiler/yucca.html" ,
            "bitkiler/sukkulent.html" ,
            "aloevera.html" ,
            "orkide.html" ,
            "yelkencicegi.html" 
        ],
        
    };

    
    const selectedFiles = files[folderPath] || [];
    selectedFiles.forEach(file => {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                plantContainer.insertAdjacentHTML("beforeend", data);
            });
    });
}


document.querySelector('.navbar').addEventListener('click', (event) => {
    const target = event.target;

    if (target.tagName === 'A') {
        event.preventDefault();

        if (target.textContent === "İç Mekan Bitkileri") {
            loadPlants("icmekan");
        } else if (target.textContent === "Dış Mekan Bitkileri") {
            loadPlants("dismekan");
        } else if (target.textContent === "Bitkiler") {
            loadPlants("bitkiler");
        }
    }
});
