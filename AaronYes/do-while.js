var num = 2;
do {
    if (num<=48) {
        document.write(num + ", ");
    } else {
        document.write(num);
    }
    num = num + 2;
} while (num <= 50);
document.write("<br>");