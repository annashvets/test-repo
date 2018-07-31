abbrev = function (str){
    let a = str.split(" ");
    let res1 = a[0].charAt(0);
    let res2 = a[1].charAt(0);
    let res = res1 + "." + res2 + ".";
    return res;
}

console.log(abbrev(`Anna Shvets`));