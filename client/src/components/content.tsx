import { useEffect } from 'react';
import { ContentApi } from '../services/content-api';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setContents } from '../store/content';

export function Content() {
  const contentApi = new ContentApi();
  const auth = useAppSelector((state) => state.auth);
  const content = useAppSelector((state) => state.content);
  const dispatch = useAppDispatch();

  useEffect(() => {
    contentApi.getContents(auth.token)
      .then((contents) => {
        dispatch(setContents(contents));
      });
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
