import React from 'react';

function Image_Card({image}) {
    const tags = image.tags.split(',');
    return (
        <>
           <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="image not found"
      className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-purple-500 mb-2">Photo By {image.user}</div>
        <ul>
          <li className="text-gray-700 hover:text-gray-900">Image description</li>
          <li>
            <strong>Views : </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads : </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes : </strong>
            {image.likes}
          </li>
        </ul>
      <div className="px-6 py-4">
       
     {tags.map((tag,index)=>(
         <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 my-1 text-sm font-semibold text-gray-700 mr-2">
         #{tag}
       </span>
     ))}
      </div>
      </div>
    </div>
        </>
    );
}

export default Image_Card;