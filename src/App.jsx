import React from 'react';
import { Card } from './hedwig-react.jsx';

class App extends React.Component {

    ShowCards() {
        return (
            <div className="hw-flex hw-flex--thirds">
                <Card title="Tittel 1" description="Teksten er her da liksom" imgUrl="http://placekitten.com/201/300" imgFormat="4_3" />
                <Card title="Tittel 2" description="Dette kortet er 'compressed'" imgUrl="http://placekitten.com/250/400" compressed={true} />
                <Card title="Tittel 3" description="Teksten er her da liksom" imgUrl="http://placekitten.com/205/400" />
                <Card title="Tittel 4" overline="21.03.1977" description="Teksten er her da liksom" imgUrl="http://placekitten.com/205/400" />
                <Card title="Tittel 5" overline="21.03.1977" subtitle="Den beste tittelen" description="Teksten er her da liksom" />
            </div>
        )
    }


    render() {
        return (
            <div className="hw-container">
                <this.ShowCards />
            </div>
        )
    }
}
export default App;