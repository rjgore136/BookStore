import SingleBook from "../SingleBook";

const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item) => {
        return <SingleBook key={item._id} item={item} />;
      })}
    </div>
  );
};

export default BooksCard;
