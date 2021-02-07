exports.getAllProduct = (req, res, next)=> {
    res.json(
        {
            message: "Get All Product Succes",
            data: {
                id: 1,
                pruduct: "Mouse",
                price : 40000
            }
            
        }
    );
    next();
}

exports.createProduct = (req, res, next)=> {
    //console.log('Request : ',  req.body); //mendapatkan body

    const product = req.body.product;
    const price = req.body.price;
    res.json(
        {
            message: "Create Product Success",
            data: {
                id: 1,
                pruduct: product,
                price : price
            }
            
        }
    );
    next();
}