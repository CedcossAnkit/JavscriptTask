function area() {
  var num1 = Number(document.getElementById("length").value);
  var num2 = Number(document.getElementById("width").value);

  if(num1==0 || num2==0){
    alert('Please Enter Height and Width');
  }
  else{
  var areaa = num1 * num2;
  document.getElementById("ar").innerHTML = areaa + " sq mtr";
  document.getElementById("ar").style.color='red';


  var areaa = 2 * (num1 * num2);
  document.getElementById("piri").innerHTML = areaa + " mtr";
  document.getElementById("piri").style.color='red';

  }
}

function ConHour(){
  var a=Number(document.getElementById('time').value);
  var rd=document.getElementById('same');

  if(document.getElementById('time').value.length==0){
    alert('Please Enter Something..')
  }
  else if(document.getElementById('hr').checked){
      document.getElementById('labm').innerHTML=a/60+" hr";
      document.getElementById('labm').style.color='red';
  }
  else if(document.getElementById('mt').checked){
      
      document.getElementById('labh').innerHTML=a*60+"S";
      document.getElementById('labh').style.color='red';
      
  }
  else if(document.getElementById('hr').checked==false && document.getElementById('mt').checked==false){
    alert('Please Select At least One Option!');
  }



  
}