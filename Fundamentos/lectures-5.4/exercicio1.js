window.onload = function(){

    let select = document.getElementById('selectBG')
    console.log(select);
    select.addEventListener('change', function(){
        let selectedColor = select.selectedOptions[0];
        // console.log(select.selectedOptions);
        document.body.style.backgroundColor = selectedColor.value;

        localStorage.setItem('5.4-backgroundColor',selectedColor.value);
    })

    let text = document.getElementById('text');
    let selectTextColor = document.getElementById('selectTextColor');
    selectTextColor.addEventListener('change', function(){
        let selectedTextColor = selectTextColor.selectedOptions[0];
        // console.log(selectedTextColor);
        text.style.color = selectedTextColor.value;

    localStorage.setItem('5.4-colorFont', selectedTextColor.value);
    })

    let fontSize = document.getElementById('fontSize');
    console.log(fontSize);
    fontSize.addEventListener('change', function(){
        console.log(fontSize.value); 
        text.style.fontSize = `${fontSize.value}px`;   
    })

    let savedbackgroundColor = localStorage.getItem('5.4-backgroundColor')
    document.body.style.backgroundColor = savedbackgroundColor;

    let savedColorFont = localStorage.getItem('5.4-colorFont');
    let p = document.getElementById('text');
    p.style.color = savedColorFont;
}