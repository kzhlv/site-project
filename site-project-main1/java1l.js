function valueofInputs(){
    var inp1 = document.getElementById('inp1').value;
    var inp2 = document.getElementById('inp2').value;
    var p1 = document.getElementById('p1')
    var p2 = document.getElementById('p2')
    if(inp1.length < 5){
        p1.innerHTML = "Not less than 5 characters"
        p1.value.style.border = '1px solid black'
    }
    else{
        p1.innerHTML = 'ready';
        p1.style.color = 'green'
    }
    if(inp2.length < 5){
        p2.innerHTML = "Please write your password"
        p2.value.style.border = '1px solid black'
    }
    else{
        p2.innerHTML ='ready';
        p2.style.color = 'green';

    }
    window.location.href = '/'
}