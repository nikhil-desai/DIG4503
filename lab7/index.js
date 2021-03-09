import Express from 'Express';
// Express Definitions
const App = Express();
const port = 45030;
// Array Definition
const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];
// Default Route
App.get('/', function(request, response) {
    response.send("App is running.");
  });
// Person Route
App.get('/people/:person', function(request, response){
    var inputName = request.params.person;
    if(names.includes(inputName)) {
        response.json({name: inputName});
    } else {
        response.json({name: "not found"});
    }  
});
// Names Route
App.get('/search/:name', function(request, response){
    var inputResult = names.filter(string => string.includes(request.params.name));
    if(inputResult != 0) {
        response.json({search: inputResult});
    } else {
        response.json({search: "not found"});
    }  
});
//Running the App
App.listen(port, () => {
    console.log("Running server...");
});