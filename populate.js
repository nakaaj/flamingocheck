var itemlist;

const productName = document.getElementById('productName');
const Descriptiontext = document.getElementById('Description');
const pricevalue = document.getElementById('price');
const numelement = document.getElementById('num_element');
const divbar = document.getElementById('app');


document.addEventListener("DOMContentLoaded", function () {
    const options = document.querySelectorAll(".options div");

    options.forEach(option => {
        option.addEventListener("click", function () {
            console.log(option.id);
            fetch('data2.json')
                .then(response => response.json())
                .then(data => {
                    // Get the dropdown menu element
                    //console.log(data[option.id]);
                    productName.innerHTML = data[option.id].name;
                    Descriptiontext.innerHTML = data[option.id].description;
                    pricevalue.innerHTML = data[option.id].price;
                    //getshortlist(data[option.id].charm);
                    console.log('charm',data[option.id].charm);
                    const dropdownMenu = document.getElementById('dropdownMenu');
                    dropdownMenu.innerHTML = "";
                })
        });
    });
});
