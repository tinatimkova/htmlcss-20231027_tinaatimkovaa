document.querySelector('.tabs').addEventListener('click', function(e) {
    const tabs = document.querySelectorAll('.tabs a');
    const active_tab = e.target;
    const cards = document.querySelectorAll('.card');

    tabs.forEach(tab => { 
        if (tab != active_tab && tab.classList.contains('tab_active')) 
            tab.classList.remove('tab_active');

        if (tab == active_tab) tab.classList.add('tab_active');
    });

    cards.forEach(card => {
        if (card.classList.contains(e.target.id) || (e.target.id == 'all-components')) card.style.display = 'flex';
        else card.style.display = 'none';
    }); 
})