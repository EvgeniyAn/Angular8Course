let str: string = 'Hello Typescript'
let num: number = 42
let isActive: boolean = false

let strArray: string[] = ['H', 'e', 'l']
let numArray: Array<number> = [1, 1, 2, 3]

const arr: Array<string | number> = [1, 2, 3, '4']

function logInfo(name: string, age: number | string): void {
    console.log(name + ' ' + age)
}


// комментарии
interface IUser {
    name: string
    age: number
    phone?: string
}

class User implements IUser {
    age: number;
    name: string;
    // phone: string;

    constructor(public test1: string, protected test2: number) {
    }


}
