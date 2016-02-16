Package.describe({
  name: "davidsichau:sidebar",
  summary: "Provide a simple sidebar.",
  version: "0.3.2",
  git: "https://github.com/DavidSichau/meteor-sidebar"
});

Package.onUse(function(api) {
  api.versionsFrom("1.0.1");
  api.use([
    "templating",
    "less@2.5.0",
    "meteor",
    "ddp",
    "fortawesome:fontawesome@4.3.0"
  ], 'client');


  api.addFiles("client/sidebar.html", ["client"]);
  api.addFiles("client/sidebar.js", ["client"]);
  api.addFiles("client/sidebar.less", ["client"]);

  api.export("");
});



  
    
    
    Package.onTest(function (api) {
  api.use("tinytest");
  api.use("davidsichau:sidebar");
  
  api.addFiles("tests/client/index.js", ["client"]);

});    
  
  
