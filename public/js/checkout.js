// // Modal
// var modal = document.getElementById("myModal");
// var btn = document.getElementById("cart");
// var close = document.getElementsByClassName("close")[0];
// // tại sao lại có [0] như  thế này bởi vì mỗi close là một html colection nên khi mình muốn lấy giá trị html thì phải thêm [0]. 
// //Nếu mình có 2 cái component cùng class thì khi [0] nó sẽ hiển thị component 1 còn [1] thì nó sẽ hiển thị component 2.
// var close_footer = document.getElementsByClassName("close-footer")[0];
// var order = document.getElementsByClassName("order")[0];
// btn.onclick = function () {
//   modal.style.display = "block";
// }
// close.onclick = function () {
//   modal.style.display = "none";
// }
// close_footer.onclick = function () {
//   modal.style.display = "none";
// }
// order.onclick = function () {
//   alert("Cảm ơn bạn đã thanh toán đơn hàng")
// }
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }




if (document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded', ready)
}else {
        ready()
    }
//xóa
function ready(){
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    console.log(removeCartItemButtons)
    for (var i= 0; i < removeCartItemButtons.length; i++ ){
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)       
    }
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i= 0; i < quantityInputs.length; i++ ){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
}
function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}
function quantityChanged(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0 ){
        input.value = 1
    }
    updateCartTotal()
}
var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons)
for (var i= 0; i < removeCartItemButtons.length; i++ ){
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updatesubtotal()
    })

// }
// function updateCartTotal(){
//     var cartItemContainer = document.getElementsByClassName('cart-items')[0]
//     var cartRows = cartItemContainer.getElementsByClassName('cart-row')
//     var total=0
//     for (var i= 0; i < cartRows.length; i++ ){
//         var cartRow = cartRows[i]
//         var priceElement = cartRow.getElementsByClassName("th-price")[0]
//         var quantityElement = cartRow.getElementsByClassName("th-qty")[0]
//         var price = parseFloat(priceElement.innerText.replace('$',''))
//         var quantity = quantityElement.value
//         // debugger
//         total= total+ (price * quantity)
//         console.log(total);
        
        
//     }
//     document.getElementsByClassName('cart-total-price')[0].innerText = '$'+" " + total
// }

function updateCartTotal(){
    let update = $('.th-qty input');
    let total = 0;
    let alltotal = 0;
    let updatefinaltotal = $('.cart-items .cart-row');
    update.each((i,e)=>{
        $(e).change(()=>{
            console.log(e.value);
            let checkprice = $('.cart-items .cart-row #price' + (i+1));
            console.log(typeof(parseInt(checkprice.text())));
            
            let quantity = e.value;
            
           // debugger
            total= total+ (parseInt(checkprice.text()) * parseInt(quantity));
            console.log(total);

            let updatesubtotal = $('.cart-items .cart-row #total' + (i+1));
    
            console.log(updatesubtotal.text());
            
            updatesubtotal.text(total);
            
            updatefinaltotal.each((ic,ec)=>{
                let temp = $('.cart-items .cart-row #total'  + (ic+1));
                alltotal += parseInt(temp.text());
            });

            let finaltotal = $('.cart-shopping-area .shopping-summary .cart-total .cart-total-price');
            console.log(finaltotal);
             //debugger
            console.log(alltotal);
             
            finaltotal.text('$'+ alltotal);
        }); 
    });
    console.log(update);
    
}
}