const Search=()=>{
    let filter=document.getElementById('myInput').value.toUpperCase();
    console.log(filter);
    let divList = document.getElementById('items');
    let list=divList.getElementsByTagName('div');
    for(var i=0;i<list.length;i++){
        let liItems = list[i].getElementsByTagName('li');
      let text=liItems[0].innerText.toUpperCase();
        if(text.toUpperCase().indexOf(filter)>-1){
             list[i].style.display="";
        }
        else{
                 list[i].style.display='none';
        }
    }
}

const SearchTable=()=>{
   let input = document.getElementById('table').value.toUpperCase();
   let mainDiv=document.getElementById('tables');
   let tables = mainDiv.getElementsByTagName('div');
   for(var i=0;i<tables.length;i++){
       let tabItem=tables[i].getElementsByTagName('li');
       let text=tabItem[0].innerText.toUpperCase();
       if(text.toUpperCase().indexOf(input)>-1){
                tables[i].style.display="";
       }
       else{
                tables[i].style.display='none';
       } 
   } 
}
var list;
function dragStart(){
 var ele=document.getElementById(event.target.id);
 list=ele.getElementsByTagName('li');
}

function allowDrop(){
   event.preventDefault();
}

function drop(event){ 
   let ele=document.getElementById(event.target.innerText);
   const l=ele.getElementsByTagName('li');
   var quantity=parseInt(l[1].innerText)+1;
   var price=parseFloat(l[2].innerText)+parseFloat(list[1].innerText);
  let li = document.createElement('li');
   li.textContent=list[0].innerText;
   let ul = ele.getElementsByTagName('ul');
   li.className="menu";
   li.style.display='none';
   ele.append(li); 
   l[1].innerText=quantity;
   l[2].innerText=price;
}

 let buttons=document.getElementsByClassName('btn');

  buttons[0].addEventListener('click',togglePopup1);
  buttons[1].addEventListener('click',togglePopup2);
  buttons[2].addEventListener('click',togglePopup3);
  

 //Table 1
function togglePopup1()
{
 var table=document.getElementById('Table-1')
 var mainTable=document.getElementById('data-price-1');
 console.log("mainTable \n "+mainTable);
 mainTable.querySelectorAll('tr').forEach(n => n.remove());
 var no__items=table.getElementsByClassName('menu');
 var items=new Array();
 for(var i=0;i<no__items.length;i++){
        items.push(no__items[i].innerText);
 }
 var set = new Set(items);
  mp=getFrequency(items);
  var index=0;
 for (const k of set.values()) {
     //document.getElementById('data-price-1').innerHTML+="<li>"+k+":"+mp[k]+"</li>"
     let tr=document.createElement('tr');
     let sno=document.createElement('td');
     let item=document.createElement('td');
     let count=document.createElement('td');
     let price=document.createElement('td');
     let addbtn=document.createElement('button');
     addbtn.textContent="+";
     let subbtn=document.createElement('button');
     subbtn.textContent="-";
      addbtn.className="tbtn";
      subbtn.className="tbtn";
      addbtn.id=index+" data-price-1 Table-1 "+k.toLowerCase();
      subbtn.id=index+" data-price-1 Table-1 "+k.toLowerCase();
      addbtn.addEventListener('click',addItem);
      subbtn.addEventListener('click',subItem);
     item.textContent=k;
     count.textContent=mp[k];
     sno.textContent=(++index);
     id=k.toLowerCase();
     console.log(document.getElementById("pri"+id))
     price.textContent=document.getElementById("pri"+id).textContent;
     tr.appendChild(sno);
     tr.appendChild(item);
     tr.appendChild(price);
     tr.appendChild(count);
     tr.appendChild(addbtn);
     tr.appendChild(subbtn);
     mainTable.appendChild(tr);
 }
 let tr=document.createElement('tr');
     let head=document.createElement('td');
     let amount=document.createElement('td');
     head.textContent="Total Amount";
     amount.textContent=table.getElementsByTagName('li')[2].innerText;
     amount.colSpan="5";
     tr.appendChild(head);
     tr.appendChild(amount);
     mainTable.appendChild(tr);
     document.getElementById("popup-1").classList.toggle("active");

}



