package com.first.project_management.Services;

import com.first.project_management.model.Message;

import java.util.List;

public interface MessageService {

    Message sendMessage(Long senderId, Long projectId, String content) throws Exception;

    List<Message> getMessageByProjectId(Long projectId) throws Exception;

//    List<Message> getMessageByChatId(Long chatId) throws Exception;
}
