/*document.getElementById('drag2').addEventListener('mouseup', hideDivs);*/
function hideDivs()
{
    document.getElementById('drag1').style.display = 'none';
    document.getElementById('drag2').style.display = 'none';
    document.getElementById('step01').style.display = 'block';
    /*this.style.display = 'none';*/
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