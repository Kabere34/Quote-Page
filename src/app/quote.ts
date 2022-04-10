export class Quote {
  quote: string;
  author: string;
  upvote: number;
  downvote: number;
  upload: string;
  constructor(quote: string, author: string, upvote: number, downvote: number, upload: string) {
    this.quote = quote;
    this.author = author;
    this.upvote = upvote;
    this.downvote = downvote;
    this.upload = upload;
  }
}
