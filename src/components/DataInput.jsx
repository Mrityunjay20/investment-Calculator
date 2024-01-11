export default function DataInput({initialValue, handleOnChange}){
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                <label name="initial-investment">Initial Investment</label>
                <input name="initial-investment" type="number" min={0} value={initialValue.initialInvestment} onChange={(event)=>handleOnChange("initialInvestment", event.target.value)} required></input>
                </p>
                <p>
                <label name="annual-investment">Annual Investment</label>
                <input name="annual-investment" type="number" min={0} value={initialValue.annualInvestment} onChange={(event)=>handleOnChange("annualInvestment", event.target.value)} required></input>    
                </p>
            </div>
            <div className="input-group">
                <p>      
                <label name="Expected Return">Expected Return (%)</label>
                <input name="Expected Return" type="number" min={0} value={initialValue.expectedReturn} onChange={(event)=>handleOnChange("expectedReturn", event.target.value)} required></input>
                </p>
                <p>
                <label name="Duration">Duration</label>
                <input name="Duration" type="number" min={1} value={initialValue.duration} onChange={(event)=>handleOnChange("duration", event.target.value)} required></input>
                </p>
            </div>
        </section>
    )
}