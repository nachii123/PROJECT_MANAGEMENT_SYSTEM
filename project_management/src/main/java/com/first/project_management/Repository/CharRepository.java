package com.first.project_management.Repository;

import com.first.project_management.model.Chat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CharRepository extends JpaRepository<Chat, Long> {
}
