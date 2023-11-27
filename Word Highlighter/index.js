const elem = document.getElementsByTagName('body')[0];
const prevContent = elem.innerHTML;
elem.addEventListener('keydown',()=>{
    let code = event.key;
    if(code=='S' || code=='s'){
        elem.innerHTML = prevContent;
        searchWords();
    }
})
const searchWords = () => {
    const search = prompt();
    if(search.length==0){
        return;
    }
    const words = search.split(',');
    let str = elem.innerHTML;
    elem.innerHTML = "";
    words.forEach(word => {
        const arr = []
        let regex = new RegExp(word, 'gi');
        let result;
        while ((result = regex.exec(str))) {
            arr.push(result.index);
        }
        if(arr.length==0)return;
        let ans = ""
        let j = 0;
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        arr.forEach(i => {
            ans += str.slice(j, i) + `<span style="background-color:rgb(${r},${g},${b})">` + str.slice(i, i + word.length) + '</span>'
            j = i + word.length;
        });
        ans += str.slice(j, str.length);
        str = ans;
    })
    elem.innerHTML = str;
}