import { MainLayout } from "../../components/layout/MainLayout"
import { useState } from 'react';
import { Images } from "./interfaceUpload";

export const UploadScreen = () => {
    const [post, setPost] = useState<Images>({
        images: [],
    });

    const [highLight, setHighLight] = useState(false)

    const { images } = post;

    const handleFileChange = (e: any) => {
        let files = e.target.files;
        handleFiles(files)
    }

    const handleFiles = (files: any) => {
        let imgsArray: { name: any; type: any; size: any; src: string | ArrayBuffer | null; }[] = [];
        for (let file of files) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.addEventListener("load", () => {
                let fileobj = {
                    name: file.name,
                    type: file.type,
                    size: file.size,
                    src: reader.result
                }
                imgsArray.push(fileobj);
                setPost({
                    ...post,
                    images: [...images, ...imgsArray],
                })
            })
        }
    }

    const handleDelete = (e: any) => {
        const target = e.target.parentElement;
        const targetIndex = target.dataset.imgindex * 1;
        setPost({
            ...post,
            images: [...images.slice(0, targetIndex), ...images.slice(targetIndex + 1)],
        })
    }


    const handleHighLight = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setHighLight(true);
    }

    const handleUnhighLight = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setHighLight(false);

    }

    const handleDrop = (e: any) => {
        e.preventDefault();
        e.stopPropagation();

        let dt = e.dataTransfer;
        let files = dt.files;
        setHighLight(false);
        handleFiles(files);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    return (
        <MainLayout>
            <div>
                <div className="file-upload">
                    <h2>Drag and drop</h2>
                    <form encType="multipart /form-data">
                        <div className="custom-form-group">
                            <div className={highLight ? "custom-file-drop-area highlight" : "custom-file-drop-area"}
                                onDragEnter={handleHighLight}
                                onDragOver={handleHighLight}
                                onDragLeave={handleUnhighLight}
                                onDrop={handleDrop}
                            >
                                <input type="file" name="photos" placeholder="Enter photos" multiple id="filephotos" onChange={handleFileChange} />
                                <label htmlFor="filephotos">Drag & Drop</label>
                            </div>
                            <div className="custom-file-preview">
                                {images.length > 0 && images.map((img: any, i: number) => (
                                    <div className="prev-img" key={i} data-imgindex={i}>
                                        <span onClick={handleDelete}>&times;</span>
                                        <img src={img.src} alt={img.name} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button onClick={handleSubmit} type="submit" className="btn-submit">Submit</button>
                    </form>
                </div>
            </div >
        </MainLayout>
    )
}
