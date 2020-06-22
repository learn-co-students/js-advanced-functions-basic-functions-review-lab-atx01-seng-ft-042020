// Your code here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
    return function(adj = "special") {
        return `You are ${flair}${adj}${flair}!`
    }
}

let Calculator = {}

Calculator.add = function(a, b) { return a+b }
Calculator.subtract = function(a, b) { return a-b }
Calculator.multiply = function(a, b) { return a*b }
Calculator.divide = function(a, b) { return a/b }

let actionApplyer = function(startInt, funcArray) {
    if (funcArray.length == 0) {
        return startInt
    } else {
        return funcArray.reduce((total,func) => func(total), startInt)
    }
}