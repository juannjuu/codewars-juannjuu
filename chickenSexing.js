function correctness(bobsDecisions, expertDecisions) {
    let point = 0 
    for(let i = 0; i < bobsDecisions.length; i++){
      if (bobsDecisions[i] == expertDecisions[i]){
        point += 1
      } else if (bobsDecisions[i] != expertDecisions[i] && bobsDecisions[i] == '?' 
                 || expertDecisions[i] == '?'){
        point += 0.5
      } else point += 0
    }
    return point
}