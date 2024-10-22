import User from "../models/user.model";
async function uploadImagesController(req, res) {
    try {
        const { name, socialMediaHandle } = req.body;
        const images = req.files.map(file => file.path);
        if(images.length == 0){
            res.status(400).json({message:"No images were submitted!!"});
        }
        const existingUser = User.find({ name });
        if (existingUser) {
            existingUser.images.push(...images);
        }
        else {
            const user = User.create({
                name,
                socialMediaHandle,
                images
            })
        }
        res.status(200).json({ message: "Images successfully uploaded!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}