//Loading Food Items
window.onload = () => {
    console.log('Window Loaded')
    const foodItems = '[{ "name": "Chicken Biryani", "price": "120" }, {"name": "Mutton Biryani","price": "150"},' +
        '{"name": "Chicken Lollipop","price": "200"},{"name": "Mutton Kheema","price": "300"},{"name": "Cheese Pizza","price": "80"},' +
        '{"name": "Panner Pizza","price": "100"},{"name": "Veg Fried Rice","price": "60"},{"name": "Veg Manchuria","price": "70"} ]';


    const Items = JSON.parse(foodItems);
    console.log(foodItems);

    let divParent = document.getElementById('items');
    for (var index = 0; index < Items.length; index++) {
        let divChild = document.createElement('div');
        divChild.setAttribute("class", "itemcard");
        divChild.setAttribute("id", Items[index].name);
        divChild.setAttribute("draggable", "true");
        divChild.setAttribute("ondragstart", "dragStart()");

        let ul = document.createElement('ul');

        let liName = document.createElement('li');
        liName.setAttribute("class", "itemName")
        liName.textContent = Items[index].name;

        let liPrice = document.createElement('li');
        liPrice.setAttribute("id", "price" + Items[index].name);
        liPrice.textContent = Items[index].price;

        ul.appendChild(liName);
        ul.appendChild(liPrice);

        divChild.appendChild(ul);
        divParent.appendChild(divChild);
    }
}
//Searching Table
const searchTable = () => {
    let input = document.getElementById('searchTableInput').value.toUpperCase();
    console.log(input)

    let mainDiv = document.getElementById('tables');
    let tables = mainDiv.getElementsByTagName('div');

    for (var i = 0; i < tables.length; i++) {
        let tabItem = tables[i].getElementsByTagName('li');
        let text = tabItem[0].innerText.toUpperCase();
        if (text.toUpperCase().indexOf(input) > -1) {
            tables[i].style.display = "";
        } else {
            tables[i].style.display = 'none';
        }
    }
}
//Searching Items
const searchItem = () => {
    let input = document.getElementById('searchItemInput').value.toUpperCase();
    console.log(input);

    let divList = document.getElementById('items');
    let list = divList.getElementsByTagName('div');

    for (var i = 0; i < list.length; i++) {
        let liItems = list[i].getElementsByTagName('li');
        let text = liItems[0].innerText.toUpperCase();
        if (text.toUpperCase().indexOf(input) > -1) {
            list[i].style.display = "";
        } else {
            list[i].style.display = 'none';
        }
    }
}


const debounce = (func, delay) => {
    let debounceTimer
    return function() {
        const context = this
        const args = arguments
            clearTimeout(debounceTimer)
                debounceTimer
            = setTimeout(() => func.apply(context, args), delay)
    }
} 

// debounce(searchItem,2000)
//Drag Drop Events
var itemDragged;

function dragStart() {
    var element = document.getElementById(event.target.id);
    console.log(element);
    itemDragged = element.getElementsByTagName('li');
}

function addItemOnDrop() {
    event.preventDefault();
}

function onDropUpdateTableItems(event) {
    console.log('Items Dragged:' + itemDragged)
    console.log('event.target.innertext:' + event.target.innerText)

    console.log('event target' + event.target);
    let element = document.getElementById(event.target.innerText);
    console.log(element)

    const tableList = element.getElementsByTagName('li');
    var quantity = parseInt(tableList[1].innerText.substr(9)) + 1;
    console.log(quantity);
    var price = parseFloat(tableList[2].innerText.substr(6)) + parseFloat(itemDragged[1].innerText);
    let li = document.createElement('li');
    li.textContent = itemDragged[0].innerText;
    let ul = element.getElementsByTagName('ul');
    li.className = "menu";
    li.style.display = 'none';
    element.append(li);
    tableList[1].innerText = 'Quantity:' + quantity;
    tableList[2].innerText = 'Price:' + price;
}
//pay Bill(Closing Session)
function payBill() {
    console.log('Bill Paid');
}

let tablesEvent = document.getElementsByClassName('table');

tablesEvent[0].addEventListener('click', togglePopup);
tablesEvent[1].addEventListener('click', togglePopup);
tablesEvent[2].addEventListener('click', togglePopup);




