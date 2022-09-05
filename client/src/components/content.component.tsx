import { Content } from '../services/content-api.service';
import PropTypes from 'prop-types';

export function ContentComponent({ content }: { content: Content }) {
  return (
    <a href="src/controllers/content.controller#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
      <div className="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 className="mb-0">{content.title}</h6>
          <p className="mb-0 opacity-75">{content.description}</p>
        </div>
      </div>
    </a>
  );
}

ContentComponent.propTypes = {
  content: PropTypes.object.isRequired,
};
