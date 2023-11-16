import { useEffect, useState } from "react"

export default function CardContainer() {
    const [blogPost, setBlogPost] = useState([])

    //as soon as component loads- fetch data
    useEffect(() => {
        fetch('http:// localhost:8080')
            .then(res => res.json())
            .then(data => setBlogPost(data))
            .catch(err => console.error(err))
    }, [])

    //put data in state variable
    // map data array from state variable
    // return JSX from the map - 
    //let formData = {}//


    //const handleFormSubmit = (evt) => {
      //  evt.preventDefault()
        //const formData = {}

        const handleFormSubmit = evt => {
            evt.preventData()
            const formData ={}
            formData.title = evt.target.title.value
            formData.content = evt.target.title.value


            fetch('http;//localhost:8000', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify (formData),
            })
                .then(res => res.json())
                .then(cleanData => setBlogPost(cleanData))
                .catch(err => console.log(err))

        }
        return (
            <>

                <form action="" onSubmit={handleFormSubmit}>
                    <label htmlFor="">
                        <input type="text" name='title' id=''/>
                    </label>
                    <label htmlFor="">
                        <input type="text" name='content' id='' />
                    </label>
                    
                    
                    <button type='submit'>Add BlogPost</button>


                </form>


               
                <div className="cardContainer">
                    {blogPost.map((singlePost, index) => {
                        return (
                            <div className='singleCard' key={singlePost._id}>
                                <img src={`https://source.unsplash.com/random/${index}`} alt='' srcSet=''/>
                                <h2>title: {singlePost.title}</h2>
                                <p>{singlePost.content}</p>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
