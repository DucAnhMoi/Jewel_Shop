// Import librarys
import { useNProgress } from '@tanem/react-nprogress';
// Import components/assets/sections/....

export const Progress = ({ isAnimating }) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  });

  return (
    <div
      className="pointer-events-none"
      style={{
        opacity: isFinished ? 0 : 1,
        transition: `opacity ${animationDuration}ms linear`,
      }}
    >
      <div
        className="h-2 w-full left-0 top-0 fixed z-50"
        style={{
          marginLeft: `${(-1 + progress) * 100}%`,
          transition: `margin-left ${animationDuration}ms linear`,
          backgroundImage: 'linear-gradient(45deg,red, yellow, blue)',
        }}
      ></div>
    </div>
  );
};
