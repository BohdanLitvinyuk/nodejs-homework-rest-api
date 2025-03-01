const path = require("path")
const fs = require("fs/promises")
const { User } = require("../../models/user");
const {  ctrlWrapper } = require("../../helpers");
const Jimp = require("jimp");

const avatarsDir = path.join(__dirname, "../","../","public","avatars")


const updateAvatar = async (req, res)=>{
    const {_id} = req.user;
const {path: tempUpload, originalname} = req.file;


const filename = `${_id}_${originalname}`
const resultUpload = path.join(avatarsDir, filename);
await fs.rename(tempUpload, resultUpload);

Jimp.read(resultUpload, (err, image) => {
    if (err) throw err;
    image
      .resize(250, 250)
      .write(resultUpload); 
  });

const avatarURL = path.join("avatars", filename);
await User.findByIdAndUpdate(_id, {avatarURL});
res.json({
    avatarURL
})
}



module.exports = {
    updateAvatar:ctrlWrapper(updateAvatar)};