/*src="https://rawgit.com/MikeMcl/decimal.js/master/decimal.js"
document.getElementById("reset01")
    .addEventListener("keypress", function(event) {
      event.preventDefault();
      if (event.keyCode == 13) {
        document.getElementById("nope").click();
      }
    });
  document.getElementById("button")
    .addEventListener("keypress", function(event) {
      event.preventDefault();
      if (event.keyCode == 13) {
        document.getElementById("nope").click();
      }
    });
  document.getElementById("multi2")
    .addEventListener("keypress", function(event) {
      event.preventDefault();
      if (event.keyCode == 13) {
        document.getElementById("nope").click();
      }
    });
  var fish =new Decimal(0);
  var fisherman =new Decimal( 0);
  var cost =new Decimal(10);
  var upgrade = new Decimal(1);
  var Orange =new Decimal(1);
  var multx = new Decimal(1);
  var cost2 = new Decimal(1000);
  var seconds = new Decimal(0);
  var hours =new Decimal(0);
  var minutes =new Decimal(0);
  var a = new Decimal(0);
  var delay = new Decimal(10);
  var now, before = new Date();
 /* var thing=[];
  function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
  }*/
  /*function maxx(){
  while (fish.greaterThan(cost)){
  fish=fish.minus(cost)
  fisherman=fisherman.plus(1)
  cost=cost.times(1.3)
  }
  }
  function maxx2(){
  while (fish.greaterThan(cost2)){
  fish=fish.minus(cost2)
  multx=multx.plus(1.05)
  cost2=cost2.times(1000)
  }
  }
  function remove() {
    fish =fish.times(0);
  }

  function fish2() {
    fish=fish.plus(1);

  }

  function buy() {
    fish =fish.minus(cost);
    fisherman=fisherman.plus(1);
    cost =cost.times(1.3);
  }

  function up() {
    fish =fish.minus(100);
    upgrade =upgrade.times(2);
  }

  function run2() {
    fish =fish.minus(1000);
    Orange =Orange.times(69);
  }

  function up3() {
    fish =fish.minus(cost2);
    multx =multx.plus(1.05);
    cost2 =cost2.times(1000);
  }

  function reset() {
    location.reload();
  }
/*  var timing01 = setInterval(function() {

    now = new Date();
    var elapsedTime = (now.getTime() - before.getTime());
    if (elapsedTime > delay)
      seconds = seconds + 1 * Math.floor(elapsedTime / delay);
    else
      seconds = seconds + 1;
    before = new Date();
  }, delay);
   
/*  var timing001 = setInterval(function() {
 var big =new Decimal(fisherman.times(upgrade).times(Orange).times(100).pow(multx));

    now = new Date();
    var elapsedTime = (now.getTime() - before.getTime());
    if (elapsedTime > delay)
      fish=fish+big*Math.floor(elapsedTime / delay);
    else
      fish=fish+big;
    before = new Date();
  }, delay)*/

  var timer = window.setInterval(function() {
  seconds=seconds.plus(1);
    if (minutes.greaterThan(59)) {
      hours=hours.plus(1)
      minutes = minutes.times(0)
    } else if (seconds.greaterThan(99)) {
      minutes=minutes.plus(1)
      seconds = seconds.times(0)
    }
 var big =new Decimal((fisherman.times(upgrade).times(Orange).times(0.01)).pow(multx));
//fish=fish.plus(big);
 var fish = 10
 fish=fish+1



    
    document.getElementById("hours").innerHTML = hours + ":";
    document.getElementById("minutes").innerHTML = minutes + ":";
    document.getElementById("seconds").innerHTML=seconds.toPrecision(4);
    document.getElementById("fish").innerHTML = fish.toPrecision(4);
    document.getElementById("fisherman").innerHTML = fisherman;
    document.getElementById("fishercost").innerHTML = (cost.floor()).toPrecision(4);
    document.getElementById("multi").innerHTML = cost2.toPrecision(4) + " fish"
    if (fish.lessThan(cost)) {
      document.getElementById("button").disabled = true;
    } else {
      document.getElementById("button").disabled = false;
    }
    if (upgrade.equals(1)) {
      if (fish.lessThan(100)) {
        document.getElementById("up").style.visibility = "hidden"
        document.getElementById("upg").disabled = true;
      } else {
        document.getElementById("up").style.visibility = "visible"
        document.getElementById("upg").disabled = false;


      }
    } else {
      document.getElementById("up").style.visibility = "hidden"
      document.getElementById("upg").disabled = true;
    }
    if (Orange.equals(1)) {
      if (fish.lessThan(1000)) {
        document.getElementById("Ora").style.visibility = "hidden"
				document.getElementById("Oran").disabled = true;  
        } else {
        document.getElementById("Ora").style.visibility = "visible"
        document.getElementById("Oran").disabled = false;
      }
    } else {
      document.getElementById("Ora").style.visibility = "hidden"
      document.getElementById("Oran").disabled = true;

    }
    if (fish.lessThan(cost2)) {
      document.getElementById("multi2").disabled = true;
    } else {
      document.getElementById("multi2").disabled = false;
    }

    if (fish.greaterThan(1e308)) {
      document.getElementById("Win").style.visibility = "visible"
     /* clearInterval(timer)
      clearInterval(timing01)
      clearInterval(timing001)*/


    } else {
      document.getElementById("Win").style.visibility = "hidden"
    }






  }, 10)
