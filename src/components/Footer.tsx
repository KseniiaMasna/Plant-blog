export const Footer = () => {   
    return (
        <footer className="bg-green-800 w-screen h-80 p-2 text-white text-center ">
            <section>
                <h3 className="font-mono uppercase font-bold">Subscribe</h3>
                <p className="py-4">Want to get notified when a new blog post is up? Sign up for the newsletter and never miss out!</p>
                <form className="py-4 flex justify-center w-full sm:w-96 sm:mx-auto">
                    <input type="email" placeholder="email@example.com"
                        className="bg-white text-black placeholder:text-neutral-400 text-sm p-2 rounded-l-lg flex-grow focus:placeholder:text-neutral-500"/>
                    <input type="submit" value="Sign Up"
                        className="bg-green-950 text-white text-sm p-2 rounded-r-lg opacity-70 hover:opacity-100 cursor-pointer"/>
                </form>
                <span className="font-mono text-sm">&copy; Fluffy McDuck</span>
            </section>
        </footer> 
    )
}