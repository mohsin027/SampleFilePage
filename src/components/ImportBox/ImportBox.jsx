import React, { useEffect, useState } from "react";
import "./ImportBox.css";
import { IoFolderOpen } from "react-icons/io5";
import { MdOutlineCopyAll } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

export const ImportBox = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFileUpload, setIsFileUpload] = useState(false);
  const [file, setFile] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
//   const handleActiveDivClick = (e) => {
//     document.getElementById("fileInput").click();
//     console.log(e.target)
//     console.log('handle file');
    
    
//     setTimeout(()=>{
//         // handleSubmit()
//     },3000)
// };

const handleFileChange = (e) =>{
    const selectedFile = e.target.files[0];
    setIsModalOpen(false);
    setFile(selectedFile)
    setIsFileUpload(true);
    console.log('submit', selectedFile);

  }

  const modal = () => {
    return (
      <div className="modal-container">
        <div className="modal-content">
          <hr />
          <div className="buttons">
            <button>
              <span>
                <IoFolderOpen />
              </span>
              My Computer
            </button>
            <button>
              <span>
                <MdOutlineCopyAll />
              </span>
              Copy & Paste
            </button>
          </div>
          <div
            className={`dotted-box ${isHovered ? "inactive" : "active"}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span>
              <MdOutlineCopyAll />
            </span>

            <span className="dragText">
              Drag and drop anywhere on this page, or click here to upload files
            </span>
          </div>

          <input
            type="file"
            accept=".csv"
            id="fileInput"
            name="file"
            style={{ display: "none" }}
            onChange={handleFileChange} 
            />
          <label
            htmlFor="fileInput"
            onClick={handleFileChange}
            className={`dotted-box ${isHovered ? "active" : "inactive"}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
            <span>
              <FaCirclePlus />
            </span>
          </label>
          {/* <button formAction="submit"></button> */}
          <button className="close-button" onClick={closeModal}>
            <IoMdClose />
          </button>
        </div>
      </div>
    );
  };

  //   useEffect(() => {},[handleActiveDivClick])

  return (
    <>
      {!isFileUpload && (
        <div className="import-box">
          <div className="circle">
            <img src="src\assets\mail.svg" alt="mail" />
          </div>
          <div>
            <h2>Import a list to verify</h2>
          </div>
          <div>
            <p>
              Upload a list or connect an integration to start verifying your
              emails.
            </p>
          </div>

          <button className="modal-button" onClick={openModal}>
            GET STARTED
          </button>
        </div>
      )}
      {isModalOpen && modal()}
      {isFileUpload && (
        <div className="file-page container m-3">
          <div className="d-flex gap-3">
            <button className="modal-button new-list" onClick={openModal}>
              <span>
              <FaPlus />

              </span>
              <span>

              NEW LIST
              </span>
            </button>
        
            <input id="search" className="search" type="text" placeholder="type something to search"/>
          </div>
          <div className="d-flex mt-4">
            <div className="email-box">
                <h4>{file.name}</h4>
                <span>
              <span>
                <IoFolderOpen />
              </span>
              My Computer
            </span>
                <div className="outer-circle">
                    <div className="inner-circle">
<h3>4</h3>
<p>Emails Ready</p>
                    </div>
                </div>
                <button>VERIFY</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
