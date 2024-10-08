package com.first.project_management.Services;

import com.first.project_management.Repository.CharRepository;
import com.first.project_management.model.Chat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatServiceImpl implements ChatService{

    @Autowired
    private CharRepository charRepository;
    @Override
    public Chat createChat(Chat chat) {

        return charRepository.save(chat);
    }

//    @Override
//    public List<Chat> getChatByChatId(Long chatId) throws Exception {
//       List<Chat> chats = charRepository.getChatByChatId(chatId);
//
//       return chats;
//    }
}
