interface CardProps {
    imgAuthor: string;
    authorName: string;
    img: string;
    title: string;
    description: string;
    likes: number;
}

export const Card = ({imgAuthor, authorName, img, title, description, likes }: CardProps) => {
  return (
    <section className="py-7 w-100">
        <img className="h-80 w-full rounded-t-lg" src={img}/>

        <section className= "rounded-lg shadow-lg py-4 px-4 cursor-pointer hover:shadow-2xl">
            {/* card header */}
            <section>
                <section className="flex justify-between items-center py-4">
                    <section className="flex items-center gap-2">
                        <img className="h-8 w-8 rounded-full" src={imgAuthor} alt={authorName} />
                        <span className="text-sm text-neutral-600">{authorName}</span>
                    </section>
                    <svg height="20px" viewBox="0 -960 960 960" width="20px"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>
                    <span className="sr-only">More options</span> 
                </section>
            </section>            
            
            {/* <!-- CARD BODY --> */}
            <section className="pb-4">
                <h2 className="text-xl text-neutral-600 font-semibold">{title}</h2>
                <p className="text-sm line-clamp-3 pt-4">
                    {description}
                </p>
            </section>            
            
            <hr className="pt-4 text-neutral-200"></hr>
            
            {/* <!-- CARD FOOTER --> */}
            <section className="flex justify-between items-center">
                <span className="text-sm italic text-neutral-600">{likes} likes</span>
                <svg
                    className="fill-rose-500 opacity-70 cursor-pointer hover:opacity-100" 
                    xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
                <span className="sr-only">Like</span> 
            </section>            
            
        </section>                
    </section>
  )
}