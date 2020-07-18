const mongoose = require("mongoose");
const jsonSchema = require("../models/model");
const { nanoid } = require("nanoid");
const { STATUS, RESPONSE_MODEL } = require("../../constants");

const saveJson = async (req, res) => {
  let response = { ...RESPONSE_MODEL };
  try {
    const id = nanoid(7);
    const data = {
      id: id,
      json: req.body,
    };

    const result = await jsonSchema.create(data);
    if (result) {
      return res.status(201).json({
        ...RESPONSE_MODEL,
        id,
        msg: "Succesfully Created",
        operation: "create",
        status: STATUS.CREATED,
      });
      const { response } = require("express");
    }

    return res.status(500).json({
      operation: "create",
      id,
      msg: "Failed to create doc!",
      status: STATUS.FAILED,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      msg: "Internal Server error",
      operation: "create",
      status: STATUS.FAILED,
    });
  }
};

const getJson = async (req, res) => {
  let id = req.params.id;
  const json = await jsonSchema.findOne({ id: id }, { json: 1 });

  console.log(json);

  if (json) {
    return res.status(200).json({ ...json.json });
  }

  return res.status(404).json({
    operation: "get",
    msg: `JSON not found with id: ${id}`,
    id: id,
    status: STATUS.NOT_FOUND,
  });
};

module.exports = {
  saveJson,
  getJson,
};
