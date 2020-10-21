import * as React from 'react';
import { LaunchListQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
  data: LaunchListQuery;
}
export interface OwnProps {
    handleIdChange: (newId: number) => void;
  }
  
  interface Props extends OwnProps {
    data: LaunchListQuery;
  }

const LaunchList: React.FC<Props> = ({ data, handleIdChange }) => (
  <div className="LaunchLis">
    <h3>All Launches List</h3>
    <ol className="LaunchList__list">
      {!!data.launches &&
        data.launches.map(
          (launch, i) =>
            !!launch && (
              <li key={i} className="LaunchList__item"
              onClick={() => handleIdChange(launch.flight_number!)}>
                {launch.mission_name} ({launch.launch_year})
              </li>
            ),
        )}
    </ol>
  </div>
);

export default LaunchList;