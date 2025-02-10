function divideAndConquerSum(a) {
    if (a.length == 0){
        return 0;
    }
    else if (a.length == 1){
        return a[0];
    }
    var mid1 = Math.floor(a.length / 3);
    var mid2 = Math.floor(2 * (a.length / 3));
    var num1 = divideAndConquerSum(a.slice(0, mid1));
    var num2 = divideAndConquerSum(a.slice(mid1, mid2));
    var num3 = divideAndConquerSum(a.slice(mid2, a.length));
    return num1 + num2 + num3;
}
