//Set vars for paginination
var current_page = 1;
var records_per_page = 10;
// Pagination Functions
//prevPage
function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}
//nextPage
function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}
//changePage
function changePage(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");   
    var page_span = document.getElementById("page");
    // Page validations
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();
    $tbody.innerHTML = "";
    for (var i = (page-1) * records_per_page; i < (page * records_per_page) && i < filteredAddresses.length; i++) {
      var address = filteredAddresses[i];
      var fields = Object.keys(address);
      // InsertRow tbody
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // create a new cell for address[field] and change cell to the current value with current address.
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = address[field];
      }
    }
  
    page_span.innerHTML = page + "/" + numPages();

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

//numPage function
function numPages()
{
    return Math.ceil(filteredAddresses.length / records_per_page);
}

window.onload = function() {
    changePage(1);
};

//Level 2: Multiple Seach Categories/ Filter Section

// QuerySelect the tbody elements, input field and button
var $tbody = document.querySelector("tbody");
var $datetimeInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
var $citysearchBtn = document.querySelector("#citysearch");
var $statesearchBtn = document.querySelector("#statesearch");
var $countrysearchBtn = document.querySelector("#countrysearch");
var $shapesearchBtn = document.querySelector("#shapesearch");

// addEventListener to the searchButton, call handleSearchButtonClick when clicked on.
$searchBtn.addEventListener("click", handleSearchButtonClick);
$citysearchBtn.addEventListener("click", handleCityButtonClick);
$statesearchBtn.addEventListener("click", handleStateButtonClick);
$countrysearchBtn.addEventListener("click", handleCountryButtonClick);
$shapesearchBtn.addEventListener("click", handleShapeButtonClick);

// Set filteredAddresses to addressData 
var filteredAddresses = addressData;

function handleSearchButtonClick() {
  // Format the user's search to correct format. 
  var filterDateTime = $datetimeInput.value.trim().toLowerCase();

  // 
  filteredAddresses = filteredAddresses.filter(function(address) {
    var addressDateTime = address.datetime.toLowerCase();

    // If true, add the address to the filteredAddresses
    return addressDateTime === filterDateTime;
  });
  changePage(1);
  
}

function handleCityButtonClick() {
    // Format the user's search.
    var filterCity = $cityInput.value.trim().toLowerCase();
  
    // filteredAddresses have "DateTime" match the filter and format toLowerCase
    filteredAddresses = filteredAddresses.filter(function(address) {
      var addressCity = address.city.toLowerCase();
  
      // If true, add the address to the filteredAddresses
      return addressCity === filterCity;
    });
    changePage(1);
    
  }

  function handleStateButtonClick() {
    // Format the user's search.
    var filterState = $stateInput.value.trim().toLowerCase();
  
    // Set filteredAddresses
    filteredAddresses = filteredAddresses.filter(function(address) {
      var addressState = address.state.toLowerCase();
  
      // If true, add the address to the filteredAddresses
      return addressState === filterState;
    });
    changePage(1);
    
  }

  function handleCountryButtonClick() {
    //Format search
    var filterCountry = $countryInput.value.trim().toLowerCase();
  
    // Set filteredAddresses
    filteredAddresses = filteredAddresses.filter(function(address) {
      var addressCountry = address.country.toLowerCase();
  
      return addressCountry === filterCountry;
    });
    changePage(1);
    
  }

  function handleShapeButtonClick() {
    // Format Search
    var filterShape = $shapeInput.value.trim().toLowerCase();
  
    // Set filteredAddresses
    filteredAddresses = filteredAddresses.filter(function(address) {
      var addressShape = address.shape.toLowerCase();
  
      // Return add the address to the filteredAddresses if true
      return addressShape === filterShape;
    });
    changePage(1);
    
  }


