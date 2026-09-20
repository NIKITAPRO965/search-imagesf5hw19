import { useState, useEffect } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import { fetchImages } from "./api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import Button from "./components/Button/Button";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1)
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    if(!query){
      return
    }
    setLoading(true)
    fetchImages(query, page).then(res => {
      setImages(prev => [...prev, ...res.hits])
    }).finally(()=>setLoading(false))
  }, [query, page])

  const handleSerch = (text) => {
    setQuery(text);
    // setPage(1)
  };

const loadMore = () => {
setPage(prev => prev+1)

}

console.log(images);


  return (
    <>
      <Searchbar onSearch={handleSerch} />
      {loading&&<Loader />}
      <ImageGallery images={images} />
      {images.length>0&&<Button onClick={loadMore}/>}
    </>
  );
}

export default App;
