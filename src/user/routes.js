const express = require('express');

const routes = express.Router({
    mergeParams: true
});

// routes.get('/', (req, res) => {
//     res.status(200).json({});
// })

routes.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: "👕👕👕👕",
        size: "large"
    })
});

routes.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if(!logo){
        res.status(418).send({ message: "we need a logo"})
    }

    res.send({
        tshirt: `👕 with your${logo} and ID of ${id}`,
    });
})

module.exports = {
    routes, 
}