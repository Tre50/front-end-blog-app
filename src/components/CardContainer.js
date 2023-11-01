
import { useEffect, useState } from "react"

export default function CardContainer() {
    const [blogPost, setBlogPost] = useState([])

    //as soon as component loads- fetch data
    useEffect(() => {
        fetch('http:// localhost:8080')
            .then((res) => res.json())
            .then((data) => setBlogPost(data))
            .catch((err) => console.error(err))
    }, [])

    //put data in state variable
    // map data array from state variable
    // return JSX from the map - 
    let formData = {}


    const handleFormSubmit = (evt) => {
        evt.preventDefault()
        const formData = {}

        const handleInputFields = event => {
            formData.title = event.target.title.value
            console.log(event.target.name)

            formData.content = event.target.title.value


            fetch('http;//localhost:8000', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify / (formData),
            })
                .then(res => res.json())
                .then(cleanData => console.log(cleanData))
                .catch(err => console.log(err))

        }
        return (
            <>

                <form action="" onSubmit={handleFormSubmit(evt)}>
                    <label htmlFor="">
                        <input type="text" name='title' id='' onChange={(typing) => handleInputFields(typing)} />
                    </label>
                    <label htmlFor="">
                        <input type="text" name='title' id='' onChange={() => { }} />
                    </label>
                    <label htmlFor="">
                        <input type="submit" name='title' id='' />
                    </label>


                </form>


                <h2>This is Card Container</h2>
                <div className="cardContainer">
                    {blogPost.map((singlePost, index) => {
                        console.log('singlePost ->', singlePost)
                        return (
                            <div className='singleCard'>
                                <img src={`https://source.unsplash.com/random/${index}`} alt="" />
                                <h2>{singlePost.title}</h2>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
}