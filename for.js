var num = 1;
var addend = 2;
for (num; num <= 4108; num) {
    if (num<4108) {
        document.write(num + ", ");
    } else {
        document.write(num);
    }
    num = num + addend;
    addend = addend*2-1;
}