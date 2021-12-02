class Post {
    constructor(username, title, content, date, comments) {
        this.username = username;
        this.title = title;
        this.content = content;
        this.date = date;
        this.comments = comments
    }
}

module.exports = Post;