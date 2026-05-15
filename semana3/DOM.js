const input = document.getElementById('entrada');
const btn = document.getElementById('btnSend');
const list = document.getElementById('listaNotas');
const father = document.querySelector('.padre');


btn.addEventListener('click', () => {

    if (input.value === '') {
        alert('No puede estar vacio')
    } else {
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Eliminar';

        deleteBtn.addEventListener('click', () =>{
            father.removeChild(element);
            console.log('Se eliminó la nota');
        })

        const element = document.createElement('li');
        element.innerHTML = input.value;

        element.append(deleteBtn);
        father.appendChild(element);

        input.value = '';
        console.log('Se agregó la nota');

    }
})