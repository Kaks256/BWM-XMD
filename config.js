const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW5OqOBj8L3nVOXIHrZqqRVRAFFHwunXqVAgBAwoIQcSp+e9bODM187Dn7OxbKpBOp7u/fgFpRkps4QYMXkBekCukuF3SJsdgAIZVGOICdEEAKQQDwE22yO5MT7YxHXnDVceJepf1iE60jhdywpWfm7ObJq6C2kDP4LUL8so/EfQHQFbhAnnn8BkNJv3oKjPWplbEVGwSuafsN5NZhZj+WnP2SQvYIkJSkDQa50d8xgU8WbhxICm+Rz9zbOVOUxPLsu9x840eG1vmQrldCD3LKErLTVipkx9cXv0efXqRoRevXTNFPSE4SKVhjlm0dryYUUf8pre542Zk5LdrM3+jX5IoxYEZ4JQS2nxbd0k9lnJiqbwz4qR83XPHe6vGvCAve5QXZX5zOiz2PXV4ZMffI76be7NrYqD0tJaXUVDP6DlBisJet5k+vQZ1NuwPzVSil1XylbhTfGQl+T+6q+PFWKKmUZlnqizYKJRyRYYLYkwIc/eE2zHQ4WhfOWSSfI/+qg7rgh71jq+oVjTUVqERmR5cccxuBvEsqptrrStMFm6FT/qQVsWfWLqGVcjz7Z4x7txtc49GS2a92O7Si63ZHO77jb9X0KnPmyPDDXDfHBV2x/fEi6FsJWcryViqdzrny45vRqvqnGlSiKL6+fGiBDdmAAbsaxcUOCIlLSAlWfrYk5UugMHVxajA9CEvWLHnDdL0uTHmjck8tg5rPUj3q6Rejanpzg6cvPF1pbkEG+YZdEFeZAiXJQ4MUtKsaOa4LGGESzD4+2cXpPhG34xrr+PZLghJUdJ1WuWnDAYfrn58hAhlVUrdJkVau8AFGDCf25hSkkZlq2OVwgIdyRVrR0hLMAjhqcSvXRDgK0G4xQPCL304shfisuDcXzHTNzdOcatbyscsffvFh4qMkQyfRKHPPQky4z8pQeA/IUbkA44XMUIYdAF5n5n2zG8tDNWL1cRVckiXiUXY4H7IJf6wIVNBedjwpj0ucAAGtKhwF/gQJVXuZQlO/4C7vaN6N/K39txc3WJb0Oe52WyxqMbmF9w3T8Hg5bOntCxo8RzHHS53vAC64PyIIGlfzomSLPB8nxUlacArf5U/6lZImOc/Ukxb3HfR2xMBppCcSjAAmhX372ivjxcxpxS1rqvjSNUiFXya9JH2tzQ5QZI6CVRY+z6LZnt6ChrWSlzGEtSq0ULPRXFvuzSn2a58/heQtjiFFbKdjje3F569lXnvxLtc7EJ2qXU21l2zUFRu3TNn6Tzs7Ma5o1V3S9tFpcjAziib6Ob8vKMzFPREMvLcNdE6aKQ+t7e9heXrZbLUj5vp7Xyi4aJWYhITr6+UC06venNtNuPE3GKL/rSH6P1+3bH8zZESdeSI1bQjw9jyAxtii/qQkYVO73gQh3ZjRdHbHD564PTev+QxIS/v0QoJftRZCluL/sucrylnXrtfMN4L8jdJGnr8YXoX9avtoUbQuNlhh6ibj6lWqbMyShkmNXtsomlwIoPX159dkJ8gDbPiDAYApkGRkQB0wQmWVP0cVI+ccUnhOW/rhFd4TlBE4fUfQVHCOt4HAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "GOOGLE-MD",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " 256743391566",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'GOOGLE-MD,
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

