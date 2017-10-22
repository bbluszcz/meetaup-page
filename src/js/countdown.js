
function countdown(){

  const nowTime = new Date();
  const eventDeadline = new Date('december 31, 2017 00:00:00');

  const currentTime = nowTime.getTime();
  const eventTime = eventDeadline.getTime();

  const rest = eventTime - currentTime;

  let seconds = Math.floor(rest/1000);
  let minutes = Math.floor(seconds/60);
  let hours = Math.floor(minutes/60);
  let days = Math.floor(hours/24);


  hours%=24;
  minutes%=60;
  seconds%=60;

  if(days < 10){
    days = "0" + days;
  }
  if(hours < 10){
    hours = "0" + hours;
  }
  if(minutes < 10){
    minutes = "0" + minutes;
  }
  if(seconds < 10){
    seconds = "0" + seconds;
  }

  const clock = document.getElementById('clock');

  clock.innerHTML = '<span>' + days +'</span>'
                  + '<span>' + hours +'</span>'
                  + '<span>' + minutes +'</span>'
                  + '<span>' + seconds + '</span>';

}

setInterval(countdown, 1000);
