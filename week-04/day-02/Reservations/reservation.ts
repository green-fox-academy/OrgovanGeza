'use strict';

import { Reservationy } from "./reservationy";

export class Reservation implements Reservationy {
    id: string = '';
    dow: string = '';

    constructor() {
        this.id = this.getCodeBooking();
        this.dow = this.getDowBooking();
    }


    getDowBooking(): string {
        let days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
        let dow = days[Math.floor(Math.random() * (days.length - 1))];

        return dow;
    }

    getCodeBooking(): string {
        let id = '';
        let characters = 'ASDFGHJKLQWERTZUIOPYXCVBNM0918273645'
        let idLength = 8;

        for (let i = 0; i < idLength; i++) {
            id += characters[Math.floor(Math.random() * (characters.length - 1))]
        }

        return id;
    }

    printOutput(): void {
        console.log(`Booking# ${this.id} for ${this.dow}`);
    }

}