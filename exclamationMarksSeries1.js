function remove(s){
    if (s.charAt(s.length - 1) === "!"){
      return s.substring(0, s.length - 1) + "" 
    } else return s
}