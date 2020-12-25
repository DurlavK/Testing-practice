// const sum = require('./sum');
import {sum, capitalize, reverse, calculator, analysis, caeser} from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('capitalize(string)', () => {
  expect(capitalize('word')).toBe('Word');
});

test('reverse(string)', () => {
  expect(reverse('word')).toBe('drow');
});

test('calculator(a,b,+)', () => {
  expect(calculator(1,2,'+')).toBe(3);
});

test('calculator(a,b,*)', () => {
  expect(calculator(1,2,'*')).toBe(2);
});

test('calculator(a,b,-)', () => {
  expect(calculator(1,2,'-')).toBe(-1);
});

test('calculator(a,b,/)', () => {
  expect(calculator(1,2,'/')).toBe(.5);
});

test('array analysis', () => {
  expect(analysis([1,8,3,4,2,6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});

test('caeser1', () => {
  expect(caeser('pbqr')).toBe('CODE');
});

test('caeser2', () => {
  expect(caeser('dHVPx')).toBe('QUICK');
});