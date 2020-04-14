db.getCollection("Restaurants").find({})

db.Restaurants.insertMany(
    [{
        "address": {
            "building": "1008",
            "street": "Morris Park Ave",
            "zipcode": "10462"
        },
        "city": "Bronx",
        "cuisine": "Bakery",
        "name": "Morris Park Bake Shop",
        "restaurant_id": "30075445"
    },
    {
        "address": {
            "street": "Thai Son Street",
            "zipcode": null
        },
        "city": "Manhattan",
        "cuisine": "Vietnamese",
        "name": "Pho Me Long Time",
        "restaurant_id": "30075455"
    },
    {
        "address": {
            "building": "253",
            "street": "East 167 Street",
            "zipcode": null
        },
        "city": "Bronx",
        "cuisine": "Chicken",
        "name": "Mom's Fried Chicken",
        "restaurant_id": "40382900"
    },
    {
        "address": {
            "building": "120",
            "street": "East 56 Street",
            "zipcode": "19800"
        },
        "city": "Mahattan",
        "cuisine": "Italian",
        "name": "Montebello Restaurant",
        "restaurant_id": "40397082"
    },
    {
        "address": {
            "building": "195",
            "street": "Soprano Street",
            "zipcode": "17500"
        },
        "city": "Staten Island",
        "cuisine": "Hamburgers",
        "name": "Joeys Burgers",
        "restaurant_id": "40397555"
    },
    {
        "address": {
            "building": "200",
            "street": "Queens Boulevard",
            "zipcode": "19700"
        },
        "city": "Queens",
        "cuisine": "American",
        "name": "Brunos on the Boulevard",
        "restaurant_id": "40397678"
    },
    {
        "address": {
            "building": "555",
            "street": "Sushi Street",
            "zipcode": "17700"
        },
        "city": "Brooklyn",
        "cuisine": "Japanese",
        "name": "Iron Chef House",
        "restaurant_id": "40397699"
    },
    {
        "address": {
            "building": "555",
            "street": "Fontana Street",
            "zipcode": null
        },
        "city": "Brooklyn",
        "cuisine": "Japanese",
        "name": "Wasabi Sushi",
        "restaurant_id": "40398000"
    },
    {
        "address": {
            "building": "900",
            "street": "Goodfellas Street",
            "zipcode": "17788"
        },
        "city": "Brooklyn",
        "cuisine": "Delicatessen",
        "name": "Sal's Deli",
        "restaurant_id": "40898000"
    },
    {
        "address": {
            "building": "909",
            "street": "44 Gangster Way",
            "zipcode": "17988"
        },
        "city": "Queens",
        "cuisine": "Delicatessen",
        "name": "Big Tony's Sandwich Buffet",
        "restaurant_id": "40898554"
    },
    {
        "address": {
            "building": "1201",
            "street": "121 Canolli Way",
            "zipcode": "17989"
        },
        "city": "Queens",
        "cuisine": "Delicatessen",
        "name": "The Godfather Panini Express",
        "restaurant_id": "40898554"
    }]
)

//get collection for resturants in japan
db.getCollection('Restaurants').find(
    { 'cuisine': 'Japanese' }
)

//using projections
db.getCollection('Restaurants').find(
    { 'cuisine': 'Japanese' },
    { 'cuisine': 1, 'name': 1 }
).sort({ name: -1 })

// #4
db.getCollection('Restaurants').find(
    { 'cuisine': { $eq: 'Japanese' } },
    { '_id': 1, 'cuisine': 1, 'name': 1, 'city': 1, 'restaurant_id': 1 }
).sort({ restaurant_id: 1 })

//Exercise 3: Logical and Comparison Operators

// #1
db.getCollection('Restaurants').find(
    { 'cuisine': { $eq: 'Delicatessen' } },
    { '_id': 0, 'cuisine': 1, 'name': 1, 'city': 1 }
).sort({ 'name': -1 })

// #2
db.getCollection('Restaurants').find(
    {
        $and: [{ 'cuisine': { $eq: 'Delicatessen' } },
        { 'city': { $ne: 'Brooklyn' } }]
    },
    { 'cuisine': 1, 'name': 1, 'city': 1 }
).sort({ name: 1 })

// Exercise 4: Multiple Operators
db.getCollection('Restaurants').find(
    {
        $and: 
        [    
            { 'city': { $ne: 'Brooklyn'}},
            { cuisine: { $in: ["Bakery", "Chicken", "Hamburgers", "American"] } },
            { restaurant_id: { $gt: '4000000' }}
        ]
    },
    { 'cuisine': 1, 'name': 1, 'city': 1, 'restaurant_id': 1}
).sort({ restaurant_id: 1 })

// Exercise 5: Filtering on Array Columns
db.getCollection('Restaurants').find(
    { 'address.building': { $eq: '1008' }},
    { 'restaurant_id': 1, 'address.street':1, 'name': /Deli$/, 'city':1}
).sort({ restaurant_id: 1 })


db.getCollection('Restaurant').find(
    { 
        $and: 
        [    
            { $or : [{ 'name' : { $eq: 'Thai'}} ]},
            { $or : [{ 'address.street' : { $eq: 'Street' }} ]},
            { $or : [{ 'address.zip' : { $eq: '17988' }} ]}
        ]
    }
)

