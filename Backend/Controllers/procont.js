// In ../Controllers/procont.js
let promodel = require("../Models/prodmodel");
let { v4: uuidv4 } = require("uuid");

let addpro = async (req, res) => {
    try {
        let data = new promodel({ ...req.body, "_id": uuidv4() });
        await data.save();
        res.json("Product has been added!");
    } catch (err) {
        console.log(err);
        res.status(500).json("Error adding product");
    }
};

module.exports = { addpro }; // Export as an object
