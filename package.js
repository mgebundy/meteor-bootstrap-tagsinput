Package.describe({
  name: 'mitchellbundy:meteor-bootstrap-tagsinput',
  version: '0.5.0',
  // Brief, one-line summary of the package.
  summary: 'Meteor wrapped Bootstrap Tag Input',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('jquery@1.0.1', 'client');

  api.versionsFrom('1.1.0.2');
  api.add_files('lib/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js', 'client');
  api.add_files('lib/bootstrap-tagsinput/dist/bootstrap-tagsinput.css', 'client');
});