function addItem(event) 
{
    var ids = event.target.id;
    var arr = ids.split("*");

    console.log(arr);

    var index = parseInt(arr[0]);
    var table = document.getElementById(arr[1]);
    var rows = table.getElementsByTagName('tr');

    let priceIdName = "price"+arr[3];


    console.log("addItem" + priceIdName);
    // changing quantity
    var quantity = parseInt(table.getElementsByTagName('tr')[index].children.item(3).textContent) + 1;
    // changing price
    var price = parseFloat(document.getElementById(priceIdName).textContent) * quantity;


    // assigning quantity and price
    table.getElementsByTagName('tr')[index].children.item(3).textContent = quantity;
    table.getElementsByTagName('tr')[index].children.item(2).textContent = price;

    if (quantity > 0) {

        document.getElementsByClassName(event.target.className)[1].style.display = 'inline';
    }

    //update over the table-1
    var divTable = document.getElementById(arr[2]);
    let addedItem = document.createElement('li');
    addedItem.textContent = arr[3];
    addedItem.className = "menu";
    addedItem.style.display = 'none';
    divTable.appendChild(addedItem);


    var sum = 0;
    var total = 0;
    for (var i = 0; i < rows.length - 1; i++) {
        // sum += parseInt(rows[i].children.item(3).textContent);
        total += parseFloat(rows[i].children.item(2).textContent);
    }

    for(var i = 0;i<rows.length-1;i++)
    {
        if(parseInt(rows[i].children.item(3).textContent)!=0)
            sum++;

    }

    divTable.getElementsByTagName('li')[1].textContent = "Items: "+sum;
    divTable.getElementsByTagName('li')[2].textContent = "Price: "+total;
    rows[rows.length - 1].children.item(1).textContent = "Price: "+total;



}

function subItem(event) 
{
    var ids = event.target.id;
    var arr = ids.split("*");

    console.log("array "+arr);
    var index = parseInt(arr[0]);
    var table = document.getElementById(arr[1]);

    console.log(arr[1]);
    console.log(table);
    var rows = table.getElementsByTagName('tr');

    console.log(rows);

    // changing quantity
    var quantity = parseInt(table.getElementsByTagName('tr')[index].children.item(3).textContent) - 1;

    // console.log(quantity);
    if (quantity <= -1) {
        alert("you cannot remove items");
        return;

    }

    let priceIdName = "price"+arr[3];

    // changing price 
    var price = parseFloat(document.getElementById(priceIdName).textContent) * quantity;

    console.log("priceIdName "+priceIdName);
    console.log(price);

    // updating quantity and price
    table.getElementsByTagName('tr')[index].children.item(3).textContent = quantity;
    table.getElementsByTagName('tr')[index].children.item(2).textContent = price;

    // var total = parseFloat(rows[rows.length - 1].children.item(1).textContent);

    //update over the table-1
    var divTable = document.getElementById(arr[2]);
    var items = divTable.getElementsByClassName('menu');
    for (var j = 0; j < items.length; j++) {
        if (items[j].textContent === arr[3]) {
            divTable.removeChild(items[j]);
            // console.log("removeed");
            break;
        }
    }
    var sum = 0;
    var total=0;
    rows = table.getElementsByTagName('tr');
    for (var i = 0; i < rows.length - 1; i++) {
        // sum += parseInt(rows[i].children.item(3).textContent);
        total += parseFloat(rows[i].children.item(2).textContent);

    }

    for(var i = 0;i<rows.length-1;i++)
    {
        if(parseInt(rows[i].children.item(3).textContent)!=0)
            sum++;

    }

    divTable.getElementsByTagName('li')[1].textContent = "Items: "+sum;
    divTable.getElementsByTagName('li')[2].textContent = "Price "+total;
    rows[rows.length - 1].children.item(1).textContent = "Price: "+total;

}


