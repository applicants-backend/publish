interface Student {
    name : string;
    age : number;
    isPassed? : boolean;
};

let personA : Student = {
    name : 'minhyun',
    age : 20,
    isPassed : false,
};
// if you want optional interface, put in ? after name

//=====================================
// type 
type Gender = 'male' | 'female' | 'boy' | 'girl';

const myGender : Gender = 'male'