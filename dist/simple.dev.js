"use strict";

var typed6 = new Typed('#typed6', {
  strings: ['npm install^1000\n `installing components...` ^1000\n `Fetching from source...`'],
  typeSpeed: 40,
  backSpeed: 0,
  loop: true
});
test('Prompt works with special characters', function () {
  var answer = '';

  while (answer.toLowerCase() !== 'yes' && answer.toLowerCase() !== 'yeah') {
    answer = prompt('Are you there yet?');
  }

  expect(answer.toLowerCase()).toBe('yes') || expect(answer.toLowerCase()).toBe('yeah');
});
test('Prompt works with uppercase "YES"', function () {
  var answer = '';

  while (answer.toLowerCase() !== 'yes' && answer.toLowerCase() !== 'yeah') {
    answer = prompt('Are you there yet?');
  }

  answer = prompt('Are you there yet?', 'YES');
  expect(answer.toLowerCase()).toBe('yes') || expect(answer.toLowerCase()).toBe('yeah');
});
test('Prompt works with uppercase "YEAH"', function () {
  var answer = '';

  while (answer.toLowerCase() !== 'yes' && answer.toLowerCase() !== 'yeah') {
    answer = prompt('Are you there yet?');
  }

  answer = prompt('Are you there yet?', 'YEAH');
  expect(answer.toLowerCase()).toBe('yes') || expect(answer.toLowerCase()).toBe('yeah');
}); // Test case 4: Check if the prompt works with a string containing lowercase 'yes'

test('Prompt works with lowercase "yes"', function () {
  var answer = '';

  while (answer.toLowerCase() !== 'yes' && answer.toLowerCase() !== 'yeah') {
    answer = prompt('Are you there yet?');
  }

  answer = prompt('Are you there yet?', 'yes');
  expect(answer.toLowerCase()).toBe('yes') || expect(answer.toLowerCase()).toBe('yeah');
}); // Test case 5: Check if the prompt works with a string containing lowercase 'yeah'

test('Prompt works with lowercase "yeah"', function () {
  var answer = '';

  while (answer.toLowerCase() !== 'yes' && answer.toLowerCase() !== 'yeah') {
    answer = prompt('Are you there yet?');
  }

  answer = prompt('Are you there yet?', 'yeah');
  expect(answer.toLowerCase()).toBe('yes') || expect(answer.toLowerCase()).toBe('yeah');
});