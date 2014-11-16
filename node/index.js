var app = require('express')();
var http = require('http').Server(app);
var socket = require('socket.io')(http);
var bodyParser = require('body-parser');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('dummy.json', 'utf8'));

for (var i in obj){
  obj[i].order = i;
}

var applicationData = {
  J787:{
    playlist:obj
  }
};


function getId(length){    
    var text = "";    
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";

    for( var i=0; i < length; i++ ){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}


function makeid(length, loop)
{
    if (loop === undefined) loop = 0;
    var text = getId(length);

    if (applicationData[text]){
      if (loop > 3){
        length++;
      }

      text = makeid(length, loop++);
    }

    return text;
}

function findTrack(session, trackid){
  if (applicationData[session]){
    var tracks = applicationData[session].playlist;

    for (var i in tracks){
      if (tracks[i].id === trackid){
        return tracks[i];
      }
    }
  }
  return false;
}



app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  next();
});


app.get('/', function(req, res){
  res.end(JSON.stringify({ok:true,data:applicationData}));
});


app.post('/', function(req, res){
  res.end(JSON.stringify(req.body));
});






app.post('/login', function(req, res){
  var id = makeid(4);
  var key = getId(32);

  applicationData[id] = {
    playlist:req.body,
    key:key,
    timestamp:Date.now()
  };

  res.end(JSON.stringify({'id':id, 'key':key}));
});




app.get('/playlist/:id', function(req, res){
  var id = req.params.id;
  res.end(JSON.stringify( applicationData[id].playlist ));
});


app.post('/castvote/:session/:trackid', function(req, res){
  var session = req.params.session;
  var trackid = req.params.trackid;
  var result = voteTrack(session,trackid);

  res.end(JSON.stringify({'ok':result, 'track':track}));
});



function voteTrack(session, trackid, user){
  var track = findTrack(session, trackid);

  if (track){
    if (!track.votes) track.votes = 0;    
    track.votes++;
    track.modified = Date.now();
    result = true;
    return track;
  }

  return false;
}


socket.on('connection',function(socket){
  console.log('pere, user');

  socket.on('vote', function(data, callback){
    var track = voteTrack(data.session, data.track, data.client);
    
    socket.broadcast.emit('track.voted',track);
    callback(track);
  });
});


http.listen(3000, function(){
  console.log('joo pere');
});
