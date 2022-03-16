function remove(s){
    let result = s
    let i = s.length - 1
    while (s[i] === '!'){
        result = s.substring(0, i)
        i--
    } 
    return result
}