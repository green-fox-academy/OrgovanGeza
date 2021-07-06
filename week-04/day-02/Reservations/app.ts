'use strict';

import { Reservation } from "./reservation";

let reservations: Reservation[] = [];

let res1: Reservation = new Reservation();
reservations.push(res1);
let res2: Reservation = new Reservation();
reservations.push(res2);
let res3: Reservation = new Reservation();
reservations.push(res3);
let res4: Reservation = new Reservation();
reservations.push(res4);
let res5: Reservation = new Reservation();
reservations.push(res5);
let res6: Reservation = new Reservation();
reservations.push(res6);
let res7: Reservation = new Reservation();
reservations.push(res7);
let res8: Reservation = new Reservation();
reservations.push(res8);
let res9: Reservation = new Reservation();
reservations.push(res9);

for (let reservation of reservations){
    reservation.printOutput();
}