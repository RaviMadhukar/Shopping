const scriptURL = ''
const form = document.forms['submit-to-google-sheet']
const msg =document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message Will Sent Successfully"
            setTimeout(function(){
                msg.innerHTML =""
            },2000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})