function getNum(num){
    document.getElementById('result').value += num;
}


function clearNum() {
    document.getElementById('result').value = '';
}

function RemoveNum() {
    var res = document.getElementById('result').value; 
    document.getElementById('result').value = document.getElementById('result').value.slice(0, res.length - 1)
}

function getResults() { 
    var inputExp = document.getElementById('result').value;
    var replacedExp = inputExp.replace('π','Math.PI');

switch (inputExp) {
    case 'π':
        replacedExp= inputExp.replace('π','Math.PI')
        break;

    default:
        break;
}


    var inputExp = document.getElementById('result').value;
    var replacedExp = inputExp.replace('E','Math.E');

switch (inputExp) {
    case 'E':
        replacedExp= inputExp.replace('E','Math.E')
        break;

    default:
        break;
}

    document.getElementById('result').value = eval(replacedExp)
}

