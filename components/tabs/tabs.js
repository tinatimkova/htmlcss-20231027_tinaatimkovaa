document.querySelectorAll('.tabs__menu').forEach(menu => menu.addEventListener('click', function(e) {
    const cards = document.querySelectorAll('.card');
    switchTab(e);
    cards.forEach(card => {
        if (card.classList.contains(e.target.id) || (e.target.id == 'all-components')) card.style.display = 'flex';
        else card.style.display = 'none';
    }); 
}));

const switchTab = function(e) {
    const tabs = document.querySelectorAll('.tab');
    const active_tab = e.target;

    tabs.forEach(tab => { 
        if (tab != active_tab && tab.classList.contains('tab_active')) 
            tab.classList.remove('tab_active');

        if (tab == active_tab) tab.classList.add('tab_active');
    });
}