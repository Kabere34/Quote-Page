export class Quotes {
  showDescription:boolean;
  constructor(id:number,
    quote:string,
    author:string,
    userName:string,
    datePassed:Date,
    upvote:number,
    downvote:number){
      this.showDescription=false;
    }

}
