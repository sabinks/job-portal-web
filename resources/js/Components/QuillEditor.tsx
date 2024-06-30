import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import InputLabel from "./InputLabel";
// import ImageResize from "quill-image-resize-module-react";
// Quill.register("modules/imageResize", ImageResize);

function QuillEditor({ charLimit = 500, onChange, value, name, label }: any) {
    const [currentChart, setCurrentChar] = useState(0);
    const [content, setContent] = useState<any>(value);

    const modules = {
        toolbar: [
            // [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold"],
            // ['blockquote', 'code-block'],
            [
                { list: "ordered" },
                { list: "bullet" },
                // { indent: "-1" },
                // { indent: "+1" },
            ],
            // [{ 'script': 'sub' }, { 'script': 'super' }],
            // [{ 'align': 'justify' }, { 'align': 'center' }, { 'align': 'right' }],
            // // ['link', 'image'],
            [
                {
                    color: ["#000", "#fff"],
                },
            ],
            [
                {
                    background: ["#000", "#fff"],
                },
            ],
        ],
        // clipboard: {
        //     matchVisual:
        // },
        // imageResize: {
        //     parchment: Quill.import("parchment"),
        //     modules: ["Resize"],
        // },
    };

    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "code-block",
        "list",
        "bullet",
        "script",
        "link",
        "align",
        "indent",
        "image",
        "background",
        "color",
    ];
    return (
        <div>
            <div className="h-48 border-gray-300 focus:border-accent2 focus:ring-accent2">
                <InputLabel htmlFor={name} value={label} />
                <ReactQuill
                    className="h-36 focus:border-accent2 focus:ring-accent2"
                    theme="snow"
                    value={content}
                    onChange={(
                        value: any,
                        delta: any,
                        source: any,
                        editor: any
                    ) => {
                        setCurrentChar(editor.getLength());
                        if (editor.getLength() <= charLimit) {
                            setContent(value);
                            onChange(name, value);
                        }
                    }}
                    modules={modules}
                    formats={formats}
                />
            </div>
            <p className="text-right text-xs text-red-500 font-semibold">
                Character Limit: {charLimit - currentChart}
            </p>
            {/* <p className="text-red-400 mt-1 text-sm">{formerrors?.content}</p> */}
        </div>
    );
}

export default QuillEditor;
