const ImageUpload = ({ onUpload, num }) => {
    return (
        <input type="file" onChange={(event) => onUpload(event, num)} />
    );
}

export default ImageUpload;