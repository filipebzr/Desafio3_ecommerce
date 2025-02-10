interface ModalButtonProps {
  title: string;
}

const ModalButton: React.FC<ModalButtonProps> = ({ title }) => {
  return (
    <a href={`/${title}`}>
      <button className="border border-black rounded-full px-4 py-2">
        {title}
      </button>
    </a>
  );
};

export default ModalButton;
