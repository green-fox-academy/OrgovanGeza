'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

const codingHrsPerDay = 6;
const semesterLength = 17;
const workdaysaWeek = 5;
const avgWorkingHrsWeekly = 52;

var hrsSpentCoding = (semesterLength * workdaysaWeek * codingHrsPerDay);
var codingHrs = (5*codingHrsPerDay);

console.log('hours spent with coding in a semester by an attendee = ', hrsSpentCoding);
console.log('the percentage of the coding hours in the semester = ', codingHrs/avgWorkingHrsWeekly*100, '%');
