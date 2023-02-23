const pictures = require("../models/pictures.models");

class PicturesServices {
  static async addPictures(picturesArray) {
    try {
      const result = await pictures.bulkCreate(picturesArray, { validate: true });
      return result
    } catch (error) {
      throw error
    }
  }
};

module.exports = PicturesServices