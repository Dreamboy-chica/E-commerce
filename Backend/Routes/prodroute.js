let express = require("express");
let { addpro } = require("../Controllers/procont");
let proute = new express.Router();

proute.post('/addprod', addpro);

module.exports = proute;
