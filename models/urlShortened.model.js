import { db } from "../config/db-client.js";

export const getShortenedUrlFromDb = async () => {
  try {
    const [data] = await db.execute("select * from shortenedLinks");
    console.log("@@@ shorteneedUrl File data 1", data);
    return data;
  } catch (err) {
    console.log("@@@ error while fetching the shortened url link file", err);
  }
};

export const saveShortenedUrlIntoDb = async (finalShortCode, url) => {
  try {
    const addedShortenerUrlLinkDbRes = await db.execute(
      `insert into shortenedLinks (shortcode,url) values (?,?)`,
      [finalShortCode, url],
    );
    console.log("@@@ saveShortenedUrlIntoDb response", addedShortenerUrlLinkDbRes);
  } catch (err) {
    console.log("Error while saving the shortened url into json file", err);
  }
};
