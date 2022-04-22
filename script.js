function str2arr(str) {
  var arr = [];
  var s = "";
  for(var i = 0; i < str.length; i++) {
    if(str[i] == "\n") {
      if(s != "") arr.push(s);
      s = "";
    }
    else s += str[i];
  }
  return arr;
}

function arrChoice(arr) {
  var i = Math.floor(Math.random() * arr.length);
  return arr[i];
}

function thing() {
  var adv = arrChoice(str2arr(adverbs));
  var adj = arrChoice(str2arr(adjectives));
  var nou = arrChoice (str2arr(nouns));
  return adv + " " + adj + " " + nou;
}

function debug_screenSize() {
  var debug = document.getElementById("debug");
  debug.style.display = "block";
  debug.innerHTML = window.innerWidth;
}

function generate() {
  var r = thing();
  document.getElementById("output").innerHTML = r;
  document.title = r;
  debug_screenSize();
}

generate();
