function addData(){
  const input=document.getElementById('inputData').value;
  const li=document.createElement('li');
  var t=document.createTextNode(input);
  li.className="list-group-item";
  li.appendChild(t);

  if(input===""){
    alert("enter the data first it is empty");
  }else{
    document.getElementById("myUL").appendChild(li);
   }
   document.getElementById('inputData').value="";
list.appendChild(li);
  }

  function removeData(){
    var ul=document.querySelector('ul');
    ul.textContent="";
  }
