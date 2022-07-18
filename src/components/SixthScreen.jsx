import React from "react";
import Reviews from "./reviews";

const SixthScreen = () => {
  return (
    <div className="p-10 bg-pink-50 flex flex-col justify-between items-center ">
      <div className="banner text-5xl font-medium leading-tight mt-10 mb-10 flex flex-col justify-center items-center">
        <p>Loved by 1000+ customers</p>
      </div>
      <div className="flex mx-5 my-5 justify-between items-start">
        <Reviews
          review="I ordered on Friday evening and on Monday at 12:30 the package was with me. I have never encountered such a fast order processing."
          reviewer="Mark J."
          rating={
            <svg
              class="icon icon-star "
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.25 0L9.25314 4.28084L13.75 4.96806L10.5068 8.30396L11.2699 13L7.25 10.7808L3.23008 13L3.99319 8.30396L0.75 4.96806L5.24685 4.28084L7.25 0Z"
                fill="#FE8F17"
              ></path>
            </svg>
          }
        />
        <Reviews
          review="Everything is perfect. I would recommend!

"
          reviewer="Mark J."
          rating2={
            <svg
              class="icon icon-star "
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.25 0L9.25314 4.28084L13.75 4.96806L10.5068 8.30396L11.2699 13L7.25 10.7808L3.23008 13L3.99319 8.30396L0.75 4.96806L5.24685 4.28084L7.25 0Z"
                fill="#FE8F17"
              ></path>
            </svg>
          }
        />
        <Reviews
          review="I ordered on Friday evening and on Monday at 12:30 the package was with me. I have never encountered such a fast order processing."
          reviewer="Mark J."
          rating1={
            <svg
              class="icon icon-star "
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.25 0L9.25314 4.28084L13.75 4.96806L10.5068 8.30396L11.2699 13L7.25 10.7808L3.23008 13L3.99319 8.30396L0.75 4.96806L5.24685 4.28084L7.25 0Z"
                fill="#FE8F17"
              ></path>
            </svg>
          }
        />
        <Reviews
          review="I ordered on Friday evening and on Monday at 12:30 the package was with me. I have never encountered such a fast order processing."
          reviewer="Mark J."
          rating={
            <svg
              class="icon icon-star "
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.25 0L9.25314 4.28084L13.75 4.96806L10.5068 8.30396L11.2699 13L7.25 10.7808L3.23008 13L3.99319 8.30396L0.75 4.96806L5.24685 4.28084L7.25 0Z"
                fill="#FE8F17"
              ></path>
            </svg>
          }
        />
      </div>
      <div className="flex justify-center items-center mt-5 mb-5">
        Dots pagenation
      </div>
      <button
        type="button"
        class="py-2.5 px-11 mr-2 mb-2 text-lg font-medium text-white focus:outline-none bg-green-600 rounded-lg border  "
      >
        All reviews
      </button>
    </div>
  );
};

export default SixthScreen;
