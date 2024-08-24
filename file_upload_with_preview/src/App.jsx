import React, { useState } from "react";

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setPreview(null);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-4">
      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16V8m4 8V8m4 8V8m2 2H5m14 0h.01"
            ></path>
          </svg>
          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500">
            SVG, PNG, JPG, or GIF (max. 800x400px)
          </p>
        </div>
        <input type="file" className="hidden" onChange={handleFileChange} />
      </label>

      {preview && (
        <div className="mt-4">
          <img
            src={preview}
            alt="File preview"
            className="max-w-xs rounded-lg"
          />
          <button
            onClick={handleRemoveFile}
            className="mt-2 text-white bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded"
          >
            Remove File
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
