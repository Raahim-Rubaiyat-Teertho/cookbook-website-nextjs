import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { ModeToggle } from "@/components/ui/ModeToggle";

import Link from "next/link";

export default async function Description({ params }) {
    const s = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`);
    const s_json = await s.json();
    const info = s_json.meals[0];
    return (
        <div>
            <div className="flex justify-between">
                <div></div>
                <h1 className="text-center text-4xl font-semibold p-5">{info.strMeal}</h1>
                <ModeToggle/>
            </div>
            <div className="text-center">
                <CardDescription>Origin: {info.strArea}</CardDescription>
            </div>
            
            <div className="flex justify-center m-5">
                <img className="w-80 h-80" src={info.strMealThumb} alt="Not Found" />
            </div>

            <div className="properties">
            <Card className='mx-5 md:mx-10 my-5'>
            <CardHeader>
                <CardTitle>Instructions</CardTitle>
                <CardDescription>Tags: {info.strTags}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{info.strInstructions}</p>
            </CardContent>
            <CardFooter>
                <Link href={info.strYoutube} className="hover:border-b-2 hover:border-black"><b>See a video</b></Link>
            </CardFooter>
            </Card>

            </div>

            <div className="flex justify-center m-6">
                <Link href='./'>{`<`}- Back</Link>
            </div>
        </div>
        
    )
}