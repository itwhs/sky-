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
z1 s z2 s z3 s d5 s z1 s z3 s z3 y 
z2 s z1 s z2 s z5 s z5 s z5 s z5 y 
z1 s d7 s z1 s z1 s z1 s z1 s z1 y 
d7 s z1 s d7 s z1 s d7 s d6 s d5 y 
d5 s d5 s d6 s d6 s d6 s d6 s d6 y 
d5 s d3 s d5 s d3 s d5 s z2 s z1 y 
d5 s z3 s z3 s z3 z4 s z5 s z1 s z1 s z2 s z2 y 
*/

z1();s();z2();s();z3();s();d5();s();z1();s();z3();s();z3();y();
z2();s();z1();s();z2();s();z5();s();z5();s();z5();s();z5();y();
z1();s();d7();s();z1();s();z1();s();z1();s();z1();s();z1();y();
d7();s();z1();s();d7();s();z1();s();d7();s();d6();s();d5();y();
d5();s();d5();s();d6();s();d6();s();d6();s();d6();s();d6();y();
d5();s();d3();s();d5();s();d3();s();d5();s();z2();s();z1();y();
d5();s();z3();s();z3();s();z3();z4();s();z5();s();z1();s();z1();s();z2();s();z2();y();