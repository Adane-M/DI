
function number(num) {
    console.log("num", num);
    return num
}

function operator(operator) {
    console.log(`operator`, operator);
    return operator

}


function equal() {
    // eval(number(num), operator(operator),number(num) )
    equal = number(num), operator(operator), number(num);
    console.log(equal, "equal");
}


function buildCalc() {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = []
        for (let j = 0; j < arr[i].length; j++) {
            count = arr[i][j];

            switch (count) {
                case 10:
                    arr[i][j] = ".";
                    break;
                case 11:
                    arr[i][j] = "+";
                    break;
                case 12:
                    arr[i][j] = "-";
                    break;
                case 13:
                    arr[i][j] = "X";
                    break;
                case 13:
                    arr[i][j] = "/";
                    break;
                case 14:
                    arr[i][j] = "=";
                    break;
                case 15:
                    arr[i][j] = "reset"
                    break;
                case 16:
                    arr[i][j] = "clear"
                    break;

                default:
                    break;
            }

            count++


        }
    }

}