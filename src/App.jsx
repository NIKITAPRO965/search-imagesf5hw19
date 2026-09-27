import { useState, useEffect, useCallback, useReducer } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import { fetchImages } from "./api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

function App() {
  const initialState = {
    query: "",
    page: 1,
    images: [],
    loading: false,
    selectImage: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "SET_QUERY":
        return {
          ...state,
          query: action.payload,
        };

      case "SET_LOADING":
        return {
          ...state,
          loading: action.payload,
        };

      case "SET_PAGE":
        return {
          ...state,
          page: action.payload,
        };

      case "SET_IMAGES":
        return {
          ...state,
          images: action.payload,
        };

      case "SEARCH":
        return {
          ...state,
          query: action.payload,
          page: 1,
          images: [],
        };

      case "SET_SELECTIMAGE":
        return {
          ...state,
          selectImage: action.payload,
        };

      default:
        return state;
    }
  }

  useEffect(() => {
    if (!state.query) {
      return;
    }
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    fetchImages(state.query, state.page)
      .then((res) => {
        dispatch({
          type: "SET_IMAGES",
          payload: [...state.images, ...res.hits],
        });
      })
      .finally(() =>
        dispatch({
          type: "SET_LOADING",
          payload: false,
        }),
      );
  }, [state.query, state.page]);

  const handleSearch = (text) => {
    dispatch({
      type: "SEARCH",
      payload: text,
    });
  };

  const loadMore = useCallback(() => {
    dispatch({
      type: "SET_PAGE",
      payload: state.page + 1,
    });
  }, [state.page]);

  const handleImageClick = (url) => {
    dispatch({
      type: "SET_SELECTIMAGE",
      payload: url,
    });
  };

  const closeModal = () => {
    dispatch({
      type: "SET_SELECTIMAGE",
      payload: null,
    });
  };

  return (
    <>
      <Searchbar onSearch={handleSearch} />
      {state.loading && <Loader />}
      <ImageGallery images={state.images} onImageClick={handleImageClick} />
      {state.images.length > 0 && <Button onClick={loadMore} />}
      {state.selectImage && (
        <Modal onClose={closeModal} onImageUrl={state.selectImage} />
      )}
    </>
  );
}

export default App;
