import './BMI.css';
import React, { useState } from 'react';

const BMI = () => {
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState('');
    const [msg, setMsg] = useState('');

    const reload = () => {
        window.location.reload();
    };

    const handleCalculation = (e) => {
        e.preventDefault();

        if (weight === '' || height === '') {
            alert('Please enter a valid number');
        } else {
            let bmiformula = (weight / (height * height)) * 703;
            let calculatedBmi = bmiformula.toFixed(2);
            setBmi(calculatedBmi);

            if (calculatedBmi < 25) {
                setMsg("You're UnderWeight");
            } else if (calculatedBmi >= 25 && calculatedBmi <= 30) {
                setMsg("You're healthy");
            } else {
                setMsg("You're OverWeight");
            }
        }
    };

    return (
        <div className="app">
            <div className="container">
                <h1 className="title">BMI Calculator</h1>

                <form onSubmit={handleCalculation}>
                    <div>
                        <label className="labels">Age:</label>
                        <br />
                        <input className="bmi-input" type="number" placeholder="Age..." value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>

                    <div>
                        <label className="labels">Weight:</label>
                        <br />
                        <input className="bmi-input" type="number" placeholder="Weight..." value={weight} onChange={(e) => setWeight(e.target.value)} />
                    </div>

                    <div>
                        <label className="labels">Height:</label>
                        <br />
                        <input className="bmi-input" type="number" placeholder="Height..." value={height} onChange={(e) => setHeight(e.target.value)} />
                    </div>

                    <div>
                        <button className="btn" type="submit">Calculate</button>
                        <button className="btn btn-reload" type="button" onClick={reload}>Reload</button>
                    </div>

                    <div className="result">
                        <h3>Age: {age}</h3>
                        <h3>Your BMI is: {bmi}</h3>
                        <h4>{msg}</h4>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BMI;
