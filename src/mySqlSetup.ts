// import connection from "./Data/BaseDataBase"

// Para retirar os comentarios e executar o código, basta selecionar a parte desejada e precionar CTRL+;

// async function createTables(){
//    try {
//       await connection.raw(`
//          CREATE TABLE labook_users(
//             id VARCHAR(255) PRIMARY KEY,
//             name VARCHAR(255) NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL
//          )
//       `)

//       await connection.raw(`
//          CREATE TABLE labook_posts(
//             id VARCHAR(255) PRIMARY KEY,
//             photo VARCHAR(255) NOT NULL,
//             description VARCHAR(255) NOT NULL,
//             type ENUM("normal","event") DEFAULT "normal",
//             created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//             author_id VARCHAR(255),
//             FOREIGN KEY (author_id) REFERENCES labook_users (id)
//          )
//       `)

//        await connection.raw(`
//            CREATE TABLE Friends_list(
//                id_user VARCHAR(64) NOT NULL,
//                id_friend VARCHAR(64) NOT NULL,
//                FOREIGN KEY (id_user) REFERENCES labook_users(id),
//                FOREIGN KEY (id_friend) REFERENCES labook_users(id),
//                PRIMARY KEY (id_user, id_friend)
//            )
//        `)

//       console.log("MySql setup completed!")
//    } catch (error) {
//       console.log(error)
//    }
// }

// createTables()

