import React from "react";
import Card from "./Card";
import "./AllInOne.css";

import billingIcon from "../../assets/billing.svg";
import customerIcon from "../../assets/customer.svg";
import schedulingIcon from "../../assets/scheduling.svg";

function AllInOne() {

    const cards = [
        {
            icon: billingIcon,
            title: "Online Billing, Invoicing, & Contracts",
            description: "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts",
        },
        {
            icon: schedulingIcon,
            title: "Easy Scheduling & Attendance Tracking",
            description: "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",       
        },
        {
            icon: customerIcon,
            title: "Customer Tracking",
            description: "Automate and track emails to individuals or groups. Skilline's built-in system helps organize your organization",       
        }
    ]
    return (
        <section className="all-in-one-section">
            <h2 className="all-in-one-title">All-In-One <span>Cloud Software.</span></h2>
            <p className="all-in-one-description">Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.
</p>
        <div className="card-grid">
        {
            cards.map((card, index) => (
                <Card 
                    key = {index}
                    icon = {card.icon}
                    title = {card.title}
                    description = {card.description}
                />
            ))
        }
        </div>
        </section>
    );
}

export default AllInOne;    