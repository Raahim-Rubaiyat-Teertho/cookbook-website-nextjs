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

  import { Button } from "@/components/ui/button"
  import { buttonVariants } from "@/components/ui/button"

import Link from 'next/link';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
  

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="recipes grid grid-cols-1 gap-4 md:recipes md:grid md:grid-cols-4 md:gap-4 md:m-7">
          {categories.map((category) => (
            <div>
                <Card>
                    <CardHeader>
                    <img src={category.strCategoryThumb} className='m-3'/>
                    <CardTitle className='text-center'>{category.strCategory}</CardTitle>
                    </CardHeader>
                    {/* <CardContent>
                    <p>{category.strCategoryDescription.slice(0, 100)}...</p>
                    </CardContent> */}
                    <CardFooter className='flex justify-center'>
                    <Drawer>
                      <DrawerTrigger>
                        <Button variant="outline">See more</Button>
                      </DrawerTrigger>
                      
                      <DrawerContent className='mx-auto'>
                        <div className='mx-8 my-5'>
                        <DrawerHeader>
                          <DrawerTitle>{category.strCategory}</DrawerTitle>
                          <DrawerDescription>{category.strCategoryDescription}</DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter className='mb-8'>
                          <Button asChild>
                          <Link href={`/${category.strCategory}`}>See Recipes</Link>
                          </Button>
                          <DrawerClose asChild>
                            <Button variant="outline">Back</Button>
                          </DrawerClose>
                        </DrawerFooter>
                        </div>
                      </DrawerContent>
                    </Drawer>

                    </CardFooter>
                </Card>
            </div>
          
          ))}
      </div>
    </>
  );
}
