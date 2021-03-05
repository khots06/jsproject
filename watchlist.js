const form = document.getElementById('watch');
const addList = document.getElementById('addList');
const ul = document.getElementById('stockList');




form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = addList.value;
    addList.value = '';
    const ul = document.getElementById('stockList');
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);

    const button = document.createElement('button');
    button.textContent = 'remove';
    li.appendChild(button);
});

ul.addEventListener('click', (e) => {
    if (e.target.textContent === 'remove') {
      const li = e.target.parentNode;
      const ul = li.parentNode;
      ul.removeChild(li);
    }
  });  