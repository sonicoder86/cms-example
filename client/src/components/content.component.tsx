import { useEffect } from 'react';
import { useAppSelector } from '../store/hooks';
import { useContentThunk } from '../store/thunks/content.thunk';
import { useDispatch } from 'react-redux';

export function Content() {
  const content = useAppSelector((state) => state.content);
  const dispatch = useDispatch();
  const contentThunk = useContentThunk()

  useEffect(() => {
    dispatch(contentThunk);
  }, []);

  return (
    <div className="container">
      <h1 className="mt-5">Content</h1>

      <div className="list-group w-auto">
        {content.contents.map(content => (
          <a key={content.id} href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">{content.title}</h6>
                <p className="mb-0 opacity-75">{content.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
