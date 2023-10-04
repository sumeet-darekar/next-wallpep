"use client"
import React, {useState,useEffect} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import axios from "axios";

export default function page() {

  const [Images, setImages] = useState<any[]>([]);

  const getImages = async () => {
    try{
  const response = await axios.get("https://api.unsplash.com/search/photos?per_page=100&query=sex&client_id=HP1nqhpQupb7hstBROd_AhPuQoNJsqRAOhAxS_NOySw");
  const data = response.data.results;
  setImages(data)
  console.log(Images);

} catch(error: any){
        console.log("Error occured",error);
}
  }
getImages()
  return (
    <>
      <p className='font text-center my-10 font-semibold text-5xl'>Hensai</p>
      <div>
         <p className='font text-center mx-10 py-3'>[ AquaVista]</p>
    </div>
  <div className=" w-2/5 mx-auto ">
    <Carousel>
      {Images.map((elem, i)=>(
         <img 
         className=" text-center rounded-md" 
         key={i}
         src={elem.urls.regular}
         />
      ))}
    </Carousel>
    </div>
    </>
  
  );
};
