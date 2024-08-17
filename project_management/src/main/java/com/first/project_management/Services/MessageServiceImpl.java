package com.first.project_management.Services;

import com.first.project_management.Repository.CharRepository;
import com.first.project_management.Repository.MessageRepository;
import com.first.project_management.Repository.UserRepository;
import com.first.project_management.model.Chat;
import com.first.project_management.model.Message;
import com.first.project_management.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;


@Service
public class MessageServiceImpl implements MessageService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CharRepository charRepository;



    @Autowired
    private ChatService chatService;
    @Autowired
    private ProjectService projectService;


    @Autowired
    private MessageRepository messageRepository;
    @Override
    public Message sendMessage(Long senderId, Long projectId, String content) throws Exception {
        Optional<User> sender = userRepository.findById(senderId);
        if(sender.isEmpty()){
            throw new Exception("User not found with id "+ senderId);

        }
        Chat chat = projectService.getProjectById(projectId).getChat();

        Message message = new Message();
        message.setContent(content);
        message.setSender(sender.get());
        message.setCreatedAt(LocalDateTime.now());
        message.setChat(chat);
        Message savedMessage =  messageRepository.save(message);

        chat.getMessages().add(savedMessage);
        return savedMessage;
    }

    @Override
    public List<Message> getMessageByProjectId(Long projectId) throws Exception {

        Chat chat = projectService.getChatByProjectId(projectId);
        List<Message> findByChatIdOrderbyCreatedAtAsc = messageRepository.findByChatIdOrderByCreateAtAsc(chat.getId());
        return findByChatIdOrderbyCreatedAtAsc;
    }



}
