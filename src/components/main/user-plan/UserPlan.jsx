import React from 'react';
import "../../../index.css";
import "./UserPlan.scss";
import EachPlan from './each-plan/EachPlan';
import UserPlanHead from './user-plan-head/UserPlanHead';

const UserPlan = () => {
  return (
    <div className='user-plan'>
      <UserPlanHead />
      <div className='user-plan-body'>
        <EachPlan />
      </div>
    </div>
  )
}

export default UserPlan
