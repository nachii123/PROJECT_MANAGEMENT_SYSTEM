package com.first.project_management.Controller;

import com.first.project_management.Services.InvitationService;
import com.first.project_management.Services.ProjectService;
import com.first.project_management.Services.UserService;
import com.first.project_management.model.Chat;
import com.first.project_management.model.Invitation;
import com.first.project_management.model.Project;
import com.first.project_management.model.User;
import com.first.project_management.response.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private InvitationService invitationService;


    @Autowired
    private UserService userService;



    @GetMapping
    public ResponseEntity<List<Project>> getProjects(@RequestParam(required = false)String category, @RequestParam(required = false)String tag,
                                                     @RequestHeader("Authorization")String jwt) throws Exception {

        User user = userService.findUserProfileByJwt(jwt);
        List<Project> projects = projectService.getProjectByTeam(user,category,tag);


        return new ResponseEntity<>(projects, HttpStatus.OK);
    }
    @GetMapping("/{projectId}")
    public ResponseEntity<Project> getProjectsById(@PathVariable Long projectId,
                                                         @RequestHeader("Authorization")String jwt) throws Exception {

        User user = userService.findUserProfileByJwt(jwt);
        Project projects = projectService.getProjectById(projectId);


        return new ResponseEntity<>(projects, HttpStatus.OK);
    }


    /// for create project
    @PostMapping
    public ResponseEntity<Project> createProject(@RequestHeader("Authorization")String jwt, @RequestBody Project project) throws Exception {

        User user = userService.findUserProfileByJwt(jwt);
        Project createdproject = projectService.createProject(project,user);


        return new ResponseEntity<>(createdproject, HttpStatus.OK);
    }

    @PatchMapping("/{projectId}")
    public ResponseEntity<Project>updateProject(@PathVariable Long projectId, @RequestHeader("Authorization")String jwt,@RequestBody Project project) throws Exception {
        User userr = userService.findUserById(projectId);
        Project updateProject = projectService.updateProject(project, projectId);

        return new ResponseEntity<>(updateProject, HttpStatus.OK);
    }

    @DeleteMapping("/{projectId}")
    public ResponseEntity<MessageResponse> deleteProject(@PathVariable Long projectId, @RequestHeader("Authorization")String jwt) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        projectService.deleteProject(projectId,user.getId());
        MessageResponse res = new MessageResponse();
        res.setMessage("Project Has been Deleted");
        return new ResponseEntity<>(res, HttpStatus.OK);

    }

    // Search project
//    @GetMapping("/search")
//    public ResponseEntity<List<Project>> searchProject(
//            @RequestParam(required = false)String key,
//
//            @RequestHeader("Authorization")String jwt
//    )throws Exception{
//        User user = userService.findUserProfileByJwt(jwt);
//        List<Project> projects = projectService.searchProjects(key,user);
//
//        return new ResponseEntity<>(projects,HttpStatus.OK);
//    }
    @GetMapping("/search")
    public ResponseEntity<List<Project>> searchProject(@RequestParam(required = false) String keyword, @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        List<Project> projects = projectService.searchProjects(keyword, user);
        return new ResponseEntity<>(projects, HttpStatus.OK);
    }

    @GetMapping("/{projectId}/chat")
    public ResponseEntity<Chat> getChatByProjectId(@PathVariable Long projectId, @RequestHeader("Authorization")String jwt) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        Chat chat = projectService.getChatByProjectId(projectId);

        return new ResponseEntity<>(chat,HttpStatus.OK);
    }

    @PostMapping("/invite")
    public ResponseEntity<MessageResponse>inviteProject(@RequestBody Invitation req, @RequestHeader("Authorization")String jwt, @RequestBody Project project) throws Exception {

        User user = userService.findUserProfileByJwt(jwt);
        invitationService.sendInvitation(req.getEmail(), project.getId());

        MessageResponse res = new MessageResponse("user invitation send");

        return new ResponseEntity<>(res, HttpStatus.OK);

    }

    @GetMapping("/accept_invitaion")
    public ResponseEntity<Invitation>acceptInviteProject(@RequestParam String token, @RequestHeader("/Authorization")String jwt, @RequestBody Project project) throws Exception {

        User user = userService.findUserProfileByJwt(jwt);
       Invitation invitation =  invitationService.acceptInvitation(token, user.getId());
        projectService.addUserToProject(invitation.getProjectId(), user.getId());

        MessageResponse res = new MessageResponse("user invitation accept");

        return new ResponseEntity<>(invitation, HttpStatus.ACCEPTED);

    }

}
