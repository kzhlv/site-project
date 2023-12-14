function valueofInputs(){
    var inp1 = document.getElementById('inp1').value;
    var inp2 = document.getElementById('inp2').value;
    var inp3 = document.getElementById('inp3').value;
    var p1 = document.getElementById('p1')
    var p2 = document.getElementById('p2')
    var p3 = document.getElementById('p3')
    var password1 = document.getElementById('inp2').value
    var password2 = document.getElementById('inp3').value
    //Creating the moment of function where will be mistake
    if(inp1.length < 5){
        p1.innerHTML = "Not less than 5 characters"
        p1.value.style.border = '1px solid black'
    }
    else{
        p1.innerHTML = 'ready';
        p1.style.color = 'green'
    }
    if(inp2.length < 5){
        p2.innerHTML = "Not less than 8 characters"
        p2.value.style.border = '1px solid black'
    }
    else{
        p2.innerHTML ='ready';
        p2.style.color = 'green';

    }
    if (password1 === password2){
        window.location.href = '/'
    }
    else{
        p3.innerHTML = 'Password are тще similar'
        p3.style.color = 'red'
    }
}
