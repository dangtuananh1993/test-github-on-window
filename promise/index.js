/** @format */

var users = [
    {
        id: 1,
        name: "Son Dang",
    },
    {
        id: 2,
        name: "Tuan Anh",
    },
    {
        id: 3,
        name: "Hieu Nguyen",
    },
];

var comments = [
    {
        id: 1,
        user_id: "2",
        content: "Anh oi khi nao ra video moi the a",
    },
    {
        id: 2,
        user_id: "1",
        content: "Toi nay thu 6 ngay 3/6 ra nhe em",
    },
    {
        id: 3,
        user_id: "3",
        content: "The a, cam on anh nhieu nhe",
    },
];

function getComments() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(comments);
        }, 1000);
    });
}

function getUserID(userIds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var result = users.filter((user) => {
                return userIds.includes(user.id);
            });
            resolve(result);
        }, 1000);
    });
}

getComments()
    .then((comments) => {
        var userIds = comments.map((user) => {
            return user.id;
        });

        return getUserID(userIds).then((users) => {
            console.log(users);
            return {
                users: users,
                comments: comments,
            };
        });

        console.log(userIds);
    })
    .then((data) => {
        console.log(data);
    });
