const chicken_label = document.getElementById("chicken")
const chicken_button = document.getElementById("buy_chicken")
const money_label = document.getElementById("money")
const money_per_second_label = document.getElementById("money_per_second")
var money = 0
var chicken_cost = 10
var chicken = 1
var money_per_second = 2

//cool sleep function
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

//cool gain money function
async function update_money(amt) {
  money += amt
  money_label.textContent = "Money > " + money
}


//purchase chicken
async function buy_chicken() {
  if (money >= chicken_cost) {
    chicken += 1
    money -= chicken_cost
    money_label.textContent = "Money > " + money
    chicken_label.textContent = "Chickens: " + chicken
    chicken_cost += Math.round(Math.sqrt(chicken_cost/1.5))
    chicken_button.textContent = "buy chicken($" + chicken_cost + ")"
    //scaling cost idk
  }
}



//update money per second
setInterval(function(){
  money_per_second = (chicken*2)
  money_per_second_label.textContent = "Money/s > " + money_per_second
}, 100)

//chicken button thingie
chicken_button.addEventListener("click", buy_chicken)

//update money
setInterval(function(){
  update_money(Math.round(money_per_second))
}, 1000)
