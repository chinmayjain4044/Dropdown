import React, { useState } from 'react';
import './Dropdown2.css';

const data = {
    domains: [
        { id: 2023799824, name: "self-CarE1" },
        { id: 2023799825, name: "Neuromotor Processes" },
        { id: 2023799826, name: "Gross Motor" },
        { id: 2023799827, name: "Fine Motor/Visual Motor" },
        { id: 2023799828, name: "Sensory Processing" },
        { id: 2023799829, name: "Social Emotional/Play" },
        { id: 2023799830, name: "Self-Care" }
    ],
    longTermGoals: {
        2023799824: [
            { id: 412583201, name: "Test supriya" },
            { id: 412583202, name: "Long term goal 1" },
            { id: 412583204, name: "Test supriya" }
        ],
        2023799825: [
            { id: 412583203, name: "Test supriya 2" },
            { id: 412583204, name: "Long term goal 2" },
            { id: 412583205, name: "Test supriya2" }
        ]
    },
    shortTermGoals: {
        412583201: [{ id: 125, name: "tanya1" }],
        412583202: [{ id: 126, name: "tanya2" }]
    }
};

const Dropdown = () => {
    const [selectedDomain, setSelectedDomain] = useState(null);
    const [selectedLongTerm, setSelectedLongTerm] = useState(null);

    const handleDomainClick = (domainId) => {
        setSelectedDomain(selectedDomain === domainId ? null : domainId);
        setSelectedLongTerm(null);
    };

    const handleLongTermClick = (longTermId) => {
        setSelectedLongTerm(selectedLongTerm === longTermId ? null : longTermId);
    };

    return (
        <div className="dropdown">
            <button className="dropbtn">Dropdown example</button>
            <div className="dropdown-content">
                {data.domains.map(domain => (
                    <div
                        key={domain.id}
                        className="dropdown-item"
                        onClick={() => handleDomainClick(domain.id)}
                    >
                        {domain.name}
                        {selectedDomain === domain.id && (
                            <div className="dropdown-content">
                                {(data.longTermGoals[domain.id] || []).map(longTerm => (
                                    <div
                                        key={longTerm.id}
                                        className="dropdown-item"
                                        onClick={() => handleLongTermClick(longTerm.id)}
                                    >
                                        {longTerm.name}
                                        {selectedLongTerm === longTerm.id && (
                                            <div className="dropdown-content">
                                                {(data.shortTermGoals[longTerm.id] || []).map(shortTerm => (
                                                    <div key={shortTerm.id} className="dropdown-item">
                                                        {shortTerm.name}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
