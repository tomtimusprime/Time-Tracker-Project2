$(document).ready(function () {

    var userList = $("tbody");
    var userContainer = $(".user-container");

    $(document).on("click", ".delete-user", handleDeleteButtonPress);

    // Getting the initial list of Authors
    getUsers();

    // Function for creating a new list row for authors
    function createUserRow(userData) {
        // var dashboardTable;
       $("#dashboardTable").DataTable({
            "columns": [
                // {
                //     data: "id"
                // },
                // {
                //     data: "first_name"
                // },
                // {
                //     data: "last_name"
                // },
                // {
                //     data: "time_worked"
                // },
        //         {
        //             "data": "Wage",
        //             "render": function (data, type, row) {
        //                 return formatNumber(data);
        //             }
        //         },
        //         {
        //             data: "total-time"
        //         },
        //         {
        //             data: "total-ernings",
        //             render: $.fn.dataTable.render.number(",", ".", 2, "$")
        //         }
            ]
        });

        //  dashboardTable.fnDraw();

        console.log(userData);
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
        newTr.append("<td><a style='cursor:pointer;color:red' class='delete-user'>Delete User</a></td>");
        return newTr;
    }

    // function formatNumber (number) {
    //     return number.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    // }
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
        var listItemData = $(this).parent("td").parent("tr").data("user");
        var id = listItemData.id;
        $.ajax({
            method: "DELETE",
            url: "/api/users/" + id
        })
            .then(getUsers);
    }
});