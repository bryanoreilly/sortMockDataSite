//const mockup = require('../MOCK_DATA.json');
var header = document.querySelector('header');
var tableRef = document.getElementById("tableRef");
var searchBar = document.getElementById("search");

function loadJSON(callback) {

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'MOCK_DATA.json', true); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      //console.log(xobj.responseText);
      callback(xobj.responseText);
    }
  };
  //xobj.open('GET', 'MOCK_DATA.json', true); // Replace 'my_data' with the path to your file
  xobj.send();
}

function init() {
  loadJSON(function (response) {
    let sBigData = "";
    sBigData += `<tr>` + `<th>` + `ID` + `</th>` + `<th>` + `First Name` + `</th>` + `<th>` + `Last Name` + `</th>` + `<th>` + `Gender` + `</th>` + `<th>` + `IP Address` + `</th>` + `</tr>`;

    // Parse JSON string into an array of objects
    var actual_JSON = JSON.parse(response);


		fnAddTableRows = function (sData) {
			var iterator = sData.keys();
			var row;
			for (let key of iterator)
			{
				row += tableData(sData[key]);
			}
      sBigData += tableRow(row);
    }

    actual_JSON.forEach(fnAddTableRows);
    tableRef.innerHTML = sBigData;
  })

}

// takes in a list of table data, and wraps it in a row
var  tableRow = function(row)
{
	return String.raw`<tr>${row}</tr>`+"\n";
}

// returns data wrapped in datatags
var tableData = function(data)
{
	return String.raw`<td>${data}</td>`+"\n";
}


function searchQuery(e){
  //var currentValue = searchBar.value;
  console.log(e.keyCode);
  if(e.keyCode == 13){
  alert("suck it trebek")
  }

  searchRequest = searchBar.value.toUpperCase();
  tr = tableRef.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(searchRequest) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }

}

// original rows

// current rows


//display method()

//event listener for webworkers

console.log("help me please");

init();
