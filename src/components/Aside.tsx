import { FC } from 'react';
import { linksState } from '../state/links-state';
import { NavLink } from 'react-router';

export const Aside: FC = () => {
  const menu = linksState.map(l => {
    return (
      <li key={l.id}>
        <NavLink to={`/page/${l.link}`} end>
          {l.title}
        </NavLink>
      </li>
    );
  });

  return (
    <aside className='aside'>
      <nav>
        <ul>
          {menu}
          <li>
            <NavLink to={'/page/protected'} end>
              Protected
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
