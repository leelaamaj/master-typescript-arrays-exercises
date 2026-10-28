"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(arr) { return arr.reduce((total, value) => total + value, 0); }
function average(arr) { return arr.length ? sum(arr) / arr.length : 0; }
