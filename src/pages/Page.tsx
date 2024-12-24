import { FC } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import { Error404 } from './Error404';
import { PageType } from '../state/pages-state';

type PropsType = {
  pages: PageType[];
};

export const Page: FC<PropsType> = ({ pages }) => {
  const params = useParams();
  const page = params.link ? params.link : 0;
  const path = pages[+page];

  const location = useLocation();
  const navigate = useNavigate();

  const onGoBack = () => navigate(-1);
  const onGoHome = () => navigate('/page/0');

  return (
    <>
      {pages[+page] ? (
        <div className='page'>
          {location.pathname === '/page/2' && <h3>Secret page</h3>}
          <h1>{path.title}</h1>
          <img src={path.img} alt={path.title} />
          <p>{path.descr}</p>
          <button onClick={onGoBack}>go back</button>
          <button onClick={onGoHome}>go home</button>
        </div>
      ) : (
        <Error404 />
      )}
    </>
  );
};
