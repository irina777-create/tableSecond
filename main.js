//Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

const table = document.createElement('table');

for (let i = 0; i < 10; i++) {
    const row = table.insertRow();
    for (let j = 0; j < 10; j++) {
        const cell = row.insertCell();
        cell.textContent = +(i === j);
    }
}

document.body.append(table);