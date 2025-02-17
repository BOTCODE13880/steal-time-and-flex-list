const values = {
    'giraffe': 1.5,
    'egg': 0.85
};

function addItem(trader) {
    const traderBox = document.getElementById(trader).querySelector('.items');
    const itemKeys = Object.keys(values);
    const randomItem = itemKeys[Math.floor(Math.random() * itemKeys.length)];
    const img = document.createElement('img');
    img.src = `images/${randomItem}.png`;
    img.dataset.value = values[randomItem];
    traderBox.appendChild(img);
    updateTradeStatus();
}

function updateTradeStatus() {
    let youValue = Array.from(document.getElementById('you').querySelectorAll('img'))
                    .reduce((sum, img) => sum + parseFloat(img.dataset.value), 0);
    let themValue = Array.from(document.getElementById('them').querySelectorAll('img'))
                    .reduce((sum, img) => sum + parseFloat(img.dataset.value), 0);
    
    const status = document.getElementById('status');
    if (youValue > themValue) {
        status.textContent = 'LOSE';
        status.style.color = 'red';
    } else if (youValue < themValue) {
        status.textContent = 'WIN';
        status.style.color = 'green';
    } else {
        status.textContent = 'FAIR';
        status.style.color = 'yellow';
    }
}
