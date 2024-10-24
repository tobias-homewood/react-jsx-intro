const App = () => {
    return (
        <div>
        <Person name="John" age={25} hobbies={['chess', 'traveling', 'football']}/>
        <Person name="Alice" age={35} hobbies={['music', 'poker', 'movies']}/>
        <Person name="Franchesca" age={17} hobbies={['swimming', 'videogames', 'parties']}/>
        </div>
    );
}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);