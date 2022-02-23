function dividir(a,b) {
    calculo= a/b;
    if (a===0 || b===0) {
        return "no se puede dividir por cero"
        
    }else {
        return Number(a)/Number(b)
        
    }
    
}

module.exports= dividir;