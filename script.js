const chicken_label = document.getElementById("chicken")
const chicken_button = document.getElementById("buy_chicken")
const duck_label = document.getElementById("duck")
const duck_button = document.getElementById("buy_duck")
const cow_label = document.getElementById("cow")
const cow_button = document.getElementById("buy_cow")
const money_label = document.getElementById("money")
const money_per_second_label = document.getElementById("money_per_second")
const version_label = document.getElementById("version")

//version amt here
var version = 1.4

version_label.textContent = "v" + version

var money = 0
var chicken_cost = 10
var chicken = 1
var duck_cost = 250
var duck = 0
var cow_cost = 1500
var cow = 0

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
    chicken_cost += Math.round(Math.round(Math.sqrt(chicken_cost/1.25)) + Math.round(chicken_cost/10))
    chicken_button.textContent = "buy chicken($" + chicken_cost + ")"
    //scaling cost idk
  }
}

//purchase duck
async function buy_duck() {
  if (money >= duck_cost) {
    duck += 1
    money -= duck_cost
    money_label.textContent = "Money > " + money
    duck_label.textContent = "Ducks: " + duck
    duck_cost += Math.round(Math.round(Math.sqrt(duck_cost/1.15)) + Math.round(duck_cost/10))
    duck_button.textContent = "buy duck($" + duck_cost + ")"
    //scaling cost idk
  }
}

//purchase cow
async function buy_cow() {
  if (money >= cow_cost) {
    cow += 1
    money -= cow_cost
    money_label.textContent = "Money > " + money
    cow_label.textContent = "cow: " + cow
    cow_cost += Math.round(Math.round(Math.sqrt(cow_cost/1.05)) + Math.round(cow_cost/10))
    cow_button.textContent = "buy cow($" + cow_cost + ")"
    //scaling cost idk
  }
}

//update money per second
setInterval(function(){
  money_per_second = (chicken*1) + (duck*10) + (cow*50)
  money_per_second_label.textContent = "Money/s > " + money_per_second
}, 100)

//animals button thingie
chicken_button.addEventListener("click", buy_chicken)
duck_button.addEventListener("click", buy_duck)
cow_button.addEventListener("click", buy_cow)

//update money
setInterval(function(){
  update_money(Math.round(money_per_second))
}, 1000)
