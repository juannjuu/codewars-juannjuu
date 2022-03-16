function calc(x){
    x = x.split("").map(function(element){
      return element.charCodeAt()
    })
    x = x.join("")
    let total1 = x.split("").reduce((a,b)=> parseInt(a)+parseInt(b))
    let total2 = x.replace(/7/g, 1).split("").reduce((a,b)=> parseInt(a)+parseInt(b))
    return parseInt(total1) - parseInt(total2)
}