function togglePopup1() 
{

    var table = document.getElementById('Table-1')

    var mainTable = document.getElementById('data-price-1');


    console.log("mainTable \n " + mainTable);
    mainTable.querySelectorAll('tr').forEach(n => n.remove());

    var no__items = table.getElementsByClassName('menu');

    var items = new Array();

    for (var i = 0; i < no__items.length; i++) {
        items.push(no__items[i].innerText);
    }

    var set = new Set(items);
    console.log(items);
    const mp = {};

    items.forEach(item => {
        if (mp[item]) {
            mp[item]++;
        } else {
            mp[item] = 1;
        }
    });

    console.log(mp);
    var index = 0;
    //   /*
    for (const k of set.values()) 
    {
        //document.getElementById('data-price-1').innerHTML+="<li>"+k+":"+mp[k]+"</li>"
        let tr = document.createElement('tr');
        let sno = document.createElement('td');
        let item = document.createElement('td');
        let count = document.createElement('td');
        let price = document.createElement('td');
        let addbtn = document.createElement('button');
        addbtn.textContent = "+";
        let subbtn = document.createElement('button');
        subbtn.textContent = "-";

        addbtn.className = "tbtn";
        subbtn.className = "tbtn";
        addbtn.id = index + "*data-price-1*Table-1*" + k;
        subbtn.id = index + "*data-price-1*Table-1*" + k;
        addbtn.addEventListener('click', addItem);
        subbtn.addEventListener('click', subItem);

        item.textContent = k;
        count.textContent = mp[k];
        sno.textContent = (++index);

        id = k;
        console.log("id is" + id);

        // console.log(document.getElementById("price" + id))
        price.textContent = document.getElementById("price" + id).textContent;

        tr.appendChild(sno);
        tr.appendChild(item);
        tr.appendChild(price);
        tr.appendChild(count);
        tr.appendChild(addbtn);
        tr.appendChild(subbtn);
        mainTable.appendChild(tr);
    }

    let tr = document.createElement('tr');
    let head = document.createElement('td');
    let amount = document.createElement('td');
    head.textContent = "Total Amount";
    amount.textContent = table.getElementsByTagName('li')[2].innerText;
    amount.colSpan = "5";
    tr.appendChild(head);
    tr.appendChild(amount);
    mainTable.appendChild(tr);

    document.getElementById("popup-1").classList.toggle("active");


}



var val=0;
function togglePopup(event) 
{
    // console.log(event.target);
    if(event!=null)
        val=event.target.id;

    
    
    var table = document.getElementById('Table-'+val)

    var mainTable = document.getElementById('data-price-'+val);


    console.log("mainTable \n " + mainTable);
    mainTable.querySelectorAll('tr').forEach(n => n.remove());

    var no__items = table.getElementsByClassName('menu');

    var items = new Array();

    for (var i = 0; i < no__items.length; i++) {
        items.push(no__items[i].innerText);
    }

    var set = new Set(items);
    console.log(items);
    const mp = {};

    items.forEach(item => {
        if (mp[item]) {
            mp[item]++;
        } else {
            mp[item] = 1;
        }
    });

    console.log(mp);
    var index = 0;
    //   /*
    for (const k of set.values()) 
    {
        //document.getElementById('data-price-1').innerHTML+="<li>"+k+":"+mp[k]+"</li>"
        let tr = document.createElement('tr');
        let sno = document.createElement('td');
        let item = document.createElement('td');
        let count = document.createElement('td');
        let price = document.createElement('td');
        let addbtn = document.createElement('button');
        addbtn.textContent = "+";
        let subbtn = document.createElement('button');
        subbtn.textContent = "-";

        addbtn.className = "tbtn";
        subbtn.className = "tbtn";
        addbtn.id = index + "*data-price-"+val+"*Table-"+val+"*" + k;
        subbtn.id = index + "*data-price-"+val+"*Table-"+val+"*" + k;
        addbtn.addEventListener('click', addItem);
        subbtn.addEventListener('click', subItem);

        item.textContent = k;
        count.textContent = mp[k];
        sno.textContent = (++index);

        id = k;
        console.log("id is" + id);

        // console.log(document.getElementById("price" + id))
        price.textContent = document.getElementById("price" + id).textContent;

        tr.appendChild(sno);
        tr.appendChild(item);
        tr.appendChild(price);
        tr.appendChild(count);
        tr.appendChild(addbtn);
        tr.appendChild(subbtn);
        mainTable.appendChild(tr);
    }

    let tr = document.createElement('tr');
    let head = document.createElement('td');
    let amount = document.createElement('td');
    head.textContent = "Total Amount";
    amount.textContent = table.getElementsByTagName('li')[2].innerText;
    amount.colSpan = "5";
    tr.appendChild(head);
    tr.appendChild(amount);
    mainTable.appendChild(tr);

    document.getElementById("popup-"+val).classList.toggle("active");


}

// function togglePopdown(event)
// {
//     console.log("togglePopdown");
//     val = event.target.id;
//     document.getElementById("popup-"+val).classList.toggle("active");
// }