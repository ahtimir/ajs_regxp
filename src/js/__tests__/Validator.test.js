/* eslint-disable linebreak-style */

import Validator from '../Validator';

test('This name is correct', () => {
  const result = new Validator('Dff-23-sd_sss').validateUsername();
  expect(result).toBe('Dff-23-sd_sss');
});

test('Name should not start with a number', () => {
  expect(() => {
    new Validator('1Dfghjk').validateUsername();
  }).toThrow();
});

test('Name should not ends with a number', () => {
  expect(() => {
    new Validator('Dfghjk5').validateUsername();
  }).toThrow();
});

test('4+ numbers is forbidden', () => {
  expect(() => {
    new Validator('Df-01234-sd').validateUsername();
  }).toThrow();
});

test('Name should not ends with a underline', () => {
  expect(() => {
    new Validator('Dfghjk_').validateUsername();
  }).toThrow();
});

test('Name should not contains cyrillc letters', () => {
  expect(() => {
    new Validator('Ваывавп').validateUsername();
  }).toThrow();
});
