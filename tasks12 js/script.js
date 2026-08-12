
var elements = document.getElementsByClassName('text-dark');
for (var i = 0; i < elements.length; i++) {
    elements[i].innerText = "Web design Summer G9";
    elements[i].style.backgroundColor = "rgba(255, 255, 255, 0.15)"; 
    elements[i].style.color = "goldenrod"; 
    elements[i].style.padding = "5px";
    elements[i].style.borderRadius = "4px";
}


if (document.getElementById('h1_element')) {
    var h1 = document.getElementById('h1_element');
    h1.classList.remove('border'); 
}


function changeImg() {
    var img = document.getElementById('card-img');
   
    if (img.src.match("images/1.jpg")) {
        img.src = "images/2.jpg";
    } else {
        img.src = "images/1.jpg";
    }
}

function handleClick(element) {
    console.log("Clicked Image Source:", element.src);
}


var userNameInput = document.getElementById('userName');
var liveWelcome = document.getElementById('live-welcome');

if (userNameInput && liveWelcome) {
    userNameInput.addEventListener("input", () => {
        if(userNameInput.value.trim() !== "") {
            liveWelcome.innerText = "Welcome, " + userNameInput.value;
        } else {
            liveWelcome.innerText = "";
        }
    });
}


var users = [];

if (document.getElementById('userForm')) {
    var form = document.getElementById('userForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
      
        var inputName = e.target[0].value;
        var inputEmail = e.target[1].value;
        
        var userObj = {
            name: inputName,
            email: inputEmail
        };
        
        users.push(userObj);
        console.table(users); 

        
        showUser(userObj.name, userObj.email);
        
      
        form.reset();
        liveWelcome.innerText = "";
    });
}


function showUser(name, email) {
    var cardsCont = document.getElementById('cards-container');
    if (!cardsCont) return;


    var divElement = document.createElement('div');
    var h4Name = document.createElement('h4');
    var h4Email = document.createElement('h4');


    h4Name.innerText = "Name: " + name;
    h4Email.innerText = "Email: " + email;


    divElement.appendChild(h4Name);
    divElement.appendChild(h4Email);


    divElement.classList.add('alert', 'alert-primary');


    cardsCont.appendChild(divElement);
}