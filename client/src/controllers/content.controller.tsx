import { useEffect } from 'react';
import { useAppSelector } from '../store/hooks';
import { useContentThunk } from '../store/thunks/content.thunk';
import { useDispatch } from 'react-redux';
import { ContentComponent } from '../components/content.component';


export function ContentController() {
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
          <ContentComponent key={content.id} content={content} />
        ))}
      </div>
    </div>
  );
}
