let products = [
    {
        name: " BBC micro:bit",
        price: 1500,
        quantity: 1,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_c225yKWZZgTxE1g9WsFAqO_7_alLSF2kwA&usqp=CAU',
    },
    {
        name: "Arduino Uno R3",
        price: 600,
        quantity: 1,
        img: '	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3lb_AnyOiflK8e6WHO5XddvJg1mIpqpUuLA&usqp=CAU',

    }
]

var container = document.getElementById('container');
function mapFunc() {
    products.map((data) => {
        container.innerHTML += `<div id="firstDiv"> 
        <img src=${data.img}/>
        <div class="info">
            <h3>Product Name: ${data.name}</h3><br>
            <span>Price:</span> <h3 class="price">${data.price * data.quantity}  </h3><br>
            <span>Quantity:</span> <span id="quantity">${data.quantity}</span> 
            <button class="clickmeMinus"><i class="fa fa-minus" aria-hidden="true"></i></button>
            <input type="text" value="0" class="textbox1" >
            <button class="clickPlus"> <i class="fa fa-plus" aria-hidden="true"></i></button><br>
            <button class="dltBtn" onclick="deleteBtn()">Delete</button>
        </div>
    </div>`
    })
}
mapFunc();

var inputs = document.getElementsByClassName("textbox1");
var dltBtn = document.getElementById("firstDiv");
var buyNowDiv = document.getElementById("buyNowDiv")
var quantity = document.getElementById("quantity");
var price = document.getElementsByClassName("price");


var button = document.getElementsByClassName("clickmeMinus")
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        let quant = document.getElementById("quantity").innerHTML;
        if (inputs[i].value > 0) {
            inputs[i].value = Number(inputs[i].value) - 1;
            price[i].innerHTML = Number(inputs[i].value) * Number(products[i].price);
        }
    })
}

var buttonPlus = document.getElementsByClassName("clickPlus")
for (let i = 0; i < buttonPlus.length; i++) {
    buttonPlus[i].addEventListener('click', () => {
        let quant = document.getElementById("quantity").innerHTML;
        inputs[i].value = Number(inputs[i].value) + 1;
        price[i].innerHTML = Number(inputs[i].value) * products[i].price;

    })
}

function deleteBtn() {
    dltBtn.style.display = "none";
}

function buyBtn() {
    buyNowDiv.style.display = "block";

}
function validationForm() {
    console.log("validation");
    var inputNo = document.getElementById("inputNumber").value;
    var inputacc = document.getElementById("AcNo").value;
    var inputadd = document.getElementById("inputcvv").value;


    if (inputNo == "" || inputacc == "" || inputadd == "") {
        alert("All Inputs Must be Filled")
    } else {
        alert("Congratulations 🎊🎉  Your Order Placed Successfully")
        buyNowDiv.style.display = "none";
    }
}

function addAddress() {
    var foradd = document.getElementById('addressDiv');
    foradd.innerHTML = `<div id="disAdd">
    <label for="name">Address</label>
    <input id="addrs" type="text"/><br>
    <label for="city">City</label>
    <input id="city" type="text"/> <br>
    <label for="pincode">Pincode</label>
    <input id="pincode" type="number"/><br>
    <button onclick="addNew()">Add</button>
    </div>`
}


function addNew() {
    var addrs = document.getElementById("addrs").value;
    var city = document.getElementById("city").value;
    var pincode = document.getElementById("pincode").value;
    var add1 = document.getElementById("disAdd");
    if (addrs == "" || city == "" || pincode === "") {
        alert("All Fields Must Be Filled")
    } else {
        alert("New Address Added Successfully")
        add1.style.display = "none";
    }
}






























