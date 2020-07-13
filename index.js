// utilities import
const express = require('express');
const request = require('requests')
const bodyParser = require('body-parser');
const Comparators = require("comparators").default;

const app = express();
// app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json());

// function to get maximum earnings
function getMaxEarn(data){

    var lnth = data.length;

    var result = [data[0]]

    var curr = new Date(data[0].End);

    var cnt = 1;

    for ( var i =1; i < lnth; i++ ){
        
        var date = new Date(data[i].Start)
        if (curr < date){
            result.push(data[i])
            curr = new Date(data[i].End);
            cnt += 1;
        }
    }

    return {
        "data" : result,
        "Total Earnings( in Cr)" : cnt
    }


}

app.listen( process.env.PORT || 3000, function() {
    console.log("Server is listening at port 3000")
})

app.post('/',function(req,res){
    
    var data = req.body.data
    
    data.sort(function(a, b) {
        var dateA = new Date(a.End), dateB = new Date(b.End);
        var cmp = dateA - dateB;
        if (cmp == 0){
            var datesA = new Date(a.Start), datesB = new Date(b.Start)
            return datesA - datesB;
        }
        
        return cmp;
    });
    console.log(data)

    var result = getMaxEarn(data)
    console.log(result)
    res.send(result)
})

app.get('/',function(req,res){
    res.send('<h1> Hello, World! </h1>')
})