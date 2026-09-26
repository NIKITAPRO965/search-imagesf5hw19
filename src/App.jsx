import { useState, useEffect } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import { fetchImages } from "./api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectImage, setSelectImage] = useState(null);


  useEffect(() => {
    if (!query) {
      return;
    }
    setLoading(true);
    fetchImages(query, page)
      .then((res) => {
        setImages((prev) => [...prev, ...res.hits]);
      })
      .finally(() => setLoading(false));
  }, [query, page]);

  const handleSerch = (text) => {
    setQuery(text);
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleImageClick = (url) => {
 setSelectImage(url)
  }

  const closeModal = () => {
    setSelectImage(null)
  }

  return (
    <>
      <Searchbar onSearch={handleSerch} />
      {loading && <Loader />}
      <ImageGallery images={images} onImageClick={handleImageClick}/>
      {images.length > 0 && <Button onClick={loadMore} />}
      {selectImage && <Modal onClose={closeModal} onImageUrl={selectImage}/>}
    </>
  );
}

export default App;
