function shortcut(string){
    let words = string.split('')
    let result = ''
    for (let i = 0; i <= words.length - 1; i++){
      if(words[i] == 'a' || words[i] == 'i' || words[i] == 'u' || words[i] == 'e' || words[i] == 'o'){
        continue
      } else {
        result += words[i]
      }
    }
    return result
}