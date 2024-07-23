import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const deleteBook = async () => {
    setLoading(true);
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/delete/${id}`
      );
      if (response.data.success) {
        setLoading(false);
        enqueueSnackbar("Book deleted successfully!", { variant: "success" });
        navigate("/");
      }
    } catch (e) {
      setLoading(false);
      enqueueSnackbar("Something went wrong!!", { variant: "error" });
      alert(e.message);
    }
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading && <Spinner />}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are you sure you want to delete this book?</h3>

        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={deleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
