import "./write.css"
import React, {useState} from "react";
import {Container} from "reactstrap";
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';



export default function Write() {
    const [show, setShow] = useState('');

    return (
        <div className="write">
            <img  className="writeImg" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c2426a51-c170-4422-a244-7a974c04bd6a/dbfjgzp-2ca2cb21-468e-4616-87af-138145cf8299.jpg/v1/fill/w_1024,h_732,q_75,strp/chibi_uchiha_clan_by_narutodrawingchannel_dbfjgzp-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzMyIiwicGF0aCI6IlwvZlwvYzI0MjZhNTEtYzE3MC00NDIyLWEyNDQtN2E5NzRjMDRiZDZhXC9kYmZqZ3pwLTJjYTJjYjIxLTQ2OGUtNDYxNi04N2FmLTEzODE0NWNmODI5OS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BRbIscsdlQqE8A3oc9DsEhPc-iQbz-__xiag1AcG0Xg" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className=" writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                {/* <div className="writeFormGroup">
                    <textarea 
                    placeholder="Write any thing you want ..." 
                    type="text" 
                    className="writeInput writeText"
                    ></textarea>
                </div> */}
                <Container className="writeFormGroup">
                <ReactQuill className="writeInputText"
                            theme="snow"
                            placeholder="Here we go..."
                            value={show}

                            modules={{
                                toolbar: [
                                    [{ font: [] }],
                                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                                    ["bold", "italic", "underline", "strike"],
                                    [{ color: [] }, { background: [] }],
                                    [{ script:  "sub" }, { script:  "super" }],
                                    ["blockquote", "code-block"],
                                    [{ list:  "ordered" }, { list:  "bullet" }],
                                    [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
                                    ["link", "image", "video"],
                                    ["clean"],
                                ],
                            }}
                            formats={[
                                'header', 'font', 'size',
                                'bold', 'italic', 'underline', 'strike', 'blockquote', 'color', 'background',
                                'list', 'bullet', 'indent', 'link', 'video', 'image', "code-block", "align"
                            ]}
                            onChange={(val) => {
                                setShow(val)
                            }}
                />
                </Container>
                <button className="writeSubmit ">Publish</button>
            </form>
        </div>
    )
}
