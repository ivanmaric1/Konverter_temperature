document.getElementById('forma').addEventListener('submit', function(e) {
    e.preventDefault()
    document.getElementById('ispis').innerHTML = ""
    
    let brojka = document.getElementById('brojka').value
    let ulaz = document.getElementById('Ulaz');
    let jedinicaUlaza = ulaz[ulaz.selectedIndex].value;
    let izlaz = document.getElementById('Izlaz');
    let jedinicaIzlaza = izlaz[izlaz.selectedIndex].value;
    document.getElementById("ispis").style.color = "#fb2237";

    if(jedinicaUlaza === 'cel' && jedinicaIzlaza === 'far') {
            let reza = document.createElement('h1')
            reza.textContent = `${brojka} Celziusa iznosi ${(9/5) * (brojka) + 32} Fahrenheita.`
            document.getElementById('ispis').appendChild(reza)
        } 
    else if(jedinicaUlaza === 'cel' && jedinicaIzlaza === 'kel') {
            let reza = document.createElement('h1')
            reza.textContent = `${brojka} Celziusa iznosi ${Number(brojka) +273} Kelvina.`
            document.getElementById('ispis').appendChild(reza)
        }
    else if (jedinicaUlaza === 'far' && jedinicaIzlaza === 'cel') {
            let reza = document.createElement('h1')
            reza.textContent = `${brojka} Fahrenheita iznosi ${((5/9) * (brojka - 32)).toFixed(2)} Celsiusa.`
            document.getElementById('ispis').appendChild(reza)
        } 
    else if(jedinicaUlaza === 'far' && jedinicaIzlaza === 'kel') {
            let reza = document.createElement('h1')
            reza.textContent = `${brojka} Fahrenheita iznosi ${((5/9) * (brojka - 32) +273).toFixed(2)} Kelvina.`
            document.getElementById('ispis').appendChild(reza)
        }
    else if (jedinicaUlaza === 'kel' && jedinicaIzlaza === 'cel') {
            let reza = document.createElement('h1')
            reza.textContent = `${brojka} Kelvina iznosi ${brojka -273} Celsiusa.`
            document.getElementById('ispis').appendChild(reza)
        } 
    else if(jedinicaUlaza === 'kel' && jedinicaIzlaza === 'far') {
            let reza = document.createElement('h1')
            reza.textContent = `${brojka} Kelvina iznosi ${((9/5)*(brojka - 273) +32).toFixed(2)} Fahrenheita.`
            document.getElementById('ispis').appendChild(reza)
        }    
})
