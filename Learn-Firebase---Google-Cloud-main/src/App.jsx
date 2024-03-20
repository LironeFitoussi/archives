import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useEffect, useState } from 'react'

import { v4 } from 'uuid'

import { storage } from './config/firebase'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'

function App() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([])
  const imageListRef = ref(storage, 'profile-images')
  const uploadImage = () => {
    if (imageUpload === null) return;
    const imageRef = ref(storage, `profile-images/${imageUpload.name + +v4()}`)
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url])
      })
      alert('image uploaded succefully')
    })
  }

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url])
        })
      })
    })
  }, [])


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <div className='mainDiv'>
        <input
          type="file"
          onChange={(e) => {
            setImageUpload(e.target.files[0])
          }} />
        <button onClick={uploadImage}>Upload</button>
        {imageList.map((url, index) => {
          return <img src={url} key={`image_${index}`} />
        })}
      </div>
    </>
  )
}

export default App
