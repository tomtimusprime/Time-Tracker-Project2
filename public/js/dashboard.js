$(document).ready(function () {

console.log("On dashboard.js page.");

    // Set the defaults for the dashboard-table display
    $("#dashboard-table").DataTable({
        "paging": false,
        "searching": false,
        "ordering": false,
        "info": false,
        "language":
        {
            "zeroRecords": "",
            "emptyTable": "",
            "infoEmpty": "",
            "info": "",
        },
        "columns": [
            {"width": "25px"},
            {"width": "100px"},
            {"width": "100px"},
            {"width": "150px"},
            {"width": "25px"},
            {"width": "50px"},
            {"width": "50px"},
            {"width": "50px"},
            {"width": "50px"},
            {"width": "50px"},
            {"width": "50px"},
            {"width": "50px"},
            {"width": "50px"},
        ]

    });

 
    $.get("/api/dashboard/userdata").then(function(userData) {
        console.log("I am in the .get(//api/dashboard/:id/)");
        console.log(userData);
        var dataTable = $("tbody");
        var newTr = $("<tr>");
        newTr.data("user", userData);
        newTr.append("<td>" + userData.id + "</td>");
        newTr.append("<td>" + userData.first_name + "</td>");
        newTr.append("<td>" + userData.last_name + "</td>");
        newTr.append("<td>" + userData.email + "</td>");
        newTr.append("<td> $" + userData.wage + "</td>");
        newTr.append("<td>" + userData.hours[0].hrs_worked_today + "</td>");
        newTr.append("<td>" + userData.hours[0].hrs_worked_week + "</td>");
        newTr.append("<td>" + userData.hours[0].hrs_worked_month + "</td>");
        newTr.append("<td>" + userData.hours[0].hrs_worked_ytd + "</td>");
        newTr.append("<td> $" + userData.hours[0].earnings_today + "</td>");
        newTr.append("<td> $" + userData.hours[0].earnings_week + "</td>");
        newTr.append("<td> $" + userData.hours[0].earnings_month + "</td>");
        newTr.append("<td> $" + userData.hours[0].earnings_ytd + "</td>");
        dataTable.append(newTr);
      });
       
        // newTr.append("<td><a style='cursor:pointer;color:red' class='delete-user'>Delete User</a></td>");
        // newTr.append("<td><button type='button' class='btn-red delete-user btn-sm m-0'>Delete User</button></td>");
        

});