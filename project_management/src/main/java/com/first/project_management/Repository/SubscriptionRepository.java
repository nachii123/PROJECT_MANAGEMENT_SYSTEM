package com.first.project_management.Repository;

import com.first.project_management.model.Invitation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubscriptionRepository extends JpaRepository<Invitation.Subscription, Long> {

    Invitation.Subscription findByUserId(Long userId);
}
