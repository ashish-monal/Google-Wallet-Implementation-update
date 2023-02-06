// Import the demo class
const { DemoEventTicket } = require("./demoPass/demo-eventticket");

// Create a demo class instance
// Creates the authenticated HTTP client
let demo = new DemoEventTicket();

// Create a pass class
demo.createClass("3388000000022198169", "demo6_class");
// create a pass object
// Update a pass class
demo.updateClass("3388000000022198169", "demo6_class");

// Patch a pass class
demo.patchClass("3388000000022198169", "demo6_class");

demo.createObject("3388000000022198169", "demo6_class", "aviashishranjan6");
// Update a pass object
demo.updateObject("3388000000022198169", "aviashishranjan6");
// Generate an Add to Google Wallet link that creates a new pass class and object
demo.createJwtNewObjects(
  "3388000000022198169",
  "demo6_class",
  "aviashishranjan6"
);

// Generate an Add to Google Wallet link that references existing pass object(s)
demo.createJwtExistingObjects("3388000000022198169");
