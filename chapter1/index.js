const boxes = document.querySelectorAll('.box');
const body = document.querySelector('body');

boxes.forEach(function(box){

    box.addEventListener('click', function(e){

        if(e.target.id === 'grey'){
            body.style.backgroundColor = 'grey';
        }

        if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue';
        }

        if(e.target.id === 'white'){
            body.style.backgroundColor = 'white';
        }

        if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow';
        }

    });

});