
const bitkiler = [
    { name: "Elma", url: "bitkiler/elma.html" },
    { name: "Pancar", url: "bitkiler/pancar.html" },
    { name: "Lahana", url: "bitkiler/lahana.html" },
    { name: "Kırmızı Biber", url: "bitkiler/kirmizibiber.html" },
    { name: "Havuç", url: "bitkiler/havuc.html" },
    { name: "Maydanoz", url: "bitkiler/maydanoz.html" },
    { name: "Salatalık", url: "bitkiler/salatalik.html" },
    { name: "Patlıcan", url: "bitkiler/patlican.html" },
    { name: "Nane", url: "bitkiler/nane.html" },
    { name: "Patates", url: "bitkiler/patates.html" },
    { name: "Turp", url: "bitkiler/turp.html" },
    { name: "Domates", url: "bitkiler/domates.html" },
    { name: "Menekşe", url: "bitkiler/menekse.html" },
    { name: "Kaktüs", url: "bitkiler/kaktus.html" },
    { name: "Süsen", url: "bitkiler/susen.html" },
    { name: "Bonsai", url: "bitkiler/bonsai.html" },
    { name: "Paşa Kılıcı", url: "bitkiler/pasakilici.html" },
    { name: "Kauçuk Bitkisi", url: "bitkiler/kaucukbitkisi.html" },
    { name: "Deve Tabanı", url: "bitkiler/devetabani.html" },
    { name: "Yucca", url: "bitkiler/yucca.html" },
    { name: "Sukkulent", url: "bitkiler/sukkulent.html" },
    { name: "Aloe Vera", url: "aloevera.html" },
    { name: "Orkide", url: "orkide.html" },
    { name: "Yelkençiçeği", url: "yelkencicegi.html" }
];

const searchInput = document.querySelector(".search-bar input");

if (searchInput) {
    const suggestionBox = document.createElement("div");
    suggestionBox.className = "suggestion-box";
    document.querySelector(".search-bar").appendChild(suggestionBox);

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        suggestionBox.innerHTML = ""; 

        if (query) {
            // Yazılan harfe göre  eşleşen bitkileri filtrele
            const filteredPlants = bitkiler.filter(plant => plant.name.toLowerCase().startsWith(query));
            filteredPlants.forEach(plant => {
                const suggestion = document.createElement("div");
                suggestion.className = "suggestion";
                suggestion.textContent = plant.name;
                suggestion.addEventListener("click", () => {
                    searchInput.value = plant.name; 
                    suggestionBox.innerHTML = ""; 

                    // İlgili URL'ye yönlendirme
                    window.location.href = plant.url; 
                });
                suggestionBox.appendChild(suggestion);
            });
        }
    });
}


