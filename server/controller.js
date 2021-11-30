const houses = require('./db.json')
const houseId = 4

module.exports = {
    getHouses: (req,res) => {
        res.status(200).send(houses)
    },
    deleteHouse: (req,res) => {
        const {id} = req.params
        const index = houses.findIndex(element => +element.id === +id)
        houses.splice(index,1)
        res.status(200).send(houses)
    },
    createHouse: (req,res) => {
        const {address, price, imageURL} = req.body
        let newHouse = {
            address,
            price: +price,
            imageURL,
            id: houseId
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        houseId++
    },
    updateHouse: (req,res)=>{
        const {id} = req.params
        const {type} = req.body
        let index = houses.findIndex(element => +element.id === +id)

        if (houses[index].price === 0 && type === 'minus'){
            res.status(400).send('cannot go below 10,000')
        }else if (houses[index].price >= 0 && type === 'plus'){
            houses[index].price += 10000
            res.status(200).send(houses)
        }else if (houses[index].price >= 10000 && type == 'minus'){
            houses[index].price -= 10000
            res.status(200).send(houses)
        }
    }

}