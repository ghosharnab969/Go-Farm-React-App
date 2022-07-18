import React from "react";

const Header = () => {
  return (
    <div>
      <div className="w-full h-8 bg-orange-400 flex align-center justify-center">
        <p className="text-white relative top-1 text-sm">
          Due to the <b>COVID-19</b> epidemic, orders may be processed with a
          slight delay test
        </p>
      </div>
      <div className="flex justify-evenly align-center py-6">
        <svg
          width="153"
          height="34"
          viewBox="0 0 153 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M56.4195 12.5423C57.3771 13.7002 58.0027 15.0871 58.2319 16.5602C58.4081 17.6763 58.3514 18.8157 58.0652 19.9097C57.7791 21.0037 57.2694 22.0295 56.5671 22.9252L56.567 22.9253C56.2081 23.374 55.8492 23.8227 55.5056 24.2714C55.02 24.8811 54.7517 25.6299 54.7419 26.4031C54.7414 28.0866 54.1406 29.7172 53.0433 31.0131C51.9459 32.3091 50.421 33.189 48.7317 33.501C48.465 33.5843 48.1869 33.6272 47.9069 33.6281H38.4449C38.1859 33.6238 37.9287 33.5835 37.6812 33.5084C35.9718 33.2179 34.4218 32.346 33.3043 31.0463C32.1867 29.7465 31.5732 28.1023 31.5718 26.4031C31.5619 25.6299 31.2937 24.8811 30.8081 24.2714C30.4492 23.8152 30.0979 23.3739 29.8153 23.0299C28.4913 21.4022 27.8327 19.3505 27.9674 17.2737C28.1022 15.1968 29.0208 13.2433 30.5446 11.7929C32.0683 10.3425 34.0884 9.49899 36.2119 9.42627C38.3355 9.35355 40.4107 10.0569 42.0342 11.3995C42.3434 11.6566 42.7359 11.7978 43.1416 11.7978C43.5472 11.7978 43.9397 11.6566 44.2489 11.3995C45.4138 10.4408 46.8183 9.80324 48.3181 9.55228C49.8179 9.30132 51.3589 9.44602 52.7827 9.9715C54.2065 10.497 55.4618 11.3843 56.4195 12.5423ZM43.354 26.9565C46.5443 26.9565 49.1304 24.3703 49.1304 21.1801C49.1304 17.9898 46.5443 15.4037 43.354 15.4037C40.1638 15.4037 37.5776 17.9898 37.5776 21.1801C37.5776 24.3703 40.1638 26.9565 43.354 26.9565Z"
            fill="#05A845"
          ></path>{" "}
          <path
            d="M33.0991 15.2812C32.8854 15.2842 32.6757 15.2244 32.497 15.1096C32.3183 14.9948 32.1788 14.8301 32.0966 14.6369C32.0144 14.4437 31.9933 14.2308 32.0358 14.0256C32.0784 13.8205 32.1827 13.6326 32.3354 13.4861C33.4423 12.4285 34.9282 11.8378 36.4746 11.8407C36.6221 11.8284 36.7705 11.8463 36.9106 11.8932C37.0506 11.94 37.1792 12.0149 37.2882 12.113C37.3972 12.2111 37.4842 12.3302 37.5438 12.463C37.6033 12.5957 37.634 12.7391 37.634 12.884C37.634 13.029 37.6033 13.1724 37.5438 13.3051C37.4842 13.4378 37.3972 13.557 37.2882 13.6551C37.1792 13.7531 37.0506 13.828 36.9106 13.8749C36.7705 13.9217 36.6221 13.9396 36.4746 13.9274C35.4877 13.9313 34.5408 14.3093 33.8322 14.982C33.637 15.1715 33.374 15.2789 33.0991 15.2812Z"
            fill="#015132"
          ></path>{" "}
          <path
            d="M31.633 18.6843C31.3494 18.6843 31.0775 18.574 30.877 18.3776C30.6765 18.1813 30.5638 17.9149 30.5638 17.6372C30.5562 17.5851 30.5562 17.5322 30.5638 17.4801C30.5963 17.2156 30.7304 16.9731 30.939 16.8021C31.1476 16.631 31.415 16.5443 31.6866 16.5596C31.9582 16.5748 32.2136 16.6909 32.4009 16.8842C32.5882 17.0775 32.6932 17.3334 32.6945 17.5998V17.6447C32.6925 17.9198 32.58 18.1831 32.3814 18.3777C32.1827 18.5722 31.9139 18.6824 31.633 18.6843Z"
            fill="#015132"
          ></path>{" "}
          <path
            d="M37.8859 6.09437C37.5474 5.07523 37.4862 3.97871 37.709 2.92571C37.9319 1.87271 38.4301 0.904138 39.1487 0.126778C39.1876 0.0830698 39.2356 0.0490706 39.2889 0.0273169C39.3423 0.00556314 39.3997 -0.0033834 39.4568 0.00114422C40.3716 0.132665 41.2411 0.49603 41.989 1.05923C42.7368 1.62243 43.3399 2.36819 43.7452 3.2308C44.1505 4.09341 44.3456 5.04641 44.3132 6.00585C44.2808 6.96529 44.0219 7.90173 43.5595 8.73267C43.2721 9.2324 43.0793 9.78463 42.9915 10.3596C42.9845 10.4084 42.9648 10.4543 42.9345 10.4923C42.9043 10.5303 42.8645 10.5589 42.8197 10.5751C42.7749 10.5913 42.7266 10.5944 42.6802 10.5841C42.6338 10.5738 42.591 10.5505 42.5565 10.5167C42.1445 10.1216 41.6621 9.81431 41.1366 9.61211C40.3833 9.30321 39.703 8.82905 39.142 8.22199C38.581 7.61492 38.1526 6.88922 37.8859 6.09437Z"
            fill="#015132"
          ></path>{" "}
          <path
            d="M13.0833 24.8176H18.8427C18.6429 25.3333 18.3766 25.8154 18.0437 26.2639C17.733 26.7124 17.3557 27.1048 16.9118 27.4411C16.4679 27.7551 15.9464 28.0017 15.3471 28.1811C14.7479 28.3381 14.0599 28.4166 13.2831 28.4166C11.9958 28.4166 10.864 28.1363 9.88742 27.5757C8.91088 27.0151 8.14519 26.2078 7.59034 25.1539C7.03549 24.0776 6.75807 22.8107 6.75807 21.3532C6.75807 19.8732 7.04659 18.6287 7.62363 17.6197C8.22287 16.6106 9.01075 15.8482 9.98729 15.3325C10.986 14.8167 12.0846 14.5589 13.2831 14.5589C14.526 14.5589 15.5358 14.8504 16.3126 15.4334C17.0894 16.0164 17.7108 16.7339 18.1769 17.586L24.0694 14.727C23.3148 13.6283 22.427 12.6529 21.4061 11.8008C20.3852 10.9263 19.1978 10.2423 17.844 9.74903C16.5123 9.23329 14.992 8.97542 13.2831 8.97542C11.3966 8.97542 9.64328 9.26693 8.02312 9.84994C6.40296 10.4105 4.99365 11.2402 3.79517 12.3389C2.5967 13.4153 1.66455 14.7158 0.998729 16.2406C0.33291 17.7654 0 19.4696 0 21.3532C0 23.2367 0.321813 24.9633 0.965438 26.533C1.60906 28.0802 2.50792 29.4144 3.66201 30.5356C4.83829 31.6343 6.21431 32.4864 7.79009 33.0919C9.38805 33.6973 11.1303 34 13.0168 34C15.0586 34 16.8674 33.6412 18.4432 32.9237C20.019 32.1837 21.3284 31.1746 22.3715 29.8965C23.4146 28.6184 24.1803 27.1272 24.6686 25.423C25.1569 23.7188 25.3233 21.9025 25.168 19.9741H13.0833V24.8176Z"
            fill="#05A845"
          ></path>{" "}
          <path
            d="M66.1868 15.1307H76.6069V9.58085H66.1868V15.1307ZM66.1868 24.2794H76.274V19.1332H66.1868V24.2794ZM61.7924 9.58085V33.1255H67.9845V9.58085H61.7924Z"
            fill="#05A845"
          ></path>{" "}
          <path
            d="M82.5001 29.3247H94.8178L94.6514 24.5149H82.6999L82.5001 29.3247ZM88.5924 19.2342L91.6885 26.2975L91.3223 27.9793L93.9855 33.1255H101.31L88.5924 8L75.9085 33.1255H83.2326L85.9291 27.7439L85.5296 26.2975L88.5924 19.2342Z"
            fill="#05A845"
          ></path>{" "}
          <path
            d="M109.893 22.7322L116.019 33.1255H123.542L116.551 22.7322H109.893ZM103.601 9.58085V33.1255H110.06V9.58085H103.601ZM107.729 15.097H112.224C112.912 15.097 113.489 15.1979 113.955 15.3997C114.421 15.6016 114.776 15.9043 115.02 16.3079C115.286 16.6891 115.419 17.16 115.419 17.7206C115.419 18.2812 115.286 18.7633 115.02 19.1669C114.776 19.5705 114.421 19.8732 113.955 20.075C113.489 20.2768 112.912 20.3777 112.224 20.3777H107.729V25.3221H112.756C114.887 25.3221 116.64 24.997 118.016 24.3467C119.414 23.674 120.446 22.7434 121.112 21.555C121.8 20.3441 122.144 18.9763 122.144 17.4515C122.144 15.9043 121.8 14.5477 121.112 13.3816C120.446 12.1932 119.414 11.2626 118.016 10.5899C116.64 9.91721 114.887 9.58085 112.756 9.58085H107.729V15.097Z"
            fill="#05A845"
          ></path>{" "}
          <path
            d="M132.826 22.295L138.818 30.9392L144.844 22.295L146.142 33.1255H153L148.972 8.40362L138.818 21.9586L128.698 8.40362L124.669 33.1255H131.527L132.826 22.295Z"
            fill="#05A845"
          ></path>{" "}
        </svg>
        <button className="products flex justify-between items-center bg-white text-gray-700 font-medium h-11 px-7 border border-solid-gray-100 rounded  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 relative right-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <span>Products</span>
        </button>
        <div className="productToggle hidden w-full h-110 z-10 absolute top-40 left-10">
          <ul className="flex-col justify-evenly relative left-5  w-fit leading-9 font-medium  border-1 border-solid border-black">
            <li className="hover:text-green-500 hover:underline underline-offset-2 decoration-green-500 cursor-pointer">
              Bakery
            </li>
            <li className="hover:text-green-500 hover:underline underline-offset-2 decoration-green-500 cursor-pointer">
              BIO
            </li>
            <li className="hover:text-green-500 hover:underline underline-offset-2 decoration-green-500 cursor-pointer">
              Delicacies and nuts
            </li>
            <li className="hover:text-green-500 hover:underline underline-offset-2 decoration-green-500 cursor-pointer">
              Drink
            </li>
            <li className="hover:text-green-500 hover:underline underline-offset-2 decoration-green-500 cursor-pointer">
              Fruits
            </li>
            <li className="hover:text-green-500 hover:underline underline-offset-2 decoration-green-500 cursor-pointer">
              Vegetables
            </li>
            <li className="hover:text-green-500 hover:underline underline-offset-2 decoration-green-500 cursor-pointer">
              Juices and drinks
            </li>
            <li className="hover:text-green-500 hover:underline underline-offset-2 decoration-green-500 cursor-pointer">
              Prepared cakes and dishes
            </li>
            <li className="hover:text-green-500 hover:underline underline-offset-2 decoration-green-500 cursor-pointer">
              Sweets and Snacks
            </li>
          </ul>
        </div>
        <div className="flex justify-center mb-3 w-2/5">
          <input
            type="search"
            className="text-xs form-control relative flex-auto min-w-0 block w-full px-6 py-3 font-normal rounded-l bg-gray-200 bg-clip-padding border border-solid border-gray-200 transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-200 focus:border-bg-gray-200 focus:outline-none placeholder-zinc-900"
            placeholder="Search for products..."
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <button
            className="btn px-6 py-2.5 bg-gray-200 text-white font-medium text-xs leading-tight uppercase rounded-r focus:bg-gray-200  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-200 active:shadow-lg transition duration-150 ease-in-out flex items-center"
            type="button"
            id="button-addon2"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              className="w-3.5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="#05a845"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <select
            name="countries"
            placeholder="USD"
            className=" focus:outline-none relative top-2 w-16"
          >
            <option value="none" selected disabled hidden>
              {" "}
              USD{" "}
            </option>
            <option value="USD ($)"> USD ($)</option>
            <option value="CAD (€)">CAD (€)</option>
            <option value="GBD (£)">GBD (£)</option>
            <option value="VND (₫)">VND (₫)</option>
          </select>
        </div>
        <button className="relative bottom-2">
          <svg
            className="icon icon-account hover:stroke-green-500"
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 9.375C11.4162 9.375 13.375 7.41625 13.375 5C13.375 2.58375 11.4162 0.625 9 0.625C6.58375 0.625 4.625 2.58375 4.625 5C4.625 7.41625 6.58375 9.375 9 9.375Z"
              stroke="#191919"
              className="hover:stroke-green-500"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M0.875 19.375C0.875 17.2201 1.73102 15.1535 3.25476 13.6298C4.77849 12.106 6.84512 11.25 9 11.25C11.1549 11.25 13.2215 12.106 14.7452 13.6298C16.269 15.1535 17.125 17.2201 17.125 19.375"
              stroke="#191919"
              className="hover:stroke-green-500"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        <button className="relative bottom-2  ">
          <svg
            className="icon icon-wishlist  "
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none "
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 17.2034L2.01003 8.87007C1.30781 8.16841 0.844328 7.26346 0.685327 6.28357C0.526326 5.30369 0.679874 4.29862 1.12419 3.41091V3.41091C1.45924 2.74101 1.94867 2.1603 2.55215 1.71665C3.15563 1.27299 3.85589 0.979072 4.59524 0.859117C5.33459 0.739161 6.09185 0.796599 6.80465 1.0267C7.51744 1.2568 8.16536 1.65297 8.69503 2.18257L10 3.48674L11.305 2.18257C11.8347 1.65297 12.4826 1.2568 13.1954 1.0267C13.9082 0.796599 14.6655 0.739161 15.4048 0.859117C16.1442 0.979072 16.8444 1.27299 17.4479 1.71665C18.0514 2.1603 18.5408 2.74101 18.8759 3.41091C19.3196 4.29828 19.4729 5.30275 19.314 6.28208C19.1552 7.2614 18.6923 8.16593 17.9909 8.86757L10 17.2034Z"
              stroke="#191919"
              className="hover:stroke-green-500"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        <button className="relative bottom-2">
          <svg
            className="icon icon-compare "
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.64016 2.62204C6.78662 2.78476 6.78662 3.04858 6.64016 3.21129L4.28033 5.83334H13.875C14.0821 5.83334 14.25 6.01989 14.25 6.25C14.25 6.48012 14.0821 6.66667 13.875 6.66667H4.28033L6.64016 9.28867C6.78662 9.45142 6.78662 9.71525 6.64016 9.878C6.49372 10.0407 6.25628 10.0407 6.10984 9.878L3.10984 6.54463C2.96339 6.38191 2.96339 6.11809 3.10984 5.95538L6.10984 2.62204C6.25628 2.45932 6.49372 2.45932 6.64016 2.62204ZM11.5152 10.5387C11.3687 10.376 11.1313 10.376 10.9848 10.5387C10.8384 10.7014 10.8384 10.9653 10.9848 11.128L13.3447 13.75H3.75C3.5429 13.75 3.375 13.9366 3.375 14.1667C3.375 14.3968 3.5429 14.5833 3.75 14.5833H13.3447L10.9848 17.2053C10.8384 17.3681 10.8384 17.6319 10.9848 17.7947C11.1313 17.9573 11.3687 17.9573 11.5152 17.7947L14.5152 14.4613C14.5511 14.4213 14.5783 14.3753 14.5966 14.3262C14.6132 14.2815 14.6225 14.2343 14.6246 14.1867C14.6249 14.18 14.625 14.1733 14.625 14.1667L11.5152 10.5387ZM11.5152 10.5387L14.515 13.8718L11.5152 10.5387ZM14.5152 13.872C14.5157 13.8727 14.5163 13.8733 14.5168 13.8738L14.5152 13.872ZM14.5168 13.8738C14.5505 13.9118 14.5778 13.957 14.5966 14.0072C14.5785 13.9588 14.552 13.9133 14.5168 13.8738Z"
              fill="#000000"
              className="hover:fill-green-500"
            ></path>
          </svg>
        </button>
        <button className="relative bottom-2">
          <svg
            className="icon icon-cart"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.39272 1.80787C2.30248 1.73173 2.18822 1.68998 2.07016 1.69H1.25C0.835787 1.69 0.5 1.35422 0.5 0.940002C0.5 0.525789 0.835787 0.190002 1.25 0.190002H2.07C2.54219 0.18994 2.99918 0.356949 3.36007 0.661467C3.72099 0.96602 3.96254 1.38868 4.04188 1.85421L4.39573 3.93414H18.1248C18.3337 3.93409 18.54 3.98163 18.7278 4.07317C18.9157 4.16476 19.0803 4.29799 19.2089 4.46272C19.3376 4.62746 19.427 4.81937 19.4704 5.02385C19.5138 5.22831 19.51 5.43995 19.4593 5.64271L18.2509 10.476C18.0751 11.179 17.6693 11.8032 17.0981 12.2492C16.5269 12.6951 15.8231 12.9374 15.0984 12.9375H5.92746L6.23943 14.7712C6.25919 14.8876 6.31954 14.9933 6.40978 15.0695C6.50001 15.1457 6.61439 15.1875 6.7325 15.1875H15C15.4142 15.1875 15.75 15.5233 15.75 15.9375C15.75 16.3517 15.4142 16.6875 15 16.6875H6.7325C6.26008 16.6875 5.80291 16.5203 5.44197 16.2155C5.08102 15.9107 4.83963 15.488 4.76058 15.0222L4.30137 12.323C4.3003 12.3171 4.29929 12.3112 4.29835 12.3053L2.56312 2.10579C2.54325 1.98949 2.48289 1.88396 2.39272 1.80787ZM5.67227 11.4375L4.65093 5.43414H17.9652L16.7957 10.1122C16.701 10.4907 16.4825 10.8267 16.175 11.0669C15.8675 11.307 15.4884 11.4374 15.0982 11.4375H5.67227Z"
              fill="black"
              className="hover:fill-green-500"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.4375 17.0625C13.7193 17.0625 13.9895 17.1744 14.1888 17.3737C14.3881 17.573 14.5 17.8432 14.5 18.125C14.5 18.3351 14.4377 18.5406 14.3209 18.7153C14.2042 18.89 14.0382 19.0262 13.8441 19.1066C13.65 19.187 13.4363 19.2081 13.2302 19.1671C13.0241 19.1261 12.8348 19.0249 12.6862 18.8763C12.5376 18.7277 12.4364 18.5384 12.3954 18.3323C12.3544 18.1262 12.3755 17.9125 12.4559 17.7184C12.5363 17.5243 12.6725 17.3583 12.8472 17.2416C13.0219 17.1248 13.2274 17.0625 13.4375 17.0625ZM13.1281 18.4344C13.1898 18.496 13.2679 18.5373 13.3521 18.5541C13.3801 18.5596 13.4086 18.5625 13.4375 18.5625C13.4952 18.5625 13.5521 18.5511 13.6049 18.5292C13.6313 18.5183 13.6566 18.5048 13.6806 18.4888C13.7286 18.4567 13.7695 18.4156 13.8013 18.3681C13.8171 18.3443 13.8307 18.319 13.8417 18.2924C13.8638 18.2391 13.875 18.1822 13.875 18.125C13.875 18.0965 13.8722 18.0679 13.8666 18.0396C13.8497 17.9548 13.808 17.8768 13.7469 17.8156C13.6857 17.7545 13.6077 17.7128 13.5229 17.6959C13.4946 17.6903 13.466 17.6875 13.4375 17.6875C13.3803 17.6875 13.3234 17.6987 13.2701 17.7208C13.2435 17.7318 13.2182 17.7454 13.1944 17.7612C13.1469 17.793 13.1058 17.8339 13.0737 17.8819C13.0577 17.9059 13.0442 17.9312 13.0333 17.9576C13.0114 18.0104 13 18.0673 13 18.125C13 18.1539 13.0029 18.1824 13.0084 18.2104C13.0252 18.2946 13.0665 18.3727 13.1281 18.4344Z"
              fill="black"
              className="hover:fill-green-500"
            ></path>
            <path
              d="M7.1875 17.0625C7.46929 17.0625 7.73954 17.1744 7.9388 17.3737C8.13806 17.573 8.25 17.8432 8.25 18.125C8.25 18.3351 8.18769 18.5406 8.07094 18.7153C7.95418 18.89 7.78824 19.0262 7.5941 19.1066C7.39995 19.187 7.18632 19.2081 6.98022 19.1671C6.77412 19.1261 6.58479 19.0249 6.4362 18.8763C6.2876 18.7277 6.18641 18.5384 6.14542 18.3323C6.10442 18.1262 6.12546 17.9125 6.20588 17.7184C6.2863 17.5243 6.42248 17.3583 6.59721 17.2416C6.77194 17.1248 6.97736 17.0625 7.1875 17.0625Z"
              fill="black"
              className="hover:fill-green-500"
            ></path>
          </svg>
        </button>
      </div>
      <div className=" flex justify-between items-center w-full h-8 px-10 pb-5 mb-3">
        <ul className=" flex min-w-70 ">
          <li className="pr-5 font-medium text-base hover:underline underline-offset-4 decoration-green-500 hover:text-green-500 cursor-pointer">Pages</li>
          <li className="px-5 font-medium text-base hover:underline underline-offset-4 decoration-green-500 hover:text-green-500 cursor-pointer">Shop</li>
          <li className="px-5 font-medium text-base hover:underline underline-offset-4 decoration-green-500 hover:text-green-500 cursor-pointer">Special</li>
          <li className="px-5 font-medium text-base hover:underline underline-offset-4 decoration-green-500 hover:text-green-500 cursor-pointer">Local Stores</li>
          <li className="px-5 font-medium text-base hover:underline underline-offset-4 decoration-green-500 hover:text-green-500 cursor-pointer">Free delivery</li>
          <li className="px-5 font-medium text-base hover:underline underline-offset-4 decoration-green-500 hover:text-green-500 cursor-pointer">Collection</li>
          <li className="px-5 font-medium text-base hover:underline underline-offset-4 decoration-green-500 hover:text-green-500 cursor-pointer">Blog</li>
          <li className="pl-5 font-medium text-base hover:underline underline-offset-4 decoration-green-500 hover:text-green-500 cursor-pointer">Contact</li>
        </ul>
        <span className="text-sm">
          Need help?{" "}
          <a className="text-green-500 underline underline-offset-2">
            contact@example.com
          </a>
        </span>
      </div>
    </div>
  );
};

export default Header;
