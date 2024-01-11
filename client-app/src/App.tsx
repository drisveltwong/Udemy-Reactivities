import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header, List } from 'semantic-ui-react';
import './App.css';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
      .then(response => {
        setActivities(response.data)
      })
  }, [])
  // [] is location to put dependencies
  // empty mean that the useEffect if only execute one
  // when there is dependencies and the dependencies change, the use Effect will execute again

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities' />
      <List>
        {activities.map((activity: any) => (
          <List.Item key={activity.id}>
            {activity.title}
          </List.Item>
        ))}
      </List>
    </div>

  )
}

export default App
