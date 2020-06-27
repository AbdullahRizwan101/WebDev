function getnum(num)
{
    console.log(num);
    var result = document.getElementById('screen');

    result.value +=num;
   
}

function clearscreen()
{
    var result = document.getElementById('screen');
    result.value = ""
}
function getResult()
{
    var result = document.getElementById('screen');
    result.value = eval(result.value);

}