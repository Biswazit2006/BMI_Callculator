const btn = document.getElementById("btn");

btn.addEventListener("click",function(event){
    event.preventDefault();
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    
    let sqrHeight = height*height;
    let bmi = weight/sqrHeight;
    
    let result = document.getElementById('resultText')
    result.innerText = `Your BMI is: ${bmi}`;

    let resultBar = document.querySelector('.result').style.display = 'block';

});

const reset = document.getElementById('reset')
reset.addEventListener('click',function(){
    location.reload();
})