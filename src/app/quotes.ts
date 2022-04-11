export class Quotes {
  showDescription:boolean;
  constructor(
    public id:number,
    public quote:string,
    public author:string,
    public datePassed:Date,
    public userName:string,
    public upvote:number,
    public downvote:number){
      this.showDescription=false;
    }

}
