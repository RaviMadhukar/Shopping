const scriptURL = ''
const form = document.forms['submit-to-google-sheet']
const msg =document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Order Number And Track ID Will Sent to Your Mail.."
            setTimeout(function(){
                msg.innerHTML =""
            },6000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})


let btton= document.getElementById("pay");
let uppi= document.getElementById("upi");

btton.addEventListener('click', function(){
		uppi.style.display = "block";
});