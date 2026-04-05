import React, { useRef } from "react";
import { BsCloudUploadFill } from "react-icons/bs";

const UploadFile = () => {
  const FileRef = useRef();
  const [file, setFile] = React.useState();

  const handleClick = () => {
    FileRef.current.click();
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <input
        type="file"
        name=""
        id=""
        ref={FileRef}
        onChange={(e) => setFile(e.target.files[0])}
        className="border border-dashed rounded-2xl hidden h-60 w-150 mt-10"
      />
      <section
        onClick={handleClick}
        className="text-center cursor-pointer flex flex-col border border-dashed rounded-2xl h-60 w-150 mt-10 "
      >
        <BsCloudUploadFill className="text-5xl mx-auto my-4 text-blue-600" />
        <p>Upload File</p>
        
        <p className="text-gray-400">Drop & Drag files here</p>
      </section>
    </div>
  );
};

export default UploadFile;
