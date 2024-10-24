const Person = ({name, age, hobbies}) => {
    return (
        <div className="person">
            <p className="info">Learn some information about this person</p>
            <h1 className="name">
                {
                name.length > 8 ? 
                name.slice(0, 6) + '...' : name
                }
            </h1>
            <p className="age">{age}</p>
            <h3>
                {
                age >= 18 ? 'Please go vote!' : 'You must be 18.'
                }
            </h3>
            <ul className="hobbies">
                {hobbies.map(h => <li>{h}</li>)}
            </ul>
        </div>
    );
}