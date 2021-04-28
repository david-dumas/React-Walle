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

if (Mouse.click()) 

{

poser += 1;

ser.write(poser);

delay(10);

}

}

if (Mouse.click(MOUSE_RIGHT)

{

poser -= 1;

ser.write(poser);

delay(10);

}

}
