export default function TopicButton({ children, onClick }) {
  return (
    <button
      className=" bg-red-300 hover:bg-red-400 rounded-lg min-w-[100px] px-4 content-center"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
