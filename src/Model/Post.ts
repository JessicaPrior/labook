export enum POST_TYPES {
   NORMAL = "normal",
   EVENT = "event"
}

export class Post {

   constructor(
      private id: string,
      private photo: string,
      private description: string,
      private type: POST_TYPES,
      private createdAt: Date,
      private authorId: string
   ) { }

   public getId = (): string => this.id
   public getPhoto = (): string => this.photo
   public getDescription = (): string => this.description
   public getType = (): POST_TYPES => this.type
   public getCreatedAt = (): Date => this.createdAt
   public getAuthorId = (): string => this.authorId
}

export class inputPost {
   
   constructor(
      private photo: string,
      private description: string,
      private type: POST_TYPES
   ) {   }

   public inPhoto = (): string => this.photo
   public inDescription = (): string => this.description
   public inType = (): POST_TYPES => this.type
}

