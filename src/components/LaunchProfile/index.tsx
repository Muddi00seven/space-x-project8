import * as React from 'react';
import { useLaunchProfileQuery } from '../../generated/graphql';
import LaunchProfile from './LaunchProfile';

interface OwnProps {
    id: number;
  }

const LaunchProfileContainer = ({ id }: OwnProps) => {
  const { data, error, loading,refetch } = useLaunchProfileQuery({ variables: { id: String(id) } });
  console.log('refecthing faiza',refetch)
  React.useEffect(() => {
    refetch();
  }, [id]);

  if (loading) {
    return <div>LOADING</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a flight from the panel</div>;
  }

  return <LaunchProfile data={data} />;
};

export default LaunchProfileContainer;