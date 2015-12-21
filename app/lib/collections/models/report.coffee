class @Report

  constructor: (options) ->
    {document, @name, @description,  @shareable, @accessibleTo} = options
    if document ?
      super document
    else
      @accessibleTo = [] unless @accessibleTo
      @shareable = false unless @shareable

  Meteor.methods
    createReport: (name) ->
    report = new Report(name: name)
    id = Reports.insert(report)
    return id