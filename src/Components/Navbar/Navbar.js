import React, { useState, useCallback } from "react";
import OutsideClickHandler from 'react-outside-click-handler';
import { useDropzone } from "react-dropzone";
import {
  FavoriteBorderRoundedIcon,
  AddBoxOutlinedIcon,
  ExploreOutlinedIcon,
  HomeOutlinedIcon,
  logo,
  profile,
  SearchIcon,
  SendOutlinedIcon,
  AccountCircleOutlinedIcon,
  SettingsIcon,
  CachedOutlinedIcon,
  ImageOutlinedIcon,
  ArrowBackIcon,
  BookmarkBorderOutlinedIcon,
} from "C:\Users\Sasha-Lee\OneDrive - University of Witwatersrand\Desktop\INTERACTIVE MEDIA\assignmenttwo\src\Icons";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [userProfileDrop, setUserProfileDrop] = useState(false);
  const [userSearchDrop, setUserSearchDrop] = useState(false);
  const [userPostDrop, setuserPostDrop] = useState(false);
  const [file, setFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    console.log("miles");
    acceptedFiles.forEach((acceptedFile) => {
      setFile(acceptedFile);
    });
  });
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const username = "zenithnoble";

  return (
    <div className="app__navbar">
      <div className="app__navbar-left">
        <img src={logo} alt="" />
      </div>

      <div className="app__navbar-right">
        <OutsideClickHandler onOutsideClick={() => setUserSearchDrop(false)}>
          <div className="right_input" onClick={() => setUserSearchDrop(true)}>
            <SearchIcon />
            <input type="text" placeholder="Search" />
            {userSearchDrop && (
              <div className="user__search">
                <p>Recent</p>
              </div>
            )}
          </div>
        </OutsideClickHandler>
        <ul className="right__routes">
          <li>
            <NavLink to="/">
              <HomeOutlinedIcon />
            </NavLink>
          </li>
          <li>
            <NavLink to="/direct">
              <SendOutlinedIcon className="rotate" />
            </NavLink>
          </li>
          <li>
            <AddBoxOutlinedIcon
              onClick={() => setuserPostDrop(!userPostDrop)}
            />
          </li>
          <li>
            <NavLink to="/explore">
              <ExploreOutlinedIcon />
            </NavLink>
          </li>
          <li>
            <FavoriteBorderRoundedIcon />
          </li>
          <li>
            <img
              src={profile}
              alt="drop"
              onClick={() => setUserProfileDrop(!userProfileDrop)}
            />

            {userProfileDrop && (
              <ul
                className="user__profile"
                onClick={() => setUserProfileDrop(false)}
              >
                <li>
                  <NavLink to={`/profile/${username}`}>
                    <AccountCircleOutlinedIcon />
                    Profile
                  </NavLink>
                </li>
                <li>
                  <BookmarkBorderOutlinedIcon />
                  Saved
                </li>
                <li>
                  <NavLink to="/settings">
                    <SettingsIcon />
                    Settings
                  </NavLink>
                </li>

                <li>
                  <CachedOutlinedIcon />
                  Switch Account
                </li>
                <li>Log Out</li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      {userPostDrop && (
        <div className="user__post">
          <div
            className="post__icon-close"
            onClick={() => setuserPostDrop(false) || setFile(null)}
          >
            +
          </div>
          <div
            className={
              file ? "user__postContainer fileavailable" : "user__postContainer"
            }
          >
            <div className="file__top">
              {file && <ArrowBackIcon onClick={() => setFile(null)} />}
              <p>Create new Post</p>
              {file && <button>Share</button>}
            </div>
            <div className={file ? "file__outlet available" : "file__outlet"}>
              {file ? (
                <div className="file__container">
                  <img src={URL.createObjectURL(file)} alt="" />
                  <div className="file__text">
                    <textarea />
                  </div>
                </div>
              ) : (
                <div className="no__file-container">
                  <div {...getRootProps()} className="drop__conatainer">
                    <input {...getInputProps()} />
                    <ImageOutlinedIcon
                      style={{ color: isDragActive ? "blue" : "black" }}
                    />
                    <p> Drag and Drop</p>
                    <label htmlFor="file">
                      <input
                        type="file"
                        id="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        style={{ display: "none" }}
                      />
                      <span>Select from computer</span>
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
