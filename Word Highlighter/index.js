const elem = document.getElementsByTagName('body');
const search = prompt();
const words = search.split(',');
console.log(words);
const prevContent = elem[0].innerHTML;
let str = elem[0].innerHTML;
elem[0].innerHTML = "";
words.forEach(word=>{
    const arr = []
    let regex =new RegExp(word,'gi');
    while((result = regex.exec(str))){
        arr.push(result.index);
        console.log(result.index);
    }
    let ans = ""
    let j = 0;
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    arr.forEach(i=>{
        ans += str.slice(j,i)+`<span style="background-color:rgb(${r},${g},${b})">`+str.slice(i,i+word.length)+'</span>'
        j = i+word.length;
    });
    ans+=str.slice(j,str.length);
    str = ans;
})
elem[0].innerHTML = str;