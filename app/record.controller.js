var records = require('./list.json');

exports.create = function(req, res) {
    var newRecords = req.body;
    records["record" + newRecords.id] = newRecords;
    console.log("---> After Post, records:\n" + JSON.stringify(records, null, 4));
    res.end("Post Successfully: \n" + JSON.stringify(newRecords, null, 4));
};

exports.findAll = function(req, res) {
    console.log("---> Find All: \n" + JSON.stringify(records, null, 4));
    res.end("All records: \n" + JSON.stringify(records, null, 4));
};

exports.findOne = function(req, res) {
    var record = records["record" + req.params.id];
    console.log("---> Find record: \n" + JSON.stringify(record, null, 4));
    res.end( "Find a record:\n" + JSON.stringify(record, null, 4));
};

exports.update = function(req, res) {
    var id = parseInt(req.params.id);
    var updatedRecord = req.body;
    if(records["record" + id] != null){
        // update data
        records["record" + id] = updatedRecord;

        console.log("---> Update Successfully, records: \n" + JSON.stringify(records, null, 4));

        // return
        res.end("Update Successfully! \n" + JSON.stringify(updatedRecord, null, 4));
    }else{
        res.end("Don't Exist record:\n:" + JSON.stringify(updatedRecord, null, 4));
    }
};

exports.delete = function(req, res) {
    var deleteRecord = records["record" + req.params.id];
    delete records["record" + req.params.id];
    console.log("--->After deletion, record list.json:\n" + JSON.stringify(records, null, 4) );
    res.end( "Deleted record: \n" + JSON.stringify(deleteRecord, null, 4));
};