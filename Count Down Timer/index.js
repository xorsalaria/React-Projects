// Sajjad Salaria -@xorsalaria (17-02-2018)



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function countDown() {
  // <h1> countDown to Birthday</h>
  var countDownDate = new Date("Feb 19, 2018 23:59:01").getTime();

  var x  = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("root").innerHTML = days +  "days "  + hours +  "hours "
    + minutes +  "minutes "  + seconds + "seconds ";


    if(distance < 0) {
      clearInterval(x);
      document.getElementById("root").innerHTML = "EXPIRED";
        }

  }, 1000);


}


countDown();
ReactDOM.render(<countDown />, document.getElementById('root'));