//table-2

function togglePopup2(){
 var table=document.getElementById('Table-2')
 var mainTable=document.getElementById('data-price-2');
 mainTable.querySelectorAll('*').forEach(n => n.remove());
 var no__items=table.getElementsByClassName('menu');
 var items=new Array();
 for(var i=0;i<no__items.length;i++){
        items.push(no__items[i].innerText);
 }
 var set = new Set(items);
  mp=getFrequency(items);
  var index=0;
 for (const k of set.values()) {
     //document.getElementById('data-price-1').innerHTML+="<li>"+k+":"+mp[k]+"</li>"
     let tr=document.createElement('tr');
     let sno=document.createElement('td');
     let item=document.createElement('td');
     let count=document.createElement('td');
     let price=document.createElement('td');
     let addbtn=document.createElement('button');
     addbtn.textContent="+";
     let subbtn=document.createElement('button');
     subbtn.textContent="-";
      addbtn.className="tbtn";
      subbtn.className="tbtn";
      addbtn.id=index+" data-price-2 Table-2 "+k.toLowerCase();
      subbtn.id=index+" data-price-2 Table-2 "+k.toLowerCase();
      addbtn.addEventListener('click',addItem);
      subbtn.addEventListener('click',subItem);
     item.textContent=k;
     count.textContent=mp[k];
     sno.textContent=(++index);
     id=k.toLowerCase();
     console.log(document.getElementById("pri"+id))
     price.textContent=document.getElementById("pri"+id).textContent;
     tr.appendChild(sno);
     tr.appendChild(item);
     tr.appendChild(price);
     tr.appendChild(count);
     tr.appendChild(addbtn);
     tr.appendChild(subbtn);
     mainTable.appendChild(tr);
 }
 let tr=document.createElement('tr');
     let head=document.createElement('td');
     let amount=document.createElement('td');
     head.textContent="Total Amount";
     amount.textContent=table.getElementsByTagName('li')[2].innerText;
     amount.colSpan="5";
     tr.appendChild(head);
     tr.appendChild(amount);
     mainTable.appendChild(tr);
     document.getElementById("popup-2").classList.toggle("active");

}


function togglePopup3(){
 var table=document.getElementById('Table-3')
 var mainTable=document.getElementById('data-price-3');
 mainTable.querySelectorAll('*').forEach(n => n.remove());
 var no__items=table.getElementsByClassName('menu');
 var items=new Array();
 for(var i=0;i<no__items.length;i++){
        items.push(no__items[i].innerText);
 }
 var set = new Set(items);
  mp=getFrequency(items);
  var index=0;
 for (const k of set.values()) {
     //document.getElementById('data-price-1').innerHTML+="<li>"+k+":"+mp[k]+"</li>"
     let tr=document.createElement('tr');
     let sno=document.createElement('td');
     let item=document.createElement('td');
     let count=document.createElement('td');
     let price=document.createElement('td');
     let addbtn=document.createElement('button');
     addbtn.textContent="+";
     let subbtn=document.createElement('button');
     subbtn.textContent="-";
      addbtn.className="tbtn";
      subbtn.className="tbtn";
      addbtn.id=index+" data-price-3 Table-3 "+k.toLowerCase();
      subbtn.id=index+" data-price-3 Table-3 "+k.toLowerCase();
      addbtn.addEventListener('click',addItem);
      subbtn.addEventListener('click',subItem);
     item.textContent=k;
     count.textContent=mp[k];
     sno.textContent=(++index);
     id=k.toLowerCase();
     console.log(document.getElementById("pri"+id))
     price.textContent=document.getElementById("pri"+id).textContent;
     tr.appendChild(sno);
     tr.appendChild(item);
     tr.appendChild(price);
     tr.appendChild(count);
     tr.appendChild(addbtn);
     tr.appendChild(subbtn);
     mainTable.appendChild(tr);
 }
 let tr=document.createElement('tr');
     let head=document.createElement('td');
     let amount=document.createElement('td');
     head.textContent="Total Amount";
     amount.textContent=table.getElementsByTagName('li')[2].innerText;
     amount.colSpan="5";
     tr.appendChild(head);
     tr.appendChild(amount);
     mainTable.appendChild(tr);
     document.getElementById("popup-3").classList.toggle("active");

}



