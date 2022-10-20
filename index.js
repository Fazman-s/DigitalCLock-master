setInterval( () =>{
    const time = document.getElementById('time');
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = "AM"
    if(hour>12){
        ampm ="PM"
        hour = hour-12;
    }
    if(minutes<10){
       minutes="0"+minutes;
    }
    if(seconds<10){
        seconds="0"+seconds;
    }
   
   time.textContent = `${hour}:${minutes}:${seconds} ${ampm}`
})