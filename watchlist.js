const form = document.getElementById('watch');
const addList = document.getElementById('addList');
const ul = document.getElementById('stockList');
console.log(addList.value);



form.addEventListener('submit', (e) => {
    e.preventDefault();

    const regex = /^[A-Z]{1,5}(?:\s*\d{6}[PC]\d{8})?$/;
    console.log(regex.test(addList.value.toUpperCase()));

    if (regex.test(addList.value.toUpperCase()) === false) {
        $('#watchListError').fadeIn('slow', function() {
            $('#watchListError').delay(5000).fadeOut();
        });
    } else {
        document.getElementById('watchListError').style.display = 'none';
        const text = addList.value;
        addList.value = '';
        const ul = document.getElementById('stockList');
        const li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    
        const button = document.createElement('button');
        button.textContent = 'Remove';
        li.appendChild(button);
    }

});

ul.addEventListener('click', (e) => {
    if (e.target.textContent === 'Remove') {
      const li = e.target.parentNode;
      const ul = li.parentNode;
      ul.removeChild(li);
    }
  });  