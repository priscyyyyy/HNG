const timeElement=document.querySelector('[data-testid="test-user-time"]');
function updateTime(){
    timeElement.textContent= 'Current Time(in milliseconds):' + ' '+ Date.now();
}
updateTime();
setInterval(updateTime, 1000);