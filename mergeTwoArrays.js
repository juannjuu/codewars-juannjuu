function mergeArrays(a, b) {
    const result = []
    let maxIndex = Math.max(a.length, b.length)
    for(let i = 0; i < maxIndex; i++){
        if(a.length) result.push(a.shift(a[i]))
        if(b.length) result.push(b.shift(b[i]))
    }
    return result
}