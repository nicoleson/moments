const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector(".js-title");

function getTime()
{
    const date = new Date();
    const minutes = date.getMinutes(),
          hours = date.getHours();
          seconds = date.getSeconds();

    clockTitle.innerText = 
        `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;


}

function init()
{
    getTime();
    setInterval(getTime, 1000); // will update the time in every second.
}
init();

