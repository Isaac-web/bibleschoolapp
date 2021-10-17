import React, {useRef} from 'react';

const ImagePicker = ({children, image, onChange, ...rest}) => {
    const inputButton = useRef();

    const raiseChange = ({target: input}) => {
        const file = input.files[0];
        if(!file) return;
        
        const isImage = file.type.substring(0, 5) === "image";
        if(!isImage) return;

        const reader = new FileReader();
        reader.onloadend = () => onChange(file, reader.result);
        reader.readAsDataURL(file);
    }


    return (
        <span onClick={() => inputButton.current.click()} {...rest}> 
            {children}
            <input style={{display: children && "none"}} ref={inputButton} type="file" onChange={raiseChange}/>
        </span>
    )
}

export default ImagePicker
