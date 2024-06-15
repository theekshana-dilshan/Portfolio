var array = ["A", "B", "C", "D", "E", "F"];
var myInterval = null;

function replaceValues() {
    let lastValue = array.pop();
    array.unshift(lastValue);

    $('#letter01').text(array[0]);
    $('#letter02').text(array[1]);
    $('#letter03').text(array[2]);
    $('#letter04').text(array[3]);
    $('#letter05').text(array[4]);
    $('#letter06').text(array[5]);
}

$('#start-btn').on('click', ()=> {
    myInterval = setInterval(replaceValues, 1000);
});

$('#stop-btn').on('click', ()=> {
    clearInterval(myInterval);
});