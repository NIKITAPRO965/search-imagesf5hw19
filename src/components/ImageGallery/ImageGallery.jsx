import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ images, onImageClick }) {
  return (
    <>
      <ul>
        {images.map((img) => {
          return <ImageGalleryItem onImageClick={onImageClick} key={img.id+String(Math.random())} img={img} />;
        })}
      </ul>
    </>
  );
}

export default ImageGallery;
