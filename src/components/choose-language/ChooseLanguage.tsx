import {Words} from "../../Words";
import {Image} from "semantic-ui-react";
import React from "react";

const ChooseLanguage = () => {
    const translate = async (toLanguage: string) => {
        console.log('to language = ', toLanguage);
        alert(`Are you sure you want to change the language to ${toLanguage}?`);
        await Words.translate(toLanguage);
    }
    return (
        <div style={{backgroundColor: 'white', display: 'flex', borderRadius:'15px', justifyContent:'center', width:'75%', margin:'auto',
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',}}>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', padding:'20px'}}>
                <div style={{height:'100px', width:'100px', borderRadius: '50%', cursor: "pointer" }}>
                    <Image src={"/english_language.png"} onClick={() => translate('en')} />
                </div>
                <span style={{textAlign:'center'}}>English</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', padding:'20px'}}>
                <div style={{height:'100px', width:'100px', borderRadius: '50%',  cursor: "pointer" }}>
                    <Image src={"/danish_language.png"} onClick={() => translate('da')} />
                </div>
                <span style={{textAlign:'center'}}>Dansk</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', padding:'20px'}}>
                <div style={{height:'100px', width:'100px', borderRadius: '50%',  cursor: "pointer" }}>
                    <Image src={"/french_language.png"} onClick={() => translate('fr')} />
                </div>
                <span style={{textAlign:'center'}}>Français</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', padding:'20px'}}>
                <div style={{height:'100px', width:'100px', borderRadius: '50%',  cursor: "pointer" }}>
                    <Image src={"/german_language.png"} onClick={() => translate('de')} />
                </div>
                <span style={{textAlign:'center'}}>Deutsch</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', padding:'20px'}}>
                <div style={{height:'100px', width:'100px', borderRadius: '50%',  cursor: "pointer" }}>
                    <Image src={"/arabic_language.png"} onClick={() => translate('ar')} />
                </div>
                <span style={{textAlign:'center'}}>عربي</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', padding:'20px'}}>
                <div style={{height:'100px', width:'100px', borderRadius: '50%',  cursor: "pointer" }}>
                    <Image src={"/chinese_language.png"} onClick={() => translate('zh')} />
                </div>
                <span style={{textAlign:'center'}}>中国人</span>
            </div>
        </div>
    );
}
export default ChooseLanguage;
