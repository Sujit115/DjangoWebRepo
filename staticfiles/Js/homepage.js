
var inputtedVal = document.getElementsByClassName('input');
var token = document.querySelector('input').value
document.getElementById('submit-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    fetch('{% url 'homepage' %}',{
        method:'POST',
        headers:{
            'Content-Type':'application/json', 
            'X-CSRFToken':'{{csrf_token}}',
            'X-Requested-With':'XMLHttpRequest',
            'Accept': 'application/json'
        },
        body:JSON.stringify({
            name:(inputtedVal.name.value),
            email:(inputtedVal.email.value),
            message:(inputtedVal.message.value),
        }),
        mode:'cors',
        credentials:'include'    
    })
})