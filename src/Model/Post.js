class Post {
    constructor(username, title, content, date, comments, key) {
        this.username = username;
        this.title = title;
        this.content = content;
        this.date = date;
        this.comments = comments;
        this.key = key;
    }
}

module.exports = Post;