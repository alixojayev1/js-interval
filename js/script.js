const btn = document.querySelector("#btn");

function carDriving() {
  const car = document.querySelector(".car");
  let postion = 0;

  const animationId = setInterval(start, 10);

  function start() {
    if (postion === 1000) {
      clearInterval(animationId);
    } else {
      postion++;
      car.style.left = postion + "px";
    }
  }
}

btn.addEventListener("click", carDriving);

// let timerId,
// 	index = 0

// SetTimeout bu bitta function necha dur sekunddan keyin bir marotaba ishga tushadi
// SetInterval bu bitta function har necha dur sekunda ishga tushadi

// btn.addEventListener('click', () => {
// 	timerId = setInterval(logger, 500)
// })

// function logger() {
// 	if (index === 5) {
// 		clearInterval(timerId)
// 	}
// 	console.log('Hello world')
// 	index++
// }

// let id = setTimeout(function log() {
// 	console.log('Hello world')
// 	id = setTimeout(log, 1000)
// }, 1000)
