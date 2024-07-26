package com.first.project_management.Services;

import jakarta.mail.MessagingException;
import org.springframework.stereotype.Service;


public interface EmailService {

    void sendEmailWithToken(String userEmail, String link) throws MessagingException;
}
