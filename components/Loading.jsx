import style from "../styles/Loader.module.css";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`${style.loader} ease-linear rounded-full border-4 border-t-4 border-gray-200 h-8 w-8`}
      ></div>
    </div>
  );
};

export default Loading;
