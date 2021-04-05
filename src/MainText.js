import React, { useEffect } from 'react'
import "./MainText.css"

function MainText() {

    function enableEditMode() {
        const textpart = document.getElementsByName('textPart')[0];
        const iframeDocument= textpart.contentDocument || textpart.contentWindow.document;
        iframeDocument.designMode = "on";
        iframeDocument.contentEditable = true;
    }

    useEffect(() => {
        enableEditMode();
    }, [])

    const execCmdFontStyle = (e) => {
        var val = e.target.value;
        var command = val.split(" ")[0];
        var Arg = val.substr(command.length+1, val.length);

        const textpart = document.getElementsByName('textPart')[0];
        const iframeDocument= textpart.contentDocument || textpart.contentWindow.document;
        iframeDocument.execCommand(command, false, Arg);
    }

    const execCmdOneArg = (e) => {
        const val = e.target.value;
        const command = val.split(" ")[0];

        const textpart = document.getElementsByName('textPart')[0];
        const iframeDocument= textpart.contentDocument || textpart.contentWindow.document;
        iframeDocument.execCommand(command, false, null);
    }

    const execCmdTwoArg = (e) => {
        const val = e.target.value;
        const command = val.split(" ")[0];
        const Arg = val.split(" ")[1];

        const textpart = document.getElementsByName('textPart')[0];
        const iframeDocument= textpart.contentDocument || textpart.contentWindow.document;
        iframeDocument.execCommand(command, false, Arg);
    }

    const execCommandColor = (e) => {
        const val = e.target.value;

        const textpart = document.getElementsByName('textPart')[0];
        const iframeDocument= textpart.contentDocument || textpart.contentWindow.document;
        iframeDocument.execCommand('foreColor', false, val);
    }

    const execCommandBColor = (e) => {
        const val = e.target.value;

        const textpart = document.getElementsByName('textPart')[0];
        const iframeDocument= textpart.contentDocument || textpart.contentWindow.document;
        iframeDocument.execCommand('hiliteColor', false, val);
    }

    return (
        <div className="mainText">
            <div className="mainText__first">
                 <div className="mainText__first__left">
                     <div className="first__div">
                            <select onChange={execCmdOneArg} className="fa">
                                <option value="style"> Style </option>
                                <option value="bold fa fa-bold"> &#xf032;</option>
                                <option value="italic fas fa-italic"> &#xf033;</option>
                                <option value="underline fas fa-underline"> &#xf0cd; </option>
                            </select>

                            <select onChange={ execCmdFontStyle }>
                                <option value="fontName Arial"> Arial </option>
                                <option value="fontName Comic Sans MS"> Comic Sans MS </option>
                                <option value="fontName Courier"> Courier </option>
                                <option value="fontName Georgia"> Georgia </option>
                                <option value="fontName Tahoma"> Tahoma </option>
                                <option value="fontName Times New Roman"> Times New Roman </option>
                                <option value="fontName Verdana"> Verdana </option>
                            </select>

                            <select onChange={ execCmdTwoArg } >
                                <option value="formatBlock H3"> Medium </option>
                                <option value="formatBlock H6"> Small </option>
                                <option value="formatBlock H1"> Large </option>
                            </select>

                            <select onChange={ execCmdTwoArg } >
                                <option value="fontSize 8"> 8 </option>
                                <option value="fontSize 9"> 9 </option>
                                <option value="fontSize 10"> 10 </option>
                                <option value="fontSize 11"> 11 </option>
                                <option value="fontSize 12"> 12 </option>
                                <option value="fontSize 14"> 14 </option>
                                <option value="fontSize 16"> 16 </option>
                                <option value="fontSize 18"> 18 </option>
                                <option value="fontSize 20"> 20 </option>
                                <option value="fontSize 22"> 22 </option>
                                <option value="fontSize 24"> 24 </option>
                                <option value="fontSize 26"> 26 </option>
                                <option value="fontSize 28"> 28 </option>
                                <option value="fontSize 36"> 36 </option>
                                <option value="fontSize 48"> 48 </option>
                                <option value="fontSize 72"> 72 </option>
                            </select>
                     </div>
                        
                     <div className="second__div">
                            <span>Color</span><input type="color" onChange={execCommandColor} />
                                <span>BColor</span><input type="color" onChange={execCommandBColor} />

                                <select onChange={ execCmdOneArg } className="fa">
                                    <option value="justifyLeft fas fa-align-left" > &#xf036;  </option>
                                    <option value="justifyRight fas fa-align-right" > &#xf038;  </option>
                                    <option value="justifyCenter fas fa-align-center" > &#xf037;  </option>
                                    <option value="justifyFull fas fa-align-justify" > &#xf039;  </option>
                                </select>
                                
                                <select onChange={execCmdOneArg} className="fa">
                                    <option value="insertUnorderedList fa fa-list" > &#xf03a;  </option>
                                    <option value="insertOrderedList fa fa-list-ol" > &#xf0cb;  </option>
                                </select>
                     </div>
                </div>

                 <div className="mainText__first__right">
                        <button className="first__button"> SAVE </button>
                        <button className="second__button"> SEND FOR PROOF </button>
                        <button className="third__button"> PUBLISH </button>
                 </div>
            </div>

            <div className="mainText__second">
                <iframe name="textPart" frameBorder="0" ></iframe>
            </div>
        </div>
    )
}

export default MainText
