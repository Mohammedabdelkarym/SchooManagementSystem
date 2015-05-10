var allowCrossDomain = function(req, res, next) { res.header('Access-Control-Allow-Origin', 'http://localhost');res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');res.header('Access-Control-Allow-Headers', 'Content-Type');next();}

var express = require('express'),
    app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var fs = require('fs');

app.use(express.static(__dirname, '/'));
app.use(allowCrossDomain);


app.get('/meT/:id', function(req, res) {
    var teacherId = req.params.id;
    var obj = JSON.parse(fs.readFileSync(__dirname+'/teachers.json', 'utf8'));
    var teachers = obj.teachers;
    var data;

    for(var i=0; i < teachers.length; i++){
        console.log(teachers[i].id+"       "+teacherId)
        if(teachers[i].id == teacherId){
            data = teachers[i];
        }
    }
    res.json(data);
    //res.json(500, { error: 'An error has occurred!' });
});


app.delete('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = { status: true };
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].id === customerId) {
            customers.splice(i,1);
            data = { status: true };
            break;
        }
    }
    res.json(data);
});

function wordInString(s, word){
    return new RegExp( '\\b' + word + '\\b', 'i').test(s);
}


app.get('/searchTeachers/:phoneNumber/:name',function(req, res){

    var phoneNumber = req.params.phoneNumber;
    var name = req.params.name;

    var jsonObject = JSON.parse(fs.readFileSync(__dirname+'/teachers.json','utf8'));
    var teachers = jsonObject["teachers"];

    var searchResult = [];
    for(var j=0; j < teachers.length; j++){
        var teacher = teachers[j];

        var myText = teacher["name"];
        if(teacher["phoneNumber"] == phoneNumber || wordInString(myText, name)){
            searchResult.push(teacher);
        }
    }

    res.json(searchResult);
});

app.get('/searchStudents/:studentName/:studentClass',function(req, res){
    var  studentName = req.params.studentName;
    var  studentClass = req.params.studentClass;

    var jsonObject = JSON.parse(fs.readFileSync(__dirname+'/students.json','utf8'));
    var students = jsonObject['students'];

    var searchResult  = [];
    for(var j=0; j < students.length; j++){
        var student = students[j];

        if(student.hasOwnProperty('name') && student.hasOwnProperty('class')){

            if(wordInString(student['name'], studentName) || student['class'] == studentClass){
                searchResult.push(student);
            }
        }
    }

    res.json(searchResult);
});

app.post('/validate',function(req, res){
    var email = req.body.email;
    var password = req.body.password;

    var obj = JSON.parse(fs.readFileSync(__dirname+'/credentials.json', 'utf8'));
    var credentials = obj.credentials;
    var data;

    console.log(email+"  "+req.body.password);

    for (var j = 0; j < obj.credentials.length; j++){
        if(credentials[j].email == email && credentials[j].password == password){
            data={status: "Valid User", code: "1", username: email, "position" : "teacher"};
            var teacher = getTeacherWithId(credentials[j].id);
            data = merge(data, teacher);
            console.log(data);
            break;
        }else{
            data={status: "NotValid", code: "-1"};
            break;
        }
    }

    res.json(data);
});

function getTeacherWithId(id){
    var teachers = JSON.parse(fs.readFileSync(__dirname+'/teachers.json','utf8'));
    teachers = teachers["teachers"]
    for(var j = 0; j < teachers.length; j++){
        var teacher = teachers[j];
            if(teacher["id"] == id){
                return teacher;
        }
    }

    return null;
}

function merge(obj1,obj2){

    var newObj = {};
    for(var key in obj1){newObj[key]=obj1[key]};
    for(var key in obj2){newObj[key]=obj2[key]};

    return newObj;
}

app.listen(8080);

console.log('Express listening on port 8080');
