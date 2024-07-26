// import { features } from "process";
import SubScriptionCard from "./SubScriptionCard";

const paidPlan =[
  "Add unlimited project",
  "Access to live chat",
  "Add unlimited team member",
  "Advanced Reporting",
  "Priority Support",
  "Customization Option",
  "Integration Support",
  "Advanced Security",
  "Training and Resources",
  "Access Control",
  "Custom Workflows",
];

const annualPlan =[
  "Add unlimited project",
  "Access to live chat",
  "Add Unlimited team member",
  "Advanced Reporting",
  "Priority Support",
  "Customization Option",
  "Everything which monthly plan",
  "Advanced Security",
  "Training and Resources",
  "Access Control",
  "Custom Workflows",
]

const freePlan =[
  "Add only 3 project",
  "Basic Task Management",
  "Project Collaborations",
  "Basic Reporting",
  "Email Notification",
  "Basic Access Control"

]
const Subscription = () => {
  return (
    <div className="p-10">
    <h1 className="text-5xl font-semibold py-5  pb-16 text-center">Pricing</h1>
    <div className="flex flex-col lg:flex-row justify-center items-center gap-9">
      <SubScriptionCard data={{planName:"Free", features:freePlan, planType: "FREE", price:0, buttonName:true? "Current Plan":"Get Started"}}/>
      <SubScriptionCard data={{planName:"Monthly Paid Plan", features:paidPlan, planType: "MONTHLY", price:799, buttonName:true? "Current Plan":"Get Started"}}/>
      <SubScriptionCard data={{planName:"Annual", features:annualPlan, planType: "ANNUALLY", price:6711, buttonName:true? "Current Plan":"Get Started"}}/>
     

    </div>
    </div>
  )
}

export default Subscription