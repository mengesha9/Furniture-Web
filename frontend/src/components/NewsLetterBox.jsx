const NewsLetterBox = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
    };


  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% 0ff
      </p>
      <p className="text-gray-400 mt-3">
        {" "}
        Lorem ipsum dolor sit amet consectetur{" "}
      </p>
      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flext items-center gap-3 mx-auto my-6  pl-3">
        <input
          className="w-full sm:flex-1 outline-none border"
          type="email"
          action=""
          placeholder="Enter your Email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          SUBSCRIB
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
