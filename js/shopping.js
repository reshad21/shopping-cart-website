const cartAry = [];

function display(cart){
    let tableBody = document.getElementById('table-body');
    tableBody.innerHTML = "";

    let totalprice = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        let productname = element.productName;
        let productprice = element.productPrice;
        totalprice = totalprice + productprice;
        let tr = document.createElement('tr');
        tr.innerHTML=`
        <th>${i + 1}</th>
        <th>${productname}</th>
        <th>${productprice}</th>`;
        tableBody.appendChild(tr);
    }
    let tr = document.createElement('tr');
    tr.innerHTML=`
    <th>Total</th>
    <th></th>
    <th>${totalprice}</th>`;
    tableBody.appendChild(tr);


}

function addtoCart(element){
    // console.log(element.parentNode.parentNode.children);
    // console.log(element.parentNode.parentNode.children[0].innerText);
    // console.log(element.parentNode.parentNode.children[1].children[0].innerText);

    const productName = element.parentNode.parentNode.children[0].innerText;
    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;

    const productobj = {
        productName : productName,
        productPrice : parseFloat(productPrice),
    }
    cartAry.push(productobj);
    // console.log(cartAry);
    document.getElementById('total-product').innerText = cartAry.length;

    display(cartAry);
}