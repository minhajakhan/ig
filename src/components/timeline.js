import Skeleton from "react-loading-skeleton";
import usePhotos from "../hooks/use-photos.js";
import Post from './post/index.js'

export default function Timeline() {
    const { photos } = usePhotos();
    
    return (
        <div className="container col-span-2">
            {!photos ? (
                <Skeleton count={1} width={640} height={500} className="mb-5"/>
            ) : photos?.length > 0 ? (
                photos.map((content) => <Post key={content.docId} content={content}/>)
            ) : (
                <p className="text-center text-2xl">Follow people to see photos</p>
            )}
        </div>
    );
}