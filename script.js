const input = document.querySelector("input");
const chkBtn = document.querySelector("button");
const result = document.querySelector(".result");

chkBtn.addEventListener('click', () => {
    if (!input.value) alert('Input is empty')
    else{
        const inputVal = input.value.toLowerCase();
        // now we will split, reverse, and join the values 
        const reversedVal = input.value.split("").reverse().join('').toLowerCase();
       
       if (reversedVal == inputVal){
           
           result.innerHTML = `<p> Yes! <span> "${inputVal}" </span> is a Palindrome</p>`
       } else {
           result.innerHTML = `<p>No<span> "${inputVal}" </span> is not a Palindrome</p>`
       }


    }
});

