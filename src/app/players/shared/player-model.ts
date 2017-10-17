export class PlayerModel {
  

  constructor (public id: number, public firstName: string,
    public lastName: string,
    public rating: number,
    public wins: number,
    public losses: number,
    public profilePicture?: string) {
    
  }
}
