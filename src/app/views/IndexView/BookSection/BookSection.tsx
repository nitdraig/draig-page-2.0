import React from "react";

const BookSection = () => {
  return (
    <div className="bg-no-repeat bg-cover bg-center relative">
      <div className="absolute bg-gradient-to-r from-gray-900 to-gray-900 opacity-75 inset-0 z-0"></div>
      <div>
        <div className="min-h-screen flex justify-center">
          <div className="grid grid-cols-2 gap-4 items-center z-10">
            <div className="max-w-lg text-center sm:text-left">
              <h2 className="text-4xl font-bold text-gray-100 tracking-tight">
                A smile <br className="hidden sm:block lg:hidden" /> is an
                inexpensive way to change your looks
              </h2>

              <p className="mt-4 text-gray-300">
                Goals are just dreams with deadline
              </p>
              <div className="flex flex-row  items-center space-x-3 mt-5">
                <a
                  href="https://www.behance.net/ajeeshmon"
                  target="_blank"
                  className="w-10 h-10 items-center justify-center inline-flex rounded-2xl font-bold text-lg   bg-blue-600 hover:drop-shadow-lg cursor-pointer transition ease-in duration-300"
                >
                  <svg
                    className="w-4 fill-gray-100"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.072 9.301s1.892-.147 1.892-2.459c0-2.315-1.548-3.441-3.51-3.441H0v12.926h6.454s3.941.129 3.941-3.816c-.001-.001.171-3.21-2.323-3.21zM2.844 5.697h3.61s.878 0 .878 1.344c0 1.346-.516 1.541-1.102 1.541H2.844V5.697zm3.427 8.332H2.844v-3.455h3.61s1.308-.018 1.308 1.775c0 1.512-.977 1.669-1.491 1.68zm9.378-7.341c-4.771 0-4.767 4.967-4.767 4.967s-.326 4.941 4.767 4.941c0 0 4.243.254 4.243-3.437H17.71s.072 1.391-1.988 1.391c0 0-2.184.152-2.184-2.25h6.423c.001-.001.709-5.612-4.312-5.612zm1.941 3.886h-4.074s.266-1.992 2.182-1.992 1.892 1.992 1.892 1.992zm.507-6.414H12.98v1.594h5.117V4.16z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mx-0 max-w-xl flex rounded-2xl bg-indigo-700">
              <div className=" flex-col flex  self-center">
                <div className="">
                  <div className="">
                    <blockquote className="text-left ">
                      <div className="relative">
                        <div className="relative">
                          <img
                            src="/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                            alt="aji"
                            className="object-cover w-full h-60 mx-auto rounded-t-2xl"
                          />
                          <div className="rounded-t-2xl absolute bg-gradient-to-t from-gray-800 opacity-75 inset-0 z-0"></div>
                        </div>
                      </div>

                      <div className="relative m-5 p-5">
                        <svg
                          className="absolute left-0 w-6  fill-indigo-500"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
                        </svg>
                        <p className="text-gray-100 text-xl px-5">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Magni assumenda officiis sit amet itaque eveniet
                          accusantium corporis tempora.
                        </p>
                        <svg
                          className="absolute right-0  w-6 fill-indigo-500"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
                        </svg>
                        <div className="text-sm mt-5 mx-5">
                          <p className="font-medium text-white">Ajimon</p>
                          <p className="mt-1 text-gray-300">
                            CEO Of Marketing{" "}
                          </p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                </div>

                <div className="mt-12 swiper-pagination hidden"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSection;
