
import animevideo from "../model/animevideo.js";

const getAnimeVideo = async (req, res) => {
    try {
        const animeId = req.params.id.trim(); // Remove unwanted spaces/newline
        
        const animevideolist = await animevideo.findOne({ animeid: animeId });

        console.log("Requested ID:", animeId);

        if (!animevideolist) {
            return res.status(404).json({ message: "Anime not found" });
        }

        res.send(animevideolist);

    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ message: "Server error" });
    }
};

export default getAnimeVideo;
