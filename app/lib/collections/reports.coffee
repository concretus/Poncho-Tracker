@Reports = new Mongo.Collections "reports",
	transform: (document) ->
    new Report document: document