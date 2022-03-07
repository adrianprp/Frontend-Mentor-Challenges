const adviceNumber = document.getElementById('advice-number');
const advice = document.getElementById('advice');
const button = document.getElementById('button');


const fetchAdvice = async () => {
    const result = await fetch("https://api.adviceslip.com/advice");
    const data = await result.json();
    adviceNumber.innerText = `Advice #${data.slip.id}`;
    advice.innerText = `"${data.slip.advice}"`
 }
 fetchAdvice();
 button.addEventListener('click' , () =>{
    fetchAdvice();
 })
 

