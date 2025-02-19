const menu = document.querySelector('.tabs');
const tabs = document.querySelectorAll('.tabs a');

menu.addEventListener('click', function(e) {
    const selected_tab = e.target;

    tabs.forEach(tab => { 
        if (tab != selected_tab && tab.classList.contains('tab_active')) 
            tab.classList.remove('tab_active');

        if (tab == selected_tab) tab.classList.add('tab_active');
    });
})