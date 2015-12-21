Router.configure({
  notFoundTemplate: 'notFound',
  loadingTemplate: 'LoadingData'
});

Router.route('/', {
  name: 'home',
  action: function () {
    this.redirect('/sign-in');
  }
});

// an endpoint that shows the issue library
Router.route('/library', {
  name: 'issues.library',
  controller: 'App.Controller.IssuesController'
});

// an endpoint that displays a RFI report
Router.route('/rfi/:rid-', {
  name: 'rfi.report',
  controller: 'App.Controller.RFIController'
});
