/*document.getElementById('drag2').addEventListener('mouseup', hideDivs);*/
function hideDivs0()
{
    document.getElementById('drag1').style.display = 'none';
    document.getElementById('step00').style.display = 'block';
}

function hideDivs()
{
    if (document.getElementById('step00').style.display === 'block')
    {
        document.getElementById('drag1').style.display = 'none';
        document.getElementById('step00').style.display = 'none';
        document.getElementById('drag2').style.display = 'none';
        document.getElementById('step01').style.display = 'block';
        /*this.style.display = 'none';*/
    }
    else
        alert('Try another part!');
}

function hideDivs2()
{
    if (document.getElementById('step01').style.display === 'block')
    {
        document.getElementById('drag3').style.display = 'none';
        document.getElementById('step01').style.display = 'none';
        document.getElementById('step02').style.display = 'block';
    }
    else
        alert('Try another part!');
}