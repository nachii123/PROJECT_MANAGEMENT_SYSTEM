package com.first.project_management.Services;

import com.first.project_management.model.Message;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface MessageService {

    Message sendMessage(Long senderId, Long projectId, String content) throws Exception;

    List<Message> getMessageByProjectId(Long projectId) throws Exception;
}
