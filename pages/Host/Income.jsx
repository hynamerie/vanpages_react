import React from "react"

export default function Income() {
    const transactionsData = [
        { amount: 720, date: "Jan 3, '24", id: "1" },
        { amount: 560, date: "Dec 12, '23", id: "2" },
        { amount: 980, date: "Dec 3, '23", id: "3" },
    ]
    return (
        <section className="host-income">
            <h1>Income</h1>
            <p>
                Last <span>30 days</span>
            </p>
            <h2>$2,260</h2>
            <img
                className="graph"
                src="https://pixabay.com/get/ga38e76ad74c743c4f7ce12887e7ff3372f05a1923a4fb473348517840ebaa1e0dad28a9d10fd50a52a02753800151f53_640.png"
                alt="Income graph"
            />
            <div className="info-header">
                <h3>Your transactions (3)</h3>
                <p>
                    Last <span>30 days</span>
                </p>
            </div>
            <div className="transactions">
                {transactionsData.map((item) => (
                    <div key={item.id} className="transaction">
                        <h3>${item.amount}</h3>
                        <p>{item.date}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
