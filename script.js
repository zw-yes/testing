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
  money_label.textContent = "Money -> " + toString(money)
}


//purchase chicken
async function buy_chicken() {
  if (money >= chicken_cost) {
    chicken += 1
    money -= chicken_cost
    chicken_label.textContent = "Chickens: " + toString(chicken)
    chicken_cost += Math.round(Math.sqrt(chicken_cost/1.5))
    //scaling cost idk
  }
}



//update money per second
setInterval(function(){
  money_per_second = (chicken*2)
  money_per_second_label.textContent = "Money/s > " + toString(money_per_second)
}, 100)

//update money
setInterval(function(){
  update_money(money_per_second/10)
}, 100)
