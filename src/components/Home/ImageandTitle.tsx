

interface ImageProps {
    title: string;
    url: string;
}

const ImageandTitle: React.FC<ImageProps> = ({
    title,
    url,
  }) => {



  return (
    <div className="flex flex-col items-center p-4">
            <img
              src={url}
              alt=""
              className="rounded"
            />
            <h2 className="text-xl font-bold text-[#333333] p-2">{title}</h2>
          </div>
  )
}

export default ImageandTitle