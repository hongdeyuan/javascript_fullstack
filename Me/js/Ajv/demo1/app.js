var Ajv = require('ajv')


var ajv = new Ajv({$data: true});

var schema = {
  "properties": {
    "smaller": {
      "type": "number",
      "maximum": 100
    },
    "larger": { "type": "number" }
  }
};

var validData = {
  smaller: 5,
  larger: 7
};

console.log(ajv.validate(schema, validData)) // true