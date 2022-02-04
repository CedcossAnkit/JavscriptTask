function area() {
  var num1 = Number(document.getElementById("length").value);
  var num2 = Number(document.getElementById("width").value);
  var areaa = num1 * num2;
  document.getElementById("ar").innerHTML = areaa + " sq mtr";
}

function pirimeter() {
  var num1 = Number(document.getElementById("length").value);
  var num2 = Number(document.getElementById("width").value);
  var areaa = 2 * (num1 * num2);
  document.getElementById("piri").innerHTML = areaa + " mtr";
}
