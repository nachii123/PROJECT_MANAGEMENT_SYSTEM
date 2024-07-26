package com.first.project_management.Repository;

import com.first.project_management.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {

    @Query(value = "SELECT * FROM message WHERE chat_id = :chatId ORDER BY created_at ASC", nativeQuery = true)
    List<Message> findByChatIdOrderByCreateAtAsc(Long chatId);
}
