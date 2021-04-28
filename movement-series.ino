#include<Servo.h>

Servo ser; 

int poser = 0; 

int val;

void setup() {

Serial.begin(9600);

ser.attach(9);

}

void loop() {

if (Serial.available())

{

val = Serial.read();

if (val == 'd') 

{

if (millis() < 10000) {

delay(1000);
ser.write(0);
delay(2000);
ser.write(180);
delay(2000);
ser.write(90);
delay(2000);
ser.write(180);
delay(2000);

} 

else {}

}

if (val == 'a')

{

if (millis() < 10000) {

delay(1000);
ser.write(0);
delay(2000);
ser.write(90);
delay(2000);
ser.write(1800);
delay(2000);
ser.write(45);
delay(2000);

} 

else {}

}

}

}
