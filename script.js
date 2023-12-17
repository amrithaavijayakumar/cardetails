function store()
{
    var cbrand=document.getElementById("brand").value
    console.log(cbrand);
    var cprice=document.getElementById('price').value
    console.log(cprice);
    var ckey=document.getElementById('key').value
    console.log(ckey);
    localStorage.setItem("BRAND",cbrand);
    localStorage.setItem("PRICE",cprice);
    localStorage.setItem("KEY",ckey);
   alert("CAR DETAILS ADDED SUCCESSFULLY")
}
function retrieve()
{
   var data=document.getElementById('key1').value
   console.log(data);
   var copy=localStorage.getItem('KEY')
   if(data===copy)
   {
    document.getElementById('res').innerHTML=
    `{BRAND: ${localStorage.getItem('BRAND')},PRICE: ${localStorage.getItem('PRICE')},KEY: ${localStorage.getItem('KEY')}}`
   }
   else
   {
    alert("INVALID KEY")
   }
  
}
function deleteit()
{
    var datas=document.getElementById('key2').value
   console.log(datas);
   var copy=localStorage.getItem('KEY')
   if(datas===copy)
   {
    localStorage.removeItem('KEY')
    localStorage.removeItem('BRAND')
    localStorage.removeItem('PRICE')
    alert("DELETED SUCCESSFULLY")
   }
   else
   {
    alert("KEY DOESN'T EXIST")
   }
   
}
function clears()
{
    localStorage.clear()
    alert("CLEARED SUCCEFULLY")
}
