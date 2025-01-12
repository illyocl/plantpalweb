$(document).ready(function () {
    const plantForm = document.getElementById('plantForm');
    plantForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const plantName = document.getElementById('plantName').value;
        const plantType = document.getElementById('plantType').value;
        const plantSize = document.getElementById('plantSize').value;

        const userId = localStorage.getItem('userId');

        const plant = {
            name: plantName,
            type: plantType,
            size: plantSize
        };

        try {
            const response = await fetch(`https://localhost:7035/api/Plant?userId=${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(plant)
            });

            const result = await response.json();
            if (response.ok) {
                alert(result.message);
                plantForm.reset();
                loadPlants();
                loadEvents(); 
            } else {
                alert(result.message || 'Bitki eklenirken bir hata oluştu.');
            }
        } catch (error) {
            console.error('Hata:', error);
            alert('Sunucuya bağlanırken bir hata oluştu.');
        }
    });

    const loadEvents = async () => {
        const userId = localStorage.getItem('userId');
        try {
            const response = await fetch(`https://localhost:7035/api/CalendarEvent/byUser?userId=${userId}`);
            const events = await response.json();
            console.log(events);
            $('#calendar').fullCalendar('removeEvents');
            events.forEach(event => {
                console.log(`Takvime Ekleniyor: ${event.title} - ${event.date}`);
                $('#calendar').fullCalendar('renderEvent', {
                    title: `${event.title} (${event.size || 'Bitki boyutu yok'})`,
                    start: event.date.split('T')[0],
                    allDay: true
                });
            });
        } catch (error) {
            console.error('Takvim olayları yüklenirken hata oluştu:', error);
        }
    };

    const loadPlants = async () => {
        const userId = localStorage.getItem('userId');
        try {
            const response = await fetch(`https://localhost:7035/api/Plant?userId=${userId}`);
            const plants = await response.json();

            $('#calendar').fullCalendar('removeEvents');
            plants.forEach(plant => {
                $('#calendar').fullCalendar('renderEvent', {
                    title: `${plant.name} (${plant.type}, ${plant.size})`,
                    start: plant.dateAdded.split('T')[0],
                    allDay: true
                });
            });
        } catch (error) {
            console.error('Bitkiler yüklenirken hata oluştu:', error);
        }
    };

    loadEvents();
    loadPlants(); 
});
