import { useEffect, useState } from "react";
import Image_Card from "./component/Image_Card";
import Search from "./component/Search";

export default function App() {
  const [isLoading,setisLoading] = useState(true)
  const [images,setImages] = useState([])
  const [term,setTerm] = useState('')
console.log(term)
  useEffect (()=>{
    fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_API_PIXALBAY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      setImages(data.hits);
      setisLoading(false)
    })
    .catch(err => console.log(err));
  },[term])
  return (
    <>
    <div className="container mx-auto">
    <Search searchText = {(text) => setTerm(text)}/>
      {!isLoading && images.length === 0 && <h1 className="text-6xl text-center mx-auto">No Image Found</h1>}
    {isLoading ? <h1 className="text-6xl text-center  mx-auto"> Loading ...</h1>
    : <div className="grid grid-cols-3 gap-4 mt-10">
      {
        images.map(image => (
          <Image_Card key={image.id} image={image} />
        ))
      }
    </div>  
  }
    </div>
    
    
    </>
  )
}