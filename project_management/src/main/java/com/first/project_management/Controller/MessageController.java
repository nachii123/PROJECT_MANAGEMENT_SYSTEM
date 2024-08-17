package com.first.project_management.Controller;


import com.first.project_management.Services.MessageService;
import com.first.project_management.Services.ProjectService;
import com.first.project_management.Services.UserService;
import com.first.project_management.model.Chat;
import com.first.project_management.model.Message;
import com.first.project_management.model.User;
import com.first.project_management.request.CreateMessageRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/message")
public class MessageController {

    @Autowired
    private MessageService messageService;



    @Autowired
    private UserService userService;

    @Autowired
    private ProjectService projectService;

    @PostMapping("/send")
    public ResponseEntity<Message> sendMessage(@RequestBody CreateMessageRequest request)throws Exception{
        User user = userService.findUserById(request.getSenderId());

        Chat chat = projectService.getProjectById(request.getProjectId()).getChat();

        if(chat == null){
            throw new Exception("Chats not found");
        }


        Message sentMessage = messageService.sendMessage(request.getSenderId(), request.getProjectId(), request.getContent());
       return ResponseEntity.ok(sentMessage);
    }

    @GetMapping("/chat/{projectId}")
    public ResponseEntity<List<Message>> getMessageByprojectId(@PathVariable Long projectId)throws Exception{
        List<Message> messages = messageService.getMessageByProjectId((projectId));
        return ResponseEntity.ok(messages);
    }


}
