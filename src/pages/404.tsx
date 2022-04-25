import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  }, []);
  return <>Redirect to Home</>;
};

export default NotFound;
