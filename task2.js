function capital(str){
    return str.toUpperCase();

}
function reverse(str){
    return str.split("").reverse().join("");
}
function vowelc(str){
    const matches = str.match(/[aeiouAEIOU]/g);
    return matches ? matches.length : 0;
}   
module.exports={capital,reverse,vowelc};

