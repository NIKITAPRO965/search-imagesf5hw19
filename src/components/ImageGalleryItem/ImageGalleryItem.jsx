function ImageGalleryItem({ img, onImageClick }) {
  return (
    <>
      <li>
        <img onClick={()=> onImageClick(img.largeImageURL)} src={img.previewURL} alt={img.tags} />
      </li>
    </>
  );
}

export default ImageGalleryItem;
