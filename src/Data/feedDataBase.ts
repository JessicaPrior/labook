import  BaseDataBase  from './BaseDataBase';


class FeedDataBase extends BaseDataBase {
    
    public async selectAllFeed(){
        try {
            const feed = await BaseDataBase.connection.raw(`
                 SELECT * FROM labook_posts ORDER BY created_at DESC
            `)
           console.log(feed) 
             return feed[0]
     
         } catch (error) {
             throw new Error()
         }

    }

    public async selectTypeEvent (type: string) {
        try {
           const feed = await BaseDataBase.connection.raw(`
                SELECT * FROM labook_posts
                WHERE type = '${type}' ORDER BY created_at DESC
           `)
            
            return feed[0]
    
        } catch (error) {
            throw new Error()
        }
    }
}

export const feedDataBase: FeedDataBase = new FeedDataBase();