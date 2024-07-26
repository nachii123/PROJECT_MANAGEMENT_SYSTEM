package com.first.project_management.Services;

import com.first.project_management.model.Invitation;
import com.first.project_management.model.PlanType;
import com.first.project_management.model.User;

public interface SubscriptionService {

    Invitation.Subscription createSubscription(User user);

    Invitation.Subscription getUserSubscription(Long userId)throws Exception;

    Invitation.Subscription upgradeSubscription(Long userId, PlanType planType);

    boolean isValid(Invitation.Subscription subscription);
}
