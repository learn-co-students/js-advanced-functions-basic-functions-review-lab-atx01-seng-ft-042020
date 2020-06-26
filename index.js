function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function (activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = '*'){
    return function(adjective = 'special'){
        return `You are ${flair}${adjective}${flair}!`
    }
}

let Calculator = {
    add: function add(){return 1+3},
    subtract: function subtract(){return 1-3},
    multiply: function multiply(){return 1*3},
    divide: function divide(){return 10/5}
}

function actionApplyer(int, arr){
    let mappedArr = arr.forEach(element => {
        int = element(int);
    });

    if (arr != []){
        return int
    } else {
        return mappedArr
    };
}