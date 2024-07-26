package com.first.project_management.Controller;


import com.first.project_management.Services.SubscriptionService;
import com.first.project_management.Services.UserService;
import com.first.project_management.model.Invitation;
import com.first.project_management.model.PlanType;
import com.first.project_management.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/subscription")
public class SubscriptionController {

    @Autowired
    private SubscriptionService subscriptionService;

    @Autowired
    private UserService userService;

    @GetMapping("/user")
    public ResponseEntity<Invitation.Subscription> getUserSubscription(@RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);

        Invitation.Subscription subscription = subscriptionService.getUserSubscription(user.getId());

        return new ResponseEntity<>(subscription, HttpStatus.OK);
    }

    @PatchMapping("/upgrade")
    public ResponseEntity<Invitation.Subscription> upgradeSubScription(@RequestHeader("Authorization") String jwt, @RequestParam PlanType planType) throws Exception {

        User user = userService.findUserProfileByJwt(jwt);
        Invitation.Subscription subscription = subscriptionService.upgradeSubscription(user.getId(),planType);
        return new ResponseEntity<>(subscription,HttpStatus.OK);
    }
}
