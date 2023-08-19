let discountPercentage = 0;
const purchaseBtn = document.getElementById("purchase-btn")
const couponBtn = document.getElementById("apply-btn");

function handleClick(target) {
    const productName = target.childNodes[5].innerText;
    const productPrice = target.childNodes[7].innerText.split(" ")[0];
    const price = parseFloat(productPrice);
    const productList = document.getElementById('product-list');
    const totalPrice = document.getElementById('total-price');
    const totalPriceNum = stringToNum(totalPrice);
    


    const newTotalPrice = totalPriceNum + price;
    totalPrice.innerText = newTotalPrice;


    const li = document.createElement('li');
    li.innerText = productName;
    productList.append(li)

    
    
    if(newTotalPrice >= 200){
        couponBtn.removeAttribute('disabled');
        couponBtn.classList='transition-all duration-300 active:scale-[0.95] bg-[#E527B2] px-4 py-[9px] rounded-r-md text-white absolute right-0 top-0';
    }

    if (newTotalPrice > 0) {
        purchaseBtn.removeAttribute('disabled');
        purchaseBtn.classList = 'w-full bg-[#E527B2] py-2 text-white rounded-md transition-all duration-300 active:scale-[0.95]';
    }

    discountAndTotal();
    


}

function discountAndTotal() {
    const discount = document.getElementById('discount');
    const total = document.getElementById('total');
    const totalPrice = document.getElementById('total-price');
    const totalPriceNum = stringToNum(totalPrice);
    const discountPrice = totalPriceNum * discountPercentage / 100;
    discount.innerText = discountPrice
    total.innerText = totalPriceNum - discountPrice;

}

function fullReset() {
    const discount = document.getElementById('discount');
    const total = document.getElementById('total');
    const totalPrice = document.getElementById('total-price');
    const productList = document.getElementById('product-list');
    const coupon = document.getElementById('coupon-input');
    totalPrice.innerHTML = 0;
    discount.innerText = 0;
    total.innerText = 0;
    productList.innerHTML = ``;
    purchaseBtn.setAttribute('disabled', true);
    purchaseBtn.classList = 'w-full bg-gray-300 py-2 text-black rounded-md';
    couponBtn.setAttribute('disabled', true)
    couponBtn.classList='bg-[#E527B2] px-4 py-[9px] rounded-r-md text-white absolute right-0 top-0'
    discountPercentage = 0;
    coupon.removeAttribute('disabled');
}

document.getElementById("apply-btn").addEventListener('click', function () {
    const coupon = document.getElementById('coupon-input');
    const couponValue = coupon.value;


    if (couponValue === 'SELL200') {
        discountPercentage = 20;
        coupon.setAttribute('disabled', true);
        discountAndTotal()
    }
    else {
        alert('invalid coupon')
    }
})