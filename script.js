
var roomtype	= document.getElementById("roomtype");
var myform	= document.getElementById("myform");

var display = document.getElementById("display");

//var divappear = [];
var room = []

var data = [
  {type : "meeting", name : "room 1", status : "free" },
  {type : "meeting", name : "room 2", status : "free" },
  {type : "meeting", name : "room 3", status : "free" },
  {type : "meeting", name : "room 4", status : "free" },
  {type : "meeting", name : "room 5", status : "free" },

 // {type : "games", name : "room 6", status : "free" },
 //  {type : "games", name : "room 7", status : "free" },
 //  {type : "games", name : "room 8", status : "free" },
 //  {type : "games", name : "room 9", status : "free" },
 //  {type : "games", name : "room 10", status : "free" },

 // {type : "quiet time", name : "room 11", status : "free" },
 //  {type : "quiet time", name : "room 12", status : "free" },
 //  {type : "quiet time", name : "room 13", status : "free" },
 //  {type : "quiet time", name : "room 14", status : "free" },
 //  {type : "quiet time", name : "room 15", status : "free" },

 // {type : "learning", name : "room 16", status : "free" },
 //  {type : "learning", name : "room 17", status : "free" },
 //  {type : "learning", name : "room 18", status : "free" },
 //  {type : "learning", name : "room 19", status : "free" },
 //  {type : "learning", name : "room 20", status : "free" },

 // {type : "working", name : "room 21", status : "free" },
 //  {type : "working", name : "room 22", status : "free" },
 //  {type : "working", name : "room 23", status : "free" },
 //  {type : "working", name : "room 24", status : "free" },
 //  {type : "working", name : "room 25", status : "free" }
];


myform.addEventListener("submit",function(event){
	//divappear.push(postMessage.value)
	room.push(roomtype.value);
	display.innerHTML = displayRooms();

	console.log(roomtype.value);
	console.log(roomtype.value);
	event.preventDefault()
});

// changeStatus.addEventListener('click', function(event){
// 	data[event.target.data.split(':')[1]].stautus = data[event.target.data.split(':')[0]];


// })

function displayRooms(){
	var roomList="<div>";

	if (roomtype.value == "Meeting Room"){

		for(var i=0; i<data.length; i++){
			roomList += '<p>MEETING ROOM</p>';

			roomList += "<div>";
			roomList += '<div style ="border: 1px solid black;height:25%; width: 25%;">';
			roomList += data[i].name+' ';
			roomList += data[i].status;
			roomList += '<input type="button" value="Book" data="'+ data[i].status+ ":" + i + '" onclick="changeStatus">'+' '+'<input type="button" value="Unbook">';


			roomList += "</div>";
		}
		roomList +="</div>";
		return roomList;

		}

	if (roomtype.value == "Game Room"){

		for(var i=0; i<data.length; i++){
			roomList += '<p>GAME ROOM</p>';

			roomList += "<div>";
			roomList += '<div style ="border: 1px solid black;height:25%; width: 25%;">';
			roomList += data[i].name+' ';
			roomList += data[i].status;
			roomList += '<input type="button" value="Book" onclick="changeStatus">'+' '+'<input type="button" value="Unbook">';


			roomList += "</div>";
		}
		roomList +="</div>";
		return roomList;

		}

}

// <div style = "border: 2px solid blue;height:25%; width: 25%;">
//     <div id="meetingroom" >
//         <p>MEETING ROOM</p>
//     </div>
//     <div style ="border: 1px solid black;height:25%; width: 25%;">
//         <input type="checkbox" name="room" value="Room1">ROOM 1
//     </div>
//     <div style = "border: 1px solid black;height:25%; width: 25%;">
//         <input type="checkbox" name="room" value="Room2">
//         ROOM 2
//     </div>
//     <div style = "border: 1px solid black;height:25%; width: 25%;">
//         <input type="checkbox" name="room" value="Room2">
//         ROOM 3
//     </div>
//     <div style ="border: 1px solid black;height:25%; width: 25%;">
//         <input type="checkbox" name="room" value="Room2">
//         ROOM 4
//     </div>
//     <div style ="border: 1px solid black;height:25%; width: 25%;">
//         <input type="checkbox" name="room" value="Room2">
//         ROOM 5
//     </div>
//     <div>
//         <button type="button" value="CHECK IN" style ="background-color: green;"> CHECK IN</button>
//     </div>
//     <div>
//         <buttton type ="button" value ="CHECK OUT" style = "background-color: red"> CHECK OUT</button>
//     </div>
// </div>



// }
