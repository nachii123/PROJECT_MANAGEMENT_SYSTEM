package com.first.project_management.Services;

import com.first.project_management.model.Chat;
import com.first.project_management.model.Message;

import java.util.List;

public interface ChatService {

    Chat createChat(Chat chat);

//    List<Chat> getChatByChatId(Long chatId) throws Exception;
}
