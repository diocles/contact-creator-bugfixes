// index.js

var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*.contactcreator.org.uk",
  contentScriptFile: data.url("fix-menus.js")
});
