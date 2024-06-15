var array = ["red", "green", "blue", "yellow", "aquamarine", "deeppink"];
var myInterval = null;

function replaceValues() {
    let lastValue = array.pop();
    array.unshift(lastValue);

    $('#div-01').css({backgroundColor: array[0]});
    $('#div-02').css({backgroundColor: array[1]});
    $('#div-03').css({backgroundColor: array[2]});
    $('#div-04').css({backgroundColor: array[3]});
    $('#div-05').css({backgroundColor: array[4]});
    $('#div-06').css({backgroundColor: array[5]});
}

$('#start-btn').on('click', ()=> {
    myInterval = setInterval(replaceValues, 500);
});

$('#stop-btn').on('click', ()=> {
    clearInterval(myInterval);
});