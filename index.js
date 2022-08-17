// code your solution here


function saturdayFun(a = `roller-skate`){
    return `This Saturday, I want to ${a}!`
}

const mondayWork = function (a = `go to the office`){
    return `This Monday, I will ${a}.`
}

function wrapAdjective(b = `*`){
    return function(adj = `special`){
        return `You are ${b}${adj}${b}!`
    }
}