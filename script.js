const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt((document.querySelector('#height').value))
    const weight = parseInt((document.querySelector('#weight').value))
    const results = document.querySelector('#results')
    const p = document.querySelector('#p1')
    const p2 = document.querySelector('#p2')
    const p3 = document.querySelector('#p3')

    if (height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }
    else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    } else {
        const bmi = (weight / ((height * height)/10000)).toFixed(2)

        results.innerHTML = `<span>${bmi}</span>`;
        
        if(bmi<18.6){
            p.style.color = 'yellow';
        }
        else if (bmi>= 18.6 && bmi <=24.9){
            p2.style.color = 'green';
        }
        else {
            p3.style.color = 'red';
        }
    }



})