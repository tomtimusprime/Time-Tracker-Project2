$(document).ready(function () {


    const addUser = async (name, wage) => {
        let newUser = {
            full_name: name,
            time_worked: 0,
            wage: wage,
            total_time: 0,
            total_earnings: 0
        }
        await
            $.ajax("/api/users/" + id, {
                type: "POST",
                data: newUser
            }).then(
                function () {
                    console.log("Added user: ", newUser);
                    location.reload();
                }
            );
    }

    const updateUser = async (timeWorked, totalTime, totalEarnings) => {
        var newUserData = {
            time_worked: timeWorked,
            total_time: totalTime,
            total_earnings: totalEarnings
        };

        await
            $.ajax("/api/users/" + id, {
                type: "PUT",
                data: newUserData
            }).then(
                function () {
                    console.log("Updated user data: ", newUserData);

                    location.reload();
                }
            );
    }

    exports.addUser = addUser;
    exports.updateUser = updateUser;
});