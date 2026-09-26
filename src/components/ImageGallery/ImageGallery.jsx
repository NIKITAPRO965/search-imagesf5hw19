import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ images, onImageClick }) {
  return (
    <>
      <ul>
        {images.map((img) => {
          return <ImageGalleryItem onImageClick={onImageClick} key={img.id} img={img} />;
        })}
      </ul>
    </>
  );
}

export default ImageGallery;
