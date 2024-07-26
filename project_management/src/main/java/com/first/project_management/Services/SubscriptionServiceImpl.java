package com.first.project_management.Services;

import com.first.project_management.Repository.SubscriptionRepository;
import com.first.project_management.model.Invitation;
import com.first.project_management.model.PlanType;
import com.first.project_management.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class SubscriptionServiceImpl implements SubscriptionService {

    @Autowired
    private SubscriptionRepository subscriptionRepository;

    @Autowired
    private UserService userService;
    @Override
    public Invitation.Subscription createSubscription(User user) {
        Invitation.Subscription sub = new Invitation.Subscription();
        sub.setUser(user);
        sub.setSubcriptionStartDate(LocalDate.now());
        sub.setGetSubscriptionEndDate(LocalDate.now().plusMonths(12));
        sub.setValid(true);
        sub.setPlanType(PlanType.FREE);
        return subscriptionRepository.save(sub);
    }

    @Override
    public Invitation.Subscription getUserSubscription(Long userId) throws Exception {

        Invitation.Subscription subscription = subscriptionRepository.findByUserId(userId);
        if(!isValid(subscription)){
            subscription.setPlanType(PlanType.FREE);
            subscription.setGetSubscriptionEndDate(LocalDate.now().plusMonths(12));
            subscription.setSubcriptionStartDate(LocalDate.now());
        }



        return subscriptionRepository.save(subscription);
    }

    @Override
    public Invitation.Subscription upgradeSubscription(Long userId, PlanType planType) {
        Invitation.Subscription subscription = subscriptionRepository.findByUserId(userId);
        subscription.setPlanType(planType);
        subscription.setSubcriptionStartDate(LocalDate.now());
        if(planType.equals(PlanType.ANNUALLY)){
            subscription.setGetSubscriptionEndDate(LocalDate.now().plusMonths(12));
        }else{
            subscription.setGetSubscriptionEndDate(LocalDate.now().plusMonths(1));
        }
        return subscriptionRepository.save(subscription);
    }

    @Override
    public boolean isValid(Invitation.Subscription subscription) {
        if(subscription.getPlanType().equals(PlanType.FREE)){
            return true;
        }
        LocalDate endDate = subscription.getGetSubscriptionEndDate();
        LocalDate currentDate = LocalDate.now();
        return endDate.isAfter(currentDate) || endDate.isEqual(currentDate);
    }
}
