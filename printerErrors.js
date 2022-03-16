function printerError(s) {
    const arrStr = s.split('')
    let errorLength = arrStr.filter(e => e.match(/[^a-m]/g)).length
    return `${errorLength}/${arrStr.length}`
}