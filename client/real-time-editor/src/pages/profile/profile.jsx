import React from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/ext-language_tools";

function onChange(newValue) {
    console.log("change", newValue);
}

const ProfilePage = () => {
    return (
        <> 
            <div>
                <AceEditor
                height="100vh"
                width="100vw"
                placeholder="// Start here"
                mode="javascript"
                theme="solarized_dark"
                name="blah2"
                onChange={onChange}
                fontSize={16}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 2,
                }}/>
            </div>
        </>
    )
}

export default ProfilePage;