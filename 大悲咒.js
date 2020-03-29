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

function y(){sleep(682)}
function b(){sleep(341)}
function s(){sleep(170)}

/*
z1 b z2 b z2 y z2 y z2 y 
z2 b z3 b z3 b z5 b z3 b z3 b z3 b z2 b
z1 y z1 y z3 b z2 b z2 y 
z2 b z2 b z1 b d6 b d6 y z2 b z2 b 
z2 b z2 b z3 b z3 b z3 b z5 b z3 b z2 b 
*/

z1();b();z2();b();z2();y();z2();y();z2();y();
z2();b();z3();b();z3();b();z5();b();z3();b();z3();b();z3();b();z2();b();
z1();y();z1();y();z3();b();z2();b();z2();y();
z2();b();z2();b();z1();b();d6();b();d6();y();z2();b();z2();b();
z2();b();z2();b();z3();b();z3();b();z3();b();z5();b();z3();b();z2();b();

/*
z1 b z1 b z1 b z3 b z2 b z2 y 
z2 b z2 b z2 y z1 b d6 b d6 b d6 b 
d6 y z2 b z2 b z2 b z2 b z2 y 
z2 b z3 b z3 b z5 b z3 b z2 b z1 y
z1 b z2 b z3 b z2 b z2 y z2 y
*/ 

z1();b();z1();b();z1();b();z3();b();z2();b();z2();y();
z2();b();z2();b();z2();y();z1();b();d6();b();d6();b();d6();b();
d6();y();z2();b();z2();b();z2();b();z2();b();z2();y();
z2();b();z3();b();z3();b();z5();b();z3();b();z2();b();z1();y();
z1();b();z2();b();z3();b();z2();b();z2();y();z2();y();

/*
z2 b z2 b z3 b z3 s z3 s z2 b z2 b 
z1 b d6 b d6 y z2 b z2 b z2 y 
z2 y z2 y z2 b z2 b z3 b z3 b 
z3 b z5 b z3 b z2 b z1 b z1 b z1 b z1 b 
z3 b z3 b z2 b z2 b z2 y z2 b z2 b 
*/

z2();b();z2();b();z3();b();z3();s();z3();s();z2();b();z2();b();
z1();b();d6();b();d6();y();z2();b();z2();b();z2();y();
z2();y();z2();y();z2();b();z2();b();z3();b();z3();b();
z3();b();z5();b();z3();b();z2();b();z1();b();z1();b();z1();b();z1();b();
z3();b();z3();b();z2();b();z2();b();z2();y();z2();b();z2();b();

/*
z1 b d6 b d6 y z2 b z2 b z2 b z2 b 
z2 b z3 b z5 b z3 s z3 s z3 b z3 b z3 b z2 b 
z1 b z1 b z1 b z1 b z3 b z2 b z2 y 
z2 y z2 b z1 b d6 b d6 b z2 b z2 b 
z2 y z2 b z2 b z3 y z3 b z5 b 
*/

z1();b();d6();b();d6();y();z2();b();z2();b();z2();b();z2();b();
z2();b();z3();b();z5();b();z3();s();z3();s();z3();b();z3();b();z3();b();z2();b();
z1();b();z1();b();z1();b();z1();b();z3();b();z2();b();z2();y();
z2();y();z2();b();z1();b();d6();b();d6();b();z2();b();z2();b();
z2();y();z2();b();z2();b();z3();y();z3();b();z5();b();

/*
z3 y z2 b z3 b z3 b z3 b z3 b z2 b 
z1 b z1 b z1 b z1 b z3 b z2 b z3 b z2 b 
z2 b z2 b z2 b z2 b z1 b d6 b d6 y 
z2 b z2 b z2 b z2 b z2 y z2 y 
z3 b z3 b z3 b z3 b z3 b z5 b z3 b z2 b 
*/

z3();y();z2();b();z3();b();z3();b();z3();b();z3();b();z2();b();
z1();b();z1();b();z1();b();z1();b();z3();b();z2();b();z3();b();z2();b();
z2();b();z2();b();z2();b();z2();b();z1();b();d6();b();d6();y();
z2();b();z2();b();z2();b();z2();b();z2();y();z2();y();
z3();b();z3();b();z3();b();z3();b();z3();b();z5();b();z3();b();z2();b();