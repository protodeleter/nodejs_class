const os = require('os')

const fs = require('fs')

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const {products} = require('./data')

app.get('/', (req, res) => {
    res.send('<h1> Home Page</h1><a href="/api/products">products</a>');
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map(product => {
        const { id, name, image } = product;
        return { id, name, image };
    });
    res.json(newProducts);
});

app.get('/api/products/:productID', (req, res) => {
    // console.log(req)
    // console.log(req.params)
    const { productID } = req.params;

    const singleProduct = products.find(
        product => product.id === Number(productID),
    );
    if (!singleProduct) {
        return res.status(404).send('Product Does Not Exist');
    }
    return res.json(singleProduct);
});

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send('hello world');
});

app.get('/api/kuku', (req, res) => {
    console.log(req.query);
    const { search, limit } = req.query;
    let sortedProducts = [...products];

    if (search) {
        sortedProducts = sortedProducts.filter(product => {
            return product.name.startsWith(search);
        });
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length < 1) {
        // return is a must - otherwise we get error because of 2 status codes
        // res.status(200).send('no products matched your search');
        return res.status(200).json({ success: true, data: [] });
    }
    res.status(200).json(sortedProducts);
});


app.get('/api/users/', (req, res) => {
    const fl = fs.readFileSync(__dirname + "/users.json", 'utf-8' )
    const arr = JSON.parse(fl);
    res.end( fl );
})

app.get('/api/users/:id', (req, res) => {
    const fl = fs.readFileSync(__dirname + "/users.json", "utf-8" )

    const arr = JSON.parse(fl)

    const singleItem = arr.find(
        product => product.id === Number( req.params.id ),
    );

    if (typeof singleItem === "undefined") {
        res.send("Not found..")
    }
    res.json(singleItem)
})

app.get('/api/us/filter/', (req, res) => {
    const fl = fs.readFileSync(__dirname + "/users.json", "utf-8" )

    console.log( req.query )

    const arr = JSON.parse(fl)

    const foundUsers = []
    arr.map( (item) => {
        if ( Math.abs(item.age) >= Math.abs( req.query.minAge) && Math.abs( item.age) <= Math.abs( req.query.maxAge ) ) {

            console.log(item)
            foundUsers.push(item)
        }
    } )

    console.log(foundUsers)
    res.end()

    // if (typeof singleItem === "undefined") {
    //     res.send("Not found")
    // }
    // res.json(singleItem)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
