import * as React from 'react';
import { LaunchProfileQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
  data: LaunchProfileQuery;
}

const LaunchProfile: React.FC<Props> = ({ data }) => {
  if (!data.launch) {
    return <div>NO LAUNCH YET</div>;
  }

  return (
    <div className="lp">
      <div className="lpStatus">
        <span>Flight {data.launch.flight_number}: </span>
        {data.launch.launch_success ? (
          <span className="lpSuccess">SUCCESS</span>
        ) : (
          <span className="lpFailed">FAILED</span>
        )}
      </div>
      <h1 className="lpTitle">
        {data.launch.mission_name}
        {data.launch.rocket &&
          ` (${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
      </h1>
      <p className="lpdescription">{data.launch.details}</p>
      {!!data.launch.links && !!data.launch.links.flickr_images && (
        <div className="lpListImage">
          {data.launch.links.flickr_images.map(image =>
            image ? <img src={image} className="lpImage" key={image} /> : null,
          )}
        </div>
      )}
    </div>
  );
};

export default LaunchProfile;