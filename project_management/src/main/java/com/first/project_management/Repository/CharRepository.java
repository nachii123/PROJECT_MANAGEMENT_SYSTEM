package com.first.project_management.Repository;

import com.first.project_management.model.Chat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CharRepository extends JpaRepository<Chat, Long> {

//    List<Chat> getChatByChatId(Long chatId);
}
