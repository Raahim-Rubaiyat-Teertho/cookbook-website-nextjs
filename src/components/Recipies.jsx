'use client'
import React, { useState, useEffect } from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
  
import Link from 'next/link';
export default function Recipies(name) {
  const [rec, setRec] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Assuming params is a string
        const capitalizedParams = name.name.category.charAt(0).toUpperCase() + name.name.category.slice(1);

        const lnk = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + capitalizedParams;

        const response = await fetch(lnk);
        const data = await response.json();
        setRec(data.meals);
        console.log(rec)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="recipes grid grid-cols-1 gap-4 m-4 mb-15 md:grid-cols-4 md:gap-4 md:m-7 md:mb-15 ">
          {rec.map((i) => (
            <div>
              <Link href={`${name.name.category}/${i.idMeal}`}>
                <Card className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    <CardHeader>
                    <img src={i.strMealThumb} alt='Not found' className='m-3'/>
                    </CardHeader>
                    <CardContent className='text-center'>

                      <p>{
                            i.strMeal.length > 25 ? (<p>{i.strMeal.slice(0, 28)}...</p>) : <p>{i.strMeal}</p>
                        }</p>

                    </CardContent>
                </Card>
              </Link>
            </div>
          
          ))}
      </div>
    </>
  );
}
