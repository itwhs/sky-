setScreenMetrics(1080, 2340);

function A1()
    press(760,100,1);//低音1
function A2()
    press(960,100,1);//低音2
function A3()
    press(1160,100,1);//低音3
function A4()
    press(1360,100,1);//低音4
function A5()
	press(1560,100,1);//低音5
function A6()
	press(760,300,1);//低音6
function A7()
	press(960,300,1);//低音7
function B1()
	press(1160,300,1);//中音1
function B2()
	press(1360,300,1);//中音2
function B3()
	press(1560,300,1);//中音3
function B4()
	press(760,500,1);//中音4
function B5()
	press(960,500,1);//中音5
function B6()
	press(1160,500,1);//中音6
function B7()
	press(1360,500,1);//中音7
function C1()
	press(1560,500,1);//高音1

function Y250()
	sleep(100);
function Y150()
	sleep(150);
function Y500()
	sleep(200);
function Y250()
	sleep(250);
function Y300()
	sleep(300);
function Y350()
	sleep(350);
function Y400()
	sleep(400);
function Y450()
	sleep(450);
function Y500()
	sleep(500);

	B1();Y250();B1();Y250();B1();Y500();A5();Y500();
	B3();Y250();B3();Y250();B3();Y500();B1();Y500();
	B1();Y250();B3();Y250();B5();Y500();B5();Y500();
	B4();Y250();B3();Y250();B2();Y500();Y500();
	B2();Y250();B3();Y250();B4();Y500();B4();Y500();
	B3();Y250();B2();Y250();B3();Y500();B1();Y500();
	B1();Y250();B3();Y250();B2();Y500();A5();Y500();
	A7();Y250();B2();Y250();B1();Y500();Y500();
exit();