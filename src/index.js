function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let count_brackets = 0;
    for (let i = 0; i < expr.length; i++){
        if (expr[i] == '(') count_brackets++;
        if (expr[i] == ')') count_brackets--;
    }
    if (count_brackets != 0 ) throw "ExpressionError: Brackets must be paired";
    if (expr.indexOf('/ 0') != -1 || expr.indexOf('/0') != -1) throw "TypeError: Division by zero.";
    expr = expr.replace(/ /g, "") && new Function(`return ${expr}`);
    return expr();
}

module.exports = {
    expressionCalculator
}