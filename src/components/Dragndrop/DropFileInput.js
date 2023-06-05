import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import './drop-file-input.css';
import "./assets/Dragndrop.css";

import { ImageConfig } from './config/ImageConfig';
import uploadImg from './assets/cloud-upload-regular-240.png';
import {UploadOutlined} from "@ant-design/icons";
import {Button, Form, Input, Checkbox, } from "antd";
//import { v4 as uuidv4 } from 'uuid';
//import { direction } from '@iso/lib/helpers/rtl';
//import {toFloat} from "@glidejs/glide/src/utils/unit";









const DropFileInput = props => {

    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
    }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }

    const fileCLear = () => {
        if (fileList && fileList.length > 0)  {
            console.log("clearing");
            const updatedList = [];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }

    }

    const [image, setImage] = useState(null);
    const [size, setSize] = React.useState('large');
    const [pleaseLogIn, setPleaseLogIn] = useState(false);
    const [checked, setChecked] = useState(false);

    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 0,
                offset: 0,
            },
            sm: {
                span: 0,
                offset: 0,
            },
        },
    };



    const handleSubmit = () => {
        function onSuccess(position) {
            geolocation = [parseFloat(position.coords.latitude), parseFloat(position.coords.longitude)]
            const nullIsland = [null, null];
            if (geolocation.isEqual(nullIsland)) {
                geolocation = "Null Island";
                console.log("Null Island Error");
            }
        }

        function onError() {
            geolocation = "Access Denied";
            console.log("Failed to get your Geolocation");
        }

        let imageName = [];
        let imageUrl = []
        let geolocation = "";


        console.log("done!"); //TEST ONLY
    };

    return (
        <div className="WidgetWrapper">
            <div className="DragndropWrapper">

                <div className="box">
                    <center>
                        <h2 className="header">
                            Upload Assets
                        </h2>
                    </center>
                    <div
                        ref={wrapperRef}
                        className="drop-file-input"
                        onDragEnter={onDragEnter}
                        onDragLeave={onDragLeave}
                        onDrop={onDrop}
                    >
                        <div className="drop-file-input__label">
                            <img src={uploadImg} alt="" />
                            <p>Drag & Drop your files here</p>
                        </div>
                        <input type="file" value="" onChange={onFileDrop} />
                    </div>
                    {
                        fileList.length > 0 ? (
                            <div className="drop-file-preview">
                                <p className="drop-file-preview__title">
                                    Ready to upload
                                </p>
                                {
                                    fileList.map((item, index) => (
                                        <div key={index} className="drop-file-preview__item">
                                            <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
                                            <div className="drop-file-preview__item__info">
                                                <p>{item.name}</p>
                                                <p>{item.size}B</p>
                                            </div>
                                            <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>x</span>
                                        </div>
                                    ))
                                }
                            </div>
                        ) : null
                    }
                </div>
            </div>
                <Form.Item
                  {...tailFormItemLayout}
                  style={{marginBottom: 0}}
                >
                    <div className="checkbox-wrapper">
                        <input type="checkbox" checked={checked} onChange={(e) => { setChecked(e.target.checked);}} />
                        <p>Include Geolocation of Asset</p>
                    </div>

                </Form.Item>
            <div className="ButtonWrapper">
                <button
                    type="primary"
                    style={{
                        backgroundColor: !fileList.length ? "#b3c6e6" : "",
                        cursor: !fileList.length ? "not-allowed" : "pointer",
                    }}
                    onClick={() => {
                        setPleaseLogIn(false);
                        handleSubmit();
                        fileCLear();
                        setChecked(false);
                        console.log("log in check passed");
                    }}

                >
                    <UploadOutlined /> Upload
                </button>
                <p style={{
                    color: "red",
                    display: pleaseLogIn ? "" : "none"
                }}>Please Login to Upload Images</p>
            </div>
        </div>

    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func
}

export default DropFileInput;