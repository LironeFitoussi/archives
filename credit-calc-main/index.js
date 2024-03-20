function calculate() {
    var price = parseFloat(document.getElementById("price").value);
    var payments = parseInt(document.getElementById("payments").value);
    
    var extra = price % payments;
    var paymentPerMonth = (price - extra) / payments; 
    var firstPayment = paymentPerMonth + extra;
    
    var resultParagraph = document.getElementById("result");
    resultParagraph.textContent = "First Payment: " + firstPayment.toFixed(2) + "\nEvery other month: " + paymentPerMonth.toFixed(2);
}