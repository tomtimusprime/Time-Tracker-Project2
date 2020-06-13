$(document).ready(function () {
    // var userIdInput = $("#userId");
    var userList = $("tbody");
    var userContainer = $(".user-container");



    $(document).on("click", ".delete-user", handleDeleteButtonPress);

    // Getting the initial list of users
    // getUsers();

     // Function for retrieving authors and getting them ready to be rendered to the page
     function getUsers() {
        $.get("/api/dashboard", function (data) {
            var rowsToAdd = [];
            for (var i = 0; i < data.length; i++) {
                rowsToAdd.push(createUserRow(data[i]));
            }
            renderUserList(rowsToAdd);
        });
    }
    var userID = $("#enteredUserId").val().trim();

    $("#submitUser").on("click", function(event) {
        console.log(userID);

        event.preventDefault();

        getUserById(userID);
    });

    function getUserById (userID) {
        
        console.log(userID);
        
        $.ajax({
          method: "GET",
          url: "/api/dashboard/" + userID
        })
          .then(getUsers);
      }

    //   Make table scroll on the x-axis for responsiveness
    $("#dashboard-table").DataTable({
        "scrollX": true
    });
    // Function for creating a new list row for users
    function createUserRow(userData) {

        // console.log(userData);
        // const wage = $("#total").html(userData.wage.toString().replace(/\d(?=(?:\d{3})+$)/g,"$&,"));
        var newTr = $("<tr>");
        newTr.data("user", userData);
        newTr.append("<td>" + userData.id + "</td>");
        newTr.append("<td>" + userData.first_name + "</td>");
        newTr.append("<td>" + userData.last_name + "</td>");
        newTr.append("<td>" + userData.time_worked + "</td>");
        newTr.append("<td> $" + userData.wage + "</td>");
        newTr.append("<td>" + userData.total_time + "</td>");
        newTr.append("<td> $" + userData.total_earnings + "</td>");
        // newTr.append("<td><a style='cursor:pointer;color:red' class='delete-user'>Delete User</a></td>");
        newTr.append("<td><button type='button' class='btn-red delete-user btn-sm m-0'>Delete User</button></td>");
        return newTr;
    }

    

    // A function for rendering the list of authors to the page
    function renderUserList(rows) {
        userList.children().not(":last").remove();
        userContainer.children(".alert").remove();
        if (rows.length) {
            console.log(rows);
            userList.prepend(rows);
        }
        else {
            renderEmpty();
        }
    }

    // Function for handling what to render when there are no users
    function renderEmpty() {
        var alertDiv = $("<div>");
        alertDiv.addClass("alert alert-danger");
        alertDiv.text("You must create an User before you can create a Table of Users.");
        userContainer.append(alertDiv);
    }

    // Function for handling what happens when the delete button is pressed
    function handleDeleteButtonPress() {
        var listItemData = $(this).parent("td").parent("tr").data("account");
        var id = listItemData.id;
        $.ajax({
            method: "DELETE",
            url: "/api/dashboard/" + id
        })
            .then(getUsers);
    }
});