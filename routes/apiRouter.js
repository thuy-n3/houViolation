let Router = require('express').Router;
const apiRouter = Router()
let helpers = require('../config/helpers.js')
let User = require('../db/schema.js').User
let Coh_HV = require('../db/schema.js').Coh_HV


  
  apiRouter
    .get('/users', function(req, res){
      User.find(req.query , "-password", function(err, results){
        if(err) return res.json(err) 
        res.json(results)
      })
    })

  apiRouter
    .get('/users/:_id', function(req, res){
      User.findById(req.params._id, "-password", function(err, record){
        if(err || !record ) return res.json(err) 
        res.json(record)
      })
    })
    .put('/users/:_id', function(req, res){
      User.findById(req.params._id, "-password",function(err, record){
        if(err || !record) return res.json(err)
        let recordWithUpdates = helpers.updateFields(record, req.body)
        recordWithUpdates.save(function(err){
          if(err) return res.json(err) 
          res.json(recordWithUpdates)
        })
      })
    })
    .delete('/users/:_id', function(req, res){
      User.remove({ _id: req.params._id}, (err) => {
        if(err) return res.json(err)
        res.json({
          msg: `record ${req.params._id} successfully deleted`,
          _id: req.params._id
        })
      })  
    })

   
// Routes for a Model(resource) should have this structure

//3. establish server-side api router: query for 'home' from server

    //get all - see viewAll
    apiRouter.get('/getReports', function(request, response){
      console.log('getting all records')
      Coh_HV.find(request.query).limit(100).exec(function(error, records){ //how to find Coh_HV
        if(error){
          response.send(error)
        }
        else{
          response.json(records)
        }
      })
    })

    apiRouter.get('/getByName', function(request, response){
      console.log('getting all records')
      Coh_HV.find(request.query).limit(100).exec(function(error, records){ //how to find Coh_HV
        if(error){
          response.send(error)
        }
        else{
          response.json(records)
        }
      })
    })

    //get the worst - repeat offender
    apiRouter.get('/getWorstRated', function(request, response){
      console.log('getting all records')
      Coh_HV.aggregate([
      {  '$match': {'InspectionStatus': 'FAIL'}  },
      {  '$group': {  _id: '$FacilityFullStreetAddress', "inspectionsFailed":  {"$sum": 1 },   } },
      {  '$sort': {  inspectionsFailed: -1 } },
      {  "$limit" : 10 }
      ], function(error, records){ //how to find Coh_HV
        if(error){
          response.send(error)
        }
        else{
          response.json(records)
        }
      })
    })

    //get the best 
        apiRouter.get('/getBestRated', function(request, response){
      console.log('getting all records')
      Coh_HV.aggregate([
      {  '$match': {'InspectionStatus': 'PASS'}  },
      {  '$group': {  _id: '$FacilityName', "inspectionsPassed":  {"$sum": 1 },   } },
      {  '$sort': {  inspectionsPassed: -1 } },
      {  "$limit" : 10 }
      ], function(error, records){ //how to find Coh_HV
        if(error){
          response.send(error)
        }
        else{
          response.json(records)
        }
      })
    })


    //to query for best..query how many time restaurant pass and calculate the difference of how many time they pass fail

    //get report by name 
    // apiRouter.get('/getReports', function(request, response){
    //   console.log('getting report by name')
    //   Coh_HV.find({FacilityName: request.CohCollection.FacilityName}, function(error,records){
    //     if(error){
    //       response.send(error)
    //     }
    //     else{
    //       response.json(records)
    //     }
    //   })
    // })



    

module.exports = apiRouter















