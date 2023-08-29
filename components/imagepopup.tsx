import { Popover, Image } from 'antd';
interface Props {
  text: string;
  imageUrl: string;
}

const ImagePopup: React.FC<Props> = ({ text, imageUrl }) => {

  const content = <Image src={imageUrl} />

  return (
    <Popover content={content} trigger="click">
      <span style={{color: 'blue', fontWeight:'bold'}}>{text}</span>
    </Popover>
  )

};

export default ImagePopup;