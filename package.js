Package.describe({
  name: "davidsichau:sidebar",
  summary: "Provide a simple sidebar.",
  version: "0.1.0",
  git: "https://github.com/DavidSichau/meteor-sidebar"
});

Package.onUse(function(api) {
  api.versionsFrom("1.0.1");
  api.use(["templating", "less", "meteor", "ddp", "jquery", "fortawesome:fontawesome"]);

  api.addFiles("shared/sidebar.js", ["client"]);
  api.addFiles("shared/sidebar.html", ["client"]);
  api.addFiles("shared/sidebar.less", ["client"]);

  api.export("");
});



  
    
    
    Package.onTest(function (api) {
  api.use("tinytest");
  api.use("davidsichau:sidebar");
  
  api.addFiles("tests/shared/index.js", ["client"]);

});    
  
  