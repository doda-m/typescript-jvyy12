var title: string = 'Angular';
title = 'Angular!';

var n: number = 0;

var isOpen: boolean = true;

var keyword: (string | number)[] = ['name', 'email', 'body', 0];

var payment: [number, string, number] = [1, 'apple', 0];

var object: { [key: string]: string } = {
  name: 'Masahiro Dodare',
  id: 'test'
};

var post: object = [
  {
    id: 1,
    content: 'lorem ipsum'
  }
];

var sample: string | number;
sample = 'string';
sample = 100;

enum KeyCode {
  Backspace = 8,
  Enter = 13
}

console.log(KeyCode.Backspace);

enum ErrorCode {
  OK = 200,
  BAD_RESPONSE = 400,
  UNAUTHORIZED = 401
}

enum Character {
  Bob,
  Dad,
  Mom
}

console.log(Character.Bob);
