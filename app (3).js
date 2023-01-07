let btn = document.getElementById('toggleBtn')
let bulb = document.getElementById('bulb') 

btn.addEventListener('click', toggleBulb)
function toggleBulb(e){
    if(btn.textContent.includes('On')){
        bulb.src = "bulb3.jpg"  
        btn.textContent = 'TURN Off'
    }else{
        bulb.src = 'bulb4.jpg'
        btn.textContent = 'TURN On'
    }
}