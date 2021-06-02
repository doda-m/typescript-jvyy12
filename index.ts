// var title: string = 'Angular';
// title = 'Angular!';

// var n: number = 0;

// var isOpen: boolean = true;

// var keyword: (string | number)[] = ['name', 'email', 'body', 0];

// var payment: [number, string, number] = [1, 'apple', 0];

// var object: { [key: string]: string } = {
//   name: 'Masahiro Dodare',
//   id: 'test'
// };

// var post: object = [
//   {
//     id: 1,
//     content: 'lorem ipsum'
//   }
// ];

// var sample: string | number;
// sample = 'string';
// sample = 100;

// enum KeyCode {
//   Backspace = 8,
//   Enter = 13
// }

// console.log(KeyCode.Backspace);

// enum ErrorCode {
//   OK = 200,
//   BAD_RESPONSE = 400,
//   UNAUTHORIZED = 401
// }

// enum Character {
//   Bob,
//   Dad,
//   Mom
// }

// console.log(Character.Bob);

// var something: any = 'foo';
// something = 100;
// something = true;
// something = { id: 1 };

// var el: Element | null = document.querySelector('#app');
// var foo: undefined = undefined;

// var unknown = 'string';

// let foo = 'foo';
let data = new Date();

if (true) {
  let foo = 'foo';
}
// console.log(foo);

const currentYear: number = 2021;
// currentYear = 2022;

const PI = Math.PI;
let template1 = `This is Template strings.`;
let name = 'Dodare';
let template2 = `
Hello, Typescript tutorial,
Thank you. ${name}
`;
// console.log(template2);

let categories = ['post', 'news', 'info', 'other'];

// let a = categories[0];
// let b = categories[1];
// let [a, b, ...rest] = categories;
// console.log(a, b, rest);
// let [a = 10, b = 7] = [1];

// let copyCat = [...categories];
// // console.log(copyCat, copyCat === categories);

// let pushCat = ['other', ...categories];
// // console.log(pushCat);

// let mergeCat = [...categories, ...copyCat];
// // console.log(mergeCat);

// let post = { id: 1, content: 'dummy', created: '2021-6' };

// const { id, content: body } = post;
// // console.log(id, body);

// let copyObj = { ...post };
// // console.log(copyObj);

// function greet(name: string = 'masahiro'): void {
//   console.log(`Hello world! ${name}`);
// }
// // greet(name);

// function sum(...values: number[]): number {
//   return values.reduce(function(prev, current) {
//     return prev + current;
//   });
// }
// // console.log(sum(1, 3, 5, 9));

// let add = (x1: number, x2: number): number => {
//   return x1 + x2;
// };
// // console.log(add(1, 3));

// let hello = name => `Hello ${name}!`;
// // console.log(hello('dodare'));

// document.getElementById('button1').addEventListener('click', function() {
//   console.log(this); //<button></button>
// });

// // this => window
// document.getElementById('button1').addEventListener('click', () => {
//   console.log(this); // window
// });

// class Animal {
//   age: number = 10;
//   private _legs = 4;

//   constructor(public isCry: boolean) {}

//   cry(): void {
//     if (this.isCry) {
//       alert(`age: ${this.age}`);
//     }
//   }

//   get legs() {
//     if (this._legs > 2) {
//       return this._legs;
//     }
//   }
// }

// let dog = new Animal(true);
// dog.cry();

// class Animal {
//   age: number = 10;

//   constructor(public isCry: boolean) {}

//   cry(): void {
//     if (this.isCry) {
//       alert(`age: ${this.age}`);
//     }
//   }
// }

// class Dog extends Animal {
//   constructor(public isCry: boolean) {
//     super(isCry);
//   }
//   cry(): void {
//     if (this.isCry) {
//       alert('Bow, wow');
//     }
//     console.log('dog is cry!');
//     super.cry();
//   }
// }

// let dog = new Dog(true);

// interface Animal {
//   name: string;
//   legs: number;
//   isCry: boolean;
//   cry(): void;
// }

// interface SuperAnimal extends Animal {
//   canRun: boolean;
// }

// let Dog: Animal = {
//   name: 'maru',
//   legs: 4,
//   isCry: true,
//   cry: function() {
//     console.log('Bow, wow!');
//   }
// };

// // class Dog implements SuperAnimal {
// //   name: string = 'Maru';
// //   legs: number = 4;
// //   isCry: boolean = true;
// //   canRun: boolean = true;
// //   cry(): void {
// //     if (this.isCry) {
// //       console.log('Bow, wow!');
// //     }
// //   }
// // }

// let maru = new Dog();
// maru.cry();

class Store<T> {
  data: T;
  getStore(): T {
    return this.data;
  }
}

let stringData = new Store<string>();
