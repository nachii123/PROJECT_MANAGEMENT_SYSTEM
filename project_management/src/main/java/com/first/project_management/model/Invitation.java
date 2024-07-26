package com.first.project_management.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Invitation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String token;
    private String email;
    private Long projectId;

    @Entity
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Subscription {

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private Long id;
        private LocalDate subcriptionStartDate;

        private LocalDate getSubscriptionEndDate;

        private PlanType planType;

        private boolean isValid;

        @OneToOne
        private User user;
    }
}
