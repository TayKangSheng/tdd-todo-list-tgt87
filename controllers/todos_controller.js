const uuidGenerator = require('uuid/v4')
const fs = require('fs')

const todos = []
// Write functions here
// // the following line will instead load the todos from a json file when the app starts
// const todos = require('../data.json')

// // The following function can be used to save the todos array to the json data file
// function save () {
//   const json = JSON.stringify(todos)
//   fs.writeFileSync('data.json', json, 'utf8')
// }

// CREATE - params should be an object with keys for name, description and completed
function create (params) {
  if (params.name.length < 5 || params.name.length === 0) {
    return false
  } else {
    params['_id'] = uuidGenerator()
    // console.log(params['_id'])
    todos.push(params)
    return true
  }
}

// READ (list & show)
function list () {
  // return list of all TODOs
  return todos
}

function show (id) {
  //todos.forEach(function(object){
    for (var i = 0; i < todos.length; i++) {
    console.log('enetred show function')
    //  console.log(object['_id'])
      if(todos[i]['_id'] === id){
      console.log(id)
      console.log(todos[i]['_id'])
      console.log('entered if loop')
      return true;
    }
    else{
      return null;
    }
  }
  // console.log(id)
  // find the TODO with this id
}

// UPDATE - params should be an object with KVPs for the fields to update
function update (id, params) {
}

// DESTROY (destroy & destroyAll)
function destroy (id) {
}

module.exports = {
  create,
  list,
  show,
  update,
  destroy
}
