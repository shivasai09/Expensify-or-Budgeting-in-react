var person={
    name:'shiva sai',
    age:'21',
    location:{
        city:'hyderabad',
        country:'india'
    }
}


const {name, age}=person;

console.log(`${name} is ${age}.`)


const book={
    title:'Be selfish',
    author:'Shiva',
    publisher:{
        name:'R.k publisher'
    }
}

const{name:publisherName='self publish'}=book.publisher;

console.log(`${publisherName}`);


const address=['8-8-233 shivaji nagar' ,'hyderabad','east marredpally']

const [street, city,town]=address;

console.log(`you are at the street ${street},in the city ${city} at ${town}`);