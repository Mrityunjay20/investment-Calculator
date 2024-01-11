import React from "react";
import { useState } from "react";
import {calculateInvestmentResults, formatter} from '../util/investment'




export default function Results( {input} ){

    
    const testvalue = calculateInvestmentResults(input);
    const initialInvestment = testvalue[0].valueEndOfYear - testvalue[0].interest - testvalue[0].annualInvestment;

    return(
    <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (year)</th>
                <th>Total Interest</th>   
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {

                testvalue.map(yearData => {
                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment; 
                   return (
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(yearData.valueEndOfYear - yearData.interest)}</td>
                    </tr>
                   )
                   })
            }
        </tbody>
    </table>
    )
}
