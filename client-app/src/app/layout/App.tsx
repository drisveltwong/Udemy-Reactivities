import { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const { activityStore: activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])
  // [] is location to put dependencies
  // empty mean that the useEffect if only execute one
  // when there is dependencies and the dependencies change, the use Effect will execute again


  if (activityStore.loadingInitial) return <LoadingComponent content='Loading app' />

  return (
    <>
      <NavBar />

      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard />
      </Container>

    </>

  )
}

export default observer(App);
