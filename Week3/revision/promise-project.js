//tạo đối tượng
var users = [
    {
        id: 1,
        name: 'nguyen',

    },
    {
        id: 2,
        name: 'nha',
    },
    {
        id: 3,
        name: 'hello',
    }

];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: "minh là nguyên! Chào các bạn",
    },
    {
        id: 2,
        user_id: 2,
        content: "minh là nHÃ! Chào các bạn",
    }
];

function getComments() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(comments);
        }
            , 1000);
    });
}

function getUserIdBy(userId) {
    return new Promise(function (resolve) {
        var result = users.filter(
            function (user) {
                return userId.includes(user.id);
            }
        );
        setTimeout(function () {
            resolve(result);
        }, 1000);
    })
}



getComments()
    .then(function (comments) {
        var userId = comments.map(
            function (comment) {
                return comment.user_id;
            }
        );
        return getUserIdBy(userId)
            .then(function (users) {
                return {
                    users: users,
                    comments: comments
                };
            })
    })
    .then(function (data) {
        var commentBlock = document.getElementById('comment-block');
        var html = '';
        data.comments.forEach(function (comment) {
            var user = data.users.find(function (user) {
                return user.id == comment.user_id;

            });
        });

        html += `<li>${user.name} : ${comments.content}</li>`;
        commentBlock.innerHTML = html;
    });