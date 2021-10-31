const tabsHeader = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');
tabsHeader.forEach(function (item) {
    item.addEventListener('click', function () {
        contentBoxes.forEach(function (item) {
            item.classList.add('hidden');
        })
        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('hidden');
    })
})

function addColor(event) {
    tabsHeader2.forEach(btn => {
        btn.classList.remove('color');
    });
    event.currentTarget.classList.add('color');
}
const tabsHeader2 = document.querySelectorAll('[data-tab]');
tabsHeader2.forEach(event => {
    event.addEventListener('click', addColor);
});
