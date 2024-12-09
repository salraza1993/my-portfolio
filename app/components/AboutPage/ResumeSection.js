"use client";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github_dark";
import "ace-builds/src-noconflict/theme-github_light_default";

import "@/app/assets/scss/ace-editor.scss"
import { myResume } from "@/app/common/CommonContent";
import { useLocalStorage } from "@/app/Contexts/LocalStorageContext";
import { useEffect, useState } from "react";
import JsonIcon from "../elements/JsonIcon";
import PdfIcon from "../elements/PdfIcon";
import Image from "next/image";

export default function StaticCodeEditor() {
  const [editorTheme, setEditorTheme] = useState("monokai");
  const [resumeImages, setResumeImages] = useState([
    "/files/salman_resume-01.jpg",
    "/files/salman_resume-02.jpg",
    "/files/salman_resume-03.jpg",
  ]);
  const [activeTab, setActiveTab] = useState(null);
  const tabHandler = (tabType) => {
    setActiveTab(tabType);
  }

  return (
    <section className="code-editor-section">
      <div className="wrapper">
        <div className="code-editor-wrapper">
          <div className="code-editor-wrapper__header">
            <span className="_3-dots"><span></span><span></span><span></span></span>
            <ul className="tabs">
              <li className={`tabs__item json ${activeTab === 'json' ? 'active' : ''}`} onClick={() => tabHandler('json')}>
                <span className="icon"><JsonIcon /></span>
                <span className="text">myResume.json</span>
              </li>
              <li className={`tabs__item pdf ${activeTab === 'pdf' ? 'active' : ''}`} onClick={() => tabHandler('pdf')}>
                <span className="icon"><PdfIcon /></span>
                <span className="text">myResume.pdf</span>
              </li>
            </ul>
          </div>
          <div className="code-editor-wrapper__body">
            <div className="tab-data resume-json">
              <AceEditor
                mode="javascript"
                theme={editorTheme}
                value={myResume}
                readOnly={false}
                fontSize="1.15rem"
                width="100%"
                highlightActiveLine={false}
                showGutter={true}
                maxLines={Infinity} // Allows editor height to grow based on content
                setOptions={{
                  useWorker: false,
                  showLineNumbers: true,
                  tabSize: 2,
                  wrap: true, // Enables text wrapping
                  padding: 20,
                }}
              />

            </div>
            <div className={`tab-data resume-viewer-wrapper ${activeTab === 'pdf' ? 'active' : ''}`}>
              <div className="resume-viewer-data">
                {
                  resumeImages.map((image, index) => (
                    <div key={index} className="resume-viewer-data__item">
                      <Image src={image} alt={`Resume ${index + 1}`} unoptimized fill />
                    </div>
                  ))
                }
              </div>
            </div> 
          </div>
          <div className="code-editor-wrapper__footer"></div>
        </div>
      </div>
    </section>
  );
}
