
setInterval(function () {
  var data = new Date();
  console.log(data.toLocaleTimeString())
  document.getElementById("clock").innerHTML = data.toLocaleTimeString();
},1000)

setInterval(function () {
  var now = new Date();
  document.getElementById('hours').style.width = ((now.getHours() / 24) * 100) + '%';
  document.getElementById('minutes').style.width = ((now.getMinutes() / 60) * 100) + '%';
  document.getElementById('seconds').style.width = ((now.getSeconds() / 60) * 100) + '%';
}, 1000);
