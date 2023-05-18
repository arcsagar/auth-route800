import React from "react";

const Card: React.FC<{
  title: string;
  description: string;
  imageSrc?: string;
  author: string
  keyValue?:any
}> = ({ title, description, imageSrc, author, keyValue }) => {

  return (
    <div key={keyValue} className="w-300 h-400 rounded overflow-hidden shadow-lg m-4"> {/* Add margin here */}

    {imageSrc &&     <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />}
    
    <div className="px-10 py-4">
     <p>author: <strong>{author}</strong> </p>
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description && description.length > 150 ? `${description.slice(0,150)} ...readMore` : description}</p>
     {/* {description.length > 150 &&  <toolTip description={description}></toolTip>} */}
    </div>
  </div>
  );
};

export default Card;
