"use strict";

// // const Joi = require('joi');
// const shortid = require('shortid');
// // const passwordSchema = Joi.string().min(3).max(10).alphanum();
// // console.log(passwordSchema.validate('Ght123'));
// console.log(shortid.generate());
////////////////////////////////
const sum = (a, b) => a + b;

sum(2, 3);

class Hero {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this.name;
  }

  set name(newName) {
    this.name = newName;
  }

}

const h = newHero('mango');