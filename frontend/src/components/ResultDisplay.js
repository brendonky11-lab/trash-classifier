import React from 'react';

const ResultDisplay = ({ results }) => {
    return (
        <div>
            <h2>Trash Classification Results</h2>
            <ul>
                {results.map((result, index) => (
                    <li key={index}>
                        <strong>{result.item}</strong>: {result.classification} (Recommended Bin: {result.recommendedBin})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResultDisplay;