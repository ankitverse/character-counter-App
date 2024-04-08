let submit = document.getElementById('submit');
let reset = document.getElementById("reset");

let para = document.getElementById("para");
let output = document.getElementById("output");
let outputch = document.getElementById("outputch");
let chcount = document.getElementById("ch_count");
let wordcount = document.getElementById("word_count");


function count_ch(parav) {
    // console.log("Count ch function is called");

    chcount.innerHTML = parav.length;
    count_word(parav);

}

function count_word(para){
    let count =0;
    const words = para.match(/\S+/g);  //regex for words 
    if(words.length!==0){ 
        count = words.length; 
    } 
    else{ 
        count =  0; 
    } 
    wordcount.innerHTML = count;
}

//counting alphabets function 
function count_alpha(alpha = "a", para) {
    let count = 0;
    console.log("count alpha called with " + alpha + " " + para + "ouptut" + alpha.toUpperCase())
    for (let i = 0; i < para.length; i++) {
        if (para[i] == alpha) {
            count++;
        }
    }
    let name = "ouptut" + alpha.toUpperCase();
    
    let content = document.getElementById("outputA");
    content.innerHTML = "Total number of " + alpha + count;
    return count;
}



reset.addEventListener('click', () => {
    para.value = "";
    count_ch(para.value);
})