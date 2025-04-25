import mongoose from 'mongoose';

const videoschema=mongoose.Schema({
      animeid: {
            
            type:String,
            required: true
          },
      moviename: String,
      videourl: String,
      imageurl: String,
      japanese:String,
      aired: String,
      duration: String,
      status:String,
      malScore: String,
      genres: [String],  //genres Should be array of Strings.
      studios: String,
      director:String,
      description:String
});
const animevideo=mongoose.model("animevideo",videoschema);
export default animevideo;