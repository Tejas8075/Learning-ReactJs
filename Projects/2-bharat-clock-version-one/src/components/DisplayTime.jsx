import "../styles/displaytime.css"

function DisplayTime() {
    let currTimeAndDate = new Date();
    return (
        <center>
            <p className="date-time">This is the current time: {currTimeAndDate.toLocaleDateString()} - {currTimeAndDate.toLocaleTimeString()}</p>
        </center>
    )
}

export default DisplayTime;