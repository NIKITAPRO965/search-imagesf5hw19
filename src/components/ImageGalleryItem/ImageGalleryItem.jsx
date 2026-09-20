function ImageGalleryItem({ img }) {
  return (
    <>
      <li>
        <img src={img.previewURL} alt={img.tags} />
      </li>
    </>
  );
}

export default ImageGalleryItem;
