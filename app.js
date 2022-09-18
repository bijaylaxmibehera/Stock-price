const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const checkButton = document.querySelector("#check-btn");
const outputBox = document.querySelector("#output-box");

function checkHandler(){
  const ip=Number(initialPrice.value);
  const qty=Number(stockQuantity.value);
  const curr=Number(currentPrice.value);
  if (ip&&qty&&curr) {
    calculateProfitAndLoss(ip,qty,curr);
  }
  else{
    alert("Please enter value of all the field");
  }
 
}
function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        //loss
        const loss=(initial-current)*quantity;
        const lossPercentage= (loss/initial)*100;
        // showOutput('Whoops!!Your loss is ${loss} and percentage is ${lossPercentage}')
        outputBox.innerText="Whoops!!Your loss is "+loss+" and percentage is "+lossPercentage+"%";

    } else if (current > initial) {
        //profit
        const profit= (current-initial)*quantity;
        const profitPercentage=(profit/initial)*100;
        outputBox.innerText="Yay!! Your Profit is "+profit+" and percentage is "+profitPercentage+"%";

       
    } else {
        //no loss no profit
        outputBox.innerText="No pain No gain, and no gain no pain :)";
    }
}
// function showOutput(msg){
//     outputBox.innerHTML=msg;
// }
// calculateProfitAndLoss(100,10,120);
checkButton.addEventListener("click",checkHandler)