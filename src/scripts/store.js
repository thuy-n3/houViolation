import Backbone from 'backbone'
import _ from 'underscore'
import {CohCollection} from './models/models'

//6. Establish the store
// BACKBONE EVENTS OBJECT SO ALL EVENTS ARE BROADCAST FROM HERE AND POINT TO THE EMIT CHANGE METHOD
// have to use underscore here because Backbone Events does not have an extend method like the models and collection do

const COH_Store = _.extend( Backbone.Events, {

	data:{ //this collection is on state 

		collection: new CohCollection(), //make new instance of CohCollection
		worstList: []
		// worstCollection: new CohColle	ction(listOfFaileds)
	}, 

	_emitChange: function(){

		this.trigger('updateContent')
		//_emitChange will trigger backbone event 'updateContent'
		//the view are listening for 'updateContent' event - which will re-render the view with new data 
	},

	_getData: function(){

		return _.clone(this.data)
		//data from here becomes the top level state (state of the app)
		// make a clone because we don't want to modify the state(original data)
	},

	_set: function(key, value){
		if(this.data[key]===undefined){
			throw Error(`${key} property not on the store , make sure to declare`)
		}

		this.data[key] = value 
		this._emitChange()
		//_set is for when you are adding new props on to set by specifc key and values and will not accept jsut anything
		//
	}, 

	_initialize: function(){

		this.data.collection.on('sync update', this._emitChange.bind(this))
		//routes any content that syncs or updates go through the emit change method
		//when there is a sync or update on the collection, _emitChange function will run 
	}


})

COH_Store._initialize()

export default COH_Store





