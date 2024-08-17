import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { getUserSubscription, upgradeSubscription } from '@/Redux/Subscription/Action'
import { CheckCircledIcon } from '@radix-ui/react-icons'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'

const UpgradeSuccess = () => {
    const navigate = useNavigate();
    // const {subscription} = useSelector(store=> store.subscription);
    const { subscription } = useSelector(store => store.subscription || { subscription: null });

    const dispatch = useDispatch();

    // const queryParams = new USRLSearchParams(location.search)
    const queryParams = new URLSearchParams(location.search)

    const paymentId = queryParams.get("payment_id");
    const planType = queryParams.get("planType");

    // useEffect(()=>{
    //     dispatch(upgradeSubscription({planType}));
    //     dispatch(getUserSubscription())
    // })

    useEffect(() => {
        if (planType) {
            dispatch(upgradeSubscription({ planType }));
            dispatch(getUserSubscription());
        }
    }, [dispatch, planType]);
  return (
    <div className='flex justify-center'>

        <Card className="mt-20 p-5 space-y-5 flex flex-col items-center">
         <div className='flex items-center gap-4'>

            <CheckCircledIcon className='h-9 w-9  text-gray-500'/>
            <p className='text-xl'>Plan Upgraded Successfully</p>

         </div>

        <div className='space-y-3'>

            {/* <p className='text-green-500'>state date: {subscription?.userSubscription?.subscriptionStartDate}  </p> */}
                {/* {subscription.userSubscription?.subscriptionStartDate} */}
                
            {/* <p className='text-red-500'>end date:{subscription?.userSubscription?.subscriptionDate}   </p> */}
            {/* <p className=''>plan type: </p> */}

            <p className='text-green-500'>Start date: {subscription?.userSubscription?.subscriptionStartDate}</p>
                    <p className='text-red-500'>End date: {subscription?.userSubscription?.subscriptionEndDate}</p>
                    <p>Plan type: {subscription?.userSubscription?.planType}</p>

        </div>
        <Button onClick={()=> navigate("/")}>Go to Home</Button>
        </Card>

    </div>
  )
}

export default UpgradeSuccess