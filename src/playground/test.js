const person = {
    name: 'Alex',
    age: 27,
    location: {
        city: 'Philadelphia',
        temp: 88
    }
};

const { name: firstName = 'Anonymous', age } = person;

console.log(firstName);
console.log(age);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);