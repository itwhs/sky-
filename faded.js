setScreenMetrics(1080, 2340);//设备K20Pro

function d1(){press(760,100,1)}//低音1
function d2(){press(960,100,1)}//低音2
function d3(){press(1160,100,1)}//低音3
function d4(){press(1360,100,1)}//低音4
function d5(){press(1560,100,1)}//低音5
function d6(){press(760,300,1)}//低音6
function d7(){press(960,300,1)}//低音7
function z1(){press(1160,300,1)}//中音1
function z2(){press(1360,300,1)}//中音2
function z3(){press(1560,300,1)}//中音3
function z4(){press(760,500,1)}//中音4
function z5(){press(960,500,1)}//中音5
function z6(){press(1160,500,1)}//中音6
function z7(){press(1360,500,1)}//中音7
function g1(){press(1560,500,1)}//高音1

function y(){sleep(600)}
function b(){sleep(400)}
function s(){sleep(220)}

/*
z1 s z1 s z1 s z3 b z5 s z6 s z6 s z5 b z3 s z3 s z3 s z3 b d7 s d7 s d7 y 
z1 s z1 s d6 s z1 s d6 s z1 s z2 s z3 b z1 s z1 s d5 s z3 y 
z1 s z1 s z1 s d7 b d7 s d7 s z2 d6 b z1 y 
z1 s z1 s z1 s z1 s d6 s z1 s z2 s z3 y 
z1 s z1 s d5 s z3 d2 y 
d1 s d1 s d2 b d2 b d2 y 
d3 s d3 s d3 s z1 s d6 s z1 s d6 s z1 s d6 s z1 s d6 y 
d7 s z5 s d7 s z5 s d7 s z5 s d7 s z5 y 
d6 s d3 s d6 s d3 s d6 s d3 s d6 s d3 y 
z1 s d5 s z1 s d5 s z1 s d5 s z1 s d5 y 
z5 s z1 s z5 s z1 s z5 s z1 s z5 s z1 y 
d7 s d4 s d7 s d4 s d7 s d4 s d7 s d4 y 
z3 s z1 s z3 s z1 s z3 s z1 s z3 s z1 y 
d6 s d7 s d6 s d7 s d6 s d7 y 
d1 s d1 s d1 s d1 y 
z1 s z1 s z1 s z3 s z5 s z6 s z6 s z5 s z3 s z3 s z3 s z3 s d7 s d7 s d7 s d7 b d1 
*/

z1();s();z1();s();z1();s();z3();b();z5();s();z6();s();z6();s();z5();b();z3();s();z3();s();z3();s();z3();b();d7();s();d7();s();d7();y();
z1();s();z1();s();d6();s();z1();s();d6();s();z1();s();z2();s();z3();b();z1();s();z1();s();d5();s();z3();y();
z1();s();z1();s();z1();s();d7();b();d7();s();d7();s();z2();d6();b();z1();y();
z1();s();z1();s();z1();s();z1();s();d6();s();z1();s();z2();s();z3();y();
z1();s();z1();s();d5();s();z3();d2();y();
d1();s();d1();s();d2();b();d2();b();d2();y();
d3();s();d3();s();d3();s();z1();s();d6();s();z1();s();d6();s();z1();s();d6();s();z1();s();d6();y();
d7();s();z5();s();d7();s();z5();s();d7();s();z5();s();d7();s();z5();y();
d6();s();d3();s();d6();s();d3();s();d6();s();d3();s();d6();s();d3();y();
z1();s();d5();s();z1();s();d5();s();z1();s();d5();s();z1();s();d5();y();
z5();s();z1();s();z5();s();z1();s();z5();s();z1();s();z5();s();z1();y();
d7();s();d4();s();d7();s();d4();s();d7();s();d4();s();d7();s();d4();y();
z3();s();z1();s();z3();s();z1();s();z3();s();z1();s();z3();s();z1();y();
d6();s();d7();s();d6();s();d7();s();d6();s();d7();y();
d1();s();d1();s();d1();s();d1();y();
z1();s();z1();s();z1();s();z3();s();z5();s();z6();s();z6();s();z5();s();z3();s();z3();s();z3();s();z3();s();d7();s();d7();s();d7();s();d7();b();d1();
exit();