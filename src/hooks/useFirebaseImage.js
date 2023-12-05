import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";

export default function useFirebaseImage(
  setValue,
  getValues,
  imageName = null,
  cb = null
) {
  // state progress upload image
  const [progress, setProgress] = useState(0);
  // state store image upload
  const [image, setImage] = useState("")
  if (!setValue || !getValues) return;
  const handleUploadImage = (file) => {
    // if (userInfo?.role !== userRole.ADMIN) {
    //   Swal.fire("Failed", "You have no right to do this action", "warning");
    //   return;
    // }
    const storage = getStorage();
    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progressPercent =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progressPercent);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            // console.log("Upload is running");
            break;
          default:
            console.log("Nothing at all");
        }
      },
      (error) => {
        console.log("Error");
        setImage("");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log("File available at", downloadURL);
          setImage(downloadURL);
        });
      }
    );
  };
  // handle select image
  const handleSelectImage = (e) => {
    // get image upload = file
    const file = e.target.files[0];
    if(!file) return;

    // set name of image upload to state value of reachookform  = setValue
    setValue("image_name",file.name);
    // upload image file 
    handleUploadImage(file)
  };

  const handleDeleteImage = () => {
    // if (userInfo?.role !== userRole.ADMIN) {
    //   Swal.fire("Failed", "You have no right to do this action", "warning");
    //   return;
    // }
    const storage = getStorage();
    const imageRef = ref(
      storage,
      "images/" + (imageName || getValues("image_name"))
    );
    deleteObject(imageRef)
      .then(() => {
        console.log("Remove image successfully");
        setImage("");
        setProgress(0);
        cb && cb();
      })
      .catch((error) => {
        console.log("handleDeleteImage ~ error", error);
        console.log("Can not delete image");
        setImage("");
      });
  };
  const handleResetUpload = () => {
    setImage("");
    setProgress(0);
  };
  return {
    image,
    handleResetUpload,
    progress,
    setImage,
    handleSelectImage,
    handleDeleteImage,
  };
}
