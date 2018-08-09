function generateAge()
{
    var cur_date = new Date();

    var bdate = new Date(document.getElementById('bdate').value);

    var age = cur_date.getFullYear() - bdate.getFullYear();
    var m = cur_date.getMonth() - bdate.getMonth();
    
    if(m < 0 || (m ===  0 && cur_date.getDate() < bdate.getDate())){
        age--;
    }
    
    if(age > 18){
        alert("You are now free to vote");
        window.open('poll.html');
    }
    else{
        alert("You are not allowed to vote");
    }
}


function voteDemoc(){    
    var democ = document.querySelector('#democ').textContent;
    democ++;
    document.getElementById('democ').innerHTML = democ;
}

function voteFederal(){
    var federal = document.querySelector('#federal').textContent;
    federal++;
    document.getElementById('federal').innerHTML = federal;
}

var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
