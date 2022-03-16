let stantonMeasure = (arr) => {
    let n = 0, result = 0
    arr.map(e => e == 1 ? n++ : e)
    arr.map(e => e == n ? result++ : e)
    return result
  }