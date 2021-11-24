/*DEFAULT CODE*/
const activitiesArray = [
    {
        timestamp: new Date().getTime(),
        text: "Ate Lunch",
        user: {
            id: 1,
            name: 'Nate',
            avatar: 'http://www.croop.cl/UI/twitter/images/doug.jpg'
        },
        comments: [{from: 'Ari', text: 'Me Too!'}]
    },
    {
        timestamp: new Date().getTime(),
        text: "Played Golf at Meridian",
        user: {
            id: 2,
            name: 'Nate',
            avatar: 'http://www.croop.cl/UI/twitter/images/doug.jpg'
        },
        comments: [{from: 'Nate', text: 'I wish I was there!'}]
    }
];
class Content extends React.Component{
    render() {
        const {activities} = this.props;   //ES6 deconstructing
        return (
            <div className="content">
                <div className="line"></div>
                {/* Timeline Item */}
                {activities.map((activity) => (
                    <ActivityItem activity={activity} />
                ))}
            </div>
        )
    }
}
class ActivityItem extends React.Component{
    render() {
        const {activity} = this.props;
        return (
                <div className="item">
                    <div className="avatar">
                        <img src={activity.user.avatar} alt=""/>
                        {activity.user.name}
                    </div>
                    <span className="time">{activity.timestamp}</span>
                    <p>**{activity.text}**</p>
                    <div className="commentCount">{activity.comments.length}</div>
                </div>
        )
    }
}
class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="fa fa-more"></div>
                <span className="title">{this.props.title}</span>
                <input type="text" className="searchInput" placeholder="Search ..."/>
                <div className="fa fa-search searchIcon"></div>
            </div>
        )
    }
}
class App extends React.Component {
    render() {
        return (
            <div className="notificationsFrame">
                <div className="panel">
                    <Header title="Timeline" />
                    <Header title="Profile" />
                    <Header title="Settings" />
                    <Header title="Chat" />
                    <Content activities={activitiesArray} />
                </div>
            </div>
        )
    }
}
var mount = document.querySelector('#app');
ReactDOM.render(<App />, mount);
