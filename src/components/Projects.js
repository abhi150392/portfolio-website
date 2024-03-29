import React from "react";
import FoodOrder from "../assets/FoodOrder.jpeg";
import ShoppingList from "../assets/ShoppingList.jpg";
import TaskTracker from "../assets/TaskTracker.jpg";
import Movie from "../assets/Movie.jpg";
import Form from "../assets/Form.jpg";
import Quiz from "../assets/quiz.jpg";
import Infinite from "../assets/infinite_scroll.png";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 test-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">// Check some of my recent projects</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid-item */}
          <div
            style={{ backgroundImage: `url(${Movie})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Shopping Cart(React Context API)
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/abhi150392/Shopping-cart-contextapi-useReducer-"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold  text-lg">
                    Code
                  </button>
                </a>
                <a
                  href="https://myshoppingcart123.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold  text-lg">
                    Link
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${FoodOrder})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Food Order Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/abhi150392/Food-order-app"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold  text-lg">
                    Code
                  </button>
                </a>
                {/* <a href="">
                  <button></button>
                </a> */}
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${ShoppingList})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Shopping-List Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/abhi150392/shopping-list"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold  text-lg">
                    Code
                  </button>
                </a>
                {/* <a href="">
                  <button></button>
                </a> */}
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${TaskTracker})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Shopping Cart (Redux tool kit)
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/abhi150392/Redux-Toolkit"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold  text-lg">
                    Code
                  </button>
                </a>
                <a
                  href="https://reduxshoppingcart123.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold  text-lg">
                    Link
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Form})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Netflix GPT
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/abhi150392/NetflixGPT"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold  text-lg">
                    Code
                  </button>
                </a>
                {/* <a href="">
                  <button></button>
                </a> */}
              </div>
            </div>
          </div>

          {/* <div
            style={{ backgroundImage: `url(${Quiz})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
          {/* <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Quiz Functionality
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/abhi150392/Quiz-functionality"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold  text-lg">
                    Code
                  </button>
                </a>
                {/* <a href="">
                  <button></button>
                </a> */}
          {/* </div>
            </div>
          </div> */}

          <div
            style={{ backgroundImage: `url(${Infinite})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Infinite Scroll in React
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/abhi150392/Infinite-Scroll"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold  text-lg">
                    Code
                  </button>
                </a>
                {/* <a href="">
                  <button></button>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
