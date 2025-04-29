'use client'
import { useRef, useState } from 'react';
import styles from './imagePicker.module.css'
import Image from 'next/image';

export default function ImagePicker({label, name}) {

  const [thisPic, setThisPic] = useState()


    //instead of default file pick button I hid the origing button and
    //added my custom button to handle the clicking the default with useRef
    const imageChooser = useRef()

   function handlePicClick(){
    imageChooser.current.click()
   }

   function handlePicChange(event){
    const file = event.target.files[0]

    //if I dont get a file return null
    if (!file){
        setThisPic(null)
        return
    }
    
    //get the data url of photo
    const fileReader = new FileReader();
    fileReader.onload = ()=>{
       setThisPic(fileReader.result)
    }
    fileReader.readAsDataURL(file)

   }

  return (
		<>
			<div className={styles.picker}>
				<label htmlFor={name}>{label}</label>
				<div className={styles.controls}>
                    <div className={styles.preview}>
                        {!thisPic && <p>No Image</p>}
                        {thisPic && <Image src={thisPic} alt='user image' fill />}
                    </div>
					<input
                        className={styles.input}
						type='file'
						id={name}
						accept='image/png, image/jpeg'
						name={name}
                        ref={imageChooser}
                        //multiple
                        onChange={handlePicChange}
					/>
                    <button className={styles.button} type='button' onClick={handlePicClick}>Pick an Image</button>
				</div>
			</div>
		</>
	);
}
