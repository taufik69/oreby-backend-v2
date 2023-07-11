const express = require("express");
const _ = express.Router();

const createCatagories = require("../../Controller/createCatagories");
const catagoriesStatus = require("../../Controller/catagoriesStatus");
const createSubcatagories = require("../../Controller/createSubcatagories");
const subCatagoriesStatus = require("../../Controller/subCatagoriesStatus");
const getAllCatagories = require("../../Controller/getAllCatagories");

_.post("/createcatagories", createCatagories);
_.post("/catagoriesStatus", catagoriesStatus);
_.post("/createsubcatagories", createSubcatagories);
_.post("/subcatagoriesstatus", subCatagoriesStatus);
_.get("/allcatagories", getAllCatagories);

module.exports = _;
