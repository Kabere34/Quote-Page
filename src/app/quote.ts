export class Quote {
  id: number;
  quote: string;
  author: string;
  upvote: number;
  downvote: number;
  upload: string;
  constructor(id: number, quote: string, author: string, upvote: number, downvote: number, upload: string,) {
    this.id = id;
    this.quote = quote;
    this.author = author;
    this.upvote = upvote;
    this.downvote = downvote;
    this.upload = upload;
  }
}
