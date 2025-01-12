
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const plantCards = document.querySelectorAll('.plant-card');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterPlants);
});


function filterPlants() {
    
    const selectedMekan = getSelectedValues('mekan');
    const selectedSuIhtiyaci = getSelectedValues('suIhtiyaci');
    const selectedIsikIhtiyaci = getSelectedValues('isikIhtiyaci');
    const selectedSaksiBoyutu = getSelectedValues('saksiBoyutu');

    plantCards.forEach(card => {
        const mekan = card.getAttribute('data-mekan');
        const suIhtiyaci = card.getAttribute('data-su-ihtiyaci');
        const isikIhtiyaci = card.getAttribute('data-isik-ihtiyaci');
        const saksiBoyutu = card.getAttribute('data-saksi-boyutu');

        
        const isVisible =
            (selectedMekan.length === 0 || selectedMekan.includes(mekan)) &&
            (selectedSuIhtiyaci.length === 0 || selectedSuIhtiyaci.includes(suIhtiyaci)) &&
            (selectedIsikIhtiyaci.length === 0 || selectedIsikIhtiyaci.includes(isikIhtiyaci)) &&
            (selectedSaksiBoyutu.length === 0 || selectedSaksiBoyutu.includes(saksiBoyutu));

        // Bitki kartını gösterme veya gizleme
        card.style.display = isVisible ? 'block' : 'none';
    });
}


function getSelectedValues(name) {
    const selectedValues = [];
    document.querySelectorAll(`input[name="${name}"]:checked`).forEach(checkbox => {
        selectedValues.push(checkbox.value);
    });
    return selectedValues;
}
