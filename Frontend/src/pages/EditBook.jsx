import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [details, setDetails] = useState({
    title: "",
    author: "",
    publishYear: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
    // console.log(details);
  };

  const editBook = async () => {
    try {
      setLoading(true);
      const response = await axios.put(
        `http://localhost:3000/api/update/${id}`,
        details
      );
      if (response.data.success) {
        setDetails({
          title: "",
          author: "",
          publishYear: "",
        });
        setLoading(false);
        enqueueSnackbar("Book edited successfully!", { variant: "success" });
        navigate("/");
        // console.log(response.data);
      }
    } catch (e) {
      console.log(e.message);
      enqueueSnackbar("Something went wrong!!", { variant: "error" });
    }
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading && <Spinner />}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label htmlFor="" className="text-xl mr-4 text-grey-500">
            Title
          </label>
          <input
            type="text"
            name="title"
            onChange={handleOnChange}
            value={details.title}
            className="border-2 border-grey-500 px-4 py-2 w-full"
          />
        </div>

        <div className="my-4">
          <label htmlFor="" className="text-xl mr-4 text-grey-500">
            Author
          </label>
          <input
            type="text"
            name="author"
            onChange={handleOnChange}
            value={details.author}
            className="border-2 border-grey-500 px-4 py-2 w-full"
          />
        </div>

        <div className="my-4">
          <label htmlFor="" className="text-xl mr-4 text-grey-500">
            Publish Year
          </label>
          <input
            type="text"
            name="publishYear"
            onChange={handleOnChange}
            value={details.publishYear}
            className="border-2 border-grey-500 px-4 py-2 w-full"
          />
        </div>

        <button className="p-2 bg-sky-300 m-8" onClick={() => editBook()}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBook;
