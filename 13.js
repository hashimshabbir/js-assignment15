console.log('Lets Practice on js Object');


// // 1. Write a JavaScript program to list the properties of a JavaScript object
// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 };
//     Sample Output: name,sclass,rollno

console.log('Exercise no 1');

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};


for (let key in student) {
    if (student.hasOwnProperty(key)) {
        console.log(key);
    }
}

//         2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

console.log('Exercise no 2');

var student2 = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(student2);


delete student2.rollno
console.log(student2);

//     3. Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

console.log('Exercise no 3');

var student3 = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
    age: 18

}

console.log(Object.keys(student3).length);

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.   

// var library = [ 
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games', 
//        readingStatus: false
//    }];

console.log('Exercise no 4');

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];


for (let index = 0; index < library.length; index++) {
    const element = library[index];
    console.log('Book: ', element.title);
    console.log('Author: ', element.author);
    console.log('reading Stutus :', element.readingStatus);

}





//     5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

console.log('Exersice no 5');


class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
    }
}


let cylinder = new Cylinder(5, 10);
console.log("Volume of the cylinder:", cylinder.getVolume());

// 6. Write a Bubble Sort algorithm in JavaScript.   
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]

console.log('Exercise no 6');

function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap arr[j+1] and arr[j]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let data = [6, 4, 0, 3, -2, 1];

console.log("Sorted array in ascending order is:", bubbleSort(data));

// 7. Write a JavaScript program which returns a subset of a string.   
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]
 

console.log('Exercise no 7');

function getSubstrings(str) {
    let substrings = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            substrings.push(str.slice(i, j));
        }
    }
    return substrings;
}

let data2 = "dog";

console.log(getSubstrings(data2));


// 8. Write a JavaScript program to create a Clock.   
// Note: The output will come every second.
// Expected Console Output :
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"

console.log('Exercise no 8');


function startClock() {
    setInterval(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        console.log(`${hours}:${minutes}:${seconds}`);
    }, 1000);
}

startClock();





// 10. Write a JavaScript program to sort an array of JavaScript objects.   
// Sample Object :

// var library = [ 
//    {
//        title:  'The Road Ahead',
//        author: 'Bill Gates',
//        libraryID: 1254
//    },
//    {
//        title: 'Walter Isaacson',
//        author: 'Steve Jobs',
//        libraryID: 4264
//    },
//    {
//        title: 'Mockingjay: The Final Book of The Hunger Games',
//        author: 'Suzanne Collins',
//        libraryID: 3245
//    }];
// Expected Output:

// [[object Object] {
//   author: "Walter Isaacson",
//   libraryID: 4264,
//   title: "Steve Jobs"
// }, [object Object] {
//   author: "Suzanne Collins",
//   libraryID: 3245,
//   title: "Mockingjay: The Final Book of The Hunger Games"
// }, [object Object] {
//   author: "The Road Ahead",
//   libraryID: 1254,
//   title: "Bill Gates"
// }]

console.log('Exercise no 10');

var library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];
    
library.sort((a, b) => {
    if (a.author > b.author) {
        return 1;
    }
    if (a.author < b.author) {
        return -1;
    }
    return 0;
}); 

console.log(library);

// 11. Write a JavaScript function to print all the methods in an JavaScript object.   
// Test Data :
// console.log(all_properties(Array));
// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]

console.log('Exercise no 11');

function all_properties(obj) {
    return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
}

console.log(all_properties(Array));

// 12. Write a JavaScript function to parse an URL. 

console.log('Exercise no 12');

function parseURL(url) {
    let parser = document.createElement('a');
    parser.href = url;
    return {
        protocol: parser.protocol.replace(':', ''),
        host: parser.host,
        hostname: parser.hostname,
        port: parser.port,
        pathname: parser.pathname,
        search: parser.search,
        hash: parser.hash
    };
    }
    console.log(parseURL('https://www.example.com:8080/path/to/file?query=string#hash'));
    
    // 13. Write a JavaScript function to retrieve all the names of object's own and inherited properties.  
    
    console.log('Exercise no 13');
    
    function getAllPropertyNames(obj) {
        let result = [];
        let propNames = Object.getOwnPropertyNames(obj);
        let proto = obj.__proto__;
        
        while (proto) {
            propNames = propNames.concat(Object.getOwnPropertyNames(proto));
            proto = proto.__proto__;
        }
        
        for (let i = 0; i < propNames.length; i++) {
            result.push(propNames[i]);
        }
        
        return result;
        }
        
        console.log(getAllPropertyNames({ a: 1, b: 2 })); 
        console.log(getAllPropertyNames(Object.create({ c: 3 }))); 
        console.log(getAllPropertyNames(Object.create(null))); 
        console.log(getAllPropertyNames(new Date()));  
        

        // 14. Write a JavaScript function to retrieve all the values of an object's properties.   
 

        console.log('Exercise no 14');
        
        function getAllPropertyValues(obj) {
            let result = [];
            let propNames = Object.getOwnPropertyNames(obj);
            let proto = obj.__proto__;
            
            while (proto) {
                propNames = propNames.concat(Object.getOwnPropertyNames(proto));
                proto = proto.__proto__;
            }
            
            for (let i = 0; i < propNames.length; i++) {
                result.push(obj[propNames[i]]);
            }
            
            return result;
            }
            
            console.log(getAllPropertyValues({ a: 1, b: 2 })); 
            console.log(getAllPropertyValues(Object.create({ c: 3 }))); 
            console.log(getAllPropertyValues(Object.create(null))); 
            console.log(getAllPropertyValues(new Date()));

            // 15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.   
 console.log('Exercise no 15');
  function objectToList(obj) {
    let result = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result.push([key, obj[key]]);
      }
    }
    return result;
  }
  console.log(objectToList({ a: 1, b: 2 }));
  console.log(objectToList(Object.create({ c: 3 })));
  console.log(objectToList(Object.create(null)));
  console.log(objectToList(new Date()));


  // 16. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.   
 
  console.log('Exercise no 16');
  
  function invertObject(obj) {
    let result = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[obj[key]] = key;
      }
    }
    return result;
  }
  console.log(invertObject({ a: 1, b: 2 }));
  console.log(invertObject(Object.create({ c: 3 })));
  console.log(invertObject(Object.create(null)));
  console.log(invertObject(new Date()));

  // 17. Write a JavaScript function to check whether an object contains given property.   
  console.log('Exercise no 17');
  
  function hasProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  console.log(hasProperty({ a: 1, b: 2 }, 'a'));
  console.log(hasProperty(Object.create({ c: 3 }), 'c'));
  console.log(hasProperty(Object.create(null), 'c'));
  console.log(hasProperty(new Date(), 'getDay'));
  


 


 