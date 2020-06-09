// Your code here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(wrap = '*') {
    return function (message = "special") {
        return `You are ${wrap}${message}${wrap}!`
    }
}
let encouragingPromptFunction = wrapAdjective("!!!")

const Calculator = {
    add: function () {
        return 1 + 3
    },
    subtract: function () {
        return 1 - 3
    },
    multiply: function () {
        return 1 * 3
    },
    divide: function () {
        return 10 / 5
    }
}

function actionApplyer(num, arr) {
    arr.forEach(func => { num = func(num) })
    return num
}

