const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false
});


const Product = db.define('product', {
    name: {
        type: Sequelize.STRING,
        unique: true,
    },
    price: {
        type: Sequelize.FLOAT
    },
    discountPercent: {
        type: Sequelize.FLOAT,
        validate: {
            max: 100,
            min: 0
        },
    },
    availability: {
        type: Sequelize.STRING
    }
})

const productsArr = [
    {
        name: 'Foo',
        price: 3,
        discountPercent: 20,
        availability: 'instock'
    },
    {
        name: 'Bar',
        price: 8,
        discountPercent: 0,
        availability: 'instock'
    },
    {
        name: 'Bazz',
        price: 4,
        discountPercent: 0,
        availability: 'backordered'
    },
    {
        name: 'Quq',
        price: 2,
        discountPercent: 0,
        availability: 'discontinued'
    }
];

const syncAndSeed = () => {
    return db.sync({ force: true})
        .then(() => productsArr.map( p => Product.create({
            name: p.name,
            price: p.price,
            discountPercent: p.discountPercent,
            availability: p.availability
        }) ))
}

module.exports = {
    db, syncAndSeed, Product
}
