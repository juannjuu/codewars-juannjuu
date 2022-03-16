function trouble(x, t){
    for(let i = 0; i < x.length-1;){
      if(x[i] + x[i + 1] === t){
        x.splice([i + 1], 1)
      } else i++
    }
    return x
}