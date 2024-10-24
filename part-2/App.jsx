const App = () => {
    return (
        <div>
            <Tweet 
                username="user1" 
                name="User 1" 
                date={new Date("2024-07-01T12:00:00")}
                message="hello" />
            <Tweet 
                username="user2" 
                name="User 2" 
                date={new Date("2024-10-01T12:01:00")} 
                message="testing things out" />
            <Tweet 
                username="user3" 
                name="User 3" 
                date={new Date()}
                message="first tweet!" />
        </div>
    );
};
