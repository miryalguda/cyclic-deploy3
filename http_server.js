const  express = require("express")
const  app = express();

app.get ("/", function (req, res)  {
res.send ("Welcome to Boston!")

});

app.get ("/add", function (req, res) {
    res.send ("This data  is recorded")
    
});

app.get ("/data", function (req, res) {
    res.json ([
        {
        id: '001',
        name: "Santhosh",
        email: "Santhosh123@abcd.com"
        },
        {
            id: '0012',
            name: "joe",
            email: "Joe123@abcd.com"
        },
        {
                id: '003',
                name: "john",
                email: "John123@abcd.com"
        }  
    
    ])    
});

const PORT = process.env.PORT || 3002

app.listen (PORT, ()=> {
    console.log ("running on port  3002!")
})

