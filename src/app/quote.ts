export class Quote {
  id: number;
  quote: string;
  author: string;
  upvote: number;
  downvote: number;
  userName: string;
  constructor(id: number, quote: string, author: string, upvote: number, downvote: number, userName: string,) {
    this.id = id;
    this.quote = quote;
    this.author = author;
    this.upvote = upvote;
    this.downvote = downvote;
    this.userName = userName;
  }
}
