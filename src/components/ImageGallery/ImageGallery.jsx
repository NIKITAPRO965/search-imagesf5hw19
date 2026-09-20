import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ images }) {
  return (
    <>
      <ul>
        {images.map((img) => {
          return <ImageGalleryItem key={img.id} img={img} />;
        })}
      </ul>
    </>
  );
}

export default ImageGallery;
