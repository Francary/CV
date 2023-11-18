document.getElementById('modo-oscuro').addEventListener('click', function()
{
    document.body.style.backgroundColor = '#565656';
    document.body.style.color = 'white';
    const collection = document.getElementsByClassName("container");
    for (let i = 0; i < collection.length; i++ ) {
    collection[i].style.backgroundColor = "#A4A4A4"
    document.getElementById('modo-oscuro').style.display = 'none';
    document.getElementById('modo-claro').style.display = 'block';
}
});

document.getElementById('modo-claro').addEventListener('click', function()
{
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    const collection = document.getElementsByClassName("container");
    for (let i = 0; i < collection.length; i++ ) {
    collection[i].style.backgroundColor = "#f4f4A9"
    document.getElementById('modo-claro').style.display = 'none'
    document.getElementById('modo-oscuro').style.display = 'block';
}
});

fetch ('db.json')
    .then((francisco) => francisco.json())
    .then((mariangela) => console.log(mariangela));





