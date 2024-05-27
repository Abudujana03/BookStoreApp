import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards';
//react slick for slider card
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios'
import { useState, useEffect } from 'react'

function Freebook() {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        const getBooks = async()=>{
            try{
                const res = await axios.get("http://localhost:3000/books")
              //  console.log(res.data);
                setBooks(res.data.filter((data) => data.price === 0));
            }catch(error){
                console.log(error)
                console.log("error in fetching data from backend")
            }
        }
        getBooks(); 
    },[])
  ////  const filterData = res.filter((data) => data.category === "Free")
    // console.log(filterData)
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div  className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div>
                    <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
                        corporis nulla non suscipit, iure neque earum?
                    </p>
                </div>
                <div>
                    <Slider {...settings}>
                        {books.map((item)=>(
                            <Cards item = {item} key ={item.id} />
                        ))}
                    </Slider>
                </div>
            </div >

        </>
    )
}

export default Freebook