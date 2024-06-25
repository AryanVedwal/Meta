import React from "react";
import "./loop.css";
import Image from "next/image";
import User from "@/public/assets/test/user.png"


const testimonials = // data/testimonials.json
[
  {
    "id": "1",
    "tag": "Polypixerpioneer",
    "name": "Alice",
    "feedback": "“As a designer who has always worked in 2D spaces, Spline is the first 3D design software I was able to feel comfortable with and pick up with ease.”",
    "image": User
  },
  {
    "id": "2",
    "tag": "Polypixerpioneer",
    "name": "Bob",
    "feedback": "“As a designer who has always worked in 2D spaces, Spline is the first 3D design software I was able to feel comfortable with and pick up with ease.”",
    "image": User
  },
  {
    "id": "3",
    "tag": "Polypixerpioneer",
    "name": "Charlie",
    "feedback": "“As a designer who has always worked in 2D spaces, Spline is the first 3D design software I was able to feel comfortable with and pick up with ease.”",
    "image": User
  },
  {
    "id": "4",
    "tag": "Polypixerpioneer",
    "name": "David",
    "feedback": "“As a designer who has always worked in 2D spaces, Spline is the first 3D design software I was able to feel comfortable with and pick up with ease.”",
    "image": User
  },
  {
    "id": "5",
    "tag": "Polypixerpioneer",
    "name": "Ella",
    "feedback": "“As a designer who has always worked in 2D spaces, Spline is the first 3D design software I was able to feel comfortable with and pick up with ease.”",
    "image": "/images/test/user.png"
  },
  {
    "id": "6",
    "tag": "Polypixerpioneer",
    "name": "Fiona",
    "feedback": "“As a designer who has always worked in 2D spaces, Spline is the first 3D design software I was able to feel comfortable with and pick up with ease.”",
    "image": "/images/test/user.png"
  },
  {
    "id": "7",
    "name": "George",
    "feedback": "“As a designer who has always worked in 2D spaces, Spline is the first 3D design software I was able to feel comfortable with and pick up with ease.”",
    "image": "/images/test/user.png"
  },
  {
    "id": "8",
    "tag": "Polypixerpioneer",
    "name": "Hannah",
    "feedback": "“As a designer who has always worked in 2D spaces, Spline is the first 3D design software I was able to feel comfortable with and pick up with ease.”",
    "image": "/images/test/user.png"
  },
  {
    "id": "9",
    "tag": "Polypixerpioneer",
    "name": "Ian",
    "feedback": "“As a designer who has always worked in 2D spaces, Spline is the first 3D design software I was able to feel comfortable with and pick up with ease.”",
    "image": "/images/test/user.png"
  },
  {
    "id": "10",
    "tag": "Polypixerpioneer",
    "name": "Julia",
    "feedback": "“As a designer who has always worked in 2D spaces, Spline is the first 3D design software I was able to feel comfortable with and pick up with ease.”",
    "image": "/images/test/user.png"
  }
]


export default function Feedback() {
  return (
    <div className="p-4 mt-20">
    <div className="font-bold text-4xl text-center mb-16 la">
      Loved by <span className="text-lb">Artists</span> around the World
    </div>

    <div className="overflow-hidden flex items-center gap-[20px] feedback-main">
      <div className="feedback-loop md:gap-4 ">
        {testimonials.concat(testimonials).map((testimonial, index) => (
          <div
            key={index}
            className="p-4 my-4 flex flex-col bg-[#2B333D] min-h-[200px] md:min-h-[220px] h-fit max-w-[480px] min-w-[280px] md:w-[480px] rounded-xl"
          >
            <div className="flex items-center gap-4 p-2 min-h-fit">
              <div className="relative bg-white h-[50px] w-[50px] rounded-full overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <h1 className="text">{testimonial.name}</h1>
                <p className="sm-text">@{testimonial.tag}</p>
              </div>
            </div>
            <div className="h-full text-lg leading-6 flex items-center justify-center p-4">
              {testimonial.feedback}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}
