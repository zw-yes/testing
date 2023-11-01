const chicken_label = document.getElementById("chicken")
const chicken_button = document.getElementById("buy_chicken")
const duck_label = document.getElementById("duck")
const duck_button = document.getElementById("buy_duck")
const cow_label = document.getElementById("cow")
const cow_button = document.getElementById("buy_cow")
const money_label = document.getElementById("money")
const money_per_second_label = document.getElementById("money_per_second")
const version_label = document.getElementById("version")
const sword_label = document.getElementById("sword")
const gem_label = document.getElementById("gems")
const luck_label = document.getElementById("luck")
const reroll_button = document.getElementById("reroll")
const upgrade_button = document.getElementById("upgrade")
//version here
var version = 2.1
version_label.textContent = "v" + version

//debug function
function debug(thing){
    version_label.textContent = thing
}


//variables

//sword stuff
var gems = 0
var sword = "None"
var luck = 1
var reroll_cost = 10
var upgrade_cost = 10



//farm stuff
var money = 0
var chicken_cost = 10
var chicken = 1
var duck_cost = 250
var duck = 0
var cow_cost = 1500
var cow = 0

var money_per_second = 0 //will update itself, check function to update at end

//cool sleep function
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
debug("before swords are defined")
//cool dictionary function for swords or whatever
var swords = {};
var addValue = function (myKey, myValue) {
    swords[myKey] = myValue;
};
//setting up sword possibilities 
addValue("common t1", 100)
addValue("common t2", 30)
addValue("common t3", 5)
addValue("rare t1", 1)
addValue("rare t2", 0.3)
addValue("rare t3", 0.05)
addValue("epic t1", 0.01)
addValue("epic t2", 0.005)
addValue("epic t3", 0.001)
addValue("legend t1", 0.0005)
addValue("legend t2", 0.0001)
addValue("legend t3", 0.00005)
addValue("mythic t1", 0.000001)
addValue("mythic t2", 0.0000005)
addValue("mythic t3", 0.00000001)
addValue("god slayer", 0.000000001) //10x rarer than mythic3
//lmao, this is in % btw
debug("swords done")

var getValue = function (myKey) {
    return swords[myKey];
};

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
    chicken_button.textContent = "chicken($" + chicken_cost + ")"
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
    duck_button.textContent = "duck($" + duck_cost + ")"
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
    cow_button.textContent = "cow($" + cow_cost + ")"
    //scaling cost idk
  }
}

//cool randint function
function randint(min, max) {
    return Math.random() * (max - min) + min;
}
debug("before reroll sword function is defined")
//reroll sword
var reroll_sword = function() {
  if (money >= reroll_cost) {
    update_money(0-(reroll_cost))
    
    
    //roll logic
    
    for (key in swords) {
    value = swords[key]
    if ((value * luck) >= 100) {
      //guaranteed swordo
      sword = key + "("+ value + "%)"
      sword_label.textContent = "Sword > " + sword
    } else {
      if (Math.random()*100) <= value) {
        //chance hit i think
        sword = key + "("+ value + "%)"
        sword_label.textContent = "Sword > " + sword
      }
    }}
  }
}
debug("done, now defining upgrade_luck")
var upgrade_luck = function() {
  if (money >= upgrade_cost) {
    update_money(0-(upgrade_cost))
    luck += luck/3
    luck_label.textContent = "Luck > " + luck + "x"
    upgrade_cost += Math.round(upgrade_cost/1.2)
    reroll_cost = upgrade_cost/2
    reroll_button.textContent = "Reroll(" + reroll_cost + "$)"
    upgrade_button.textContent = "Upgrade(" + upgrade_cost + "$)"
    
  }
}
debug("upgrade luck defined")
//update money per second
setInterval(function(){
  money_per_second = (chicken*1) + (duck*10) + (cow*50)
  money_per_second_label.textContent = "Money/s > " + money_per_second
}, 100)

//animals button thingie
chicken_button.addEventListener("click", buy_chicken)
duck_button.addEventListener("click", buy_duck)
cow_button.addEventListener("click", buy_cow)

//sword related buttons
reroll_button.addEventListener("click", reroll_sword)
upgrade_button.addEventListener("click", upgrade_luck)


//update money
setInterval(function(){
  update_money(Math.round(money_per_second))
}, 1000)