const getFrequency = (array) => {
const map = {};
array.forEach(item => {
if(map[item]){
  map[item]++;
}else{
  map[item] = 1;
}
});
return map;
};

function addItem(){
var ids=event.target.id;
var arr = ids.split(" ");
var index=parseInt(arr[0]);
var table=document.getElementById(arr[1]);
var rows=table.getElementsByTagName('tr');
var quantity=parseInt(table.getElementsByTagName('tr')[index].children.item(3).textContent)+1;
var price=parseFloat(document.getElementById("pri"+arr[3]).textContent)*quantity;
table.getElementsByTagName('tr')[index].children.item(3).textContent=quantity;
table.getElementsByTagName('tr')[index].children.item(2).textContent=price;
if(quantity>0){
 document.getElementsByClassName(event.target.className)[1].style.display='inline';
}
//update over the table-1
var divTable=document.getElementById(arr[2]);
let addedItem=document.createElement('li');
addedItem.textContent=arr[3];
addedItem.className="menu";
addedItem.style.display='none';
divTable.appendChild(addedItem);
var sum=0;
var total=0;
for(var i=0;i<rows.length-1;i++){
  sum+=parseInt(rows[i].children.item(3).textContent);
  total+=parseFloat(rows[i].children.item(2).textContent);
}
divTable.getElementsByTagName('li')[1].textContent=sum;
divTable.getElementsByTagName('li')[2].textContent=total;
rows[rows.length-1].children.item(1).textContent=total;



}
function subItem(){
var ids=event.target.id;
var arr = ids.split(" ");
var index=parseInt(arr[0]);
var table=document.getElementById(arr[1]);
var rows=table.getElementsByTagName('tr');
var quantity=parseInt(table.getElementsByTagName('tr')[index].children.item(3).textContent)-1;

var price=parseFloat(document.getElementById("pri"+arr[3]).textContent)*quantity;
table.getElementsByTagName('tr')[index].children.item(3).textContent=quantity;
table.getElementsByTagName('tr')[index].children.item(2).textContent=price;
var total=parseFloat(rows[rows.length-1].children.item(1).textContent);
total-=parseFloat(document.getElementById("pri"+arr[3]).textContent);
rows[rows.length-1].children.item(1).textContent=total;

if(quantity<=-1)
{
  alert("you cannot remove items");
  return;
  
}
//update over the table-1
var divTable=document.getElementById(arr[2]);
var items=divTable.getElementsByClassName('menu');
for(var j=0;j<items.length;j++){
 if(items[j].textContent===arr[3])
 {
     divTable.removeChild(items[j]);
     console.log("removeed");
     break;
 }
}
var sum=0;
rows=table.getElementsByTagName('tr');
for(var i=0;i<rows.length-1;i++){
  sum+=parseInt(rows[i].children.item(3).textContent);
}
divTable.getElementsByTagName('li')[1].textContent=sum;
divTable.getElementsByTagName('li')[2].textContent=total;
}

window.onload=()=>{    
const Items=JSON.parse(items);
let divParent = document.getElementById('items');
for(var index=0;index<7;index++){
   let divChild = document.createElement('div');
   divChild.setAttribute("id",Items[index].name);
   divChild.setAttribute("draggable","true");
   divChild.setAttribute("ondragstart","dragStart()");
   let ul=document.createElement('ul');
   let liName=document.createElement('li');
   liName.textContent=Items[index].name;
   let liPrice=document.createElement('li');
   liPrice.setAttribute("id","pri"+Items[index].name);
   liPrice.textContent=Items[index].price;
   ul.appendChild(liName);
   ul.appendChild(liPrice);
   divChild.appendChild(ul);
   ul.style.border="groove";
   divParent.appendChild(divChild);
}
}