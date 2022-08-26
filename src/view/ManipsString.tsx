import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ManipsString = () => {
  /* count char */
  let str1 = 'matt';
  console.log(str1.length); // this outputs 4

  /* string as array of character */
  let str2 = 'Random child';
  console.log(str2.charAt(0)); // this outputs R
  console.log(str2.charAt(4)); // this outputs o

  /* concatenates two strings */
  const string1 = 'clean ';
  const string2 = 'code';
  console.log(string1.concat(string2)); // This returns 'clean code'

  /* checks whether or not a string contains a substring */
  const str3 = 'hello world';
  console.log(str3.includes('hello')); // true
  console.log(str3.includes('word')); // false

  /* checks if a string matches a regular expression */
  const firstName = 'Matt';
  const badFirstName = 'Matthew4';
  const nameRegex = /^[a-zA-Z]+$/;

  console.log(firstName.match(nameRegex)); // True
  console.log(badFirstName.match(nameRegex)); // False

  /* replaces character in string with another character */
  const userInput = '414 555 5656';
  console.log(userInput.replace(' ', '-')); // 414-555-5656

  /* split string return as array of substring */
  const hello1 = 'Hello World';
  const helloWorldSplit = hello1.split(' ');

  console.log(helloWorldSplit); // ["Hello", "World"];
  console.log(helloWorldSplit[0]); // "Hello"

  /* split a string at a certain index or range of indices */
  const hello2 = 'Hello World';
  console.log(hello2.substring(1, 4)); // ell

  /* convert string to all uppercase or all lowercase */
  const prsn1 = 'Matt';
  const prsn2 = 'Jess';
  console.log(prsn1.toUpperCase()); // MATT
  console.log(prsn2.toLowerCase()); // jess

  /* removes whitespaces from any string */
  const stringWithSpace = 'John ';
  console.log(stringWithSpace.trim()); // this will be 'John'

  const listMurid = 'Matt,Jess,Hilmi,Yujun,Seeun,Sunoo,Hwan,Ariana,Olivia';
  const finalList = listMurid.split(',').join('\n');

  const fruits1 = ['Pineaple', 'bit', 'Lemon'];
  const fruits2 = ['Banana', 'Orange', 'Apple', 'Mango'];
  const fruits = fruits1.concat(fruits2);
  const finalFruits = fruits.join('\n');

  return (
    <View>
      <Text>ManipsString</Text>
      <Text>{finalList}</Text>
      <Text>{finalFruits}</Text>
    </View>
  );
};

// const styles = StyleSheet.create({});

export default ManipsString;
