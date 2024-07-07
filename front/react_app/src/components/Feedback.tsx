import { useAppSelector } from "../hooks";

const Feedback: React.FC = () => {
  const feedback = useAppSelector((state) => state.diary.feedback);

  return (
      <div className={`w-full max-w-4xl mt-20 p-4 bg-white rounded shadow-md ${!feedback ? 'invisible' : ''}`}>
        {feedback}
      </div>
  );
}

export default Feedback;
