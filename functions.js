function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return this.title + " by: " + this.author + " has " + this.pages.toString() + " pages and was read: " + this.read.toString();
    }
}