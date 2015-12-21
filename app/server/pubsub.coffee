console.log "[ Publishing For Current User ... ]"
Meteor.publish 'reports', (selectedGroup) ->
	return Reports.find();
	