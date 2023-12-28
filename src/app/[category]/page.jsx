import Recipies from "@/components/Recipies";
import { ModeToggle } from "@/components/ui/ModeToggle";
import Link from "next/link";
export default async function Category({ params }) {
    return(
        <>
            <div className="flex justify-between ">
                <div></div>
                <h1 className='text-center text-4xl font-semibold p-5'>{params.category} Recipes</h1>
                <ModeToggle/>
            </div>
            <Recipies name={params}/>

            <div className="flex justify-center m-6">
                <Link href='./'>{`<`}- Back</Link>
            </div>
        </>
    )
}