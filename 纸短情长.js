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

function y(){sleep(600)}//大间隔
function b(){sleep(400)}//小间隔
function s(){sleep(260)}//按键停顿
function c(){sleep(100)}//延音

/*
d5 b z3 s z3 s z3 s z2 b z3 s z1 b z2 s z2 s z2 s z1 b z2 s z5 c z5 b z1 s z1 b z1 s d6 s z1 s d6 b d5 b z2 s z2 s z2 s z3 b d6 s d5 y 
z4 s z4 s z4 s z3 b z4 s z1 b z2 s z2 s z2 s z1 b z2 s z5 c z5 b z1 s z1 s z1 s d6 b z1 s d6 b d5 b z3 s z2 s z2 s z1 s z1 y 
z1 s z1 s z2 b z3 b z3 s z3 b z3 s z2 s z1 b d7 b z6 s z5 c z5 b z5 s z6 s z7 s g1 b z3 s z3 b g1 s z7 s g1 b z7 s z3 s z5 y 
z5 s z6 s g1 s z5 b z6 c z6 b z6 s z5 s z4 b z5 s z3 b z2 s z1 c z1 b d6 s z1 b z3 s z2 s z2 s z1 b z2 s z5 b z1 s z2 y 
z1 s z1 s z2 b z3 s z3 s z2 s z3 b z3 s z2 s z1 b z5 s z5 s z3 s z5 c z5 b z5 s z6 s z7 b g1 s g1 s g1 s g1 b g1 s z7 s z6 s z7 b z6 s z3 b z5 y 
z5 s z6 s g1 s z5 b z6 b z6 s z5 s z4 b z5 s z3 b z2 s z1 c z1 b d6 s z1 b z3 s z2 s z2 s z1 b z2 s z1 s d6 s z1 y 
*/

d5();b();z3();s();z3();s();z3();s();z2();b();z3();s();z1();b();z2();s();z2();s();z2();s();z1();b();z2();s();z5();c();z5();b();z1();s();z1();b();z1();s();d6();s();z1();s();d6();b();d5();b();z2();s();z2();s();z2();s();z3();b();d6();s();d5();y();
z4();s();z4();s();z4();s();z3();b();z4();s();z1();b();z2();s();z2();s();z2();s();z1();b();z2();s();z5();c();z5();b();z1();s();z1();s();z1();s();d6();b();z1();s();d6();b();d5();b();z3();s();z2();s();z2();s();z1();s();z1();y();
z1();s();z1();s();z2();b();z3();b();z3();s();z3();b();z3();s();z2();s();z1();b();d7();b();z6();s();z5();c();z5();b();z5();s();z6();s();z7();s();g1();b();z3();s();z3();b();g1();s();z7();s();g1();b();z7();s();z3();s();z5();y();
z5();s();z6();s();g1();s();z5();b();z6();c();z6();b();z6();s();z5();s();z4();b();z5();s();z3();b();z2();s();z1();c();z1();b();d6();s();z1();b();z3();s();z2();s();z2();s();z1();b();z2();s();z5();b();z1();s();z2();y();
z1();s();z1();s();z2();b();z3();s();z3();s();z2();s();z3();b();z3();s();z2();s();z1();b();z5();s();z5();s();z3();s();z5();c();z5();b();z5();s();z6();s();z7();b();g1();s();g1();s();g1();s();g1();b();g1();s();z7();s();z6();s();z7();b();z6();s();z3();b();z5();y();
z5();s();z6();s();g1();s();z5();b();z6();b();z6();s();z5();s();z4();b();z5();s();z3();b();z2();s();z1();c();z1();b();d6();s();z1();b();z3();s();z2();s();z2();s();z1();b();z2();s();z1();s();d6();s();z1();y();