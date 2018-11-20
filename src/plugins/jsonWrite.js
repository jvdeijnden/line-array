import json from '../data.json'

function jsonWrite (key, value) {
  json[key] = value
  console.log(json)
}

export default jsonWrite
