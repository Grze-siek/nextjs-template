import { useEffect } from 'react';

const useIntro = () => {
  const hasTimePassed =
    typeof window !== 'undefined' &&
    (() => {
      const storage = window.localStorage;
      const currTimestamp = Date.now();
      const timestamp = JSON.parse(storage.getItem('timestamp') || '1000');

      const timeLimit = 15 * 60 * 1000; // 15 min

      return currTimestamp - timestamp > timeLimit;
    })();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storage = window.localStorage;
      const currTimestamp = Date.now();
      const timestamp = JSON.parse(storage.getItem('timestamp') || '1000');

      const timeLimit = 15 * 60 * 1000; // 15 min

      const hasTimePassed = currTimestamp - timestamp > timeLimit;

      hasTimePassed
        ? storage.setItem('timestamp', currTimestamp.toString())
        : storage.setItem('timestamp', timestamp.toString());
    }
  }, []);

  return hasTimePassed;
};

export default useIntro;
