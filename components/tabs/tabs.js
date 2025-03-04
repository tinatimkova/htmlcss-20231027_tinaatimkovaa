const switchTab = function(e) {
    const tabs = document.querySelectorAll('.tab');
    const activeTab = e.target.closest('.tab');

    tabs.forEach(tab => { 
        if (tab != activeTab && tab.classList.contains('tab_active')) 
            tab.classList.remove('tab_active');

        if (tab == activeTab) tab.classList.add('tab_active');
    });
}

const showCards = function(e) {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        if (card.classList.contains(e.target.id) || (e.target.id == 'all-components')) card.style.display = 'flex';
        else card.style.display = 'none';
    }); 
}

const navTabs =  document.querySelector('.tabs .tabs__menu');
const componentTabs = document.querySelector('.component .tabs__menu');

if (navTabs) navTabs.addEventListener('click', function(e) {
    switchTab(e);
    showCards(e);
});

if (componentTabs) componentTabs.addEventListener('click', function(e) {
    switchTab(e);
});