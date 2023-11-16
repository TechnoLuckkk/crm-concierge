var form = document.getElementById("myForm");
function handleForm(event) { 
    event.preventDefault();
    const data = new FormData(event.target);
    for (var [key, value] of data.entries()) { 
        console.log(key, value);
    }
} 
form.addEventListener('submit', handleForm);